import React from "react";
import LoicPhoto from "../assets/loinkbaw.jpg";
import instagramIcon from "../assets/instagram.svg";
import locationIcon from "../assets/location.svg";

import { motion } from "framer-motion";

const Contact = ({ fadeInAnimationVariants }) => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-title">
        <motion.h2
          variants={fadeInAnimationVariants}
          initial={{ opacity: 0, y: 60 }}
          whileInView="animate"
          viewport={{ once: true }}>
          contact
        </motion.h2>
      </div>
      <div className="contact-content">
        <p>
          Vous souhaitez prendre rendez-vous pour un tatouage? <br /> C'est parti! Ecrivez moi vos
          idées de tattoo.
        </p>
      </div>

      <div className="contact-link">
        <div className="contact-text-wrapper">
          <p>Envoyez moi un message sur instagram</p>
          <img src={instagramIcon} alt="" />
        </div>
        <a href="http://instagram.com/lo.ink.tattoo">@lo.ink.tattoo</a>
      </div>

      <div className="contact-link location">
        <img src={locationIcon} alt="" className="location-icon" />
        <p>Bésier, France</p>
      </div>
      <div className="last-img-container">
        <motion.img
          className="last-img"
          src={LoicPhoto}
          alt=""
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={{
            opacity: 1,
            y: 0,

            transition: {
              duration: 0.6,
              delay: 0.4,
            },
          }}></motion.img>
      </div>
    </section>
  );
};

export default Contact;
