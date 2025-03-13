"use client";

import { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [seasonValues, setSeasonValues] = useState([]);
  const [totalDamage, setTotalDamage] = useState([]);
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
          // Get seasons from row 0
          const seasonRow = rows[0].filter(cell => cell.startsWith('SEASON'));
          setSeasons(seasonRow);
          
          // Get season values from row 1
          const seasonValuesRow = [];
          for (let i = 0; i < rows[1].length; i++) {
            if (rows[0][i] && rows[0][i].startsWith('SEASON')) {
              seasonValuesRow.push(rows[1][i]);
            }
          }
          setSeasonValues(seasonValuesRow);
          
          // Get total damage values from row 2
          const totalDamageRow = [];
          for (let i = 0; i < rows[2].length; i++) {
            if (rows[0][i] && rows[0][i].startsWith('SEASON')) {
              totalDamageRow.push(rows[2][i]);
            }
          }
          setTotalDamage(totalDamageRow);
          
          // Get headers from row 3
          const headerRow = rows[3];
          setHeaders(headerRow);
          
          // Format data from row 4 onwards
          const formattedData = rows.slice(4).map((row) =>
            Object.fromEntries(
              headerRow.map((header, index) => [header, row[index] || ""])
            )
          );
          setData(formattedData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const renderSeasonHeader = () => {
    return (
      <>
        <tr className="bg-green-800">
          <th colSpan="2" className="px-4 py-2 border border-gray-600 text-center"></th>
          {seasons.map((season, index) => (
            <th key={index} colSpan="3" className="px-4 py-2 border border-gray-600 text-center">
              {season}
            </th>
          ))}
        </tr>
        <tr className="bg-blue-600">
          <th colSpan="2" className="px-4 py-2 border border-gray-600 text-center"></th>
          {seasonValues.map((value, index) => (
            <th key={index} colSpan="3" className="px-4 py-2 border border-gray-600 text-center">
              {value}
            </th>
          ))}
        </tr>
        <tr className="bg-gray-700">
          <th colSpan="2" className="px-4 py-2 border border-gray-600 text-center"></th>
          {totalDamage.map((damage, index) => (
            <th key={index} colSpan="3" className="px-4 py-2 border border-gray-600 text-center">
              {damage}
            </th>
          ))}
        </tr>
      </>
    );
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
        <div className="w-full overflow-x-auto">
          <table className="text-white whitespace-nowrap">
            <thead>
              {renderSeasonHeader()}
              <tr className="bg-gray-700">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 border border-gray-600 text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-600 transition-colors"
                >
                  {headers.map((header, colIndex) => {
                    // Apply special formatting for percentage columns
                    if (header === "↑↓ (%)") {
                      return (
                        <td
                          key={colIndex}
                          className={`px-4 py-2 border border-gray-600 text-center ${getPercentageColor(row[header])}`}
                        >
                          {row[header]}
                        </td>
                      );
                    }
                    
                    // Normal cell
                    return (
                      <td
                        key={colIndex}
                        className="px-4 py-2 border border-gray-600 text-center"
                      >
                        {row[header]}
                      </td>
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