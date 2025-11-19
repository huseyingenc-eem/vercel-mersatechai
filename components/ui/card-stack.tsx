"use client";
import { motion } from "framer-motion";

type Card = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  className,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  className?: string;
}) => {
  const CARD_OFFSET = offset || 12;
  const SCALE_FACTOR = scaleFactor || 0.06;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={"relative h-[450px] w-[340px] sm:w-[384px] " + (className || "")}>
      {items.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute inset-0 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
            style={{
              transformOrigin: "top center",
            }}
            initial={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: items.length - index,
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: items.length - index,
            }}
            transition={{
              duration: 0.4,
              ease: "circOut",
            }}
          >
            <div className="h-full w-full overflow-hidden relative">{card.content}</div>
          </motion.div>
        );
      })}
    </div>
  );
};
