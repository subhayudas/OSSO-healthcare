"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Ripple } from "@/components/ui/ripple";
import FaqItem from "@/components/sections/home/faq-item";
import { faqData } from "@/constants/homepage-data";
import { Button } from "@/components/ui/button";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function FAQSection() {
  const { ref } = useSectionScroll("faq");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, margin: "-100px" });
  const [initialState, setInitialState] = useState("hidden");

  useEffect(() => {
    if (isInView) {
      setInitialState("visible");
    }
  }, [isInView]);
  return (
    <section
      id="faq"
      ref={ref}
      className="flex justify-center items-center bg-indigo-50 relative pb-[10rem] pt-16"
    >
      <div
        ref={animationRef}
        className="flex flex-col xl:flex-row container relative pt-[10rem] max-w-3xl xl:max-w-7xl xl:px-[6rem]"
      >
        <div className="absolute inset-0 h-[500px] mask-y-from-80% mask-y-to-90% opacity-60 w-full overflow-hidden">
          <Ripple />
        </div>
        <div className="flex flex-col xl:flex-row gap-10 justify-between">
          <motion.div
            className="container mb-10 xl:w-[50%] flex flex-col items-center xl:items-start mx-auto"
            initial="hidden"
            animate={initialState}
            variants={variants}
            transition={transition}
          >
            <h2 className="text-start text-3xl md:text-5xl  xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-xl font-medium mb-8 max-w-3xl">
              Get quick answers to common questions about our healthcare
              consulting, analytics, and digital transformation solutions.
              Whether you&apos;re a hospital, insurer, or government agency,
              we&#39;re here to guide your journey to smarter healthcare.
            </p>
            <Button
              className="bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white  text-md p-6 md:text-xl md:p-8 hover:drop-shadow-2xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
              variant={"outline"}
              onClick={() => window.open("/contact", "_self")}
            >
              Get in touch
            </Button>
          </motion.div>

          <div className="mb-10 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-6 max-w-full items-stretch w-full">
              {faqData.map((item, index) => (
                <FaqItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                  initialState={initialState}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
