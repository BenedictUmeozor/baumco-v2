import styles from "./page.module.scss";
import image from "@/assets/singup.svg";
import Image from "next/image";
import google from "@/assets/google.png";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import Container from "@/components/Layouts/Container";

const Page = () => {
  return (
    <main className={styles.page}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Image src={image} alt="register" height={500} width={500} />
        </div>
        <div className={styles.right}>
          <h2>Signup for Your Account</h2>
          <p className={styles.intro}>
            Welcome to <Link href={"/"}>BAUMco</Link> - Your Gateway to Career
            Opportunites
          </p>
          <form className="auth-form">
            <button className={`${styles.google} `}>
              <Image src={google} alt="google" height={30} width={30} />
              Sign up with google
            </button>
            <div className={styles.or}>OR</div>
            <div className="form-field">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                id="password"
                placeholder="Create your password"
              />
            </div>
            <button className={`submit ${styles.button}`}>
              Continue <ArrowRight />
            </button>
          </form>
          <p className="redirect">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </Container>
    </main>
  );
};
export default Page;
