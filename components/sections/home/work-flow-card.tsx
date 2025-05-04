"use client";

import React from "react";
import { CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the card data structure
interface Card {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  color: string;
}
interface AnimationProps {
  initial: {
    filter: string;
    transform: string;
    opacity: number;
  };
  animate: string;
  variants: {
    hidden: {
      filter: string;
      transform: string;
      opacity: number;
    };
    visible: {
      filter: string;
      transform: string;
      opacity: number;
    };
  };
  transition: {
    duration: number;
    ease: number[];
    delay?: number;
  };
}

interface StackedCardsProps {
  animationProps: AnimationProps;
}

// Dummy data for the cards
const cardData: Card[] = [
  {
    id: 1,
    number: "01",
    title: "Data Collection & Integration",
    description:
      "Aggregate patient historical data from diverse sources while ensuring compliance with HIPAA, PCI DSS, and GDPR standards.",
    image: "/images/data-collection.webp",
    color: "bg-blue-400/10",
  },
  {
    id: 2,
    number: "02",
    title: "Advanced Data Analysis",
    description:
      "Employ analytical tools to interpret and visualize health records, identifying trends and patterns to inform decision-making.",
    image: "/images/analytics-dashboard.webp",
    color: "bg-white",
  },
  {
    id: 3,
    number: "03",
    title: "Optimize Continuously",
    description:
      "Our adaptive learning ensures that it continuously refines its models, improving accuracy and relevance over time to deliver better results.",
    image: "/images/continous.gif",
    color: "bg-blue-400/10",
  },
  {
    id: 4,
    number: "04",
    title: "Implementation & Training",
    description:
      "Deploy solutions within healthcare settings and provide comprehensive training to staff for effective utilization.",
    image: "/images/planning.png",
    color: "bg-pink-100/30",
  },
  {
    id: 5,
    number: "05",
    title: "Continuous Monitoring",
    description:
      "Monitor outcomes to assess effectiveness and refine strategies based on feedback and evolving healthcare landscapes.",
    image: "/images/monitor.gif",
    color: "bg-white",
  },
];

// Custom CSS variables for the component
const cssVariables = {
  "--cards": cardData.length,
  "--cardHeight": "500px",
  "--cardTopPadding": "1.5em",
  "--cardMargin": "4vw",
} as CSSProperties;

export default function StackedCards({ animationProps }: StackedCardsProps) {
  return (
    <motion.div className="max-w-7xl w-full pb-20" {...(animationProps || {})}>
      <div className="container mx-auto px-4">
        <ul
          className="list-none p-0 grid grid-cols-1 gap-16 mb-16"
          style={cssVariables}
        >
          {cardData.map((card, index) => (
            <li
              key={card.id}
              className="sticky top-10"
              style={{
                paddingTop: `calc(${index + 1} * var(--cardTopPadding))`,
                zIndex: cardData.length + index,
              }}
            >
              <div className="backdrop-blur-[10rem] backdrop-filter rounded-3xl overflow-hidden drop-shadow-[inset_8px_8px_40px_#d1d9e6,inset_-8px_-8px_40px_#ffffff70] border border-white/20]">
                <div
                  className={`${card.color} bg-opacity-10 rounded-3xl overflow-hidden border border-white/20 h-[500px] transition-all duration-500`}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-2/5 h-full flex items-center justify-center">
                      <div className="h-full relative p-8 max-sm:pb-0 rounded-lg overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={300}
                          height={300}
                          className="size-[200px] md:w-full md:h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-3/5  p-14 max-sm:pt-0 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-main opacity-80">
                          {card.number}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-500">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-xl text-opacity-90">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ height: "calc(var(--cards) * var(--cardHeight))" }}></div>
      </div>
    </motion.div>
  );
}
