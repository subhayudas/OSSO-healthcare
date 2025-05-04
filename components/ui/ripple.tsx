"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className,
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = i * 0.3;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;
        const duration = 3 + i * 0.2;

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full border bg-gradient-to-r from-blue-400/20 to-purple-400/20 shadow-xl`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderStyle,
              borderWidth: "1px",
              borderColor: `rgba(79, 70, 229, ${borderOpacity / 100})`,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            initial={{
              scale: 0.5,
              opacity: opacity * 1.5
            }}
            animate={{
              scale: 1.2,
              opacity: 0
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: animationDelay,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
