"use client";

import Link from "next/link";
import { Edit2, ExternalLink, MoreVertical, Trash2 } from "react-feather";
import styles from "./page.module.scss";
import { useState } from "react";

const Row = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.row}>
      <div className={styles.post_title}>
        <Link href="/posts/1">
          Lorem ipsum dolor sit amet, consectetur adipisicing...
        </Link>
        <ExternalLink />
      </div>
      <div className={styles.ellipsis}>
        <MoreVertical onClick={() => setOpen(true)} />
        {open && (
          <div onMouseLeave={() => setOpen(false)}>
            <Link href="/admin/edit-post">
              Edit <Edit2 />
            </Link>
            <Link href="/">
              Delete <Trash2 />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className={styles.page}>
      <h2>All Posts</h2>
      <div className={styles.table}>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};
export default Page;
