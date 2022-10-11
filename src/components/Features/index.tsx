import React from "react";
import { useIsMedium } from "../hooks/mediaQuery";
import { data } from "./FeaturesData";
import ArrowForwardIcon from "../../images/arrow_forward_icon.svg";
import * as style from "./Features.module.css";

function Features() {
  const isMedium = useIsMedium();

  return (
    <section className={style.Features}>
      <div className="container">
        <div className={style.FeaturesWrapper}>
          <div className={style.FeaturesHeadingTexts}>
            <h1>Features Integrated</h1>
            <p>
              Know all our features that we have for accelerate your business.
            </p>
          </div>

          {isMedium && (
            <div className={style.FeaturesContainer}>
              {data.map((d) => (
                <div
                  className={d.headerText !== "button" && style.FeaturesContent}
                >
                  <div className={style.IconBox}>
                    {d.headerText !== "button" && (
                      <img src={d.icon} alt={`${d.headerText} icon`} />
                    )}
                  </div>
                  {d.headerText !== "button" ? (
                    <h3>{d.headerText}</h3>
                  ) : (
                    <div className={style.FeaturesButton}>
                      <button>
                        Discover its functions &nbsp;
                        <img src={ArrowForwardIcon} alt="Arrow forward icon" />
                      </button>
                    </div>
                  )}

                  <p className={style.Description}>{d.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Features;
