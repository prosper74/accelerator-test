import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

import { useIsLarge, useIsSmall } from "../Hooks/mediaQuery";
import { useSwipeable } from "react-swipeable";
import { data } from "./TestimonialData";
import ArrowForwardIcon from "../../images/arrow_forward_icon.svg";
import * as style from "./Testimonial.module.css";

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

function Testimonials() {
  const isLarge = useIsLarge();
  const isSmall = useIsSmall();
  const [activeIndicator, setActiveIndicator] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveIndicator(
        activeIndicator === data.length - 1 ? 0 : activeIndicator + 1
      ),
    onSwipedRight: () =>
      setActiveIndicator(
        activeIndicator === 0 ? data.length - 1 : activeIndicator - 1
      ),
    trackMouse: true,
  });

  return (
    <section className="container">
      <div className={style.Testimonial}>
        <div className={style.LeftSide}>
          <h3 className={style.Title}>What our customers say</h3>

          {isLarge && (
            <div className={style.TestimonialButton}>
              <button>
                150 + incubators/accelerators using AcceleratorApp &nbsp;
                <img src={ArrowForwardIcon} alt="Arrow forward icon" />
              </button>
            </div>
          )}
        </div>

        <div className={style.RightSide}>
          <div className={style.SliderIndicators}>
            {data.map((slide: SlideProps, index: number) => (
              <span
                key={slide.id}
                className={classNames(style.IndicatorButton, {
                  [style.ActiveIndicator]: activeIndicator === index,
                })}
                onClick={() => {
                  setActiveIndicator(index);
                }}
              />
            ))}
          </div>

          <div {...handlers} className={style.TestimonialContainer}>
            {data.map((item, index) => (
              <AnimatePresence>
                {activeIndicator === index && (
                  <motion.div
                    key={item.id}
                    className={style.TestimonialItem}
                    initial={{ x: !isSmall ? 10 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: !isSmall ? -10 : -100, opacity: 0 }}
                  >
                    <p className={style.TestimonialText}>{item.bodyText}</p>
                    <p className={style.TestimonialMeta}>
                      {item.name}, {item.position}{" "}
                      <strong>• {item.organization}</strong>
                    </p>
                    <motion.div
                      className={style.LogoImageBox}
                      animate={{ scale: [0, 0.5, 1] }}
                      transition={{ times: [0, 0.5, 1], delay: 0.2 }}
                    >
                      <img src={item.logo} alt="Company logo" />
                    </motion.div>
                    <div className={style.UserImageBox}>
                      <img src={item.image} alt="User Name" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
      {!isSmall && (
        <div className={style.TestimonialButton}>
          <button>
            150 + incubators/accelerators using AcceleratorApp &nbsp;
            <img src={ArrowForwardIcon} alt="Arrow forward icon" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Testimonials;
