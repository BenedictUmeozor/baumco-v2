"use client";

import Link from "next/link";
import styles from "./nav.module.scss";
import { Fragment, MouseEventHandler, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronUp } from "react-feather";

type PropTypes = {
  onClick: MouseEventHandler<HTMLAnchorElement>;
  key: string;
};

const MobileNav = ({ onClick, key }: PropTypes) => {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);

  return (
    <Fragment>
      <motion.nav
        key={key}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
        className={styles.nav}
      >
        <ul>
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? styles.active : ""}`}
              onClick={onClick}
            >
              Home
            </Link>
          </li>
          <li>
            <div className={styles.accordion}>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowContent((prev) => !prev);
                }}
              >
                Electronics <ChevronUp />
              </Link>
              {showContent && (
                <div className={styles.content}>
                  <Link
                    href="/electronics/analog"
                    className={`${
                      pathname === "/electronics/analog" ? styles.active : ""
                    }`}
                    onClick={onClick}
                  >
                    Analog
                  </Link>
                  <Link
                    href="/electronics/digital"
                    className={`${
                      pathname === "/electronics/digital" ? styles.active : ""
                    }`}
                    onClick={onClick}
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
                    onClick={onClick}
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
                    onClick={onClick}
                  >
                    Internet of things
                  </Link>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link
              href="/forum"
              className={`${pathname === "/forum" ? styles.active : ""}`}
              onClick={onClick}
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${pathname === "/contact" ? styles.active : ""}`}
              onClick={onClick}
            >
              Contact
            </Link>
          </li>
          <li className={styles.login}>
            <Link
              href="/login"
              className={`${pathname === "/login" ? styles.active : ""}`}
              onClick={onClick}
            >
              Login
            </Link>
          </li>
          <li className={styles.register}>
            <Link
              href="/register"
              className={`${pathname === "/register" ? styles.active : ""}`}
              onClick={onClick}
            >
              Register
            </Link>
          </li>
        </ul>
      </motion.nav>
    </Fragment>
  );
};
export default MobileNav;
