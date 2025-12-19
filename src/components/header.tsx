'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/cart/CartContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { setIsCartOpen, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/stats', label: 'Statistics' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/reviews', label: 'Reviews' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav 
        className={cn(
          "relative flex items-center justify-between px-6 py-3 transition-all duration-500 ease-out",
          scrolled 
            ? "w-full max-w-4xl bg-black/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl" 
            : "w-full max-w-6xl bg-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white tracking-tighter">
            DEPT DA <span className="text-brand-red">DEPT</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === link.href ? "text-white" : "text-gray-400"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full bg-white text-black hover:bg-gray-200 border-none font-bold gap-2 relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={16} />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-red text-white text-xs rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-white/10 rounded-2xl p-4 flex flex-col gap-4 shadow-xl md:hidden backdrop-blur-md">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  pathname === link.href ? "text-white" : "text-gray-400"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full rounded-full bg-white text-black hover:bg-gray-200 border-none font-bold gap-2 justify-center relative"
              onClick={() => { setIsCartOpen(true); setIsOpen(false); }}
            >
              <ShoppingCart size={16} />
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-red text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
}
