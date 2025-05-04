"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function TestimonialsSection() {
  const { ref } = useSectionScroll("services");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section ref={ref} className="w-full py-20 bg-[#EEF2FF]">
      <div className="container mx-auto px-4">
        <div ref={animationRef} className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-7xl font-bold mb-4"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Company
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-700"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.3 }}
          >
            Page is coming soon. We are working on it.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
