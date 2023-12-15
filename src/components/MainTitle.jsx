import React from "react";
import { motion } from "framer-motion";
const MainTitle = ({ fadeInAnimationVariants }) => {
  return (
    <>
      <div className="title-container" id="top">
        <motion.h1
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          l<span className="titlecarpe">o</span> ink <br /> tatt<span className="title2">o</span>
          <span className="title2">o</span>
        </motion.h1>
      </div>

      <div className="title-items">
        <p>TATTOO ARTIST</p>
        <p>LOIC NUNES</p>
        <p>BEZIER / FRANCE</p>
      </div>
    </>
  );
};

export default MainTitle;
