"use client"

import { GridLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="loader">
      <GridLoader color="#0040ff" loading={true} size={20} />
    </div>
  );
}
