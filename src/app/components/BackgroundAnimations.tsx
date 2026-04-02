import React from 'react';
import { motion } from 'motion/react';

// A component to place huge floating doodle elements in margins
export const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden hidden lg:block">
      {/* Left side lane - tightly constrained to left 15vw to never overlap text */}
      <div className="absolute top-0 bottom-0 left-0 w-[15vw] flex flex-col justify-around items-center">
        
        {/* Doodle Cloud 1 (Big) */}
        <motion.svg
          animate={{ x: [-20, 20, -20], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="w-32 h-24 text-blue-300 opacity-60 mt-10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            d="M30 60 C30 40, 50 30, 60 40 C75 40, 85 55, 75 70 C75 85, 30 85, 30 70 C15 70, 15 60, 30 60 Z" 
          />
        </motion.svg>

        {/* Doodle Bird 1 (Big) */}
        <motion.svg
          animate={{ x: [-10, 40, -10], y: [0, 30, 0] }}
          transition={{
            x: { duration: 15, repeat: Infinity, ease: 'linear' },
            y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="w-20 h-20 text-slate-400 mr-8"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path 
            animate={{ d: ["M20 50 Q 35 30 50 50 Q 65 30 80 50", "M20 50 Q 35 60 50 50 Q 65 60 80 50"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            d="M20 50 Q 35 30 50 50 Q 65 30 80 50"
          />
        </motion.svg>

        {/* Doodle Cloud 2 (Big) */}
        <motion.svg
          animate={{ x: [10, -10, 10], y: [0, 15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="w-40 h-32 text-blue-200 opacity-50 ml-6"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M30 60 C30 40, 50 30, 60 40 C75 40, 85 55, 75 70 C75 85, 30 85, 30 70 C15 70, 15 60, 30 60 Z" />
        </motion.svg>

        {/* Doodle Star 1 */}
        <motion.svg
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          className="w-16 h-16 text-yellow-400 opacity-70 ml-10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
        </motion.svg>

        {/* Paper Plane 1 */}
        <motion.svg
          animate={{ 
            x: [-100, 50], 
            y: [50, -150],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 1 }}
          className="w-24 h-24 text-indigo-300 ml-4 mb-20"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 50 L90 20 L60 90 L50 60 Z M50 60 L90 20" />
        </motion.svg>

      </div>

      {/* Right side lane - tightly constrained to right 15vw */}
      <div className="absolute top-0 bottom-0 right-0 w-[15vw] flex flex-col justify-around items-center">
         
         {/* Doodle Bird 2 (Big) */}
         <motion.svg
          animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
          transition={{
            x: { duration: 18, repeat: Infinity, ease: 'linear' },
            y: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="w-24 h-24 text-slate-400 mt-20"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path 
            animate={{ d: ["M20 50 Q 35 30 50 50 Q 65 30 80 50", "M20 50 Q 35 60 50 50 Q 65 60 80 50"] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            d="M20 50 Q 35 30 50 50 Q 65 30 80 50"
          />
        </motion.svg>

        {/* Doodle Cloud 3 (Big) */}
        <motion.svg
          animate={{ x: [-15, 15, -15], y: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="w-32 h-24 text-blue-200 opacity-60 mr-8"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
           <path d="M30 60 C30 40, 50 30, 60 40 C75 40, 85 55, 75 70 C75 85, 30 85, 30 70 C15 70, 15 60, 30 60 Z" />
        </motion.svg>

        {/* Paper Plane Doodle 2 (Big) */}
        <motion.svg
          animate={{ 
            x: [100, -50], 
            y: [50, -150],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: 2 }}
          className="w-32 h-32 text-indigo-300 ml-12"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 50 L90 20 L60 90 L50 60 Z M50 60 L90 20" />
        </motion.svg>

        {/* Doodle Bird 3 (Big) */}
        <motion.svg
          animate={{ x: [-20, 20, -20], y: [0, 10, 0] }}
          transition={{
            x: { duration: 12, repeat: Infinity, ease: 'linear' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="w-16 h-16 text-slate-400 mr-12"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path 
            animate={{ d: ["M20 50 Q 35 30 50 50 Q 65 30 80 50", "M20 50 Q 35 60 50 50 Q 65 60 80 50"] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
            d="M20 50 Q 35 30 50 50 Q 65 30 80 50"
          />
        </motion.svg>

        {/* Doodle Cloud 4 (Big) */}
        <motion.svg
          animate={{ x: [15, -15, 15], y: [0, 15, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="w-48 h-32 text-blue-300 opacity-40 ml-4 mb-10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
           <path d="M30 60 C30 40, 50 30, 60 40 C75 40, 85 55, 75 70 C75 85, 30 85, 30 70 C15 70, 15 60, 30 60 Z" />
        </motion.svg>

      </div>
    </div>
  );
};
