// AboutSection.js
"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useState, useEffect, useRef } from "react";
import AboutGrid from "@/components/sections/home/about-grid";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function AboutSection() {
  const router = useRouter();
  const { ref } = useSectionScroll("company");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });

  // State to track if animation has played
  const [initialState, setInitialState] = useState("hidden");

  // Set animation to visible when section comes into view
  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);

  return (
    <section
      id="about-us"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative pt-[10rem]"
    >
      <div
        ref={animationRef}
        className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-7xl"
      >
        <motion.div
          className="container mb-10 max-w-6xl"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-start text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban">
            About Us
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-8 max-w-2xl">
            At OSSO, we provide comprehensive orthopaedic care with a focus on
            personalized treatment plans, advanced surgical techniques, and
            effective rehabilitation programs.
          </p>
        </motion.div>

        <motion.div
          className="mb-10"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={{ ...transition, delay: 0.3 }}
        >
          <AboutGrid />
          <div className="flex lg:hidden justify-center items-center lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4 ">
            <Button
              className="text-md p-6 md:text-lg md:p-8 bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white text-lg hover:drop-shadow-2xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
              variant={"outline"}
              onClick={() => router.push(`/company`)}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
