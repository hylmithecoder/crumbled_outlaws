"use client";

import { React,  useEffect, useState } from "react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { PixelBorder } from "./PixelComponent";

// Animation variants for framer-motion
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SHEET_ID = "1u8BFwntoTFga9tkLvTVWY_Xd3Vvg_b1q8owQFyEM_wQ";
const API_KEY = "AIzaSyDHe-DqbOv57b9roA2c9z4U2Ez3KzXFR7c";
const SHEET_NAME = "Raid V1";

function RecapRaid() {
  const [seasonsData, setSeasonsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        const rows = result.values;
        if (rows && rows.length >= 4) {
          // Process the data to group by seasons
          const processedData = processSheetData(rows);
          setSeasonsData(processedData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const processSheetData = (rows) => {
    // Find all season columns
    const seasons = [];
    for (let i = 0; i < rows[0].length; i++) {
      if (rows[0][i] && rows[0][i].includes("SEASON")) {
        seasons.push({
          name: rows[0][i],
          value: rows[1][i] || "",
          damage: rows[2][i] || "",
          columnIndex: i
        });
      }
    }

    // Group data by seasons
    const seasonData = seasons.map((season) => {
      const colIndex = season.columnIndex;
      
      // Get column groups (3 columns per season: rank, damage, percentage)
      const columnData = {
        rank: {
          header: rows[3][colIndex] || "",
          values: []
        },
        damage: {
          header: rows[3][colIndex + 1] || "",
          values: []
        },
        percentage: {
          header: rows[3][colIndex + 2] || "",
          values: []
        }
      };
      
      // Get player data
      for (let i = 4; i < rows.length; i++) {
        const playerData = {
          no: rows[i][0] || "",
          ign: rows[i][1] || "",
          rank: rows[i][colIndex] || "",
          damage: rows[i][colIndex + 1] || "",
          percentage: rows[i][colIndex + 2] || ""
        };
        
        columnData.rank.values.push(playerData.rank);
        columnData.damage.values.push(playerData.damage);
        columnData.percentage.values.push(playerData.percentage);
      }
      
      return {
        ...season,
        data: columnData,
        players: rows.slice(4).map((row, index) => ({
          no: row[0] || "",
          ign: row[1] || "",
          rank: row[colIndex] || "",
          damage: row[colIndex + 1] || "",
          percentage: row[colIndex + 2] || ""
        }))
      };
    });
    
    // Sort seasons in descending order (newest first)
    return seasonData.sort((a, b) => {
      const numA = parseInt(a.name.match(/\d+/)[0]);
      const numB = parseInt(b.name.match(/\d+/)[0]);
      return numB - numA;
    });
  };

  const getPercentageColor = (percentage) => {
    if (!percentage || percentage === "-" || percentage === "First") {
      return "";
    }
    
    const value = parseFloat(percentage.replace(",", "."));
    if (isNaN(value)) return "";
    
    if (value > 0) return "bg-green-700";
    if (value < 0) return "bg-red-700";
    return "";
  };

  if (loading) {
    return (
      <motion.section
        className="w-full"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <PixelBorder>
          <p className="text-center text-xl text-white py-6">
            Loading data...
          </p>
        </PixelBorder>
      </motion.section>
    );
  }

  if (error) {
    return (
      <motion.section
        className="w-full"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <PixelBorder>
          <p className="text-center text-xl text-red-500 py-6">
            Error: {error.message}
          </p>
        </PixelBorder>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="w-full"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <PixelBorder> */}
        <div className="w-full max-h-96 overflow-y-auto overflow-x-auto">
          <h2 className="text-xl text-green-400 mb-4">📊 Raid Recap 📊</h2>
          <table className="text-white whitespace-nowrap">
            <thead>
              {/* Season Row */}
              <tr className="bg-green-800">
                <th colSpan="2" className="px-4 py-2 border border-gray-600 text-center"></th>
                {seasonsData.map((season, idx) => (
                  <th key={idx} colSpan="3" className="px-4 py-2 border border-gray-600 text-center">
                    {season.name}
                  </th>
                ))}
              </tr>
              {/* Season Value Row */}
              <tr className="bg-blue-600">
                <th colSpan="2" className="px-4 py-2 border border-gray-600 text-center"></th>
                {seasonsData.map((season, idx) => (
                  <th key={idx} colSpan="3" className="px-4 py-2 border border-gray-600 text-center">
                    {season.value}
                  </th>
                ))}
              </tr>
              {/* Season Damage Row */}
              <tr className="bg-gray-700">
                <th colSpan="2" className="px-4 py-2 border border-gray-600 text-center"></th>
                {seasonsData.map((season, idx) => (
                  <th key={idx} colSpan="3" className="px-4 py-2 border border-gray-600 text-center">
                    {season.damage}
                  </th>
                ))}
              </tr>
              {/* Headers Row */}
              <tr className="bg-gray-800">
                <th className="px-4 py-2 border border-gray-600 text-center">No</th>
                <th className="px-4 py-2 border border-gray-600 text-center">IGN</th>
                {seasonsData.map((season, idx) => (
                  <Fragment key={idx}>
                    <th className="px-4 py-2 border border-gray-600 text-center">rank(entry)</th>
                    <th className="px-4 py-2 border border-gray-600 text-center">Damage</th>
                    <th className="px-4 py-2 border border-gray-600 text-center">↑↓ (%)</th>
                  </Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Get the players from first season data (should be same for all) */}
              {seasonsData.length > 0 && seasonsData[0].players.map((player, playerIdx) => (
                <tr key={playerIdx} className="hover:bg-gray-600 transition-colors">
                  <td className="px-4 py-2 border border-gray-600 text-center">{player.no}</td>
                  <td className="px-4 py-2 border border-gray-600 text-center">{player.ign}</td>
                  
                  {/* Render data for each season */}
                  {seasonsData.map((season, seasonIdx) => {
                    const playerData = season.players[playerIdx];
                    return (
                      <Fragment key={seasonIdx}>
                        <td className="px-4 py-2 border border-gray-600 text-center">
                          {playerData?.rank || ""}
                        </td>
                        <td className="px-4 py-2 border border-gray-600 text-center">
                          {playerData?.damage || ""}
                        </td>
                        <td className={`px-4 py-2 border border-gray-600 text-center ${getPercentageColor(playerData?.percentage)}`}>
                          {playerData?.percentage || ""}
                        </td>
                      </Fragment>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      {/* </PixelBorder> */}
    </motion.section>
  );
}

export default RecapRaid;