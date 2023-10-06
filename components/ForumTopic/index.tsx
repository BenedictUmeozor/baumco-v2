import { Bell, CheckSquare, MessageSquare } from "react-feather";
import styles from "./topic.module.scss";
import Link from "next/link";

const ForumTopic = ({ topic }: { topic: string }) => {
  return (
    <div className={styles.forumTopic}>
      <div className={styles.header}>
        <div className={styles.topic}>{topic}</div>
        <div className={styles.icons}>
          <div>
            <Bell />
            20 topics
          </div>
          <div>
            <MessageSquare />
            40 replies
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.latest}>
          <h3>Latest</h3>
          <Link href="/forum/post">
            <CheckSquare />
            Lorem ipsum dolor sit amet consectetur.
          </Link>

          <p>
            5th october, 2023 | By <span>John Doe</span>
          </p>
        </div>
        <div className={styles.top}>
          <h3>Top topics</h3>
          <ul>
            <li>
              <Link href="/forum/post">
                <CheckSquare />
                Lorem ipsum dolor sit amet consectetur.
              </Link>
              <p>
                5th october, 2023 | By <span>John Doe</span>
              </p>
            </li>
            <li>
              <Link href="/forum/post">
                <CheckSquare />
                Lorem ipsum dolor sit amet consectetur.
              </Link>
              <p>
                5th october, 2023 | By <span>John Doe</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.icons}>
          <div>
            <Bell />
            20 topics
          </div>
          <div>
            <MessageSquare />
            40 replies
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForumTopic;
