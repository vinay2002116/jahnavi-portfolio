import React from 'react';
import { motion } from 'motion/react';
import profilePic from 'figma:asset/50cef7b5228de6bbfc7d570b06076abd0ed154b7.png';

const Sparkle = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ y: [-5, 5, -5], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className={`absolute ${className}`}
  >
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#7BCFD4" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" 
      />
    </svg>
  </motion.div>
);

const Heart = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    className={`absolute ${className}`}
  >
    <svg width="50" height="46" viewBox="0 0 100 100" fill="none" stroke="#F3734D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        d="M50 90 C 50 90, 10 60, 10 30 C 10 10, 40 10, 50 30 C 60 10, 90 10, 90 30 C 90 60, 50 90, 50 90 Z" 
        fill="#F3734D"
        fillOpacity="0.2"
      />
    </svg>
  </motion.div>
);

const Pill = ({ className, text }: { className?: string; text: string }) => (
  <motion.div
    animate={{ y: [-3, 3, -3], rotate: [-4, 4, -4] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    className={`absolute bg-[#66D58C]/20 text-black font-semibold px-4 py-2 text-sm sm:text-base whitespace-nowrap ${className}`}
    style={{ transform: 'rotate(-5deg)' }}
  >
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
      <motion.rect 
        x="2" y="2" width="96" height="36" rx="15" 
        fill="none" stroke="#52B475" strokeWidth="2" strokeDasharray="6 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
    </svg>
    <span className="relative z-10">{text}</span>
  </motion.div>
);

const Starburst = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ y: [2, -6, 2], rotate: [10, -5, 10] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    className={`absolute ${className}`}
  >
    {/* A symmetrical four-leaf star/flower abstract shape */}
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        d="M50 10 C 60 40, 90 50, 90 50 C 90 50, 60 60, 50 90 C 40 60, 10 50, 10 50 C 10 50, 40 40, 50 10 Z"
        fill="#FFE373" 
        stroke="#E6C64D" 
        strokeWidth="3" 
        strokeLinejoin="round" 
      />
      {/* Symmetrical inner lines */}
      <motion.path initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} d="M50 30 L50 70 M30 50 L70 50" stroke="#D4A714" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </motion.div>
);

const Underline = ({ className }: { className?: string }) => (
  <svg className={`absolute ${className}`} viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      d="M5 10 Q 50 0 100 15 T 195 10" 
      stroke="#7BCFD4" 
      strokeWidth="6" 
      strokeLinecap="round" 
    />
  </svg>
);

const DoodleArrow = ({ className }: { className?: string }) => (
  <motion.svg 
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className={`absolute ${className}`} 
    viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M50 10 Q 70 40 50 90 M50 90 L 30 70 M50 90 L 70 70" />
  </motion.svg>
);

export const Hero = () => {
  return (
    <section id="hero" className="min-h-[95vh] pt-32 pb-20 flex flex-col justify-center items-center relative z-10 px-6 overflow-hidden">
      
      {/* The main typography block */}
      <div className="max-w-4xl mx-auto text-center font-bold tracking-tighter text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5.5rem] leading-[1.1] text-[#111111]">
        
        <div className="relative inline-block w-full text-center sm:text-left sm:w-auto">
          <Sparkle className="-left-4 sm:-left-12 -top-6 sm:-top-8 w-8 h-8 sm:w-12 sm:h-12" />
          TURNING COMPLEX<br className="hidden sm:block" />
        </div>
        
        <div className="relative inline-block w-full text-center sm:text-left sm:w-auto mt-2 sm:mt-0 z-10">
          IDEAS INTO <span className="relative">SIMPLE, <Underline className="-bottom-1 sm:-bottom-4 left-0 w-full h-4 sm:h-6" /></span><br className="hidden sm:block" />
          <Starburst className="-right-8 sm:-right-24 -top-12 sm:-top-16 w-16 h-16 sm:w-20 sm:h-20 -z-10" />
          <Pill text="UI/UX" className="right-4 sm:-right-8 bottom-0 sm:-bottom-6 rotate-6 sm:rotate-12" />
        </div>
        
        <div className="relative inline-block w-full text-center sm:text-left sm:w-auto mt-2 sm:mt-0">
          <Heart className="-left-6 sm:-left-20 bottom-2 sm:bottom-4 w-10 h-10 sm:w-[60px] sm:h-[56px] -z-10" />
          USABLE PRODUCTS.
        </div>

      </div>

      <div className="mt-20 sm:mt-32 w-full flex flex-col items-center relative">
        
        <DoodleArrow className="w-12 h-12 text-gray-400 -top-24 right-[10%] hidden sm:block rotate-[110deg]" />

        {/* Intro Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-4xl font-extrabold text-[#111111] mb-8 tracking-widest uppercase relative"
        >
          Mind Behind The Pixels
          <svg className="absolute -bottom-3 left-0 w-full h-3 text-pink-300" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </motion.h2>

        {/* Full-width image container, without circle frame */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.6 }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative group"
        >
          {/* Subtle background doodle behind image */}
          <div className="absolute inset-0 bg-blue-50 -rotate-1 rounded-3xl -z-10 group-hover:rotate-1 transition-transform duration-500 border-2 border-dashed border-blue-200"></div>
          
          <div className="w-full h-[400px] sm:h-[600px] md:h-[70vh] rounded-2xl sm:rounded-3xl overflow-hidden border-[4px] border-black shadow-[8px_8px_0px_0px_#000] relative">
            <img 
              src={profilePic} 
              alt="Jahnavi Gopu" 
              className="w-full h-full object-cover object-center filter hover:saturate-110 transition-all duration-500" 
            />
          </div>
        </motion.div>
        
        {/* Caption under picture */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-black font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide max-w-4xl text-center px-4"
        >
          HI THERE! I'M JAHNAVI GOPU, A PASSIONATE UI/UX DESIGNER IN THIS NEW AI-DRIVEN WORLD.
        </motion.p>
      </div>

    </section>
  );
};
