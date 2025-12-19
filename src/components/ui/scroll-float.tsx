"use client";

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFloatProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  stagger?: number;
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  stagger = 0.03
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block char-float" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ? scrollContainerRef.current : undefined;
    const charElements = el.querySelectorAll('.char-float');

    // Initial state
    const initialState = {
      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: '50% 0%'
    };

    // Final state
    const finalState = {
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1
    };

    // Set initial state
    gsap.set(charElements, {
      willChange: 'opacity, transform',
      ...initialState
    });

    // Create timeline
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease }
    });

    tl.to(charElements, {
      ...finalState,
      duration: animationDuration,
      stagger: stagger
    });

    // ScrollTrigger for enter/leave detection
    const trigger = ScrollTrigger.create({
      trigger: el,
      scroller,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        tl.restart();
      },
      onEnterBack: () => {
        tl.restart();
      },
      onLeave: () => {
        tl.pause(0);
        gsap.set(charElements, initialState);
      },
      onLeaveBack: () => {
        tl.pause(0);
        gsap.set(charElements, initialState);
      }
    });

    return () => {
      tl.kill();
      trigger.kill();
    };
  }, [scrollContainerRef, animationDuration, ease, stagger]);

  return (
    <h2 ref={containerRef} className={`my-5 overflow-hidden ${containerClassName}`}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}>
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;

