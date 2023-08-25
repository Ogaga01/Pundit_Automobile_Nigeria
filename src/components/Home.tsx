import { FC } from "react";
import Gallery from "./Gallery";
import About from "./About";
import Hero from "./Hero";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import Services from "./Services";

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
