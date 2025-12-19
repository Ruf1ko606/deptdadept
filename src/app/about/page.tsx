'use client';

import React from 'react';
import Hero from '@/components/about/Hero';
import History from '@/components/about/History';
import Founders from '@/components/about/Founders';
import Trust from '@/components/about/Trust';
import CustomCursor from '@/components/about/CustomCursor';
import TextBlockTwo from '@/components/text-blocks/text-block-two';
import TextBlockThree from '@/components/text-blocks/text-block-three';
import GradientTransition from '@/components/ui/gradient-transition';

export default function AboutPage() {
  return (
    <div className="relative bg-obsidian min-h-screen text-off-white">
      <CustomCursor />
      <Hero />
      <History />
      
      {/* Text Block 2: Scroll Reveal Animation */}
      <TextBlockTwo />
      
      {/* Gradient: Dark → Light */}
      <GradientTransition from="dark" to="light" height="lg" />
      
      {/* Text Block 3: Scroll Float - Intro to Founders */}
      <TextBlockThree />
      
      {/* Gradient: Light → Dark */}
      <GradientTransition from="light" to="dark" height="lg" />
      
      <Founders />
      
      {/* Gradient: Dark → Light */}
      <GradientTransition from="dark" to="light" height="lg" />
      
      <Trust />
    </div>
  );
}

