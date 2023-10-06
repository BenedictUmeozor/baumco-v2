import Post from "./Post";
import styles from "./page.module.scss";

const LatestPosts = () => {
  return (
    <div className={styles.latestPost}>
      <h3>Latest Posts</h3>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default LatestPosts;
