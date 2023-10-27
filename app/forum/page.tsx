import Container from "@/components/Layouts/Container";
import styles from "./page.module.scss";
import ForumTopic from "@/components/ForumTopic";
import LatestPosts from "./LatestPosts";
import { v4 as uuidv4 } from "uuid";

const formTopics = [
  {
    id: uuidv4(),
    category: "general",
  },
  {
    id: uuidv4(),
    category: "embedded",
  },
  {
    id: uuidv4(),
    category: "power electronics",
  },
  {
    id: uuidv4(),
    category: "internet of things",
  },
  {
    id: uuidv4(),
    category: "digital electronics",
  },
  {
    id: uuidv4(),
    category: "analog electronics",
  },
];

const Forum = () => {
  return (
    <div className={styles.left}>
      {formTopics.map((topic) => (
        <ForumTopic key={topic.id} topic={topic.category} />
      ))}
    </div>
  );
};
export default Forum;
