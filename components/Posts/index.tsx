import Container from "../Layouts/Container";
import Post from "../Post";
import styles from "./posts.module.scss";

const Posts = () => {
  return (
    <section className={styles.posts}>
      <Container>
        <h2>Recent Posts</h2>
      </Container>
      <Container className={styles.container}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Container>
    </section>
  );
};
export default Posts;
