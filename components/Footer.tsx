import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerText}>
        <div className={styles.line}></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={styles.footerText}>
        <div className={styles.line}></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={styles.footerText}>
        <div className={styles.line}></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
