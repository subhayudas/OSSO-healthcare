"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
  visible: {
    filter: "blur(0px)",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Custom input component with neuomorphic styling
const FormInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  textArea = false,
  className,
}: {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  textArea?: boolean;
  className?: string;
}) => {
  const InputElement = textArea ? "textarea" : "input";

  return (
    <motion.div className="mb-6" variants={itemVariants}>
      <label
        htmlFor={name}
        className="block mb-2 text-base font-medium text-indigo-700 dark:text-indigo-300"
      >
        {label}
      </label>
      <div
        className={cn(
          "relative",
          "rounded-xl overflow-hidden",
          // Neumorphic outer shadow effect
          "shadow-[6px_6px_12px_0px_rgba(163,177,230,0.35),-6px_-6px_12px_0px_rgba(255,255,255,0.7)]",
          "dark:shadow-[5px_5px_10px_0px_rgba(8,12,24,0.6),-5px_-5px_10px_0px_rgba(38,43,60,0.3)]",
          "border border-gray-100/50 dark:border-gray-700/30",
        )}
      >
        {/* Inner shadow for depth perception */}
        <div className="inset-0 absolute pointer-events-none rounded-xl bg-gradient-to-br from-white/5 to-transparent"></div>

        <InputElement
          type={type || "text"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "w-full px-5 py-4 bg-indigo-50/40 backdrop-blur-sm",
            "text-indigo-900 placeholder-indigo-400/70",
            "outline-none ring-0 border-0",
            "dark:bg-indigo-900/10 dark:text-indigo-100 dark:placeholder-indigo-300/40",
            textArea ? "h-32 resize-none" : "h-12",
            "transition-all duration-300 ease-in-out",
            "focus:ring-2 focus:ring-indigo-400/30",
            className,
          )}
        />
      </div>
    </motion.div>
  );
};

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.2 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Handle actual form submission logic here
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#EEF2FF] to-[#E5EAFF] dark:from-gray-900 dark:to-gray-800">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-indigo-300/10 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[8%] w-80 h-80 rounded-full bg-blue-300/10 blur-3xl"></div>
        <div className="absolute bottom-[40%] left-[30%] w-40 h-40 rounded-full bg-purple-300/10 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-6 z-10 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Header and description */}
          <motion.div
            className="w-full md:w-2/5 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          {/* Contact form with glassmorphism */}
          <motion.div
            ref={formRef}
            className="w-full md:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className={cn(
                "relative rounded-2xl overflow-hidden p-8",
                // Glassmorphism effects
                "bg-white/20 backdrop-blur-lg",
                "border border-white/30",
                "shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]",
                // Dark mode
                "dark:bg-gray-800/30 dark:border-gray-700/30",
              )}
              variants={itemVariants}
            >
              {/* Glassmorphism highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>

              {submitted ? (
                <motion.div
                  className="py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-indigo-600/80 dark:text-indigo-400">
                    Your message has been sent successfully. We&#39;ll get back
                    to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <FormInput
                    label="Name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <FormInput
                    label="Message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    textArea={true}
                  />

                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full relative mt-4 px-8 py-4 rounded-xl font-medium text-base",
                        "text-white bg-indigo-600",
                        "shadow-[0_10px_20px_-10px_rgba(79,70,229,0.4)]",
                        "transition-all duration-300",
                        "hover:bg-indigo-700 hover:shadow-[0_14px_24px_-10px_rgba(79,70,229,0.5)]",
                        // Neumorphic touch
                        "border border-indigo-500/80",
                        // Dark mode
                        "dark:bg-indigo-600 dark:border-indigo-500/50 dark:hover:bg-indigo-700",
                        isSubmitting ? "opacity-80 cursor-not-allowed" : "",
                      )}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      {/* Button inner highlight */}
                      <span className="absolute inset-0 rounded-xl overflow-hidden">
                        <span className="absolute top-0 left-0 right-0 h-1/2 bg-white/10"></span>
                      </span>
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
