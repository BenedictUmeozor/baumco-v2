"use client";

import Editor from "@/components/Editor";
import styles from "./page.module.scss";

const NewPage = () => {
  return (
    <div className={styles.form}>
      <h2>Create new post</h2>
      <form>
        <div>
          <label>Post title</label>
          <Editor placeholder="Enter post title" />
        </div>
        <div>
          <label>Post content</label>
          <Editor placeholder="Enter post content" minHeight="200px" />
        </div>
        <div>
          <label>Upload image</label>
          <input type="file" />
        </div>
        <button>Create Post</button>
      </form>
    </div>
  );
};
export default NewPage;
