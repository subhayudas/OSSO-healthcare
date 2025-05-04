"use client";

import { useSectionScroll } from "@/hooks/use-section-scroll";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { coreValues } from "@/constants/homepage-data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Animation configuration - matching the Hero Section
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Define a type for the layout prop
type LayoutType = "carousel" | "grid" | "row";

export default function CoreValuesSection() {
  const { ref } = useSectionScroll("core-values");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  // Core Value Card Component - reused across all layouts
  const CoreValueCard = ({
    value,
    index,
    layout,
  }: {
    value: (typeof coreValues)[0];
    index: number;
    layout: LayoutType;
  }) => {
    // Different classes based on layout type
    const cardClasses: Record<LayoutType, string> = {
      carousel: "h-full",
      grid: "h-full",
      row: "h-full",
    };

    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate={animationState}
        transition={{ ...transition, delay: 0.3 + index * 0.1 }}
        className={`relative bg-white/10 rounded-2xl md:shadow-2xl backdrop-blur-md border md:border-white/30 border-neutral-600/30 items-center justify-center text-center text-gray-800 font-semibold flex p-6 sm:p-8 md:p-10 flex-col ${cardClasses[layout]}`}
      >
        <div className="mb-6 text-indigo-600 text-2xl">{value.icon}</div>
        <h4 className="text-xl md:text-2xl font-semibold text-main mb-2 capitalize transition-all duration-500">
          {value.title}
        </h4>
        <p className="text-sm md:text-md font-normal text-gray-500 transition-all duration-500 leading-5">
          {value.description}
        </p>
      </motion.div>
    );
  };

  // Mobile Carousel Layout (max-sm)
  const CarouselLayout = () => (
    <div className="md:hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {coreValues.map((value, index) => (
            <CarouselItem key={index} className="p-1">
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="p-0">
                  <CoreValueCard
                    value={value}
                    index={index}
                    layout="carousel"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="static mr-2 transform-none" />
          <CarouselNext className="static ml-2 transform-none" />
        </div>
      </Carousel>
    </div>
  );

  // Tablet Grid Layout (md to max-lg)
  const GridLayout = () => (
    <div className="hidden md:grid xl:hidden grid-cols-2 gap-8">
      {coreValues.map((value, index) => (
        <CoreValueCard key={index} value={value} index={index} layout="grid" />
      ))}
    </div>
  );

  // Desktop Row Layout (xl+)
  const RowLayout = () => (
    <div className="hidden xl:grid xl:grid-cols-4 gap-6">
      {coreValues.map((value, index) => (
        <CoreValueCard key={index} value={value} index={index} layout="row" />
      ))}
    </div>
  );

  return (
    <section ref={ref} className="w-full py-[10rem] bg-[#EEF2FF]">
      <div className="container mx-auto flex flex-col max-w-sm md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <div
          ref={animationRef}
          className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-main font-urbanist font-urban"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.1 }}
          >
            Our Core Values
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            variants={variants}
            initial="hidden"
            animate={animationState}
            transition={{ ...transition, delay: 0.3 }}
          >
            These principles guide every solution we deliver—from AI-driven
            insights to on-the-ground wellness initiatives.
          </motion.p>
        </div>

        {/* Responsive Layouts */}
        <CarouselLayout />
        <GridLayout />
        <RowLayout />
      </div>
    </section>
  );
}
