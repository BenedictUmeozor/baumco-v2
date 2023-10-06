"use client";

import Link from "next/link";
import styles from "./nav.module.scss";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { ChevronUp } from "react-feather";

const Nav = () => {
  const pathname = usePathname();

  return (
    <Fragment>
      <nav className={styles.desktop}>
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
            <div className={styles.dropdown}>
              <Link href="#" onClick={(e) => e.preventDefault()}>
                Electronics <ChevronUp />
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
        </ul>
      </nav>
    </Fragment>
  );
};
export default Nav;
