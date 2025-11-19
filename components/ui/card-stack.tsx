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
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 12;
  const SCALE_FACTOR = scaleFactor || 0.06;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="relative h-[450px] w-[340px] sm:w-[384px]">
      {items.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-neutral-900 bg-white h-[450px] w-[340px] sm:w-[384px] rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800"
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
                ease: "circOut"
            }}
          >
            {card.content}
          </motion.div>
        );
      })}
    </div>
  );
};
