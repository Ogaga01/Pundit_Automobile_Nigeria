import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
import styles from "./../sass/_gallery.module.scss";
import { Link } from "react-router-dom";

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
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Gallery: FC = () => {
  return (
    <div id="gallery" className={styles.div}>
      <h1 className={styles["head"]}>Our Gallery</h1>
      <Carousel
        className={styles["carousel"]}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
        arrows={false}
        responsive={responsive}
      >
        {images.map((image) => {
          return (
            <img
              className={styles["carousel__image"]}
              src={image}
              alt={image}
            />
          );
        })}
      </Carousel>
      <Link className={styles["link"]} to="gallery">
        More Photos &rarr;
      </Link>
    </div>
  );
};

export default Gallery;
