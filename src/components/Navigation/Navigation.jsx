import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="do some coding logo" />
      </div>
      <ul>
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/form"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
