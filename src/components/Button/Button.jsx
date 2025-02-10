import React from "react";
import styles from "./Button.module.css";

function Button({ text, icon, isOutline, ...rest }) {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
      style={{ marginTop: "5px", marginRight: "3px" }}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
