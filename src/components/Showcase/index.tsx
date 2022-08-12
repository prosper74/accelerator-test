import React from "react";
import { motion } from "framer-motion";

import { FilledBtnWhite, FilledBtnBlue } from "components/Buttons";
import * as styles from "./Showcase.module.css";

function Showcase() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div>
      <section className={styles.ShowcaseContainer}>
        <div className={styles.ShowcaseBg}>
          <div className={styles.showcaseContent}>
            <p className={styles.intro}>Join in and connect</p>
            <h3 className={styles.title}>
              To faster your innovation potential
            </h3>
            <p className={styles.description}>
              AcceleratorApp Innovation Community - Tools and community to
              facilitate innovation between all members of our community
            </p>
            <FilledBtnWhite content="Schedule a Demo" link="/" color="#000" />
          </div>
        </div>
      </section>
      <section className={styles.ShowcaseImagesWrapper}>
        <div className={styles.ShowcaseImagesBg}>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={styles.ShowcaseStackedImagesOne}
          />
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={styles.ShowcaseStackedImagesTwo}
          />
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={styles.ShowcaseStackedImagesThree}
          />
          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={styles.ShowcaseStackedImagesFour}
          />
        </div>
        <div className={styles.ShowcaseImagesCTA}>
          <FilledBtnBlue
            content="Watch a Video"
            link="/"
            color="#fff"
            curve="15px"
          />
        </div>
      </section>
    </div>
  );
}

export default Showcase;
