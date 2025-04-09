"use client";

import { MotionDiv } from "../Motionelement";
import { SparklesIcon } from "@heroicons/react/24/solid";

import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "../../utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <MotionDiv
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with Next js 15
        </h1>
      </MotionDiv>
      <MotionDiv
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern Technology
      </MotionDiv>
      <MotionDiv
        variants={slideInFromRight(0.5)}
        className="text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task deadline or idea
      </MotionDiv>
    </div>
  );
};

export default SkillText;
