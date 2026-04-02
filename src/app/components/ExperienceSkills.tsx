import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, PenTool, Layout, Layers } from 'lucide-react';

const skills = [
  { category: "UX Research", icon: <Briefcase className="w-6 h-6 mb-2 text-indigo-500" />, rot: -2, bg: "bg-indigo-50", border: "border-indigo-200" },
  { category: "Wireframing", icon: <Layout className="w-6 h-6 mb-2 text-orange-500" />, rot: 3, bg: "bg-orange-50", border: "border-orange-200" },
  { category: "Prototyping", icon: <Layers className="w-6 h-6 mb-2 text-pink-500" />, rot: -3, bg: "bg-pink-50", border: "border-pink-200" },
  { category: "Visual Design", icon: <PenTool className="w-6 h-6 mb-2 text-green-500" />, rot: 2, bg: "bg-green-50", border: "border-green-200" },
];

const tools = ["Figma", "Framer", "Illustrator"];

const experience = [
  {
    role: "Technical Support Engineer",
    company: "Google Vendor Company",
    date: "2024 – 2026",
    bullets: [
      "Collaborated with cross-functional teams to analyze user issues and improve system usability.",
      "Worked on authentication workflows, gaining hands-on exposure to secure user access flows.",
      "Diagnosed complex issues by mapping user behavior into actionable solutions."
    ]
  },
  {
    role: "SEO Analyst Intern",
    company: "Medintu Health Solutions",
    date: "2024",
    bullets: [
      "Improved website usability across healthcare pages through user intent analysis.",
      "Collaborated with designers to enhance information architecture.",
      "Implemented content strategies that increased navigation clarity and engagement."
    ]
  },
  {
    role: "Digital Marketing Intern",
    company: "iKeva",
    date: "2022",
    bullets: [
      "Developed and executed digital marketing campaigns to drive brand awareness.",
      "Analyzed performance metrics to optimize strategies and improve engagement.",
      "Collaborated with the team to create engaging content across various digital platforms."
    ]
  }
];

export const ExperienceSkills = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAFAFA] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Experience Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Hand-drawn title highlight */}
          <div className="relative inline-block mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] relative z-10">
              Experience that shaped me
            </h2>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-300" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 0 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="space-y-12 relative">
            {/* Dashed line instead of solid border */}
            <div className="absolute left-[7px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-gray-300"></div>

            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                <div className="absolute w-4 h-4 bg-white border-2 border-black rounded-full -left-[0px] top-1 group-hover:scale-125 transition-transform flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">{job.role}</h3>
                <p className="text-md text-gray-500 font-semibold mb-6 flex flex-wrap items-center gap-2">
                  {job.company} 
                  <svg className="w-4 h-4 text-gray-300 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14" strokeWidth="2" strokeLinecap="round"/></svg>
                  {job.date}
                </p>
                <ul className="space-y-4">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base relative pl-6">
                      <svg className="absolute left-0 top-1.5 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative inline-block mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] relative z-10">
              What Powers My Design Process
            </h2>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-300" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="flex flex-col gap-10">
            {/* Skills as organic floating cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05, rotate: skill.rot * -1, y: -5 }}
                  className="relative p-6 bg-white border-[3px] border-black rounded-[2rem_1rem_3rem_1rem] shadow-[4px_4px_0px_0px_#000] flex flex-col items-center text-center justify-center transition-all cursor-pointer z-10 hover:z-20"
                  style={{ transform: `rotate(${skill.rot}deg)` }}
                >
                  <div className={`absolute inset-0 opacity-30 ${skill.bg} rounded-[2rem_1rem_3rem_1rem] -z-10`}></div>
                  
                  {/* Cute pin doodle */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000]"></div>
                  
                  <div className="bg-white p-3 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000] mb-3">
                    {skill.icon}
                  </div>
                  <span className="font-extrabold text-black text-sm sm:text-base">{skill.category}</span>
                </motion.div>
              ))}
            </div>

            {/* Tools as scattered stickers on a doodle board */}
            <div className="relative p-8 sm:p-10 bg-[#fffdf5] border-[3px] border-dashed border-gray-400 rounded-[3rem_2rem_4rem_1rem] overflow-visible mt-4">
              {/* Decorative elements */}
              <svg className="absolute -top-6 -right-4 w-12 h-12 text-yellow-400 animate-[spin_8s_linear_infinite] origin-center" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor"/>
              </svg>
              
              <h3 className="text-xl font-bold text-black mb-8 flex items-center gap-2">
                <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5 5 2 7-7-4-7 4 2-7-5-5h7z"/></svg>
                My Toolkit
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, i) => (
                  <motion.div 
                    key={tool}
                    whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 5 : -5 }}
                    className="px-6 py-2 bg-white border-[3px] border-black font-extrabold text-black text-sm sm:text-base shadow-[4px_4px_0px_0px_#000] cursor-pointer transition-all duration-200"
                    style={{ 
                      transform: `rotate(${i % 2 === 0 ? -3 : 4}deg)`,
                      borderRadius: i % 2 === 0 ? '255px 15px 225px 15px/15px 225px 15px 255px' : '15px 255px 15px 225px/225px 15px 255px 15px'
                    }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
              
              {/* Doodle pencil sitting on the board */}
              <svg className="absolute -bottom-8 -left-4 w-20 h-20 text-blue-500 -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
                 <path d="M20 80 L30 60 L70 20 C75 15, 85 25, 80 30 L40 70 Z M20 80 L25 75 L35 85 Z" fill="white"/>
                 <path d="M60 30 L70 40" stroke="currentColor"/>
                 <path d="M25 75 L35 85" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
