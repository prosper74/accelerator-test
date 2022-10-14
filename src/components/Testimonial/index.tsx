import React, { useState } from "react";
// import { OutlinedBtn } from "components/Buttons";
import { data } from "./TestimonialData";
import ArrowForwardIcon from "../../images/arrow_forward_icon.svg";
import LogoImage from "../../images/testimonials/testimonial_logo.png";
import UserImage from "../../images/testimonials/user_image.jpg";
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
  const [activeIndicator, setActiveIndicator] = useState(0);

  return (
    <section className="container">
      <div className="testimonial">
        <div className="left-side">
          <h3 className="title">What our customers say</h3>
          <div className="testomonial-button">
            <button>
              150 + incubators/accelerators using AcceleratorApp &nbsp;
              <img src={ArrowForwardIcon} alt="Arrow forward icon" />
            </button>
          </div>
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

          <div className="testimonial-container">
            <p className="testimonial-text">
              AcceleratorApp has helped us a lot to accelerate and optimize our
              application and selection process. We got very positive feedback
              from our team and applicants. It’s a great tool for every company
              reviewing and processing a large number of applications whilst
              minimizing manual work. The tool is customizable, user-friendly
              and the AcceleratorApp team is very responsive and supportive!
            </p>
            <p className="testimonial-meta">
              François Jolly, Director of Programs{" "}
              <strong>• Startup lab</strong>
            </p>
            <div className="logo-image-box">
              <img src={LogoImage} alt="Company logo" />
            </div>
            <div className="user-image-box">
              <img src={UserImage} alt="User Name" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
