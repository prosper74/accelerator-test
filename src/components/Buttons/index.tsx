import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import * as styles from "./Button.module.css";

interface BtnProps {
  content: string;
  link?: string;
  color: string;
  curve?: string;
  border?: string;
  handleClick?: () => void;
}

export const OutlinedBtnWhite = ({
  color,
  content,
  link,
  border,
  handleClick,
}: BtnProps) => {
  return link ? (
    <Link to={link}>
      <button
        className={styles.btnOutlineWhite}
        style={{ color: color, borderColor: border }}
      >
        {content}
      </button>
    </Link>
  ) : (
    <button
      className={styles.btnOutlineWhite}
      style={{ color: color, borderColor: border }}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export const FilledBtnWhite = ({
  color,
  content,
  link,
  handleClick,
}: BtnProps) => {
  return link ? (
    <Link to={link}>
      <button className={styles.btnFillWhite} style={{ color: color }}>
        {content}
      </button>
    </Link>
  ) : (
    <button
      className={styles.btnFillWhite}
      style={{ color: color }}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export const FilledBtnBlue = ({
  color,
  content,
  link,
  curve,
  handleClick,
}: BtnProps) => {
  return link ? (
    <Link to={link}>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        className={styles.btnFillBlue}
        style={{ color: color, borderRadius: curve }}
      >
        {content}
      </motion.button>
    </Link>
  ) : (
    <button
      className={styles.btnFillBlue}
      style={{ color: color, borderRadius: curve }}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};
