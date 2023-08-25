import { FC } from "react";
import Gallery from "./Gallery";
import About from "./About";
import Hero from "./Hero";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

const Home: FC = () => {
  return <div>
    <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
      <Gallery />
  </div>;
};

export default Home;
