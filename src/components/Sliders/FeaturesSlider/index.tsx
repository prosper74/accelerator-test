import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
// import { useIsMedium } from "../../Hooks/mediaQuery";
import * as style from "./FeaturesSlider.module.css";

interface SlideProps {
  id?: number;
  headerText?: string;
  description?: string;
  icon?: any;
  map?: any;
}

interface SlidesProps {
  slides: SlideProps;
}

export function FeaturesSlider({ slides }: SlidesProps) {
  // const isMedium = useIsMedium();
  const [activeIndicator, setActiveIndicator] = useState(0);

  return (
    <div className={style.SlidesWrapper}>
      <div className={style.Indicator}>
        {slides.map((slide: SlideProps, index: number) => (
          <span
            key={slide.id}
            onClick={() => {
              setActiveIndicator(index);
            }}
            className={classNames(style.IndicatorBtn, {
              [style.ActiveIndicator]: index === activeIndicator,
            })}
          ></span>
        ))}
      </div>

      <div className={style.SlideRow}>
        {slides.map((slide: SlideProps, index: number) => (
          <AnimatePresence>
            {activeIndicator === index && (
              <motion.div
                key={slide.id}
                className={style.SlideContainer}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className={style.IconBox}>
                  <img src={slide.icon} alt={`${slide.headerText} icon`} />
                </div>
                <h3>{slide.headerText}</h3>
                <p>{slide.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}
