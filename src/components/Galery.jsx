import { motion } from "framer-motion";
import React from "react";
import thumb1 from "../assets/IMG_1002.jpg";
import thumb2 from "../assets/IMG_1004.jpg";
import thumb3 from "../assets/IMG_1005.jpg";
import thumb4 from "../assets/IMG_1006.jpg";
import thumb5 from "../assets/IMG_1007.jpg";
import thumb6 from "../assets/IMG_1008.jpg";
import thumb7 from "../assets/IMG_1009.jpg";
import thumb8 from "../assets/IMG_1010.jpg";

const IMAGES = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8];

const Galery = ({ fadeInAnimationVariants, heightUpAnimation }) => {
  return (
    <section className="galery-section" id="galerie">
      <div className="galery-title-container">
        <div className="galery-title1">
          <motion.h2
            variants={fadeInAnimationVariants}
            initial={{ opacity: 0, y: 60 }}
            whileInView="animate"
            viewport={{ once: true }}>
            poesie de
          </motion.h2>
        </div>
        <div className="galery-title2">
          <motion.h2
            variants={fadeInAnimationVariants}
            initial={{ opacity: 0, y: 60 }}
            whileInView="animate"
            viewport={{ once: true }}>
            l'epiderme
          </motion.h2>
        </div>
        <p>
          Au cours de ma carrière, j'ai eu l'occasion de tatouer différents style <br /> de tattoo
          suivant les goûts de mes clients. <br /> Découvrez mes réalisations et prenez rendez-vous
        </p>
      </div>

      <div className="galery-header">
        <p>galerie</p>
        <p>clic pour voir</p>
      </div>

      <div className="thumbs-container">
        <h3>inspiration</h3>
        <div className="thumbs-img">
          {IMAGES.map((img, index) => {
            return (
              <motion.img
                key={index}
                src={img}
                alt=""
                variants={heightUpAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}></motion.img>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Galery;
