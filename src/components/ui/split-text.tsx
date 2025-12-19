"use client";

import { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}: SplitTextProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Split text into parts based on splitType
  const splitParts = useMemo(() => {
    if (!text) return [];
    
    switch (splitType) {
      case 'words':
        return text.split(' ').map((word, i, arr) => ({
          content: word,
          isSpace: false,
          key: `word-${i}`
        }));
      case 'lines':
        return text.split('\n').map((line, i) => ({
          content: line,
          isSpace: false,
          key: `line-${i}`
        }));
      case 'chars':
      default:
        return text.split('').map((char, i) => ({
          content: char,
          isSpace: char === ' ',
          key: `char-${i}`
        }));
    }
  }, [text, splitType]);

  // Wait for fonts to load
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (document.fonts.status === 'loaded') {
        setIsReady(true);
      } else {
        document.fonts.ready.then(() => setIsReady(true));
      }
    }
  }, []);

  // GSAP Animation
  useGSAP(() => {
    if (!isReady || !containerRef.current || elementsRef.current.length === 0) return;

    const elements = elementsRef.current.filter(el => el !== null);
    if (elements.length === 0) return;

    // Calculate scroll trigger start position
    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
    const sign = marginValue === 0 ? '' : marginValue < 0 
      ? `-=${Math.abs(marginValue)}${marginUnit}` 
      : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    // Set initial state
    gsap.set(elements, { ...from });

    // Create animation with restart on every enter
    const tl = gsap.to(elements, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      scrollTrigger: {
        trigger: containerRef.current,
        start,
        end: "bottom top",
        // restart = restart animation on enter
        // none = nothing on end
        // restart = restart on enter from bottom
        // none = nothing on exit up
        toggleActions: "restart none restart none",
        onLeave: () => {
          // Reset to initial state when leaving viewport (scrolling down past it)
          gsap.set(elements, { ...from });
        },
        onLeaveBack: () => {
          // Reset to initial state when leaving viewport (scrolling up past it)
          gsap.set(elements, { ...from });
        }
      },
      onComplete: () => {
        onLetterAnimationComplete?.();
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, {
    dependencies: [isReady, splitParts, delay, duration, ease, from, to, threshold, rootMargin],
    scope: containerRef
  });

  const style: React.CSSProperties = {
    textAlign,
    wordWrap: 'break-word',
    display: 'block'
  };

  const renderContent = () => (
    <>
      {splitParts.map((part, index) => (
        <span
          key={part.key}
          ref={el => { elementsRef.current[index] = el; }}
          style={{
            display: 'inline-block',
            willChange: 'transform, opacity',
            whiteSpace: part.isSpace ? 'pre' : 'normal'
          }}
          className="split-char"
        >
          {part.isSpace ? '\u00A0' : part.content}
          {splitType === 'words' && index < splitParts.length - 1 && '\u00A0'}
        </span>
      ))}
    </>
  );

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag 
      ref={containerRef as React.RefObject<HTMLParagraphElement>}
      style={style} 
      className={`split-parent ${className}`}
    >
      {renderContent()}
    </Tag>
  );
};

export default SplitText;

