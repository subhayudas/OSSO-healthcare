"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { outlinedServices } from "@/constants/homepage-data";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ServicesSection() {
  const { ref } = useSectionScroll("services");
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
      id="services"
      ref={ref}
      className="flex justify-center items-center"
    >
      <div
        ref={animationRef}
        className="flex flex-col container bg-pink-300/10 relative rounded-[5rem] py-[10rem] max-w-7xl mx-auto px-[3rem] lg:px-[6rem] mb-[10rem]"
      >
        <motion.div
          className="container max-w-6xl mb-10"
          initial="hidden"
          animate={initialState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-start text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban">
            OSSO Healthcare Innovations
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-8 max-w-3xl">
            We deliver cutting-edge solutions that enhance patient outcomes,
            protect data, and ensure financial sustainability. Explore our core
            services that are driving the future of healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start gap-10">
          <motion.div
            className="relative bg-white/30 backdrop-blur-lg rounded-3xl shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff70] p-10 flex flex-col items-center text-center border border-white/40"
            initial="hidden"
            animate={initialState}
            variants={variants}
            transition={{ ...transition, delay: 0.2 }}
          >
            <div className="flex flex-col items-start text-start mb-14">
              <h3 className="text-2xl font-semibold text-main mb-4">
                Healthcare Data Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Turn complex healthcare data into actionable insights to
                optimize care, cut costs, and drive smarter decisions.
              </p>
            </div>
            <Image
              src="/images/health-record.jpeg"
              alt="Healthcare Data Analytics"
              className="w-full h-52 object-cover rounded-xl"
              width={100}
              height={70}
            />

            <div className="flex justify-between text-start mt-14 space-x-20">
              <h2 className="text-4xl font-semibold text-main">90%</h2>
              <p className="text-gray-600 text-sm">
                healthcare leaders believe AI will improve good health
                decisions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative bg-white/30 backdrop-blur-lg rounded-3xl shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff70] p-10 flex flex-col items-center text-center border border-white/40"
            initial="hidden"
            animate={initialState}
            variants={variants}
            transition={{ ...transition, delay: 0.4 }}
          >
            <Image
              src="/images/policy-ai.png"
              alt="Healthcare Data Analytics"
              className="w-full h-52 object-cover rounded-xl"
              width={100}
              height={70}
            />
            <div className="flex flex-col items-start text-start mt-14">
              <h3 className="text-2xl font-semibold text-main mb-4">
                {" "}
                E-Payment & Fintech Solutions for Healthcare
              </h3>
              <p className="text-gray-600 text-sm">
                Streamline healthcare payments, prevent fraud, and improve
                financial efficiency with digital-first solutions.
              </p>
            </div>
          </motion.div>

          <div className="max-xl:row-span-2 max-xl:col-span-full space-y-4">
            <motion.div
              className="relative p-16 xl:p-10 flex flex-col text-center bg-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/50"
              initial="hidden"
              animate={initialState}
              variants={variants}
              transition={{ ...transition, delay: 0.6 }}
            >
              <div className="flex flex-col items-start text-start mt-14">
                <h3 className="text-2xl font-semibold text-main mb-4">
                  Cybersecurity Solutions for Digital Health Systems
                </h3>
                <p className="text-gray-600 text-sm">
                  Protect sensitive health data and ensure full compliance with
                  robust, AI-powered cybersecurity frameworks.
                </p>
              </div>
              <div className="flex flex-col mt-10 space-x-16">
                <h5 className="text-xl font-semibold justify-start flex mb-10">
                  {" "}
                  Learn More
                </h5>
                <div className="flex flex-wrap gap-4 justify-start">
                  {outlinedServices.map((button) => (
                    <div
                      key={button.slug}
                      className="inline-flex text-center justify-center items-center gap-2 rounded-full px-3 py-1.5 text-sm/6 font-semibold text-gray-500 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-hover:text-white data-open:bg-gray-700 max-w-full border border-gray-400 "
                    >
                      {button.label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={initialState}
              variants={variants}
              transition={{ ...transition, delay: 0.8 }}
              className="flex flex-col items-center justify-center mx-auto"
            >
              <Button
                className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-md p-6 md:text-lg md:p-8 drop-shadow-xl drop-shadow-indigo-100 shadow-xl transition duration-300 w-full max-w-[50%] hover:scale-110 cursor-pointer"
                variant={"outline"}
                onClick={() => window.open("/services", "_self")}
              >
                Explore More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
