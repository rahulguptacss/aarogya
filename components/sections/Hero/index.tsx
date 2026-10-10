"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeroData } from '../../types';
import { ArrowRight, Play, Users, Leaf, X } from 'lucide-react';
import { GiLotus } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

  // Format subtitle to match screenshot spacing (replace + with bullet)
  const formattedSubtitle = data.subtitle.replace(/\+/g, '•');

  return (
    <section className="relative pt-8 pb-8 lg:pt-12 lg:pb-12 bg-[#151515] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-4 lg:pr-8 z-10 w-full flex flex-col items-start text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#c4a261] tracking-[0.25em] text-xs sm:text-sm font-medium uppercase"
            >
              {formattedSubtitle}
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight"
            >
              {data.title_line1} <br />
              {data.title_line2} <span className="text-[#c4a261]">{data.title_highlight}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-lg lg:text-[1.15rem] max-w-[500px] leading-relaxed font-normal"
            >
              {data.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row items-center gap-3 sm:gap-6 pt-2 w-full"
            >
              <Link href={data.primary_button.href} className="flex items-center gap-2 sm:gap-5 bg-[#c4a261] hover:bg-[#b09054] text-white pl-4 sm:pl-8 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 group w-fit whitespace-nowrap">
                <span className="text-xs sm:text-[1.05rem]">{data.primary_button.text}</span>
                <div className="bg-[#151515] group-hover:bg-black transition-colors text-white rounded-full p-2 sm:p-2.5 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" strokeWidth={2.5} />
                </div>
              </Link>
              
              <button 
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-2 sm:gap-4 text-white hover:text-[#c4a261] transition-all hover:scale-105 active:scale-95 group w-fit whitespace-nowrap cursor-pointer"
              >
                <div className="border-[1.5px] border-[#c4a261] text-white group-hover:bg-[#c4a261] group-hover:text-[#151515] transition-colors rounded-full p-2 sm:p-3.5 flex items-center justify-center">
                  <Play className="w-3 h-3 sm:w-5 sm:h-5 fill-current ml-0.5" />
                </div>
                <span className="font-semibold text-xs sm:text-[1.05rem]">{data.secondary_button?.text || "Watch Our Video"}</span>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-[2px] bg-white/20 mt-7 mb-6"
            />
          
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-row items-center gap-2 sm:gap-6 lg:gap-10 w-full justify-between sm:justify-start"
            >
              {data.badges.map((badge, idx) => {
                const formattedLines = 
                  badge.label === 'All Levels Welcome' ? ['All Levels', 'Welcome'] :
                  badge.label === 'Expert Trainers' ? ['Expert', 'Trainers'] :
                  badge.label === 'Holistic Wellness' ? ['Holistic', 'Wellness'] :
                  badge.label.split(' ');

                return (
                  <React.Fragment key={idx}>
                    <div className="flex items-center gap-1.5 sm:gap-4">
                      <div className="text-[#c4a261]">
                        {badge.icon === 'Lotus' ? (
                          <svg className="w-5 h-5 sm:w-[34px] sm:h-[34px] opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 21a9 9 0 0 0 9-9c0-3-2-5-5-6-1.5 1-3 3-4 6-1-3-2.5-5-4-6-3 1-5 3-5 6 0 5 4 9 9 9z"></path>
                            <path d="M12 12c-2 3-5 5-8 5"></path>
                            <path d="M12 12c2 3 5 5 8 5"></path>
                          </svg>
                        ) : badge.icon === 'Users' ? (
                          <svg className="w-5 h-5 sm:w-[34px] sm:h-[34px] opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 sm:w-[34px] sm:h-[34px] opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                            <path d="M2 22l10-10"></path>
                            <path d="M12 12l4-4"></path>
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col">
                        {formattedLines.map((line, i) => (
                           <span key={i} className="text-white text-[10px] sm:text-[15px] font-medium tracking-wide leading-[1.3]">{line}</span>
                        ))}
                      </div>
                    </div>
                    {idx < data.badges.length - 1 && <div className="w-[1px] h-6 sm:h-10 bg-white/20"></div>}
                  </React.Fragment>
                );
              })}
            </motion.div>
          </div>
          
          {/* Right Content - Video */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-2 md:mt-6 lg:mt-0 relative">
            <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[480px]">
              {/* Golden Decorative Shapes */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-48 h-48 md:w-64 md:h-64 bg-[#c4a261] rounded-[2rem] md:rounded-[3rem] z-0" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-48 h-48 md:w-64 md:h-64 bg-[#c4a261] rounded-[2rem] md:rounded-[3rem] z-0" 
              />
              
              {/* Video Container */}
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className="relative w-full h-full rounded-[2rem] overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl bg-[#111] z-10"
              >
                <video 
                  src={data.video || "/video/bannervideo.mp4"} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#111] rounded-2xl sm:rounded-3xl border border-[#c4a261]/40 shadow-2xl overflow-hidden aspect-video flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-[#c4a261] text-white hover:text-[#151515] border border-white/20 hover:border-[#c4a261] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>

              <video
                src={data.video || "/video/bannervideo.mp4"}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
