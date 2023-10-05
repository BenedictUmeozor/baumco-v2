"use client";

import Link from "next/link";
import styles from "./nav.module.scss";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Fragment>
      <AnimatePresence>
        <motion.nav
          key={pathname + 5}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          className={styles.nav}
        >
          <ul>
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? styles.active : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <div className={styles.accordion}>
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Electronics
                </Link>
                <div className={styles.content}>
                  <Link
                    href="/electronics/analog"
                    className={`${
                      pathname === "/electronics/analog" ? styles.active : ""
                    }`}
                  >
                    Analog
                  </Link>
                  <Link
                    href="/electronics/digital"
                    className={`${
                      pathname === "/electronics/digital" ? styles.active : ""
                    }`}
                  >
                    Digital
                  </Link>
                  <Link
                    href="/electronics/embedded-systems"
                    className={`${
                      pathname === "/electronics/embedded-systems"
                        ? styles.active
                        : ""
                    }`}
                  >
                    Embedded systems
                  </Link>
                  <Link
                    href="/electronics/internet-of-things"
                    className={`${
                      pathname === "/electronics/internet-of-things"
                        ? styles.active
                        : ""
                    }`}
                  >
                    Internet of things
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/forum"
                className={`${pathname === "/forum" ? styles.active : ""}`}
              >
                Forum
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${pathname === "/contact" ? styles.active : ""}`}
              >
                Contact
              </Link>
            </li>
            <li className={styles.login}>
              <Link
                href="/login"
                className={`${pathname === "/login" ? styles.active : ""}`}
              >
                Login
              </Link>
            </li>
            <li className={styles.register}>
              <Link
                href="/register"
                className={`${pathname === "/register" ? styles.active : ""}`}
              >
                Register
              </Link>
            </li>
          </ul>
        </motion.nav>
      </AnimatePresence>
    </Fragment>
  );
};
export default MobileNav;
