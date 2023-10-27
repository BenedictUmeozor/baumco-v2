import Link from "next/link";
import styles from "./page.module.scss";

const Post = () => {
  return (
    <div className={styles.post}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <div className={styles.main}>
        <p className={styles.attr}>
          Submitted by <Link href={"/"}>Random User</Link> on October 20, 2023
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          voluptate dignissimos dolorum praesentium nemo eaque, ducimus
          recusandae sequi minus nihil vitae, omnis mollitia suscipit
          reprehenderit facilis? Quisquam pariatur ad nostrum illo, quibusdam et
          qui, dolor, repudiandae asperiores placeat minima eveniet?
        </p>
      </div>
      <div className={styles.auth}>
        <Link href="/login">Login</Link> or{" "}
        <Link href="/register">register</Link> to post comments
      </div>
    </div>
  );
};
export default Post;
