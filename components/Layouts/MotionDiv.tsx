"use client";

import { Children } from "@/helpers/types";
import { motion } from "framer-motion";

type PropTypes = {
  className?: string;
  initial?: {};
  animate?: {};
  transition?: {};
  viewport?: {};
  whileInView?: {};
};

const MotionDiv = ({
  children,
  className,
  initial,
  animate,
  transition,
  viewport,
  whileInView,
}: Children & PropTypes) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={viewport}
      whileInView={whileInView}
    >
      {children}
    </motion.div>
  );
};
export default MotionDiv;
