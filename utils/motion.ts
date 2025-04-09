// utils/motion.ts

import { Variants } from "framer-motion";

export const slideInFromLeft = (delay: number): Variants => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

export const slideInFromRight = (delay: number): Variants => ({
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

export const slideInFromTop: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
