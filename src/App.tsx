import { FC } from "react";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Hero />
    </div>
  );
};

export default App;
