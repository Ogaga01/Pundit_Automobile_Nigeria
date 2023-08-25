import { FC } from "react";
import logo from "./../images/pundit_logo (1).png";
import { Link } from "react-scroll";
import styles from "./../sass/_navbar.module.scss";

const Navbar: FC = () => {
  return (
    <div className={styles.navigation}>
      <Link
        className={styles["navigation__title"]}
        spy={true}
        smooth={true}
        duration={500}
        to="/"
      >
        <img
          className={styles["navigation__image"]}
          src={logo}
          alt="Pundit Auto logo"
        />
        <p>Pundit Auto Mobile Nigeria</p>
      </Link>
      <nav className={styles["navigation__nav"]}>
        <ul className={styles["navigation__list"]}>
          <li className={styles.navlink}>
            <Link spy={true} smooth={true} duration={500} to="hero">
              Home
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link spy={true} smooth={true} duration={500} to="about">
              About
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link spy={true} smooth={true} duration={500} to="services">
              Services
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link spy={true} smooth={true} duration={500} to="gallery">
              Gallery
            </Link>
          </li>
          <li className={styles.navlink}>
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
