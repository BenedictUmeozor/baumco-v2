import { Children } from "@/helpers/types";
import styles from "./category.module.scss";
import Link from "next/link";

const Category = ({ children, category }: Children & { category: string }) => {
  return (
    <div className={styles.category}>
      <Link href={"/categories/" + category} className={styles.svg}>
        {children}
      </Link>
      <p>{category}</p>
    </div>
  );
};
export default Category;
