"use client";

import Link from "next/link";
import Container from "../Layouts/Container";
import styles from "./header.module.scss";
import Nav from "../Nav";
import { Menu, X } from "react-feather";
import { Fragment, useState } from "react";
import MobileNav from "../MobileNav";
import { AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => {
    if (showMobileNav) {
      setShowMobileNav(false);
      document.body.style.overflowY = "auto";
    } else {
      setShowMobileNav(true);
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <Fragment>
      <header className={styles.header}>
        <Container className={styles.container}>
          <Link href="/" className={styles.logo}>
            BAUMco.
          </Link>
          <Nav />
          <div className={styles.auth}>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </div>
          <div className={styles.menu} onClick={toggleNav}>
            {showMobileNav ? <X /> : <Menu />}
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {showMobileNav && (
          <MobileNav
            key={`element-${uuidv4()}`}
            onClick={() => setShowMobileNav(false)}
          />
        )}
      </AnimatePresence>
    </Fragment>
  );
};
export default Header;
