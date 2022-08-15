import React from "react";
import { motion } from "framer-motion";
import PieShape from "../../images/pie.svg";
import StartupShape from "../../images/startup.svg";
import WindowsIcon from "../../images/windows_icon.svg";
import FileIcon from "../../images/file.svg";
import ArrowUpIcon from "../../images/arrow_up.svg";
import * as style from "./Charts.module.css";

function Charts() {
  return (
    <section className={style.ChartsWrapper}>
      <div className="container">
        <div className={style.Charts}>
          <div className={style.PieBg}>
            <motion.img
              whileHover={{
                scale: 1.15,
                transition: { duration: 1 },
              }}
              src={PieShape}
              alt="Pie Shape"
            />
          </div>
          <div className={style.StartupBg}>
            <motion.img
              whileHover={{
                scale: 1.15,
                transition: { duration: 1 },
              }}
              src={StartupShape}
              alt=""
            />
          </div>
          <div className={style.WindowsBg}>
            <motion.img
              whileHover={{
                scale: 1.15,
                transition: { duration: 1 },
              }}
              src={WindowsIcon}
              alt=""
            />
          </div>
          <div className={style.FileIconBg}>
            <motion.img
              whileHover={{
                scale: 1.15,
                transition: { duration: 1 },
              }}
              src={FileIcon}
              alt=""
            />
          </div>
          <div className={style.ArrowUpBg}>
            <motion.img
              whileHover={{
                scale: 1.15,
                transition: { duration: 1 },
              }}
              src={ArrowUpIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Charts;
