import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"; 

function App () {
  return (
    <div>
      <Analytics/>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;