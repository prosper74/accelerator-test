import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";

import { FilledBtn } from "components/Buttons";

import * as styles from "./Showcase.module.css";

function Showcase() {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section className={styles.ShowcaseContainer}>
      <div className={styles.ShowcaseBg}>
        <div className={styles.ShowcaseContent}>
          <p className={styles.Intro}>Join in and connect</p>
          <h3 className={styles.Title}>
            To faster your innovation potential
          </h3>
          <p className={styles.Description}>
            AcceleratorApp Innovation Community - Tools and community to
            facilitate innovation between all members of our community
          </p>
          <div className={styles.CenteredBtn}>
            <FilledBtn
              content="Schedule a Demo"
              link="/"
              textColor="#000"
              bgColor="#fff"
            />
          </div>
        </div>
      </div>

      <div className={styles.ShowcaseVideoBg}>
        <div className={styles.ShowcaseImagesCTA}>
          <FilledBtn
            content="Watch a Video"
            handleClick={() => openModal()}
            textColor="#fff"
            bgColor="#206ecf"
            curve="15px"
            smFullWidth={{ width: "150px" }}
            icon={
              <IconContext.Provider
                value={{
                  style: {
                    width: "30px",
                    height: "30px",
                    marginRight: "5px",
                  },
                }}
              >
                <BiCaretRight />
              </IconContext.Provider>
            }
          />
          {modal ? (
          <section className={styles.ModalBg}>
            <div className={styles.ModalAlign}>
              <div className={styles.ModalContent}>
                <IoCloseOutline
                  className={styles.ModalClose}
                  arial-label="Close modal"
                  onClick={() => setModal(false)}
                />
                <div className={styles.ModalVideoAlign}>
                  {videoLoading ? (
                    <div className={styles.ModalSpinner}>
                      <BiLoaderAlt arial-label="Loading Video" />
                    </div>
                  ) : null}
                  <iframe
                    className={styles.ModalVideo}
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/4UZrsTqkcW4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
