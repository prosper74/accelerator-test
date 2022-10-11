import React from "react";
import { Link } from "gatsby";
import * as styles from "./Button.module.css";

interface BtnProps {
  content: string;
  link?: string;
  color?: string;
  textColor?: string;
  curve?: string;
  border?: string;
  borderColor?: string;
  bgColor?: string;
  icon?: React.Component;
  smFullWidth?: any;
  FontSize?: string;
  fontWeight?: number;
  handleClick?: () => void;
}

export const OutlinedBtn = ({
  content,
  link,
  textColor,
  borderColor,
  curve,
  icon,
  smFullWidth,
  FontSize,
  fontWeight,
  handleClick,
}: BtnProps) => {
  return link ? (
    <button
      className={styles.BtnOutline}
      style={{
        color: textColor,
        borderColor: borderColor,
        borderRadius: curve || "5px",
        fontSize: FontSize,
        fontWeight: fontWeight,
        ...smFullWidth,
      }}
    >
      <Link to={link} style={{ color: textColor }}>
        {icon}
        {content}
      </Link>
    </button>
  ) : (
    <button
      className={styles.BtnOutline}
      style={{
        color: textColor,
        borderColor: borderColor,
        borderRadius: curve || "5px",
        fontSize: FontSize,
        fontWeight: fontWeight,
        ...smFullWidth,
      }}
      onClick={handleClick}
    >
      {icon}
      {content}
    </button>
  );
};

export const FilledBtn = ({
  content,
  link,
  textColor,
  bgColor,
  borderColor,
  curve,
  icon,
  smFullWidth,
  FontSize,
  fontWeight,
  handleClick,
}: BtnProps) => {
  return link ? (
    <button
      className={styles.BtnFilled}
      style={{
        color: textColor,
        borderColor: borderColor,
        backgroundColor: bgColor,
        borderRadius: curve || "5px",
        fontSize: FontSize,
        fontWeight: fontWeight,
        ...smFullWidth,
      }}
    >
      <Link to={link} style={{ color: textColor }}>
        {icon}
        {content}
      </Link>
    </button>
  ) : (
    <button
      className={styles.BtnFilled}
      style={{
        color: textColor,
        borderColor: borderColor,
        backgroundColor: bgColor,
        borderRadius: curve || "5px",
        fontSize: FontSize,
        fontWeight: fontWeight,
        ...smFullWidth,
      }}
      onClick={handleClick}
    >
      {icon}
      {content}
    </button>
  );
};
