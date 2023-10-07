"use client";

import Link from "next/link";
import Container from "../Layouts/Container";
import styles from "./header.module.scss";
import Nav from "../Nav";
import { Menu, X } from "react-feather";
import { Fragment, useEffect, useState } from "react";
import MobileNav from "../MobileNav";
import { AnimatePresence, motion } from "framer-motion";
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

  useEffect(() => {
    if (!showMobileNav) {
      document.body.style.overflowY = "auto";
    }
  }, [showMobileNav]);

  return (
    <Fragment>
      <header className={styles.header}>
        <Container className={styles.container}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link href="/" className={styles.logo}>
              BAUMco.
            </Link>
          </motion.div>
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
