"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Add gtag to Window interface
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: any) => void;
  }
}

type ButtonType = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

interface ButtonThemeProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: ButtonType;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  analyticsEvent?: string;
  analyticsLabel?: string;
  analyticsPlacement?: string;
  target?: "_blank" | "_self";
  disabled?: boolean;
}

const ButtonTheme = ({
  children,
  href,
  onClick,
  type = "primary",
  size = "medium",
  fullWidth = false,
  className,
  analyticsEvent,
  analyticsLabel,
  analyticsPlacement,
  target = "_self",
  disabled = false,
}: ButtonThemeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const buttonClasses = cn(
    // Base styles
    "relative inline-flex items-center justify-center",
    "font-bellefair font-normal uppercase tracking-wider",
    "transition-all duration-350",
    "text-[#E5E0C8] hover:text-[#F6F8F0]",
    "border-0 cursor-pointer",
    "overflow-hidden",
    "text-shadow-[3px_5px_5px_rgba(0,0,0,0.5)]",
    "leading-[0.9]",
    "py-6",
    !disabled
      ? [
          "active:scale-[0.98] active:brightness-90 active:shadow-inner",
          "filter drop-shadow-[0px_5px_8px_rgba(0,0,0,0.66)]",
        ]
      : "opacity-70 cursor-not-allowed",

    // Size variations
    size === "small" && "text-xs px-6 min-w-28 h-12 md:h-14",
    size === "medium" && "text-sm px-8 min-w-36 h-16 md:h-18",
    size === "large" && "text-base px-10 min-w-44 h-[85px] md:h-[93px]",

    // Width
    fullWidth && "w-full",

    // Custom class
    className
  );

  const contentClasses = cn(
    "relative z-10 flex items-center justify-center gap-2",
    isPressed && "transform scale-95 transition-transform duration-150"
  );

  // Button click handler with analytics
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    // Analytics event tracking
    if (analyticsEvent && window.gtag) {
      window.gtag("event", analyticsEvent, {
        event_category: "engagement",
        event_label: analyticsLabel || type,
        event_placement: analyticsPlacement,
      });
    }

    if (onClick) {
      onClick();
    }
  };

  // Common button props
  const commonProps = {
    className: buttonClasses,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onClick: handleClick,
    disabled,
    "data-analytics-event": analyticsEvent,
    "data-analytics-label": analyticsLabel,
    "data-analytics-placement": analyticsPlacement,
    "data-type": type,
    "data-size": size,
    "data-full-width": fullWidth ? "true" : "false",
  };

  // Render as link if href is provided
  if (href && !disabled) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer noopener" : undefined}
        {...commonProps}
      >
        <span className="absolute inset-0 z-[-1] before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-no-repeat" />
        <span className="optional-fill"></span>
        <div className={contentClasses}>{children}</div>
      </Link>
    );
  }

  // Render as button otherwise
  return (
    <button {...commonProps}>
      <span className="absolute inset-0 z-[-1] before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-no-repeat" />
      <span className="optional-fill"></span>
      <div className={contentClasses}>{children}</div>
    </button>
  );
};

export default ButtonTheme;
