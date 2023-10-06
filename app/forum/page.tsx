import Container from "@/components/Layouts/Container";
import styles from "./page.module.scss";
import ForumTopic from "@/components/ForumTopic";
import LatestPosts from "./LatestPosts";

const Forum = () => {
  return (
    <main className={styles.main}>
      <Container>
        <h2>FORUM</h2>
      </Container>
      <Container className={styles.container}>
        <div className={styles.left}>
          <ForumTopic topic="General" />
          <ForumTopic topic="Embedded" />
          <ForumTopic topic="Power Electronics" />
          <ForumTopic topic="Internet of things" />
          <ForumTopic topic="Digital Electronics" />
          <ForumTopic topic="Analog Electronics" />
        </div>
        <div className={styles.right}>
          <LatestPosts />
        </div>
      </Container>
    </main>
  );
};
export default Forum;
