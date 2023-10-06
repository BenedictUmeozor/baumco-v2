import Image from "next/image";
import Container from "../Layouts/Container";
import styles from "./hero.module.scss";
import image from "@/assets/hero.svg";
import { Fragment } from "react";
import MotionDiv from "../Layouts/MotionDiv";

const Hero = () => {
  return (
    <Fragment>
      <section className={styles.section}>
        <Container className={styles.container}>
          <MotionDiv
            className={styles.left}
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "tween", delay: 0.3 }}
          >
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
          </MotionDiv>
          <MotionDiv
            className={styles.right}
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "tween" }}
          >
            <Image src={image} alt="hero" height={500} width={500} />
          </MotionDiv>
        </Container>
      </section>
    </Fragment>
  );
};
export default Hero;
