import { Children } from "@/helpers/types";
import styles from "./category.module.scss";
import Link from "next/link";
import MotionDiv from "../Layouts/MotionDiv";

const Category = ({ children, category }: Children & { category: string }) => {
  return (
    <MotionDiv
      className={styles.category}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", delay: 0.5 }}
    >
      <Link href={"/categories/" + category} className={styles.svg}>
        {children}
      </Link>
      <p>{category}</p>
    </MotionDiv>
  );
};
export default Category;
