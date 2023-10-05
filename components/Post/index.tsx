import Image from "next/image";
import styles from "./post.module.scss";
import image from "@/assets/post.jpg";
import Link from "next/link";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <Image src={image} alt="post" width={200} height={200} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <Link href="/">
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          magnam, cumque accusamus dicta provident necessitatibus?
        </p>
        <p>
          By <span>Admin</span>
        </p>
      </div>
    </div>
  );
};
export default Post;
