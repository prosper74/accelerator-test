import React from "react";
import { FilledBtnBlue, OutlinedBtnWhite } from "components/Buttons";

const CokiesNotification = ({ setDisplayCookies }: any) => {
  return (
    <section className="cokiesWrapper">
      <div className="container cokies">
        <p>
          By using this site on the AcceleratorApp network, you agree with our
          use of cookies.
        </p>
        <div className="cookiesBtn">
          <FilledBtnBlue
            color="#fff"
            content="Accept cookies"
            handleClick={() => setDisplayCookies(false)}
          />
          <OutlinedBtnWhite
            color="#206ecf"
            content="Want to know more"
            link="/"
            border="#206ecf"
          />
        </div>
        <p>Read our Cookie Policy</p>
      </div>
    </section>
  );
};

export default CokiesNotification;
