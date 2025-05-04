"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TestimonialMarquee } from "@/components/sections/home/testimonial-marquee";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function TestimonialsSection() {
  const { ref } = useSectionScroll("testimonials");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section
      ref={ref}
      className="bg-[#EEF2FF] -mt-32 flex justify-center items-center mx-auto"
    >
      <div className="relative overflow-hidden text-center flex flex-col items-center bg-[#EEF2FF] ">
        <div ref={animationRef} className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Reviews from our Clients
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.3 }}
          >
            Hear what our clients have to say about us. We are committed to
            improving the healthcare industry through our innovative solutions
            and services.
          </motion.p>
        </div>

        {/* Pass animation props to the TestimonialMarquee component */}
        <TestimonialMarquee animate={true} inView={isInView} />
      </div>
    </section>
  );
}
