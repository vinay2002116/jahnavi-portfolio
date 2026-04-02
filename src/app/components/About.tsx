import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Heart, Lightbulb } from 'lucide-react';

const DoodleCircle = ({ className }: { className?: string }) => (
  <svg className={`absolute ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      d="M50 10 C 20 10, 10 40, 15 65 C 20 90, 60 95, 80 75 C 100 55, 90 20, 60 15 C 50 10, 30 15, 25 35"
      stroke="#FFB067"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Background scribble */}
      <motion.svg 
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -right-20 w-64 h-64 text-gray-100 opacity-50 pointer-events-none" 
        viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      >
        <path d="M10 50 Q 50 10, 90 50 T 170 50 Q 150 100, 100 100 T 10 150 Q 50 190, 90 150 T 170 150" />
      </motion.svg>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 sm:gap-16"
        >
          {/* Left Side: Big Header */}
          <div className="flex flex-col gap-4 sticky top-32 self-start pt-8">
            <div className="relative inline-block">
              <DoodleCircle className="w-24 h-24 sm:w-32 sm:h-32 -top-6 -left-6 sm:-top-8 sm:-left-8 -z-10" />
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] z-10 relative">
                My <br className="hidden md:block"/> Story
              </h2>
            </div>
          </div>
          
          {/* Right Side: Content */}
          <div className="flex flex-col gap-8 sm:gap-12">
            
            <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-gray-800 relative z-10">
              <span className="relative">
                I started as a digital marketing intern,
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="#7BCFD4" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </span> using Canva and creative tools to improve my work. That quickly evolved into dealing with international clients, listening to their concerns, and solving their issues instantly.
            </p>
            
            <div className="grid gap-6 sm:gap-10">
              
              <motion.div 
                whileHover={{ y: -5, rotate: -1 }}
                className="bg-white p-8 rounded-3xl border-2 border-dashed border-orange-200 shadow-[4px_4px_0px_0px_#FFDCCC] transition-all relative overflow-hidden group"
              >
                <MessageSquare className="w-8 h-8 text-orange-500 mb-4 group-hover:animate-bounce" />
                <h3 className="text-xl font-bold mb-3 text-black">Instant Problem Solving</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Working directly with international clients taught me how to listen deeply to user concerns. I learned how to map their frustrations instantly to actionable solutions, turning negative experiences into positive ones on the spot.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, rotate: 1 }}
                className="bg-white p-8 rounded-3xl border-2 border-dashed border-blue-200 shadow-[4px_4px_0px_0px_#CCE8FF] transition-all relative overflow-hidden group"
              >
                <Lightbulb className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 text-black">SEO to Usability</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  As an SEO Analyst, I learned that discoverability means nothing without usability. I improved website navigation clarity and content hierarchy based on real search intent and user behavior analytics.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, rotate: -1 }}
                className="bg-white p-8 rounded-3xl border-2 border-dashed border-green-200 shadow-[4px_4px_0px_0px_#CCFFDF] transition-all relative overflow-hidden group"
              >
                <Heart className="w-8 h-8 text-green-500 mb-4 group-hover:fill-green-200 transition-colors" />
                <h3 className="text-xl font-bold mb-3 text-black">Creative Storytelling</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  By starting out with tools like Canva, I learned the power of visual communication early on. Today, I use Figma and deep user research to craft intuitive interfaces that don't just solve problems, but tell a cohesive story.
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
