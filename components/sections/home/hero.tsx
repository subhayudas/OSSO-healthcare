"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionScroll } from "@/hooks/use-section-scroll";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

import Image from "next/image";
import { heroButtons } from "@/constants/homepage-data";
import { CgPill } from "react-icons/cg";
import { GiWaterDrop } from "react-icons/gi";
import { Button } from "@/components/ui/button";

// Animation configuration
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function HomeSection() {
  const { ref } = useSectionScroll("home");

  // State to track if animation has played
  const [, setHasAnimated] = useState(false);

  // Set initial animation state based on whether we're in the first render
  const [initialState, setInitialState] = useState("hidden");

  useEffect(() => {
    // Set animation to play once on component mount
    setInitialState("visible");
    setHasAnimated(true);
  }, []);

  // Split headline text into words for word-by-word animation
  const headlineText = "Specialized Orthopaedic Care. Restored Mobility.";
  const words = headlineText.split(" ");

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="flex justify-center items-center bg-pink-50/20 relative pt-[10rem]"
    >
      {/* Blur gradient reflections */}
      <div className="blur-[12rem] h-52 w-52 bg-pink-200 absolute top-[20%] right-[5%] " />
      <div className="blur-[12rem] h-52 w-52 bg-purple-500 absolute top-[60%] left-[5%] " />

      {/*Radial round ball*/}
      <motion.div
        variants={variants}
        transition={transition}
        className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900/15 to-75% absolute top-52 right-[10%]"
      ></motion.div>

      <motion.div
        initial="hidden"
        animate={initialState}
        transition={{ staggerChildren: 0.04 }}
        className="size-18 rounded-full bg-radial-[at_50%_75%] from-blue-200 via-purple-400/15 to-purple-900/10 to-90% absolute  top-[30rem] md:top-96 left-[10%]"
      ></motion.div>

      <motion.div
        className="max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col relative"
        initial="hidden"
        animate={initialState}
        transition={{ staggerChildren: 0.04 }}
      >
        <motion.div variants={variants} transition={transition}>
          <div className="bg-blue-200/10 border-2 border-white drop-shadow-2xl rounded-xl border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium text-gray-700 backdrop-blur-[5rem] p-2 gap-2 items-center ">
            <span className="bg-white p-2 rounded-md w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
              <IoShieldCheckmarkSharp className="text-green-600 size-[20px]" />
            </span>
            <p className="text-gray-600 font-medium">
              Your Orthopaedic Care Specialists
            </p>
          </div>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] leading-none font-black tracking-tight mb-6 text-main pt-8 text-shadow-xl font-urbanist">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>

        <motion.p
          className="text-gray-600 text-lg font-medium mb-8 max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center"
          transition={transition}
          variants={variants}
        >
          At OSSO, we provide specialized orthopaedic care and rehabilitation
          services to help you regain mobility and improve quality of life.
        </motion.p>

        <motion.div transition={transition} variants={variants}>
          <Button
            className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-md p-6 md:text-lg md:p-8 drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 md:w-[15rem] hover:scale-110 cursor-pointer"
            variant={"outline"}
          >
            Explore More
          </Button>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mt-12 relative">
          {/* Glass Morphism with animations */}
          <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-5 left-[13%] " />
          <motion.div
            className="bg-blue-200/10 border-2 border-white drop-shadow-2xl rounded-xl border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium text-gray-700 backdrop-blur-[5rem] p-2 gap-2 items-center w-fit pr-16 absolute top-5 max-md:hidden lg:left-[10%] xl:-left-[20%] -translate-x-0.5"
            transition={{ ...transition, delay: 0.2 }}
            variants={variants}
          >
            <span className="bg-white p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
              <IoShieldCheckmarkSharp className="text-green-600 size-[20px]" />
            </span>
            <div className="flex flex-col items-start">
              <p className="text-gray-600 font-medium">Our clients rate us</p>
              <p className="text-gray-600 font-semibold">
                More than 100k reviews
              </p>
            </div>
          </motion.div>

          <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-10 left-[50%]" />

          <motion.div
            className="w-fit md:w-[30rem] z-10 absolute top-50 left-[10%] xl:left-[20%] bg-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/50 flex items-center text-gray-800 font-semibold mx-auto"
            transition={{ ...transition, delay: 0.6 }}
            variants={variants}
          >
            <div className="flex flex-col p-4 space-x-16">
              <div className="flex gap-4 pb-4 items-center justify-start">
                <span className="bg-gray-100 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
                  <CgPill className="text-blue-500/30 size-[20px]" />
                </span>
                <span className="bg-gray-100 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
                  <GiWaterDrop className="text-blue-500/30 size-[20px]" />
                </span>
                <p className="text-gray-600 font-semibold">
                  Specialized treatments
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-start">
                {heroButtons.map((button) => (
                  <div
                    key={button.slug}
                    className="inline-flex text-center justify-center items-center gap-2 rounded-full px-3 py-1.5 text-sm/6 font-semibold text-gray-500 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-hover:text-white data-open:bg-gray-700 border border-gray-400  basis-[30%] md:basis-[20%]"
                  >
                    {button.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-auto h-auto max-sm:hidden">
              <Image
                src="/images/doctor.webp"
                alt="Doctor Image"
                width={200}
                height={2000}
              />
            </div>
          </motion.div>

          <div className="blur-[3rem] h-20 w-20 bg-blue-500/30 absolute top-5 -right-[18%]" />
          <motion.div
            className="w-80 h-auto z-10 absolute top-5 max-xl:hidden xl:-right-[20%] -translate-x-0.5 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/30 items-center justify-center text-gray-800 font-semibold flex flex-col"
            transition={{ ...transition, delay: 0.6 }}
            variants={variants}
          >
            <div className="flex gap-4 pt-8 items-center justify-start">
              <span className="bg-gray-100 p-2 rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center ">
                <GiWaterDrop className="text-blue-500/30 size-[20px]" />
              </span>
              <p className="text-gray-600 font-semibold">
                Monitor your recovery progress
              </p>
            </div>
            <Image
              src="/images/line-chart.png"
              alt="Lines Triple"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-2xl hue-rotate-60"
            />
          </motion.div>
        </div>

        {/* Faded circular Background Decoration */}

        <div className="relative flex flex-col items-center justify-center mt-20 md:mt-30">
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="size-[600px] rounded-full bg-blue-400/10 mx-auto mask-b-from-20% mask-b-to-70% flex flex-col items-center justify-center "
          />
          <motion.img
            src="/images/hero-analysis-ai.png"
            alt="Hero  image"
            width={100}
            height={100}
            className="w-[350px] lg:w-[500px] h-auto absolute inset-0 -top-20 md:-top-40 left-1/2 -translate-x-1/2 object-cover mask-b-from-50% mask-b-to-100%"
            transition={{ ...transition, delay: 0.6 }}
            variants={variants}
          />
        </div>
      </motion.div>
    </section>
  );
}
