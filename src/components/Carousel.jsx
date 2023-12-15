import React, { useEffect, useState } from "react";

import thumb0 from "../assets/IMG_0997.jpg";
import thumb1 from "../assets/IMG_1002.jpg";
import thumb2 from "../assets/IMG_1004.jpg";
import thumb3 from "../assets/IMG_1005.jpg";
import thumb4 from "../assets/IMG_1006.jpg";
import thumb5 from "../assets/IMG_1007.jpg";
import thumb6 from "../assets/IMG_1008.jpg";
import thumb7 from "../assets/IMG_1009.jpg";
import thumb8 from "../assets/IMG_1010.jpg";

const IMAGES = [thumb0, thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(current === IMAGES.length - 1 ? 0 : current + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        {IMAGES.map((image, index) => {
          return (
            <div key={index}>
              {index === current && (
                <img value={current} className="carousel-img" src={image} alt="tattoo images"></img>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
