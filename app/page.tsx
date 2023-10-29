import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import Posts from "@/components/Posts";
import CategorySection from "@/components/Category";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baumco web community | Home",
  description:
    "Elevate your tech prowess with BAUMco. Immerse in programming insights, latest trends, and tutorials. Empower your journey in the world of tech and programming excellence.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <CategorySection />
      <Posts />
    </main>
  );
}
