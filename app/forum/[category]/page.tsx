"use client";

import styles from "./page.module.scss";
import Topic from "./Topic";

const Category = ({ params }: { params: { category: string } }) => {
  console.log(params);
  return (
    <section className={styles.category}>
      <div className={styles.title}>{params.category}</div>
      <div>
        <Topic category={params.category} />
        <Topic category={params.category} />
        <Topic category={params.category} />
        <Topic category={params.category} />
        <Topic category={params.category} />
        <Topic category={params.category} />
      </div>
    </section>
  );
};
export default Category;
