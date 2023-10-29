"use client";

import Container from "@/components/Layouts/Container";
import styles from "./page.module.scss";
import { ReactNode } from "react";
import Link from "next/link";
import { FilePlus, User, Users } from "react-feather";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.left}>
          <div className={styles.user}>
            <div className={styles.avatar}>R</div>
            <p>Admin</p>
          </div>
          <ul>
            <li>
              <Link
                href="/admin"
                className={pathname === "/admin" ? styles.active : ""}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  ></path>
                </svg>
                <span>Posts</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/new"
                className={pathname === "/admin/new" ? styles.active : ""}
              >
                <FilePlus /> <span>Create Post</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className={pathname === "/admin/users" ? styles.active : ""}
              >
                <Users /> <span>Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/edit-profile"
                className={
                  pathname === "/admin/edit-profile" ? styles.active : ""
                }
              >
                <User /> <span>Edit Profile</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>{children}</div>
      </Container>
    </section>
  );
}
