import React from 'react';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b-2 border-dashed border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter relative group">
          <span className="relative z-10">Jahnavi Gopu</span>
          {/* Hand-drawn underline on hover */}
          <svg className="absolute -bottom-1 left-0 w-full h-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </a>
        
        <nav className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <motion.a 
              key={item.name} 
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-base font-bold text-gray-500 hover:text-black transition-colors relative group"
            >
              {item.name}
              {/* Doodle circle that draws on hover */}
              <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400 -z-10" viewBox="0 0 100 50" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M10 25 C 10 10, 90 10, 90 25 C 90 40, 10 40, 10 25 Z" />
              </svg>
            </motion.a>
          ))}
        </nav>
        
        {/* Mobile menu button (placeholder) */}
        <button className="md:hidden bg-gray-100 p-2 rounded-xl border-2 border-dashed border-gray-300">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
