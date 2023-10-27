import { Bell, CheckSquare, MessageSquare } from "react-feather";
import styles from "./topic.module.scss";
import Link from "next/link";
import MotionDiv from "../Layouts/MotionDiv";

const ForumTopic = ({ topic }: { topic: string }) => {
  return (
    <MotionDiv
      className={styles.forumTopic}
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", delay: 0.5 }}
    >
      <div className={styles.header}>
        <Link href={"/forum/" + topic} className={styles.topic}>
          {topic}
        </Link>
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
          <Link href={"/forum/" + topic + "/title"}>
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
              <Link href={"/forum/" + topic + "/title"}>
                <CheckSquare />
                Lorem ipsum dolor sit amet consectetur.
              </Link>
              <p>
                5th october, 2023 | By <span>John Doe</span>
              </p>
            </li>
            <li>
              <Link href={"/forum/" + topic + "/title"}>
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
    </MotionDiv>
  );
};
export default ForumTopic;
