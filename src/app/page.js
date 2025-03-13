import Image from "next/image";
import { metadata } from "./layout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Link from "next/link";

function App () {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;