import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { data } from "./ServicesData";
import * as style from "./Services.module.css";

function Services() {
  return (
    <section className={style.Services}>
      <div className="container">
        <div className={style.ServicesHeadingTexts}>
          <h4>Community</h4>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className={style.ServicesContainer}>
          {data.map((d) => (
            <div className={style.ServicesContent} key={d.id}>
              <div className={style.HeaderContainer}>
                <div className={style.IconBox}>
                  <img src={d.icon} alt={`${d.headerText} icon`} />
                </div>
                <h4>{d.headerText}</h4>
              </div>

              <p className={style.FirstParagraph}>{d.paragraph1}</p>
              <p className={style.SecondParagraph}>{d.paragraph2}</p>
              <hr />
              <h5>Popular Features</h5>

              <ul className={style.FeaturesList}>
                {d.listFeatures.map((items, i) => (
                  <li key={i}>
                    {/* <img src="../../images/check_icon.svg" alt="Check icon" /> */}
                    <StaticImage
                      src="../../images/check_icon.svg"
                      alt="Site Global Language"
                      placeholder="blurred"
                      layout="fixed"
                      width={15}
                      height={15}
                    />
                    {items.item}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Get Started
              </motion.button>
              {/* <FilledBtnBlue link='/' content="Get Started" color="#fff" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
