import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import Posts from "@/components/Posts";
import CategorySection from "@/components/Category";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <CategorySection />
      <Posts />
    </main>
  );
}
