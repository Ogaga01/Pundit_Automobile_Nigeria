import { FC } from "react";
import Gallery from "./Gallery";
import About from "./About";
import Hero from "./Hero";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
