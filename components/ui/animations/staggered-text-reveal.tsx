"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredTextRevealProps {
  text: string;
  className?: string;
}

export const StaggeredTextReveal = ({ text, className }: StaggeredTextRevealProps) => {
  const words = text.split(" ");

  const variants = {
    hidden: { opacity: 0, y: -20, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.h3
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={variants} custom={i} className="mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.h3>
  );
};
