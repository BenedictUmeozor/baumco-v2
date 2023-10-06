import Image from "next/image";
import Container from "../Layouts/Container";
import styles from "./hero.module.scss";
import image from "@/assets/hero.svg";
import { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <section className={styles.section}>
        <Container className={styles.container}>
          <div className={styles.left}>
            <h2>
              Unlock your potential with <span>BAUMco.</span>
            </h2>
            <p>
              Elevate your tech prowess with BAUMco. Immerse in programming
              insights, latest trends, and tutorials. Empower your journey in
              the world of tech and programming excellence.
            </p>
            <form>
              <input type="text" placeholder="Subscribe to our newsletter" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className={styles.right}>
            <Image src={image} alt="hero" height={500} width={500} />
          </div>
        </Container>
      </section>
    </Fragment>
  );
};
export default Hero;
