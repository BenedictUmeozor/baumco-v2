import Link from "next/link";
import styles from "./page.module.scss";

const Post = () => {
  return (
    <div className={styles.related_post}>
      <Link href="/posts/1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        nemo, blanditiis obcaecati possimus in error...
      </p>
    </div>
  );
};
export default Post;
