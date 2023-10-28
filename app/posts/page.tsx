import Container from "@/components/Layouts/Container";
import styles from "./page.module.scss";
import Post from "@/components/Post";

const PostsPage = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h2>All posts</h2>
        <div className={styles.posts}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </Container>
    </section>
  );
};
export default PostsPage;
