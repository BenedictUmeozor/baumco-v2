import Link from "next/link";
import styles from "./page.module.scss";
import { MessageSquare } from "react-feather";

const Topic = ({ category }: { category: string }) => {
  return (
    <div className={styles.topic}>
      <div className={styles.left}>
        <div className={styles.letter}>U</div>
        <div className={styles.body}>
          <Link href={"/forum/" + category + "/post"} className={styles.h4}>
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
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              ></path>
            </svg>
            Lorem ipsum dolor sit amet.
          </Link>
          <p className={styles.author}>
            <Link href="/">Random user</Link> - September 12, 2023
          </p>
          <p className={styles.reply}>
            Last reply by <Link href={"/"}>N/A</Link>
          </p>
        </div>
      </div>
      <div className={styles.replies}>
        <MessageSquare /> 40 replies
      </div>
    </div>
  );
};
export default Topic;
