"use client";

import { Inter } from "next/font/google";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

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
