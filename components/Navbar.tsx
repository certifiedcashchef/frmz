import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.logo}>FRMZ</h1>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/credits">Credits</Link>
      </div>
    </nav>
  );
};

export default Navbar;
