import { Children } from "@/helpers/types";
import styles from "./layout.module.scss";

const Container = ({
  children,
  className,
}: Children & { className?: string }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
export default Container;
