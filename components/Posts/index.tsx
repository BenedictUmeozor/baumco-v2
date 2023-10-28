import Link from "next/link";
import Container from "../Layouts/Container";
import Post from "../Post";
import styles from "./posts.module.scss";
import { ArrowRight } from "react-feather";

const Posts = () => {
  return (
    <section className={styles.posts}>
      <Container>
        <div>
          <h2>Recent Posts</h2>
        </div>
        <div className={styles.container}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <Link href="/posts" className={styles.posts_link}>
          See more <ArrowRight />
        </Link>
      </Container>
    </section>
  );
};
export default Posts;
