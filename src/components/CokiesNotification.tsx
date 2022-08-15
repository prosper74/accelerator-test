import React from "react";
import { FilledBtn, OutlinedBtn } from "components/Buttons";
import { Link } from "gatsby";

const CokiesNotification = ({ setDisplayCookies }: any) => {
  return (
    <section className="cookiesWrapper">
      <div className="container">
        <div className="cookies">
          <p className="cookiesInfo">
            By using this site on the AcceleratorApp network, you agree with our
            use of cookies.
          </p>
          <div className="cookies">
            <div className="cookiesBtn">
              <FilledBtn
                content="Accept cookies"
                handleClick={() => setDisplayCookies(false)}
                textColor="#fff"
                bgColor="#206ecf"
                smFullWidth={{ width: "150px" }}
              />
              <OutlinedBtn
                content="Want to know more"
                link="/"
                textColor="#206ecf"
                borderColor="#206ecf"
                smFullWidth={{ width: "150px" }}
              />
            </div>
            <Link to='/'>Read our Cookie Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CokiesNotification;
