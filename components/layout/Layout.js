import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";
const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <h2>BotoCar</h2>
          <p>chose an buy your car</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        next.js courses | botoCar Project copy;
      </footer>
    </>
  );
};

export default Layout;
