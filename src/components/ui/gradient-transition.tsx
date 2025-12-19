"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTransitionProps {
  from?: 'dark' | 'light';
  to?: 'dark' | 'light';
  height?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withNoise?: boolean;
}

const heightMap = {
  sm: 'h-24',      // 96px
  md: 'h-40',      // 160px
  lg: 'h-56',      // 224px
  xl: 'h-72',      // 288px
};

const GradientTransition: React.FC<GradientTransitionProps> = ({
  from = 'dark',
  to = 'light',
  height = 'lg',
  className,
  withNoise = true,
}) => {
  // Define colors
  const fromColor = from === 'dark' ? 'from-obsidian' : 'from-off-white';
  const toColor = to === 'dark' ? 'to-obsidian' : 'to-off-white';

  return (
    <div 
      className={cn(
        'relative w-full',
        heightMap[height],
        'bg-gradient-to-b',
        fromColor,
        toColor,
        className
      )}
    >
      {/* Optional noise texture for smoothness */}
      {withNoise && (
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
      
      {/* Subtle middle accent line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
};

export default GradientTransition;


