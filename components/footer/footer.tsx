// components/Footer/Footer.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { companySlogan } from "@/constants/footerData";
import FooterNavigation from "@/components/footer/footer-navigation";
import FooterLogo from "@/components/footer/footer-logo";
import FooterSocial from "@/components/footer/footer-social";
import StatusIndicator from "@/components/footer/status-indicatior";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

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
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 0.4,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const linkVariants = {
    initial: { y: 0, color: "#6B7280" },
    hover: {
      y: -3,
      color: "#111827",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer
      ref={footerRef}
      className="bg-gradient-to-b from-blue-50/50 to-indigo-50/50 w-full py-12 px-6 md:px-12 lg:px-24 overflow-hidden rounded-t-[5rem] relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-40 h-40 opacity-5"
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
        className="absolute bottom-[10%] left-[5%] w-32 h-32 opacity-5"
        animate={{
          rotate: -360,
          transition: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" strokeDasharray="15 5" />
        </svg>
      </motion.div>

      {/* Giant Logo Text with Neumorphic Effect */}
      <motion.div
        className="w-full mb-16"
        variants={itemVariants}
      >
        <motion.h1
          className="text-center text-7xl md:text-9xl lg:text-[300px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-purple-300 opacity-40"
          style={{
            textShadow:
              "3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.8)",
            letterSpacing: "-0.05em",
          }}
          variants={logoVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          OSSO
        </motion.h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={itemVariants}
      >
        {/* Left Column: Logo and Social Links */}
        <motion.div
          className="flex flex-col justify-between h-full"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <FooterLogo />
            <motion.p
              className="text-gray-600 mt-4"
              variants={itemVariants}
            >
              {companySlogan}
            </motion.p>
          </motion.div>
          <FooterSocial />
        </motion.div>

        {/* Right Column: Navigation Links and Copyright */}
        <motion.div
          className="flex flex-col justify-between h-full"
          variants={itemVariants}
        >
          <FooterNavigation />
        </motion.div>
      </motion.div>

      {/* Systems Status Indicator */}
      <motion.div
        className="flex flex-wrap justify-between items-center mt-16 pt-8 border-t border-gray-200"
        variants={itemVariants}
      >
        <StatusIndicator />
        <motion.div
          className="flex items-center justify-center space-x-6 text-sm text-gray-500"
          variants={itemVariants}
        >
          <motion.p
            className="text-sm text-gray-500"
            variants={itemVariants}
          >
            © {currentYear} <span className="font-semibold">OSSO Orthopaedic Clinic</span>.
            All rights reserved.
          </motion.p>
          <motion.a
            href="/privacy"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            className="transition-colors duration-300"
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="/terms"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            className="transition-colors duration-300"
          >
            Terms of Use
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Newsletter Subscription */}
      <motion.div
        className="mt-16 max-w-md mx-auto"
        variants={itemVariants}
      >
        <motion.h3
          className="text-xl font-bold text-gray-800 mb-4 text-center"
          variants={itemVariants}
        >
          Subscribe to Our Newsletter
        </motion.h3>
        <motion.p
          className="text-gray-600 mb-6 text-center"
          variants={itemVariants}
        >
          Stay updated with the latest orthopaedic care information and clinic news.
        </motion.p>
        <motion.form
          className="flex flex-col sm:flex-row gap-2"
          variants={itemVariants}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          />
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
