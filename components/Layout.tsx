import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";
import { ReactNode } from "react";

// TypeScript
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
