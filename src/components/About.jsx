import React from "react";
import { motion } from "framer-motion";
import portrait2 from "../assets/portrait2.jpg";

const About = ({ fadeInAnimationVariants, zoomOutAnimationVariants }) => {
  return (
    <section className="apropos-section" id="apropos">
      <div className="apropos-title">
        <div className="apropos-container">
          <motion.h2
            variants={fadeInAnimationVariants}
            initial={{ opacity: 0, y: 60 }}
            whileInView="animate"
            viewport={{ once: true }}>
            a propos
          </motion.h2>
        </div>
        <div className="deloink-container">
          <motion.h2
            variants={fadeInAnimationVariants}
            initial={{ opacity: 0, y: 90 }}
            whileInView="animate"
            viewport={{ once: true }}>
            de Lo Ink
          </motion.h2>
        </div>
      </div>
      <div className="apropos-img">
        <motion.img
          variants={zoomOutAnimationVariants}
          initial="initial"
          whileInView="animate"
          src={portrait2}
          alt="Phototatoueur"></motion.img>
      </div>
      <div className="apropos-description">
        <p>
          Loic est artisant tatoueur depuis 1 an. Originaire de Bezier, il a fait ses armes
          blablabla aime le voyage et fait des evements partout dans le monde. Lorem, ipsum <br />
          <br />
          dolor sit amet consectetur adipisicing elit. Corporis ea ut dolores quam impedit officia,
          maxime vel neque dignissimos, minus quibusdam in natus. Eveniet ullam labore ipsum natus
          beatae corrupti.
        </p>
      </div>
    </section>
  );
};

export default About;
