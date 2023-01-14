import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Credits.module.scss";
import nextjs from "../public/assets/nextjs.png";
import typescript from "../public/assets/typescript.png";
import sass from "../public/assets/sass.png";
import mui from "../public/assets/mui.png";
const credits = () => {
  return (
    <div>
      <Head>
        <title>Credits</title>
        <meta
          name="description"
          content="Frmz is an app contains all useable forms in one place"
        />
      </Head>

      <div className={styles.Container}>
        <div className={styles.mainContent}>
          <p className={styles.description}>
            This project is made for personal purpose which is
            <br />
            displaying all types of essential forms in one place.
            <br />
            Forms like Login, Register, Contact and Multi-Step payment.
            <br />
          </p>
          <h1 className={styles.mainText}>THIS PROJECT IS MADE WITH</h1>

          <div className={styles.techInfo}>
            <div className={styles.iconsCollection}>
              <Image src={nextjs} alt="" className={styles.techIcons} />
              <Image src={typescript} alt="" className={styles.techIcons} />
              <Image src={sass} alt="" className={styles.techIcons} />
              <Image src={mui} alt="" className={styles.techIcons} />
            </div>
            <p>In addition to</p>
            <h3>Formik + Yup</h3>
          </div>

          <h1 className={styles.mainText}>DESIGNED & CODED BY</h1>
          <h2 className={styles.myName}>Ehab Muhammad</h2>
          <div className={styles.links}>
            <h3>
              <a href="https://github.com/certifiedcashchef">GitHub</a>
            </h3>
            <h3>
              <a href="#">LinkedIn</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default credits;
