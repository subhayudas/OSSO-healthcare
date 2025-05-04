"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  animate = false,
}: {
  content: {
    title: string;
    description: string;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: React.ReactNode | any;
    image?: string;
  }[];
  contentClassName?: string;
  animate?: boolean;
  inView?: boolean;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgba(241,221,248,0.44)",
    "#DFE6FF5E", // slate-900
  ];

  // Colors for glassmorphism cards
  const cardGradients = [
    "from-cyan-100/20 to-emerald-100/20", // cyan to emerald with transparency
    "from-pink-100/20 to-indigo-100/20", // pink to indigo with transparency
    "from-orange-100/20 to-yellow-100/20", // orange to yellow with transparency
    "from-purple-100/20 to-blue-100/20", // purple to blue with transparency
    "from-red-100/20 to-amber-100/20", // red to amber with transparency
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[40rem] justify-center space-x-10 overflow-y-auto rounded-[5rem] p-10"
      ref={ref}
      initial={animate ? { opacity: 0 } : {}}
      whileInView={
        animate
          ? {
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
              },
            }
          : {}
      }
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative flex items-start px-4 z-20">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              className="my-20"
              initial={
                animate
                  ? {
                      filter: "blur(10px)",
                      y: 20,
                      opacity: 0,
                    }
                  : {}
              }
              whileInView={
                animate
                  ? {
                      filter: "blur(0px)",
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.3 + index * 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    }
                  : {}
              }
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-neutral-700"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-10 max-w-sm text-neutral-700"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={cn(
          "sticky z-30 top-10 hidden h-fit w-96 overflow-hidden rounded-2xl bg-gradient-to-br backdrop-blur-lg border border-white/20 shadow-xl lg:block",
          cardGradients[activeCard % cardGradients.length],
          contentClassName,
        )}
        animate={{
          opacity: [0.8, 1],
          scale: [0.95, 1],
        }}
        transition={{
          duration: 0.5,
        }}
        initial={
          animate
            ? {
                filter: "blur(10px)",
                y: 20,
                opacity: 0,
              }
            : {}
        }
        whileInView={
          animate
            ? {
                filter: "blur(0px)",
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.3 + content.length * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }
            : {}
        }
        viewport={{ once: true }}
      >
        {/* Single content container for the entire card */}
        <div className="w-full h-full flex flex-col items-center justify-center p-6">
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </motion.div>
  );
};
