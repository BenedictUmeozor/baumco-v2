import Image from "next/image";
import styles from "./post.module.scss";
import image from "@/assets/post.jpg";
import Link from "next/link";
import MotionDiv from "../Layouts/MotionDiv";

const Post = () => {
  return (
    <MotionDiv
      className={styles.post}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", delay: 0.5 }}
    >
      <div className={styles.image}>
        <Image src={image} alt="post" width={200} height={200} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <Link href="/posts/1">
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        </Link>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          magnam, cumque accusamus dicta provident necessitatibus?
        </p>
        <div className={styles.footer}>
          <p>5th October, 2023</p> |{" "}
          <p>
            By <span>Admin</span>
          </p>
        </div>
      </div>
    </MotionDiv>
  );
};
export default Post;
