"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type PropTypes = {
  placeholder?: string;
  minHeight?: string;
};

const inter = Inter({ subsets: ["latin"] });

export default function Editor({ placeholder, minHeight }: PropTypes) {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      theme="bubble"
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      className={inter.className}
      style={{
        backgroundColor: "#fafafa",
        minHeight: minHeight,
      }}
    />
  );
}
