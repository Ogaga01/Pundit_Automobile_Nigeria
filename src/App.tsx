import { FC } from "react";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
