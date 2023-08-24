import { FC, useEffect, useState } from "react";
import pundit1 from "./images/pundit_1.png";
import pundit2 from "./images/pundit2.png";
import pundit3 from "./images/pundit3.png";
import pundit4 from "./images/pundit4.png";
import pundit5 from "./images/pundit5.png";

const App: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images = [pundit1, pundit2, pundit3, pundit4, pundit5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        height: "50vh",
        width: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      Pundit Nigeria
    </div>
  );
};

export default App;
