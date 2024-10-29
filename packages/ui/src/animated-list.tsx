"use client";

import React, { useEffect, useMemo, useState, type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedList = React.memo(
  ({
    className,
    children,
    delay = 4000,
  }: {
    className?: string;
    children: React.ReactNode;
    delay?: number;
  }) => {
    const childrenArrayBase = React.Children.toArray(children);
    const childrenArray = [...childrenArrayBase, ...childrenArrayBase]
    const [index, setIndex] = useState(childrenArrayBase.length - 1);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow = useMemo(
      () => childrenArray.slice(0, index + 1).map((item, index) => [item, index]).reverse(),
      [index, childrenArray],
    );

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {itemsToShow.map(([item, index]) => (
            <AnimatedListItem key={index?.toString()}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div >
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
