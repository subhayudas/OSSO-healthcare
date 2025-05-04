// components/Footer/FooterNavigation.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerNavLinks } from "@/constants/footerData";

const FooterNavigation: React.FC = () => {
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

  const linkVariants = {
    initial: { x: 0, color: "#6B7280" },
    hover: {
      x: 5,
      color: "#4F46E5",
      transition: { duration: 0.2 }
    }
  };

  const categoryVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      variants={containerVariants}
    >
      {footerNavLinks.map((category, index) => (
        <motion.div
          key={category.title}
          className="space-y-3"
          variants={itemVariants}
          custom={index}
        >
          <motion.h3
            className="text-sm font-medium text-gray-900 px-3 py-1.5 inline-block rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50"
            style={{
              boxShadow: "2px 2px 5px #d1d1d1, -2px -2px 5px #ffffff",
            }}
            variants={categoryVariants}
            whileHover="hover"
          >
            {category.title}
          </motion.h3>
          <motion.ul
            className="space-y-2"
            variants={containerVariants}
          >
            {category.links.map((link, linkIndex) => (
              <motion.li
                key={link.title}
                variants={itemVariants}
                custom={linkIndex}
              >
                <motion.div
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-300 flex items-center"
                  >
                    <motion.span
                      className="mr-1 opacity-0"
                      variants={{
                        initial: { opacity: 0, x: -5 },
                        hover: { opacity: 1, x: 0 }
                      }}
                    >
                      →
                    </motion.span>
                    {link.title}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default FooterNavigation;
