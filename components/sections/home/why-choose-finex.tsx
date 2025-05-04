"use client";
import React, { useRef } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { useSectionScroll } from "@/hooks/use-section-scroll";
import { motion, useInView } from "framer-motion";
import { whyChooseOsso } from "@/constants/homepage-data";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export function WhyChooseFinexSection() {
  const { ref } = useSectionScroll("why-choose-osso");
  const animationRef = useRef(null);
  const stickyScrollRef = useRef(null);

  // Set up two separate useInView instances for better control
  const isHeaderInView = useInView(animationRef, {
    once: true,
    amount: 0.5,
  });

  const isStickyScrollInView = useInView(stickyScrollRef, {
    once: true,
    amount: 0.2,
  });

  // Set animation states based on view
  const headerAnimationState = isHeaderInView ? "visible" : "hidden";

  return (
    <section
      id="why-choose-osso"
      ref={ref}
      className="flex flex-col pb-[10rem]"
    >
      <div
        ref={animationRef}
        className="flex flex-col lg:flex-row container relative max-w-7xl px-[3rem] lg:px-[6rem]"
      >
        <motion.div
          className="container max-w-6xl"
          initial="hidden"
          animate={headerAnimationState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-start text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban">
            Why Choose OSSO?
          </h2>
          <p className="text-gray-600 text-lg font-medium max-w-3xl">
            Here are some of the key features that set us apart from the rest:
          </p>
        </motion.div>
      </div>

      {/* Add position-relative to ensure proper stacking context */}
      <div
        ref={stickyScrollRef}
        className="w-full py-4 relative overflow-visible"
      >
        {/* Sticky scroll with higher z-index */}
        <div className="relative z-10">
          <div className="h-64 w-64 bg-pink-400/20 absolute top-[50%] right-[5%] rounded-full" />

          {/* Pass animation props to StickyScroll */}
          <StickyScroll
            content={whyChooseOsso}
            animate={true}
            inView={isStickyScrollInView}
          />
        </div>
      </div>
    </section>
  );
}
