"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "default";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonGlobalProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  target?: "_blank" | "_self";
  type?: "button" | "submit" | "reset";
}

const ButtonGlobal = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  fullWidth = false,
  disabled = false,
  target = "_self",
  type = "button",
}: ButtonGlobalProps) => {
  const buttonClasses = cn(
    // Base styles
    "relative inline-flex items-center justify-center",
    "font-bold uppercase tracking-wider",
    "transition-all duration-300",
    "border-0 cursor-pointer",
    "overflow-hidden",
    "text-shadow-sm",

    // Variant styles
    variant === "primary" && [
      "bg-[#A50905] hover:bg-[#DD0707] text-white",
      "hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] active:shadow-inner active:scale-[0.98]",
    ],
    variant === "secondary" && [
      "bg-blue-700 hover:bg-blue-600 text-white",
      "hover:shadow-[0_0_10px_rgba(0,120,255,0.3)] active:shadow-inner active:scale-[0.98]",
    ],
    variant === "default" && [
      "bg-gray-800 hover:bg-gray-700 text-white",
      "hover:shadow-[0_0_10px_rgba(100,100,100,0.3)] active:shadow-inner active:scale-[0.98]",
    ],

    // Size styles
    size === "sm" && "px-4 py-1.5 text-xs",
    size === "md" && "px-6 py-2 text-sm",
    size === "lg" && "px-8 py-2.5 text-base",

    // Width
    fullWidth && "w-full",

    // Disabled state
    disabled && "opacity-60 cursor-not-allowed hover:bg-opacity-100",

    // Custom class
    className
  );

  // If button has href, render as link
  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        target={target}
        rel={target === "_blank" ? "noreferrer noopener" : undefined}
        onClick={onClick}
      >
        <span className="z-10 relative">{children}</span>
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="z-10 relative">{children}</span>
    </button>
  );
};

export default ButtonGlobal;
