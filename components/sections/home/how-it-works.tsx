"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import StackedCards from "@/components/sections/home/work-flow-card";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function HowItWorksSection() {
  const { ref } = useSectionScroll("how-it-works");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });
  const [initialState, setInitialState] = useState("hidden");

  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);

  const stackedCardsAnimationProps = {
    initial: variants.hidden,
    animate: initialState,
    variants: variants,
    transition: { ...transition, delay: 0.3 },
  };

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative"
    >
      <div
        ref={animationRef}
        className="flex flex-col container py-[10rem] max-w-7xl lg:px-[6rem]"
      >
        <motion.div
          className="max-w-6xl mb-10 px-[3rem]"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-start text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban">
            OSSO Process Work Flow
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-8 max-w-3xl">
            At OSSO, we incorporate the use of various analytical tools to
            read, compile, extract, and visualize clients historic medical
            report, for making efficient health decisions.
          </p>
        </motion.div>

        <div className="mb-10 mx-auto flex flex-col justify-center items-center">
          <StackedCards animationProps={stackedCardsAnimationProps} />
        </div>
      </div>
    </section>
  );
}
