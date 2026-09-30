"use client";

import React from "react";
import { motion } from "framer-motion";

import TiltWrapper from "@/components/tilt-wrapper";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  // Convert children into an array to wrap each in a motion.div
  const childrenArray = React.Children.toArray(children);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-6"
    >
      {/* Left column - Tech stack */}
      <motion.div variants={item} className="order-3 md:order-1 h-full">
        <TiltWrapper>{childrenArray[0]}</TiltWrapper>
      </motion.div>

      {/* Center column - Profile + Tools board */}
      <motion.div variants={item} className="order-1 md:order-2 flex flex-col gap-6 w-full h-full">
        <div className="w-full min-h-[300px]">
          <TiltWrapper>{childrenArray[1]}</TiltWrapper>
        </div>
        <div className="flex-grow w-full">
          <TiltWrapper>{childrenArray[2]}</TiltWrapper>
        </div>
      </motion.div>

      {/* Right column - Links + Project poster */}
      <motion.div variants={item} className="order-2 md:order-3 flex flex-col gap-6 h-full w-full">
        <div className="w-full h-auto">
          <TiltWrapper>{childrenArray[3]}</TiltWrapper>
        </div>
        <div className="w-full flex-grow">
          <TiltWrapper>{childrenArray[4]}</TiltWrapper>
        </div>
      </motion.div>
    </motion.div>
  );
}
