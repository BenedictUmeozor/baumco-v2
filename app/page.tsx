import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Posts />
    </main>
  );
}
