import React, { useState } from "react";

import { motion } from "framer-motion";
import faqData from "../faq-data.json";
import faqIcon from "../assets/Faq-icon.svg";

const Faq = ({ fadeInAnimationVariants }) => {
  const [indexOpened, setIndexOpened] = useState(false);

  function handleCollapse(i) {
    setIndexOpened((prevIndex) => (prevIndex === i ? false : i));
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-text-container">
        <div className="faq-title">
          <motion.h2
            variants={fadeInAnimationVariants}
            initial={{ opacity: 0, y: 60 }}
            whileInView="animate"
            viewport={{ once: true }}>
            FAQ
          </motion.h2>
        </div>
        <p>
          Voici une liste des questions les plus souvent posées. <br /> Contactez-moi pour toutes
          autres questions sur votre <br />
          futur tattoo.
        </p>
      </div>
      <div className="collapse-container">
        <div className="collapse-header-text">
          <p>questions</p>
        </div>
        <div className="collapses">
          {faqData.map((data, i) => {
            return (
              <div className="button-p-container" key={data.title}>
                <button
                  onClick={() => handleCollapse(i)}
                  className={`collapse-btn ${i === indexOpened ? "active" : ""}`}>
                  {data.title}
                  <img src={faqIcon} alt="faq icon" className="collapse-icon" />
                </button>
                {i === indexOpened && (
                  <motion.p
                    className="collapse-content"
                    initial={{ height: 0 }}
                    animate={{
                      height: i === indexOpened ? "auto" : 0,
                      transition: { duration: 0.1 },
                    }}>
                    {data.content}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
