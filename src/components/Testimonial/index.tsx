import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useIsMedium, useIsSmall } from "../Hooks/mediaQuery";
import { useSwipeable } from "react-swipeable";
import { data } from "./TestimonialData";
import ArrowForwardIcon from "../../images/arrow_forward_icon.svg";
import "./Testimonial.css";

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
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const [activeIndicator, setActiveIndicator] = useState(0);

  // const handlers = useSwipeable({
  //   onSwipedLeft: () =>
  //     activeIndicator === data.length - 1
  //       ? setActiveIndicator(0)
  //       : setActiveIndicator(activeIndicator + 1),
  //   onSwipedRight: () =>
  //     activeIndicator === 0
  //       ? setActiveIndicator(data.length - 1)
  //       : setActiveIndicator(activeIndicator - 1),
  // });

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveIndicator(
        activeIndicator === data.length - 1 ? 0 : activeIndicator + 1
      ),
    onSwipedRight: () =>
      setActiveIndicator(
        activeIndicator === 0 ? data.length - 1 : activeIndicator - 1
      ),
  });

  return (
    <section className="container">
      <div className="testimonial">
        <div className="left-side">
          <h3 className="title">What our customers say</h3>

          {isSmall && (
            <div className="testomonial-button">
              <button>
                150 + incubators/accelerators using AcceleratorApp &nbsp;
                <img src={ArrowForwardIcon} alt="Arrow forward icon" />
              </button>
            </div>
          )}
        </div>

        <div className="right-side">
          <div className="slider-indicators">
            {data.map((slide: SlideProps, index: number) => (
              <span
                key={slide.id}
                className={
                  activeIndicator === index
                    ? "indicator-button active-indicator"
                    : "indicator-button"
                }
                onClick={() => {
                  setActiveIndicator(index);
                }}
              />
            ))}
          </div>

          <div {...handlers} className="testimonial-container">
            {data.map((item, index) => (
              <AnimatePresence>
                {activeIndicator === index && (
                  <motion.div
                    key={item.id}
                    className="testimonial-item"
                    initial={{ x: !isSmall ? 10 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: !isSmall ? -10 : -100, opacity: 0 }}
                  >
                    <p className="testimonial-text">{item.bodyText}</p>
                    <p className="testimonial-meta">
                      {item.name}, {item.position}{" "}
                      <strong>• {item.organization}</strong>
                    </p>
                    <motion.div
                      className="logo-image-box"
                      animate={{ scale: [0, 0.5, 1] }}
                      transition={{ times: [0, 0.5, 1], delay: 0.2 }}
                    >
                      <img src={item.logo} alt="Company logo" />
                    </motion.div>
                    <div className="user-image-box">
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
        <div className="testomonial-button">
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
