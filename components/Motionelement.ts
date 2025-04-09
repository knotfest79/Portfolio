// components/Motionelement.ts
import { motion, MotionProps } from "framer-motion";
import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from "react";

type MotionElement<T extends ElementType> = ForwardRefExoticComponent<
  PropsWithChildren<ComponentPropsWithoutRef<T> & MotionProps> &
    RefAttributes<unknown>
>;

export const MotionDiv: MotionElement<"div"> = motion.div;
export const MotionP: MotionElement<"p"> = motion.p;
export const MotionA: MotionElement<"a"> = motion.a;
