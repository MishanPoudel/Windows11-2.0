import React from "react";
import { motion } from "framer-motion";

const Title = ({ constraintsRef, children }) => {
  return (
    <motion.div
      className="container bg-black w-[69em] relative left-[28.5em] top-40 h-[40em] rounded-xl overflow-hidden"
      ref={constraintsRef}
      drag
      dragConstraints={constraintsRef}
      dragTransition={{ velocity: 1 }}
    >
      <div className="h-10 flex justify-end items-center overflow-hidden">
        <span class="material-symbols-outlined btn text-lg bg-transparent border-0">
          minimize
        </span>
        <span class="material-symbols-outlined btn text-lg bg-transparent border-0">
          check_box_outline_blank
        </span>
        <span class="material-symbols-outlined btn text-xl hover:bg-red-700 bg-transparent border-0">
          close
        </span>
      </div>
      {children}
    </motion.div>
  );
};

export default Title;
