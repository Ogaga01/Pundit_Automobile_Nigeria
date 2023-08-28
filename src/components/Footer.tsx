import { FC } from "react";
import logo from "./../images/pundit_logo (1).png";
import qualification from "./../images/pundit36.png";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import styles from "./../sass/_footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__images"]}>
        <img className={styles["footer__images--img"]} src={logo} alt={logo} />
        <img
          className={styles["footer__images--img"]}
          src={qualification}
          alt={qualification}
        />
      </div>

      <div className={styles["footer__details"]}>
        <div className={styles["footer__details--div"]}>
          <BsTelephone className={styles["footer__details--icon"]} />
          <div>
            <p className={styles["footer__details--p"]}>08060396196</p>
            <p className={styles["footer__details--p"]}>08091701111</p>
          </div>
        </div>
        <div className={styles["footer__details--div"]}>
          <CiLocationOn className={styles["footer__details--icon"]} />
          <p className={styles["footer__details--p"]}>
            Unit 1, Terrace 6A, Grenadine Estate, Phase 1, ShopRite bus stop,
            Monastery Road, Sangotedo, Ajah, Lagos
          </p>
        </div>
        <div className={styles["footer__details--div"]}>
          <AiOutlineClockCircle className={styles["footer__details--icon"]} />
          <div>
            <p className={styles["footer__details--p"]}>
              Mon - Fri: 8:00AM - 6:00PM
            </p>
            <p className={styles["footer__details--p"]}>Sat: 9:00AM - 4:00PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
