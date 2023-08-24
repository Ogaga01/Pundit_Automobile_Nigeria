import { FC } from "react";
import logo from "./../images/pundit_logo (1).png";
import { Link } from "react-scroll";

const Navbar: FC = () => {
  return (
    <div>
      <Link spy={true} smooth={true} duration={500} to="hero">
        <img src={logo} alt="Pundit Auto logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link spy={true} smooth={true} duration={500} to="hero">
              Home
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={500} to="about">
              About
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={500} to="services">
              Services
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={500} to="gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={500} to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
