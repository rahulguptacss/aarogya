"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, Heart, Wind, Zap, Flame, Brain, Dumbbell } from 'lucide-react';
import { WhyChooseUsData } from '../../types';

function MeditationIcon({ className = "w-7 h-7 sm:w-8 sm:h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="6.2" r="2.2" />
      <path d="M12 9.2v4.6" />
      <path d="M9.8 10.5C8 11.2 7 13 7 15.5c0 1.8 1.2 2.5 2.5 2.5" />
      <path d="M14.2 10.5c1.8 0.7 2.8 2.5 2.8 5 0 1.8-1.2 2.5-2.5 2.5" />
      <path d="M12 18.2c-3.2 0-6.2-.4-6.2-1.9 0-1.5 3-1.9 6.2-1.2" />
      <path d="M12 18.2c3.2 0 6.2-.4 6.2-1.9 0-1.5-3-1.9-6.2-1.2" />
    </svg>
  );
}

function renderFeatureIcon(iconName: string) {
  switch (iconName?.toLowerCase()) {
    case 'flower2':
    case 'lotus':
      return <Flower2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />;
    case 'heart':
      return <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />;
    case 'wind':
      return <Wind className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />;
    case 'zap':
      return <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />;
    case 'flame':
      return <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />;
    case 'brain':
      return <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />;
    case 'dumbbell':
      return <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />;
    case 'meditation':
    default:
      return <MeditationIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />;
  }
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  const subtitle = data?.subtitle || "WHY CHOOSE US";
  const title1 = data?.title_line1 || "Your Wellness, ";
  const title2 = data?.title_line2 || "Our Priority";
  const desc = data?.description || "At Aarogya, we combine traditional yoga wisdom with modern wellness practices to help you achieve a healthier, happier and more balanced life.";
  const centerImage = data?.center_image || "/img/about.webp";

  const leftItems = data?.left_features || [];
  const rightItems = data?.right_features || [];

  return (
    <section className="py-5 sm:py-7 lg:py-8 bg-[#151515] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 lg:mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-[1px] bg-[#c4a261]"></div>
            <span className="text-[#c4a261] tracking-[0.2em] text-[13px] font-semibold uppercase">
              {subtitle}
            </span>
            <div className="w-12 h-[1px] bg-[#c4a261]"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-2 leading-tight">
            <span className="text-white">{title1}</span>
            <span className="text-[#c4a261]">{title2}</span>
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto">
            {desc}
          </p>
        </motion.div>

        {/* Features Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative">
          
          {/* Central Glow / Highlight Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#c4a261]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

          {/* Left Column */}
          <div className="w-full lg:w-[31%] flex flex-col gap-4 z-10">
            {leftItems.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-[#161616] hover:border-[#c4a261]/50 hover:bg-[#1a1a1a] transition-all duration-300 shadow-md group"
              >
                {/* Circular Icon with golden border & inner radial glow */}
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#c4a261] flex items-center justify-center shrink-0 relative shadow-[0_0_15px_rgba(196,162,97,0.15)] group-hover:border-[#e2b765] group-hover:shadow-[0_0_20px_rgba(196,162,97,0.3)] transition-all"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(196, 162, 97, 0.25) 0%, rgba(30, 24, 14, 0.9) 65%, #141414 100%)'
                  }}
                >
                  {renderFeatureIcon(feature.icon)}
                </div>

                {/* Golden Vertical Divider Line */}
                <div className="w-[1.5px] h-10 sm:h-11 bg-[#c4a261] shrink-0"></div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-[#c4a261] text-[17px] sm:text-[18px] leading-tight mb-1 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-white text-[13px] sm:text-[14px] leading-snug">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[34%] flex justify-center z-10 relative my-6 lg:my-0"
          >
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              {/* Stylized rings behind the image */}
              <div className="absolute inset-0 border-[1px] border-[#c4a261]/30 rounded-full scale-90 opacity-50"></div>
              <div className="absolute inset-0 border-[1px] border-[#c4a261]/20 rounded-full scale-105 opacity-50"></div>
              
              <img 
                src={centerImage} 
                alt={title1} 
                className="w-full h-full object-cover object-center rounded-[3rem] shadow-2xl relative z-10"
              />
              
              {/* Gradient overlay at bottom to blend into background */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#151515] to-transparent z-20"></div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="w-full lg:w-[31%] flex flex-col gap-4 z-10">
            {rightItems.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-[#161616] hover:border-[#c4a261]/50 hover:bg-[#1a1a1a] transition-all duration-300 shadow-md group"
              >
                {/* Circular Icon with golden border & inner radial glow */}
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#c4a261] flex items-center justify-center shrink-0 relative shadow-[0_0_15px_rgba(196,162,97,0.15)] group-hover:border-[#e2b765] group-hover:shadow-[0_0_20px_rgba(196,162,97,0.3)] transition-all"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(196, 162, 97, 0.25) 0%, rgba(30, 24, 14, 0.9) 65%, #141414 100%)'
                  }}
                >
                  {renderFeatureIcon(feature.icon)}
                </div>

                {/* Golden Vertical Divider Line */}
                <div className="w-[1.5px] h-10 sm:h-11 bg-[#c4a261] shrink-0"></div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-[#c4a261] text-[17px] sm:text-[18px] leading-tight mb-1 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-white text-[13px] sm:text-[14px] leading-snug">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
