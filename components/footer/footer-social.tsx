// components/Footer/FooterSocial.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/constants/footerData";

const FooterSocial: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, backgroundColor: "rgba(255, 255, 255, 0)" },
    hover: {
      scale: 1.2,
      backgroundColor: "rgba(79, 70, 229, 0.1)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div
      className="mt-8 lg:mt-0"
      variants={containerVariants}
    >
      <motion.div
        className="flex space-x-6"
        variants={containerVariants}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600"
            aria-label={`${social.name} profile`}
            variants={itemVariants}
            custom={index}
          >
            <motion.div
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50"
              style={{
                boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
              }}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              >
                <social.icon className="w-5 h-5 text-indigo-600" aria-hidden="true" />
              </motion.div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FooterSocial;
