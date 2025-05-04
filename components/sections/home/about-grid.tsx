"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { aboutSections } from "@/constants/homepage-data";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutGrid() {
  const router = useRouter();

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <BentoGrid className="lg:grid-rows-3 pb-10 lg:pb-32">
      {aboutSections.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
      <div className="max-lg:hidden flex justify-center items-center lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4">
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: true }}
        >
          <Button
            className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-lg p-8 shadow-xl transition duration-300 w-[15rem] overflow-hidden group z-10"
            variant={"default"}
            onClick={() => router.push(`/company`)}
          >
            <span className="relative z-10">Learn More</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 z-0"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-blue-400 to-purple-500 opacity-70 group-hover:opacity-100 transition duration-300"
              style={{ zIndex: -1 }}
            />
          </Button>
        </motion.div>
      </div>
    </BentoGrid>
  );
}
