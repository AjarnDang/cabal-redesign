"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Add gtag to Window interface
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: any) => void;
  }
}

type ButtonVariant = 'buy' | 'topup';
type ButtonSize = 'small' | 'medium' | 'large';

interface GameButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  analyticsEvent?: string;
  analyticsLabel?: string;
  target?: '_blank' | '_self';
}

const GameButton = ({
  children,
  href,
  onClick,
  variant = 'buy',
  size = 'medium',
  fullWidth = false,
  className,
  analyticsEvent,
  analyticsLabel,
  target = '_self'
}: GameButtonProps) => {
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
    'relative inline-flex items-center justify-center font-bold uppercase tracking-wider',
    'transition-all duration-200',
    'border-0',
    
    // Button variations
    variant === 'buy' && [
      'text-amber-50',
      'bg-gradient-to-b from-red-900 via-red-800 to-red-900',
      'shadow-[0_0_10px_rgba(0,0,0,0.5)]',
      'hover:shadow-[0_0_15px_rgba(255,100,100,0.4)]',
      'hover:bg-gradient-to-b hover:from-red-800 hover:via-red-700 hover:to-red-800',
      isPressed && 'shadow-inner bg-gradient-to-b from-red-950 via-red-900 to-red-950'
    ],
    variant === 'topup' && [
      'text-sky-50',
      'bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900',
      'shadow-[0_0_10px_rgba(0,0,0,0.5)]',
      'hover:shadow-[0_0_15px_rgba(100,149,237,0.4)]',
      'hover:bg-gradient-to-b hover:from-blue-800 hover:via-blue-700 hover:to-blue-800',
      isPressed && 'shadow-inner bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950'
    ],
    
    // Size variations
    size === 'small' && 'text-xs px-4 py-1.5 min-w-24',
    size === 'medium' && 'text-sm px-6 py-2.5 min-w-32',
    size === 'large' && 'text-base px-8 py-3.5 min-w-40',
    
    // Width
    fullWidth && 'w-full',
    
    // Custom class
    className
  );
  
  const contentClasses = cn(
    'relative z-10 flex items-center justify-center gap-2',
    isPressed && 'transform scale-95'
  );
  
  // Button styles based on variant
  const buyNowStyles = variant === 'buy' ? {
    outerBorder: 'border-zinc-900',
    innerBorder: 'border-amber-600/60',
    highlight: 'from-amber-500/0 via-amber-500/60 to-amber-500/0',
    shadow: 'from-red-950/0 via-red-950/60 to-red-950/0',
    glow: 'bg-red-500/10'
  } : {
    outerBorder: 'border-zinc-900',
    innerBorder: 'border-sky-600/60',
    highlight: 'from-sky-500/0 via-sky-500/60 to-sky-500/0',
    shadow: 'from-blue-950/0 via-blue-950/60 to-blue-950/0',
    glow: 'bg-blue-500/10'
  };
  
  // Decorative elements
  const decorativeElements = (
    <>
      {/* Custom shape with clipped corners */}
      <span className="absolute inset-0 overflow-hidden">
        {/* Main outer border */}
        <span className={cn(
          'absolute inset-0 border-2',
          buyNowStyles.outerBorder
        )} />
        
        {/* Inner border with slight inset */}
        <span className={cn(
          'absolute inset-[2px] border',
          buyNowStyles.innerBorder
        )} />
        
        {/* Cut corners - top left */}
        <span className="absolute top-0 left-0 w-2 h-2 bg-black" />
        <span className={cn(
          'absolute top-[2px] left-[2px] w-[6px] h-[1px] bg-gradient-to-r',
          buyNowStyles.highlight
        )} />
        <span className={cn(
          'absolute top-[2px] left-[2px] h-[6px] w-[1px] bg-gradient-to-b',
          buyNowStyles.highlight
        )} />
        
        {/* Cut corners - top right */}
        <span className="absolute top-0 right-0 w-2 h-2 bg-black" />
        <span className={cn(
          'absolute top-[2px] right-[2px] w-[6px] h-[1px] bg-gradient-to-l',
          buyNowStyles.highlight
        )} />
        <span className={cn(
          'absolute top-[2px] right-[2px] h-[6px] w-[1px] bg-gradient-to-b',
          buyNowStyles.highlight
        )} />
        
        {/* Cut corners - bottom left */}
        <span className="absolute bottom-0 left-0 w-2 h-2 bg-black" />
        <span className={cn(
          'absolute bottom-[2px] left-[2px] w-[6px] h-[1px] bg-gradient-to-r',
          buyNowStyles.shadow
        )} />
        <span className={cn(
          'absolute bottom-[2px] left-[2px] h-[6px] w-[1px] bg-gradient-to-t',
          buyNowStyles.shadow
        )} />
        
        {/* Cut corners - bottom right */}
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-black" />
        <span className={cn(
          'absolute bottom-[2px] right-[2px] w-[6px] h-[1px] bg-gradient-to-l',
          buyNowStyles.shadow
        )} />
        <span className={cn(
          'absolute bottom-[2px] right-[2px] h-[6px] w-[1px] bg-gradient-to-t',
          buyNowStyles.shadow
        )} />
      </span>
      
      {/* Top light reflection */}
      <span className={cn(
        'absolute top-[3px] left-[8px] right-[8px] h-[1px] z-[3]',
        'bg-gradient-to-r',
        buyNowStyles.highlight
      )} />
      
      {/* Bottom shadow */}
      <span className={cn(
        'absolute bottom-[3px] left-[8px] right-[8px] h-[1px] z-[3]',
        'bg-gradient-to-r',
        buyNowStyles.shadow
      )} />
      
      {/* Glow effect on hover */}
      <span 
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-300 z-[2]',
          buyNowStyles.glow,
          isHovered && 'opacity-100'
        )}
      />
    </>
  );
  
  // Button click handler with analytics
  const handleClick = (e: React.MouseEvent) => {
    // Analytics event tracking
    if (analyticsEvent && window.gtag) {
      window.gtag('event', analyticsEvent, {
        event_category: 'engagement',
        event_label: analyticsLabel || variant,
      });
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  // Render as link if href is provided
  if (href) {
    return (
      <Link 
        href={href}
        className={buttonClasses}
        target={target}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        data-analytics-event={analyticsEvent}
        data-analytics-label={analyticsLabel}
      >
        {decorativeElements}
        <div className={contentClasses}>
          {children}
        </div>
      </Link>
    );
  }
  
  // Render as button otherwise
  return (
    <button
      className={buttonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      data-analytics-event={analyticsEvent}
      data-analytics-label={analyticsLabel}
    >
      {decorativeElements}
      <div className={contentClasses}>
        {children}
      </div>
    </button>
  );
};

export default GameButton; 