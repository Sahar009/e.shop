import React from "react";
import styles from "./footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className={styles.footer}>&copy; Sahar09 {year} All Rights Reserved</div>;
};

export default Footer;