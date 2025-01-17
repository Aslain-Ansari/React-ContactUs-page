import React from "react";
import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";

function Button({ text, icon, isOutline, ...rest }) {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
