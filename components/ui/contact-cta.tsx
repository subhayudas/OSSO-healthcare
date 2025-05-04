"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import { useRouter } from "next/navigation";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function ContactCta() {
  const { ref } = useSectionScroll("contact");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });
  const router = useRouter();

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  return (
    <section ref={ref} className="w-full py-20 bg-[#EEF2FF]">
      <div className="container mx-auto px-4 relative">
        <div className="blur-[12rem] h-52 w-52 bg-blue-400/50 absolute top-[20%] right-[5%] " />
        <div className="blur-[12rem] h-52 w-52 bg-purple-500/50 absolute top-[60%] left-[5%] " />

        <div
          ref={animationRef}
          className="max-w-7xl mx-auto text-center mb-12 relative"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[85px] text-neutral-700 font-bold mb-4"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Try <AuroraText>OSSO</AuroraText> today
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mb-10"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.3 }}
          >
            We are here to help you with any questions or concerns you may have.
          </motion.p>

          <motion.div transition={transition} variants={variants}>
            <Button
              className="bg-[#EEF2FF] font-bold rounded-full text-neutral-600 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-55% hover:to-gray-500 hover:text-white text-lg p-8 drop-shadow-xl drop-shadow-blue-50 shadow-xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
              variant={"outline"}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
