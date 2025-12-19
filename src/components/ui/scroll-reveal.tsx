"use client";

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1.2,
  staggerDelay = 0.03
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ? scrollContainerRef.current : undefined;
    const wordElements = el.querySelectorAll('.word');

    // Set initial states
    gsap.set(el, { 
      transformOrigin: '0% 50%', 
      rotate: baseRotation 
    });
    gsap.set(wordElements, { 
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
    });

    // Create timeline for coordinated animation
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: 'power3.out' }
    });

    // Container rotation
    tl.to(el, {
      rotate: 0,
      duration: animationDuration * 0.8
    }, 0);

    // Words opacity
    tl.to(wordElements, {
      opacity: 1,
      duration: animationDuration,
      stagger: staggerDelay
    }, 0);

    // Words blur (if enabled)
    if (enableBlur) {
      tl.to(wordElements, {
        filter: 'blur(0px)',
        duration: animationDuration,
        stagger: staggerDelay
      }, 0);
    }

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
        // Reset to initial state
        tl.pause(0);
        gsap.set(el, { rotate: baseRotation });
        gsap.set(wordElements, { 
          opacity: baseOpacity,
          filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
        });
      },
      onLeaveBack: () => {
        // Reset to initial state
        tl.pause(0);
        gsap.set(el, { rotate: baseRotation });
        gsap.set(wordElements, { 
          opacity: baseOpacity,
          filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
        });
      }
    });

    return () => {
      tl.kill();
      trigger.kill();
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, blurStrength, animationDuration, staggerDelay]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;
