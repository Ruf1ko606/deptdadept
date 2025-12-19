"use client";

import React, { useEffect, useRef } from 'react';

export const SnowEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Parallax logic: Larger radius = Closer = Faster
    const particles: { x: number; y: number; radius: number; speed: number; opacity: number; vx: number; vy: number }[] = [];
    const particleCount = 250;

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1; // Varied sizes 1px to 4px
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: radius,
        speed: radius * 0.5, // Closer particles move faster
        opacity: Math.random() * 0.6 + 0.1,
        vx: 0,
        vy: 0
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Physics: Base gravity
        p.y += p.speed;
        p.x += Math.sin(p.y * 0.005) * (p.radius * 0.1); 

        // Physics: Mouse Interaction (Repulsion)
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceRadius = 150;

        if (distance < forceRadius) {
          const force = (forceRadius - distance) / forceRadius;
          const angle = Math.atan2(dy, dx);
          const pushStrength = 2;
          
          p.vx += Math.cos(angle) * force * pushStrength;
          p.vy += Math.sin(angle) * force * pushStrength;
        }

        // Apply velocity with damping
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95; // Friction
        p.vy *= 0.95;

        // Reset if out of bounds
        if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
          p.vx = 0;
          p.vy = 0;
        }
        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50" 
      style={{ mixBlendMode: 'normal' }}
    />
  );
};
