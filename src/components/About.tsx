import { FC } from "react";
import aboutPic from "./../images/pundit24.png";
import styles from "./../sass/_about.module.scss";
import { Link } from "react-router-dom";

const About: FC = () => {
  return (
    <section id="about" className={styles["about"]}>
      <div className={styles["about__div"]}>
        <h2 className={styles["about__div--head"]}>About Us</h2>
        <p className={styles["about__div--p"]}>
          We work on most Domestic and Foreign vehicles including Chevy, Ford,
          Toyota, Honda, Nissan, Lexus, Mercedes Benz, Land Rover and more. We
          are a full service Auto Repair center that specializes in providing
          quality services. No job is too big or small for us. Pundit Auto
          Mobile Nigeris is not a National Chain, it’s locally owned and managed
          business providing superior products and services at a fair price.
        </p>
        <Link className={styles["link"]} to="gallery">
          More About Us &rarr;
        </Link>
      </div>
      <div className={styles["about__div--img"]}>
        <img
          className={styles["about__image"]}
          src={aboutPic}
          alt="about picture"
        />
      </div>
    </section>
  );
};

export default About;
