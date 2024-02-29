import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../anime";

const LinkTag = ({ data, isActive, setSelectedIndicator }: any) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default LinkTag;
