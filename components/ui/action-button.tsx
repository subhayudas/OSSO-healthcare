// components/ui/ActionButton.tsx
"use client";

import { FC, ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ActionButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ActionButtonSize = "sm" | "md" | "lg" | "xl";

interface ActionButtonProps {
  children: ReactNode;
  href?: string;
  sectionId?: string;
  variant?: ActionButtonVariant;
  size?: ActionButtonSize;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  ariaLabel?: string;
}

const ActionButton: FC<ActionButtonProps> = ({
  children,
  href,
  sectionId,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  ariaLabel,
}) => {
  // Size classes
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5 rounded-md",
    md: "text-base px-4 py-2 rounded-lg",
    lg: "text-lg px-6 py-2.5 rounded-lg",
    xl: "text-xl px-8 py-3 rounded-xl",
  };

  // Variant classes
  const variantClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md",
    secondary: "bg-blue-500 hover:bg-blue-600 text-white shadow-md",
    outline:
      "bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    ghost: "bg-transparent hover:bg-indigo-50 text-indigo-600",
  };

  // Disabled classes
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  // Full width class
  const widthClass = fullWidth ? "w-full" : "";

  // Combined classes
  const buttonClasses = `
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${widthClass}
    font-medium transition-all duration-200 flex items-center justify-center gap-2
    ${className}
  `;

  // Handle scroll to section
  const handleClick = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (sectionId) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  // Animation variants for pulsating effect
  const pulseAnimation = {
    hover: {
      scale: [1, 1.05, 1.03],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  // Render as Link if href is provided
  if (href && !disabled) {
    return (
      <Link href={href} passHref>
        <motion.a
          className={buttonClasses}
          onClick={sectionId ? handleClick : onClick}
          whileHover="hover"
          variants={pulseAnimation}
          aria-label={
            ariaLabel || (typeof children === "string" ? children : undefined)
          }
        >
          {icon && <span className="button-icon">{icon}</span>}
          {children}
        </motion.a>
      </Link>
    );
  }

  // Render as button
  return (
    <motion.button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      whileHover="hover"
      variants={pulseAnimation}
      aria-label={ariaLabel}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default ActionButton;
