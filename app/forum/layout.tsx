import Container from "@/components/Layouts/Container";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./page.module.scss";
import LatestPosts from "../LatestPosts";

export default function ForumLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Container className={styles.layout}>
        <Link href="/forum" className={styles.heading}>
          {" "}
          <h2 style={headingStyle}>FORUM</h2>
        </Link>
        <Link href={"/login"}>Login to post question</Link>
      </Container>
      <Container className={styles.wrapper}>
        <div className={styles.left}>{children}</div>
        <div className={styles.right}>
          <LatestPosts />
        </div>
      </Container>
    </main>
  );
}

const headingStyle = {
  fontSize: "1.25rem",
  fontWeight: 600,
  fontFamily: "Montserrat",
};
