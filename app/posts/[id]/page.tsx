import Container from "@/components/Layouts/Container";
import styles from "./page.module.scss";
import Link from "next/link";
import image from "../../../assets/post1.jpg";
import Image from "next/image";
import Post from "./Post";

const PostPage = () => {
  return (
    <section className={styles.post_page}>
      <Container>
        <div className={styles.author}>
          <p>
            Published by <Link href={"/users/1"}>Admin</Link>
          </p>
          <p>23 October, 2023</p>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.post}>
              <div className={styles.image}>
                <Image src={image} height={300} width={300} alt="post-image" />
              </div>
              <h2 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <div className={styles.content}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia inventore totam dolores amet beatae, tempore
                  doloribus, corporis accusamus unde quasi possimus. Magni porro
                  iusto molestias ea atque nam maxime quibusdam a voluptas!
                  Voluptates eveniet nam totam explicabo dolor doloremque.
                  Molestiae labore nemo facere recusandae quidem ex saepe, totam
                  non, adipisci amet consequatur voluptas fuga quasi aspernatur?
                  Quia molestias accusamus magnam!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia inventore totam dolores amet beatae, tempore
                  doloribus, corporis accusamus unde quasi possimus. Magni porro
                  iusto molestias ea atque nam maxime quibusdam a voluptas!
                  Voluptates eveniet nam totam explicabo dolor doloremque.
                  Molestiae labore nemo facere recusandae quidem ex saepe, totam
                  non, adipisci amet consequatur voluptas fuga quasi aspernatur?
                  Quia molestias accusamus magnam!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia inventore totam dolores amet beatae, tempore
                  doloribus, corporis accusamus unde quasi possimus. Magni porro
                  iusto molestias ea atque nam maxime quibusdam a voluptas!
                  Voluptates eveniet nam totam explicabo dolor doloremque.
                  Molestiae labore nemo facere recusandae quidem ex saepe, totam
                  non, adipisci amet consequatur voluptas fuga quasi aspernatur?
                  Quia molestias accusamus magnam!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia inventore totam dolores amet beatae, tempore
                  doloribus, corporis accusamus unde quasi possimus. Magni porro
                  iusto molestias ea atque nam maxime quibusdam a voluptas!
                  Voluptates eveniet nam totam explicabo dolor doloremque.
                  Molestiae labore nemo facere recusandae quidem ex saepe, totam
                  non, adipisci amet consequatur voluptas fuga quasi aspernatur?
                  Quia molestias accusamus magnam!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia inventore totam dolores amet beatae, tempore
                  doloribus, corporis accusamus unde quasi possimus. Magni porro
                  iusto molestias ea atque nam maxime quibusdam a voluptas!
                  Voluptates eveniet nam totam explicabo dolor doloremque.
                  Molestiae labore nemo facere recusandae quidem ex saepe, totam
                  non, adipisci amet consequatur voluptas fuga quasi aspernatur?
                  Quia molestias accusamus magnam!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia inventore totam dolores amet beatae, tempore
                  doloribus, corporis accusamus unde quasi possimus. Magni porro
                  iusto molestias ea atque nam maxime quibusdam a voluptas!
                  Voluptates eveniet nam totam explicabo dolor doloremque.
                  Molestiae labore nemo facere recusandae quidem ex saepe, totam
                  non, adipisci amet consequatur voluptas fuga quasi aspernatur?
                  Quia molestias accusamus magnam!
                </p>
              </div>
              <div className={styles.tags}>
                <Link href="/">Post tag</Link>
                <Link href="/">Post tag</Link>
                <Link href="/">Post tag</Link>
                <Link href="/">Post tag</Link>
                <Link href="/">Post tag</Link>
              </div>

              <div className={styles.comments}>
                <p className={styles.auth}>
                  <Link href="/login">Login</Link> or{" "}
                  <Link href="/register">register</Link> to post comments
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h2>Related Posts</h2>
            <div className={styles.related}>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default PostPage;
