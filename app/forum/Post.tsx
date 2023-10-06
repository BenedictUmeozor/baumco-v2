import Image from "next/image";
import styles from "./page.module.scss";
import image from "@/assets/post1.jpg";
import Link from "next/link";
import MotionDiv from "@/components/Layouts/MotionDiv";

const Post = () => {
  return (
    <MotionDiv
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", delay: 0.5 }}
      className={styles.post}
    >
      <div className={styles.image}>
        <Image src={image} alt="image" quality={100} height={50} width={50} />
      </div>
      <div className={styles.content}>
        <Link href="/posts">Lorem ipsum dolor sit amet.</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </MotionDiv>
  );
};
export default Post;
