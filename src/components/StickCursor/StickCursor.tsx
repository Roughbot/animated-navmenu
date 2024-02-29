"use client";
import { useEffect } from "react";
import style from "./style.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickCursor = () => {
  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMoues = {
    x: useSpring(mouse.x, { stiffness: 300, damping: 30, mass: 0.5 }),
    y: useSpring(mouse.y, { stiffness: 300, damping: 30, mass: 0.5 }),
  };

  const manageMouseMove = (e: MouseEvent) => {
    mouse.x.set(e.clientX - cursorSize / 2);
    mouse.y.set(e.clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  });

  return (
    <motion.div
      className={style.cursor}
      style={{ left: smoothMoues.x, top: smoothMoues.y }}
    ></motion.div>
  );
};

export default StickCursor;
