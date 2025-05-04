"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useSectionScroll } from "@/hooks/use-section-scroll";
import Image from "next/image";

// Animation configuration
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// Journey steps data
const journeySteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Meet with our specialists for a comprehensive evaluation of your condition and discussion of treatment options.",
    icon: "/images/consultation.svg",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "Personalized Treatment Plan",
    description: "Receive a customized care plan tailored to your specific needs, goals, and medical history.",
    icon: "/images/treatment-plan.svg",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    title: "Advanced Treatment",
    description: "Benefit from state-of-the-art surgical techniques, non-surgical interventions, or rehabilitation therapies.",
    icon: "/images/treatment.svg",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    id: 4,
    title: "Recovery & Rehabilitation",
    description: "Follow a structured rehabilitation program designed to optimize your recovery and restore function.",
    icon: "/images/rehabilitation.svg",
    color: "from-green-400 to-green-600",
  },
  {
    id: 5,
    title: "Ongoing Support",
    description: "Receive continuous care and monitoring to ensure long-term success and prevent future issues.",
    icon: "/images/support.svg",
    color: "from-teal-400 to-teal-600",
  },
];

export default function PatientJourneySection() {
  const { ref } = useSectionScroll("patient-journey");
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Set animation state based on view
  const animationState = isInView ? "visible" : "hidden";

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      id="patient-journey"
      ref={ref}
      className="flex justify-center items-center bg-gradient-to-b from-blue-50/50 to-indigo-50/50 relative py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute w-full h-full top-0 left-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "url('/images/grid-pattern.svg')",
          backgroundSize: "cover",
          y: backgroundY
        }}
      />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-40 h-40 opacity-10"
        animate={{
          rotate: 360,
          transition: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[5%] w-32 h-32 opacity-10"
        animate={{
          rotate: -360,
          transition: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" strokeDasharray="15 5" />
        </svg>
      </motion.div>

      <motion.div
        ref={animationRef}
        className="container mx-auto px-4 relative z-10"
        style={{ opacity: opacityValue }}
      >
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={animationState}
          variants={variants}
          transition={transition}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            Your Journey to Recovery
          </h2>
          <p className="text-gray-600 text-lg">
            At OSSO, we guide you through every step of your orthopaedic care journey,
            ensuring a smooth path to recovery and improved quality of life.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-purple-500 rounded-full hidden md:block"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Journey steps */}
          <div className="space-y-24 relative">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}
                initial="hidden"
                animate={animationState}
                variants={variants}
                transition={{ ...transition, delay: 0.2 + index * 0.1 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white shadow-lg border-2 border-blue-500 z-10 hidden md:block`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
                  style={{ top: `calc(${index * 24}rem + 2rem)` }}
                />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl`}>
                        {step.id}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>

                {/* Empty space for timeline in middle */}
                <div className="hidden md:block w-2/12"></div>

                {/* Image/Icon */}
                <motion.div
                  className="w-full md:w-5/12 flex justify-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-40 h-40 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-70"></div>
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src={step.icon || "/images/placeholder.svg"}
                        alt={step.title}
                        width={80}
                        height={80}
                        className="w-16 h-16 object-contain"
                        onError={(e) => {
                          // Fallback for missing icons
                          e.currentTarget.src = "/images/placeholder.svg";
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
