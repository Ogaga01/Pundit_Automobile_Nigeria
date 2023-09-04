import { FC } from "react";
import pundit1 from "./../images/pundit_1.png";
import pundit2 from "./../images/pundit2.png";
import pundit3 from "./../images/pundit3.png";
import pundit4 from "./../images/pundit4.png";
import pundit5 from "./../images/pundit5.png";
import pundit6 from "./../images/pundit6.png";
import pundit7 from "./../images/pundit7.png";
import pundit9 from "./../images/pundit9.png";
import pundit10 from "./../images/pundit10.png";
import pundit11 from "./../images/pundit11.png";
import pundit12 from "./../images/pundit12.png";
import pundit13 from "./../images/pundit13.png";
import pundit14 from "./../images/pundit14.png";
import pundit15 from "./../images/pundit15.png";
import pundit16 from "./../images/pundit16.png";
import pundit19 from "./../images/pundit19.png";
import pundit21 from "./../images/pundit21.png";
import pundit24 from "./../images/pundit24.png";
import pundit25 from "./../images/pundit25.png";
import pundit27 from "./../images/pundit27.png";
import pundit29 from "./../images/pundit29.png";
import pundit30 from "./../images/pundit30.png";
import pundit31 from "./../images/pundit31.png";
import pundit32 from "./../images/pundit32.png";
import pundit33 from "./../images/pundit33.png";
import pundit34 from "./../images/pundit34.png";
import pundit35 from "./../images/pundit35.png";
import pundit36 from "./../images/pundit36.png";
import pundit39 from "./../images/pundit39.png";
import pundit40 from "./../images/pundit40.png";
import pundit41 from "./../images/pundit41.png";
import pundit44 from "./../images/pundit44.png";
import pundit45 from "./../images/pundit45.png";
import pundit46 from "./../images/pundit46.png";
import pundit47 from "./../images/pundit47.png";
import pundit49 from "./../images/pundit49.png";
import pundit50 from "./../images/pundit50.png";
import pundit51 from "./../images/pundit51.png";
import pundit52 from "./../images/pundit52.png";
import pundit53 from "./../images/pundit53.png";
import pundit54 from "./../images/pundit54.png";
import pundit55 from "./../images/pundit55.png";
import pundit56 from "./../images/pundit56.png";
import pundit57 from "./../images/pundit57.png";
import pundit58 from "./../images/pundit58.png";
import pundit59 from "./../images/pundit59.png";
import pundit60 from "./../images/pundit60.png";
import pundit61 from "./../images/pundit61.png";
import pundit62 from "./../images/pundit62.png";
import styles from "./../sass/_aboutus.module.scss";
import Pictures from "./Pictures";

const images = [
  pundit1,
  pundit2,
  pundit3,
  pundit4,
  pundit5,
  pundit6,
  pundit7,
  pundit9,
  pundit10,
  pundit11,
  pundit12,
  pundit13,
  pundit14,
  pundit15,
  pundit16,

  pundit19,
  pundit21,

  pundit24,
  pundit25,
  pundit27,
  pundit29,
  pundit30,
  pundit31,
  pundit32,
  pundit33,
  pundit34,
  pundit35,
  pundit36,

  pundit39,
  pundit40,
  pundit41,

  pundit44,
  pundit45,
  pundit46,
  pundit47,
  pundit49,
  pundit50,
  pundit51,
  pundit52,
  pundit53,
  pundit54,
  pundit55,
  pundit56,
  pundit57,
  pundit59,
  pundit58,
  pundit61,
  pundit62,
];

const AboutUs: FC = () => {
  return (
    <div className={styles["about"]}>
      <div className={styles["about__ceo"]}>
        <div className={styles["about__ceo--image"]}>
          <img
            className={styles["about__ceo--img"]}
            src={pundit60}
            alt={pundit60}
          />
        </div>
        <div className={styles["about__ceo--info"]}>
          <h1 className={styles["about__ceo--head"]}>About The CEO</h1>
          <p className={styles["about__ceo--para"]}>
            Israel Nomshu Joseph is a professional Auotmotive technician. He is
            the CEO of Pundit Auto-mobile Nigeria (PAN JR.) located at Lekki,
            Lagos, Nigeria. He is undoubtably one of the best Graduating
            students of Peugeot Automobile Nigeria Training Center (PAN), Kaduna
            state, Nigeria. He is awarded a professional international City &
            Guilds diploma certificate from the prestigious London institute. He
            is one of the most dynamic staff at the estimate companies he has
            worked with like Trend's Automobile Ltd. Abuja, ASD Motors Abuja,
            Froshtech Lagos. He is insightful, motivated and creative and
            disciplined.
          </p>
          <p className={styles["about__ceo--para1"]}>
            "Many aspire for greatness, however only a few ever attain true
            greatness in their lifetime."
          </p>
        </div>
      </div>
      <div className={styles["about__work"]}>
        <h1 className={styles["about__work--head"]}>Gallery</h1>
        <div className={styles["about__work--images"]}>
          {images.map((image) => {
            return <Pictures props={image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
