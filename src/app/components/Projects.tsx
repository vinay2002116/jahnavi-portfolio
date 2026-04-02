import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: "IoT Security Network Monitor",
    category: "Dashboard Design & Research",
    image: "https://images.unsplash.com/photo-1678845530864-18a666ca9762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBuZXR3b3JrJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc1MDIzMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    problemLine: "Identifying malicious network activity in complex IoT environments was overwhelming for operators.",
    tools: ["Figma", "User Research", "Data Visualization"],
    details: {
      problem: "Security threats in RPL-based IoT networks (like spoofing) generate massive amounts of raw data. Network operators struggle to quickly identify and isolate anomalies because the existing tools are technical, dense, and lack intuitive visual hierarchy.",
      research: "Analyzed workflows of security analysts. Discovered that 60% of time was spent parsing logs rather than resolving threats. Key pain point: lack of real-time, easily scannable alerts.",
      painPoints: ["Information overload", "Slow threat isolation", "Complex navigation across multiple tools"],
      solution: "Designed an anomaly detection dashboard that highlights critical threats with clear color-coding, provides a one-click drill-down into affected network nodes, and simplifies raw data into actionable visual insights.",
      learnings: "Learned how to balance dense technical information with clean visual design. Prioritized 'time-to-action' over showing all available data at once."
    },
    color: "bg-blue-100",
    shadowColor: "#CCE8FF",
    doodleRot: -2
  },
  {
    id: 2,
    title: "AI Vehicle Speed Tracking",
    category: "System Interface & Visual Design",
    image: "https://images.unsplash.com/photo-1634807010323-4309f645e5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1MDIzMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    problemLine: "Traffic monitoring operators needed a simplified way to process real-time AI visual data.",
    tools: ["Figma", "Prototyping", "UI Design"],
    details: {
      problem: "Real-time traffic monitoring systems output complex computer vision data. Traffic safety operators needed a clear, distraction-free interface to monitor vehicle speeds and identify violations instantly without understanding the underlying algorithms.",
      research: "Reviewed existing traffic monitoring systems. Found interfaces were often cluttered with unnecessary technical metrics, leading to operator fatigue and missed violations.",
      painPoints: ["Cluttered UI", "High cognitive load", "Difficult to export evidence for violations"],
      solution: "Created a minimalist monitoring interface focused entirely on live feeds and automated flagging. Introduced a 'focus mode' that dims non-essential information when a violation is detected, guiding the operator's eye immediately to the incident.",
      learnings: "Understood the importance of designing for high-stress, continuous-monitoring environments. Emphasized high contrast and minimal distractions."
    },
    color: "bg-orange-100",
    shadowColor: "#FFDCCC",
    doodleRot: 2
  }
];

const DoodleLine = () => (
  <svg className="absolute -bottom-4 right-10 w-24 h-6 text-gray-300" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10 Q 25 0, 50 10 T 100 10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
  </svg>
);

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 relative">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] mb-4">
            Solving real problems through design
          </h2>
          <p className="text-xl text-gray-500 font-medium">Showing my process and problem-solving.</p>
          <DoodleLine />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: project.doodleRot, scale: 1.02 }}
              onClick={() => setActiveProject(project.id)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border-2 border-gray-200 flex flex-col h-full"
              style={{ boxShadow: `8px 8px 0px 0px ${project.shadowColor}` }}
            >
              {/* Thumbnail with doodle sticker */}
              <div className={`relative h-64 sm:h-80 w-full overflow-hidden ${project.color} border-b-2 border-gray-200`}>
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90 mix-blend-multiply" 
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                
                {/* Cute doodle eye appearing on hover */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1, rotate: [-10, 10, -10] }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 bg-white text-black p-3 rounded-full shadow-lg border-2 border-dashed border-gray-300 flex items-center justify-center pointer-events-none"
                >
                  <Eye className="w-6 h-6" />
                </motion.div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-xs font-bold px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {project.problemLine}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-2 text-black font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform">
                  View Case Study <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setActiveProject(null)} 
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto border-[3px] border-black"
            >
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-6 h-6 text-black" />
              </button>

              {projects.map(p => p.id === activeProject && (
                <div key={p.id}>
                   <div className={`h-48 sm:h-64 w-full relative ${p.color} border-b-2 border-black`}>
                     <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                   </div>
                   
                   <div className="p-8 sm:p-12 relative">
                     {/* Decorative modal doodle */}
                     <svg className="absolute top-8 right-12 w-16 h-16 text-gray-200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                       <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                     </svg>
                     
                     <h2 className="text-3xl sm:text-5xl font-bold text-black mb-2 relative z-10">{p.title}</h2>
                     <p className="text-xl text-gray-500 mb-10 font-medium">{p.category}</p>
                     
                     <div className="space-y-12">
                       <section>
                         <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                           <span className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center text-xs">1</span> 
                           Problem
                         </h4>
                         <p className="text-lg text-gray-800 leading-relaxed font-medium">{p.details.problem}</p>
                       </section>
                       
                       <section>
                         <h4 className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4 flex items-center gap-2">
                           <span className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center text-xs">2</span> 
                           Research
                         </h4>
                         <p className="text-lg text-gray-800 leading-relaxed font-medium">{p.details.research}</p>
                       </section>
                       
                       <section>
                         <h4 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-4 flex items-center gap-2">
                           <span className="w-6 h-6 rounded-full border-2 border-red-600 flex items-center justify-center text-xs">3</span> 
                           User Pain Points
                         </h4>
                         <ul className="list-disc pl-6 space-y-2">
                           {p.details.painPoints.map((point, i) => (
                             <li key={i} className="text-lg text-gray-800 font-medium">{point}</li>
                           ))}
                         </ul>
                       </section>
                       
                       <div className="p-6 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl my-8 relative overflow-hidden">
                         <div className="absolute -right-4 -bottom-4 opacity-10">
                           <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M12 2L2 22h20L12 2z"/></svg>
                         </div>
                         <p className="text-sm font-bold uppercase text-gray-400 mb-2">4 & 5. Wireframes & UI Design</p>
                         <p className="text-gray-700 font-medium">Detailed screens mapping user flows from anomaly detection to isolation were developed in Figma.</p>
                       </div>
                       
                       <section>
                         <h4 className="text-sm font-bold uppercase tracking-widest text-green-600 mb-4 flex items-center gap-2">
                           <span className="w-6 h-6 rounded-full border-2 border-green-600 flex items-center justify-center text-xs">6</span> 
                           Final Solution
                         </h4>
                         <p className="text-lg text-gray-800 leading-relaxed font-medium">{p.details.solution}</p>
                       </section>
                       
                       <section>
                         <h4 className="text-sm font-bold uppercase tracking-widest text-purple-600 mb-4 flex items-center gap-2">
                           <span className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center text-xs">7</span> 
                           What I Learned
                         </h4>
                         <p className="text-lg text-gray-800 leading-relaxed font-medium">{p.details.learnings}</p>
                       </section>
                     </div>
                   </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
