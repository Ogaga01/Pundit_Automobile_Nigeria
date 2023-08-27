import { FC } from "react";
import styles from "./../sass/_hero.module.scss";

const Hero: FC = () => {
  return (
    <section id="hero" className={styles["hero"]}>
      <div className={styles["hero__div"]}>
        <h1 className={styles["hero__div--head1"]}>
          Pundit Auto-mobile Nigeria
        </h1>
        <h2 className={styles["hero__div--head2"]}>
          Your trusted specialists for a professional diagnosis, maintainance,
          repairs, sales and after sales vehicle quality control.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
