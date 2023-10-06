import { Clock, Code, Cpu, Zap } from "react-feather";
import Container from "../Layouts/Container";
import Category from "./Category";
import styles from "./category.module.scss";

const CategorySection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h2>Explore Categories</h2>
        <div className={styles.categories}>
          <Category category="Embedded">
            <Code />
          </Category>
          <Category category="Power">
            <Zap />
          </Category>
          <Category category="Analog">
            <Clock />
          </Category>
          <Category category="IOT">
            <Cpu />
          </Category>
        </div>
      </Container>
    </section>
  );
};
export default CategorySection;
