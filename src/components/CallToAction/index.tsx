import React from "react";
import { FilledBtn, OutlinedBtn } from "components/Buttons";

import * as styles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <section className={styles.ShowcaseContainer}>
      <div className={styles.ShowcaseContent}>
        <p className={styles.Intro}>What are you waiting for?</p>
        <h3 className={styles.Title}>
          Join +150 companies that already trust us for their growth
        </h3>
        <div className={styles.CenteredBtn}>
          <OutlinedBtn
            content="Contact Us"
            link="/"
            textColor="#000"
            borderColor="#206ECF"
            FontSize="16px"
            fontWeight={700}
          />
          <FilledBtn
            content="Schedule a Demo"
            link="/"
            textColor="#fff"
            bgColor="#206ECF"
            FontSize="16px"
            fontWeight={700}
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
