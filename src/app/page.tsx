"use client";

import React from 'react';
import { BentoHero } from "@/components/intro/BentoHero";
import { LiveTicker } from "@/components/intro/LiveTicker";
import { HotSlips } from "@/components/intro/HotSlips";
import { SplitExperts } from "@/components/split-experts";
import { EquipYourself } from "@/components/intro/EquipYourself";
import { FinalHook } from "@/components/intro/FinalHook";
import { QuestionsSection } from "@/components/intro/QuestionsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="w-full">
        <BentoHero />
        
        {/* Ticker Section */}
        <LiveTicker />

        {/* Hot Slips Evidence Section */}
        <HotSlips />
        
        {/* Split Experts section */}
        <section className="relative z-20">
          <SplitExperts />
        </section>

        {/* Equip Yourself (Loot) Section */}
        <EquipYourself />

        {/* Final Hook & FAQ Section */}
        <FinalHook />

        {/* Questions Section */}
        <QuestionsSection />
      </main>
    </div>
  );
}