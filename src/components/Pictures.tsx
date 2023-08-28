import { FC } from "react";
import styles from "./../sass/_pictures.module.scss";

interface Props {
  props: string;
}

const Pictures: FC<Props> = ({ props }) => {
  return (
    <div className={styles["pictures"]}>
      <img className={styles["pictures__image"]} src={props} alt={props} />
    </div>
  );
};

export default Pictures;
