'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ServicesData } from '../../types';
import { ArrowUpRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesProps {
  data: ServicesData;
}

export default function Services({ data }: ServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = data.items[activeIndex];

  const renderIcon = (idx: number) => {
    if (idx === 0) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-[32px] h-[32px]" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5.5" r="1.5" />
          <path d="M11 3.5h2" />
          <path d="M12 8.5v4" />
          <path d="M10.5 9.5l1.5 2.5l1.5-2.5" />
          <path d="M12 7.5c-2 0-3.5 1.5-4 4l1 2" />
          <path d="M12 7.5c2 0 3.5 1.5 4 4l-1 2" />
          <path d="M7 15.5c-2 0-3 1-3 2.5s2 2.5 4 2.5c3 0 4-2 4-2s1 2 4 2c2 0 4-1 4-2.5S19 15.5 17 15.5c-3 0-5 3-5 3s-2-3-5-3z" />
        </svg>
      );
    }
    if (idx === 1) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-[32px] h-[32px]" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="17" cy="8" r="1.5" />
          <path d="M15 10c-2 2-6 2-10 2" />
          <path d="M5 12l4 4" />
          <path d="M9 16h6" />
          <path d="M15 16l3-3" />
          <path d="M12 12l4-2" />
        </svg>
      );
    }
    if (idx === 2) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-[32px] h-[32px]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21c1.5 0 6-2 6-6.5c0-2-1.5-3.5-1.5-3.5c1.5 1.5 2.5 4 2.5 6" />
          <path d="M12 21c-1.5 0-6-2-6-6.5c0-2 1.5-3.5 1.5-3.5c-1.5 1.5-2.5 4-2.5 6" />
          <path d="M12 21c1-1.5 3-4.5 3-8c0-1.5-1-3-1-3c1.5 1.5 2 4.5 2 7.5" />
          <path d="M12 21c-1-1.5-3-4.5-3-8c0-1.5 1-3 1-3c-1.5 1.5-2 4.5-2 7.5" />
          <path d="M12 21v-12" />
        </svg>
      );
    }
    if (idx === 3) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-[32px] h-[32px]" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="6" cy="12" rx="3" ry="2" />
          <path d="M6 10h12" />
          <path d="M6 14h12" />
          <path d="M18 10c2 0 3 1 3 2s-1 2-3 2" />
          <circle cx="6" cy="12" r="1" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-[32px] h-[32px]" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="1.5" />
        <path d="M12 7L9 11l-2 1" />
        <path d="M12 7l3 4l2 1" />
        <path d="M12 7v7" />
        <path d="M12 14l-3 7" />
        <path d="M12 14l3 7" />
      </svg>
    );
  };

  return (
    <section className="py-12 lg:py-16 bg-[#151515] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
             <div className="w-16 h-[1px] bg-[#c4a261]"></div>
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7 text-[#c4a261]" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21c2 0 8-3 9-8c0-3-2-5-2-5c-2 2-4 5-7 13" />
                <path d="M12 21c-2 0-8-3-9-8c0-3 2-5 2-5c2 2 4 5 7 13" />
                <path d="M12 21c1-2 5-6 5-11c0-2-1-4-1-4c-2 2-3 6-4 15" />
                <path d="M12 21c-1-2-5-6-5-11c0-2 1-4 1-4c2 2 3 6 4 15" />
                <path d="M12 21v-15" />
             </svg>
             <div className="w-16 h-[1px] bg-[#c4a261]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide uppercase">
            {data.subtitle.split(' ').map((word, i, arr) => (
              <span key={i} className={i === arr.length - 1 ? "text-[#c4a261]" : "text-white"}>
                {word}{i !== arr.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h2>
          <p className="text-gray-400 text-[16px] lg:text-[17px]">
            {data.title}
          </p>
        </motion.div>
        
        {/* Main Content: 3 Columns */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          
          {/* Column 1: Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-[32%] flex flex-col gap-4"
          >
            {data.items.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`group flex items-center justify-between p-2.5 pr-4 rounded-full transition-all duration-300 text-left border ${
                    isActive 
                    ? 'bg-[#c4a261] border-[#c4a261]' 
                    : 'bg-[#151515] border-white/5 hover:border-[#c4a261]/30'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    {/* Icon Circle */}
                    <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                      isActive ? 'border-[#151515] text-[#151515]' : 'border-white/20 text-[#c4a261]'
                    }`}>
                       {renderIcon(idx)}
                    </div>
                    
                    {/* Text */}
                    <div>
                      <h3 className={`text-[16px] font-bold mb-0.5 ${isActive ? 'text-[#151515]' : 'text-white'}`}>{item.title}</h3>
                      <p className={`text-[13.5px] ${isActive ? 'text-[#151515]/70' : 'text-gray-400'}`}>{item.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Right Arrow Button */}
                  <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center shrink-0 transition-colors border ${
                    isActive ? 'bg-white border-white text-[#151515]' : 'bg-transparent border-white/20 text-white group-hover:border-[#c4a261] group-hover:text-[#c4a261]'
                  }`}>
                    <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </div>
                </button>
              );
            })}
          </motion.div>
          
          {/* Column 2: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-[32%] relative mt-8 lg:mt-0"
          >
             {/* Golden offset background */}
             <div className="absolute top-10 -right-5 -bottom-5 left-8 bg-[#c4a261] rounded-[2rem] z-0 hidden lg:block"></div>
             {/* Image block with crossfade on change */}
             <div className="relative z-10 w-full h-[400px] lg:h-[480px] rounded-[2rem] overflow-hidden bg-white/5">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={activeService.image || "/img/services.png"} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover absolute inset-0" 
                  />
                </AnimatePresence>
             </div>
          </motion.div>
          
          {/* Column 3: Content Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:w-[36%] flex flex-col justify-center pl-0 lg:pl-10 mt-10 lg:mt-0 relative"
          >
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeIndex}
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -15 }}
                 transition={{ duration: 0.3 }}
                 className="flex flex-col"
               >
                 {/* Small title */}
                 <div className="flex items-center gap-4 mb-5">
                   <div className="w-8 h-[1.5px] bg-[#c4a261]"></div>
                   <span className="text-[#c4a261] tracking-widest text-[13px] font-bold uppercase">{activeService.title}</span>
                 </div>
                 
                 {/* Main Title Split */}
                 <h3 className="text-[28px] sm:text-3xl lg:text-[2.5rem] font-serif font-semibold leading-[1.2] mb-4 sm:mb-6">
                   {activeService.content_title.split('\n').map((line, i, arr) => (
                     <span key={i} className={`block ${i === arr.length - 1 ? 'text-[#c4a261]' : 'text-white'}`}>
                       {line}
                     </span>
                   ))}
                 </h3>
                 
                 <p className="text-gray-300 text-[14px] sm:text-[15.5px] mb-5 leading-relaxed">
                   {activeService.description}
                 </p>
                 
                 {activeService.benefits && activeService.benefits.length > 0 && (
                   <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                     {activeService.benefits.map((benefit, i) => (
                       <li key={i} className="flex items-center gap-4 sm:gap-5 text-gray-200 font-medium text-[13.5px] sm:text-[15px]">
                         <div className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-full border-[1.5px] border-[#c4a261] flex items-center justify-center text-[#c4a261] shrink-0">
                           <Check className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]" strokeWidth={2.5} />
                         </div>
                         {benefit}
                       </li>
                     ))}
                   </ul>
                 )}
                 
                 <div>
                   <Link href="#" className="inline-flex items-center gap-2 sm:gap-3 bg-[#c4a261] text-[#151515] hover:bg-[#b09054] pl-6 sm:pl-8 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full font-bold text-[14px] sm:text-[15px] transition-all">
                     Book a Class
                     <div className="bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 ml-1 sm:ml-2">
                       <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#151515]" strokeWidth={2} />
                     </div>
                   </Link>
                 </div>
               </motion.div>
             </AnimatePresence>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
