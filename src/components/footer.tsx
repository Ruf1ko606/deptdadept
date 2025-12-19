"use client";

import React from 'react';
import { Instagram, Newspaper, Send } from 'lucide-react';
import { Oswald } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  const isInternal = href.startsWith('/');
  const Component = isInternal ? Link : 'a';
  
  return (
    <Component href={href} className="outline-none no-underline">
      <div 
        className="group flex items-center rounded-full border border-white/10 bg-black hover:bg-white hover:border-white transition-all duration-300 cursor-pointer overflow-hidden h-[58px]"
      >
        <div className="flex items-center justify-center w-[56px] h-full flex-shrink-0">
           <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
        </div>
        
        <span
            className="text-black font-bold whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-6 transition-all duration-300 ease-out"
        >
            {label}
        </span>
      </div>
    </Component>
  );
};

export function Footer() {
  return (
    <footer className="bg-void pt-20 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
                <SocialLink href="/news" icon={Newspaper} label="News" />
                <SocialLink href="https://www.instagram.com/thecolort?igsh=MWNjNjV0MW93enZuZA%3D%3D&utm_source=qr" icon={Instagram} label="Instagram" />
                <SocialLink href="https://t.me/ar_Tsw" icon={Send} label="Telegram" />
            </div>

            <h2 className={cn(oswald.className, "text-[12vw] leading-none font-bold text-white select-none pointer-events-none text-left w-full")}>
                <span className="block">DEPT</span>
                <span className="block">DADEPT</span>
            </h2>
            
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 text-gray-600 text-xs uppercase tracking-wider">
                <p>&copy; 2025 DEPT DADEPT</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/news" className="hover:text-white transition-colors">News</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="/responsible-gambling" className="hover:text-white transition-colors">Responsible Gambling</Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
