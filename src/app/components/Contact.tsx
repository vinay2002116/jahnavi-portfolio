import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight, Send } from 'lucide-react';

const DoodleStar = ({ className }: { className?: string }) => (
  <svg className={`absolute ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <motion.path 
      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" 
    />
  </svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#111111] text-white relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      {/* Doodle Stars */}
      <DoodleStar className="w-12 h-12 text-yellow-400 top-20 left-10 opacity-50" />
      <DoodleStar className="w-8 h-8 text-pink-400 bottom-40 right-20 opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter relative z-10">
              Let's work together.
            </h2>
            <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 text-blue-400" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium">
            Let's build something Simple, Fun and Interesting products that are lovedddd by users. I'll bring the doodles, and you bring the coffee :)
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:jahnavigopu6@gmail.com" 
              className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-[20px] font-bold text-lg border-2 border-white"
            >
              <Mail className="w-5 h-5" />
              jahnavigopu6@gmail.com
              {/* Cute hover badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity rotate-12 shadow-sm border border-black">
                Say Hi!
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/jahnavi-gopu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-transparent border-2 border-dashed border-gray-500 text-white px-8 py-4 rounded-[20px] font-bold text-lg hover:border-white hover:bg-white/5 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              LinkedIn
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
          
          <div className="mt-24 pt-8 border-t-2 border-dashed border-gray-800 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm font-bold tracking-widest uppercase">
            <p>© 2026 Jahnavi Gopu. All rights reserved.</p>
            <p className="mt-4 sm:mt-0 flex items-center gap-2">
              <Send className="w-4 h-4" /> Hyderabad, India
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
