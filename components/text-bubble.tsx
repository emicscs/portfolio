"use client";

import React from 'react';

interface TextBubbleProps {
  text: string;
  position?: 'top' | 'middle' | 'bottom';
  side?: 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const TextBubble = ({ 
  text, 
  position = 'middle', 
  side = 'left',
  delay = 0, 
  duration = 8,
  className = ""
}: TextBubbleProps) => {

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'top-18';
      case 'bottom':
        return 'bottom-20';
      default:
        return 'top-1/2 -translate-y-1/2';
    }
  };

  const getCustomPosition = () => {
    if (side === 'right' && position === 'top') {
      return 'top-28'; // Slightly lower than top-20
    }
    return getPositionClasses();
  };

  const getSideClasses = () => {
    if (side === 'right') {
      return '-right-0';
    }
    return '-left-0';
  };



  return (
    <div className={`absolute ${getSideClasses()} ${getCustomPosition()} z-20 hidden lg:block ${className}`}>
      <div className="relative">
        {/* Speech bubble */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
          <div 
            className="text-sm text-gray-800 dark:text-gray-200 font-medium [&_a]:text-primary [&_a]:hover:underline"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          
          {/* Speech bubble tail */}
          <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-transparent ${
            side === 'right' 
              ? 'right-0 translate-x-2 border-l-8 border-l-white dark:border-l-gray-800' 
              : 'left-0 -translate-x-2 border-r-8 border-r-white dark:border-r-gray-800'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

// Multiple text bubbles component for easy management
interface TextBubblesProps {
  bubbles: Array<{
    text: string;
    position?: 'top' | 'middle' | 'bottom';
    delay?: number;
    duration?: number;
  }>;
}

export const TextBubbles = ({ bubbles }: TextBubblesProps) => {
  return (
    <div className="relative">
      {bubbles.map((bubble, index) => (
        <TextBubble
          key={index}
          text={bubble.text}
          position={bubble.position}
          delay={bubble.delay}
          duration={bubble.duration}
        />
      ))}
    </div>
  );
}; 