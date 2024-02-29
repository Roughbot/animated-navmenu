import styles from "./styles.module.scss";
import LinkTag from "../Link/Link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "../anime";
import Curve from "../Curve/Curve";

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/About",
    },
    {
      title: "Contact",
      href: "/Contact",
    },
    {
      title: "Services",
      href: "/Services",
    },
    {
      title: "Portfolio",
      href: "/Portfolio",
    },
  ];

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <LinkTag
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
