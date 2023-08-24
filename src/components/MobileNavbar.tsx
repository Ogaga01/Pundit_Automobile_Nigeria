import { FC, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./../sass/_mobileNavbar.module.scss";
import logo from "./../images/pundit_logo (1).png";

const MobileNavbar: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={styles["mobile_navigation"]}>
        <div className={styles["mobile_navigation-content"]}>
          <img
            className={styles["mobile_navigation-image"]}
            src={logo}
            alt="Pundit Auto logo"
          />
          <p className={styles["mobile_navigation-title"]}>
            Pundit Auto Mobile Nigeria
          </p>
        </div>
        <AiOutlineMenu
          className={styles["mobile_navigation--menu_icon"]}
          onClick={showMenu}
        />
      </div>
      <nav className={styles[active ? "active" : "slider"]}>
        <ul className={styles["slider__nav"]}>
          <div className={styles["slider__closed"]}>
            <AiOutlineClose
              className={styles["slider__close"]}
              onClick={showMenu}
            />
          </div>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="hero"
            className={styles.navlink}
            onClick={showMenu}
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="about"
            className={styles.navlink}
            onClick={showMenu}
          >
            About
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navlink}
            onClick={showMenu}
            to="services"
          >
            Services
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="gallery"
            className={styles.navlink}
            onClick={showMenu}
          >
            Gallery
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navlink}
            onClick={showMenu}
            to="contact"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
