import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

// Import Components
import DropDownList from "../components/DropDownList";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import Email from "../components/forms/Email";
import Payment from "../components/forms/Payment";
import Footer from "../components/Footer";

export default function Home() {
  const [showList, setShowList] = useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("- - -");

  return (
    <div>
      <Head>
        <title>Frmz - Many Forms One Place</title>
        <meta
          name="description"
          content="Frmz is an app contains all useable forms in one place"
        />
      </Head>

      <section className={styles.mainContent}>
        <div className={styles.mainSection}>
          <h1 className={styles.headText}>Welcome to FRMZ</h1>
          <p className={styles.headParagraph}>
            An app contains all useable forms in one place.
          </p>
          <h2
            style={{ display: showList ? "none" : "block" }}
            className={styles.startBtn}
            onClick={() => setShowList(true)}
          >
            Start Exploring Now
          </h2>

          {showList && (
            <DropDownList
              showDropDown={showDropDown}
              setShowDropDown={setShowDropDown}
              selected={selected}
              setSelected={setSelected}
            />
          )}

          {/* Rendering Forms */}
          <div className={styles.formsContainer}>
            {selected === "Login" && <Login />}
            {selected === "Register" && <Register />}
            {selected === "Email" && <Email />}
            {selected === "Payment" && <Payment />}
          </div>

          <Footer />
        </div>
      </section>
    </div>
  );
}
