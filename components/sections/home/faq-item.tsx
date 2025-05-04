import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface FaqItemProps {
  question: string;
  answer: string;
  id: number;
  active?: boolean;
  index?: number;
  initialState?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  id,
  active = false,
  index = 0,
  initialState = "visible",
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  const variants = {
    hidden: { filter: "blur(5px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  return (
    <motion.div
      className={clsx(
        "py-2 px-4 rounded-xl transition-all duration-300 cursor-pointer",
        accordionOpen
          ? "bg-indigo-50 shadow-inner"
          : "bg-indigo-50 shadow-[5px_5px_15px_rgba(136,146,176,0.15),-5px_-5px_15px_rgba(255,255,255,0.6)]",
      )}
      onClick={() => setAccordionOpen(!accordionOpen)}
      aria-expanded={accordionOpen}
      aria-controls={`faq-item-${id}`}
      initial="hidden"
      animate={initialState}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3 + index * 0.1,
      }}
    >
      <h5>
        <button
          className={clsx(
            "text-left text-[20px] font-semibold flex items-center justify-between w-full py-3 px-4 rounded-md transition-all duration-300 cursor-pointer",
            accordionOpen
              ? "text-indigo-700"
              : "text-main hover:text-indigo-400/60",
          )}
        >
          <span>{question}</span>
          <div
            className={clsx(
              "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
              accordionOpen
                ? "bg-indigo-100 shadow-inner text-indigo-700"
                : "bg-indigo-50 shadow-[2px_2px_5px_rgba(136,146,176,0.2),-2px_-2px_5px_rgba(255,255,255,0.7)] text-main hover:text-indigo-600",
            )}
          >
            <svg
              className={`shrink-0 transition-transform duration-300 ${
                accordionOpen ? "rotate-180" : "rotate-0"
              }`}
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`origin-center ${accordionOpen ? "fill-indigo-700" : "fill-neutral-700"}`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`origin-center rotate-90 ${
                  accordionOpen ? "opacity-0" : "opacity-100 fill-neutral-700"
                }`}
              />
            </svg>
          </div>
        </button>
      </h5>
      <div
        id={`faq-item-${id}`}
        role="region"
        aria-labelledby={`faq-title-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 rounded-b-md flex flex-col items-start">
          <p className="leading-relaxed mb-6 text-neutral-600 text-start">
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FaqItem;
