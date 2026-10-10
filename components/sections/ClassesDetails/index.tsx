"use client";

import React from 'react';
import Link from 'next/link';
import { ClassesDetailData } from '../../types';
import { 
  ArrowRight, 
  Check, 
  Dumbbell, 
  Brain, 
  ClipboardList, 
  TrendingUp,
  Activity,
  Wind,
  Zap,
  Flame,
  Moon,
  Sparkles,
  Heart,
  Shield,
  Feather,
  Flower2,
  Eye,
  Smile,
  Sun
} from 'lucide-react';
import { motion } from 'framer-motion';

// Meditation icon matching screenshot icon 1
function MeditationIcon({ className = "w-9 h-9 text-white" }: { className?: string }) {
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
      <circle cx="12" cy="5.5" r="2" />
      <path d="M12 8v5" />
      <path d="M9.5 10C8 11 7 12.5 7 14.5c0 1.5 1 2.5 2 2.5" />
      <path d="M14.5 10c1.5 1 2.5 2.5 2.5 4.5 0 1.5-1 2.5-2 2.5" />
      <path d="M6 19c2.5-1 9.5-1 12 0" />
      <path d="M9 16.5l-3 2.5" />
      <path d="M15 16.5l3 2.5" />
    </svg>
  );
}

// Lotus icon matching screenshot icon 3
function LotusIcon({ className = "w-9 h-9 text-white" }: { className?: string }) {
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
      <path d="M12 4c-1.5 2.5-2 5-2 7.5a2 2 0 0 0 4 0C14 9 13.5 6.5 12 4z" />
      <path d="M9.5 7.5C7.5 9.5 6.5 12 7 14c1 0 2.2-.5 3-1.8" />
      <path d="M14.5 7.5c2 2 3 4.5 2.5 6.5-1 0-2.2-.5-3-1.8" />
      <path d="M5 14.5c-.8 1.8-.5 3.5 1.5 4 2.5.5 4.5-.8 5.5-2" />
      <path d="M19 14.5c.8 1.8.5 3.5-1.5 4-2.5.5-4.5-.8-5.5-2" />
      <path d="M8.5 19.5c2.2.8 4.8.8 7 0" />
    </svg>
  );
}

export interface ClassesDetailsProps {
  data: ClassesDetailData;
}

export default function ClassesDetails({ data }: ClassesDetailsProps) {
  const renderFeatureIcon = (iconName: string) => {
    const iconClass = "w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform duration-300";
    switch (iconName?.toLowerCase()) {
      case 'dumbbell':
        return <Dumbbell className={iconClass} strokeWidth={1.8} />;
      case 'lotus':
        return <LotusIcon className={iconClass} />;
      case 'flower2':
        return <Flower2 className={iconClass} strokeWidth={1.8} />;
      case 'brain':
        return <Brain className={iconClass} strokeWidth={1.8} />;
      case 'activity':
      case 'trendingup':
        return <Activity className={iconClass} strokeWidth={1.8} />;
      case 'wind':
        return <Wind className={iconClass} strokeWidth={1.8} />;
      case 'zap':
        return <Zap className={iconClass} strokeWidth={1.8} />;
      case 'flame':
        return <Flame className={iconClass} strokeWidth={1.8} />;
      case 'moon':
        return <Moon className={iconClass} strokeWidth={1.8} />;
      case 'sparkles':
        return <Sparkles className={iconClass} strokeWidth={1.8} />;
      case 'heart':
        return <Heart className={iconClass} strokeWidth={1.8} />;
      case 'shield':
        return <Shield className={iconClass} strokeWidth={1.8} />;
      case 'feather':
        return <Feather className={iconClass} strokeWidth={1.8} />;
      case 'sun':
        return <Sun className={iconClass} strokeWidth={1.8} />;
      case 'eye':
        return <Eye className={iconClass} strokeWidth={1.8} />;
      case 'smile':
        return <Smile className={iconClass} strokeWidth={1.8} />;
      case 'meditation':
      default:
        return <MeditationIcon className={iconClass} />;
    }
  };

  const renderProcessIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case 'consultation':
      case 'clipboard':
        return <ClipboardList className="w-8 h-8 text-white" strokeWidth={1.6} />;
      case 'guidedpractice':
      case 'lotus':
        return <LotusIcon className="w-8 h-8 text-white" />;
      case 'stayconsistent':
      case 'meditation':
        return <MeditationIcon className="w-8 h-8 text-white" />;
      case 'achieveresults':
      case 'trendingup':
        return <TrendingUp className="w-8 h-8 text-white" strokeWidth={1.6} />;
      default:
        return <MeditationIcon className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="bg-[#121212] text-white overflow-hidden">
      {/* 1. Main Overview Section (Exact design matching screenshot with animations) */}
      <section className="py-5 sm:py-7 lg:py-8 relative overflow-hidden bg-[#121212]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Image with Golden Offset Shape */}
            <motion.div 
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[530px] lg:max-w-[560px]">
                {/* Golden Offset Backing Card - shifted to the RIGHT and BOTTOM */}
                <motion.div 
                  className="absolute inset-0 translate-x-5 translate-y-5 sm:translate-x-7 sm:translate-y-7 lg:translate-x-8 lg:translate-y-8 bg-[#e5b85a] rounded-[2.5rem] sm:rounded-[3rem] z-0 shadow-xl"
                  aria-hidden="true"
                  animate={{
                    boxShadow: [
                      '0 10px 25px -5px rgba(229,184,90,0.25)',
                      '0 15px 35px -5px rgba(229,184,90,0.4)',
                      '0 10px 25px -5px rgba(229,184,90,0.25)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Main Image Container with subtle hover zoom */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative z-10 w-full h-[330px] sm:h-[410px] lg:h-[440px] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-[#1a1a1a] border border-white/5 cursor-pointer"
                >
                  <img 
                    src={data.image || "/class/hatha_yoga_detail.webp"} 
                    alt={data.title_line1} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-1/2 flex flex-col items-start lg:pl-6 max-w-[620px]"
            >
              {/* Category Tag with Animated Golden Line */}
              <div className="flex items-center gap-3.5 mb-4">
                <motion.span 
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-11 h-[2px] bg-[#e5b85a] inline-block"
                />
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-[#e5b85a] text-xs sm:text-[13.5px] font-semibold tracking-[0.22em] uppercase"
                >
                  {data.category}
                </motion.span>
              </div>

              {/* Title: Line 1 White, Line 2 Gold */}
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.65rem] leading-[1.08] tracking-tight mb-5"
              >
                <span className="text-white block">{data.title_line1}</span>
                <span className="text-[#e5b85a] block mt-1">{data.title_line2}</span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#d1d5db] text-[15px] sm:text-[16px] leading-[1.78] font-normal max-w-[560px] mb-8"
              >
                {data.description}
              </motion.p>

              {/* Book a Class Button with Motion */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  href={data.button_link && data.button_link !== '#' ? data.button_link : '/book-a-appointment'}
                  className="inline-flex items-center gap-4 bg-[#e5b85a] hover:bg-[#d8a846] text-[#151515] font-bold text-[15px] pl-8 pr-2 py-2 rounded-full transition-all duration-300 shadow-xl hover:shadow-[#e5b85a]/25 group/btn"
                >
                  <motion.span 
                    whileHover={{ scale: 1.02 }}
                    className="font-bold tracking-tight text-[#151515]"
                  >
                    {data.button_text || "Book a Class"}
                  </motion.span>
                  <motion.div 
                    whileHover={{ x: 4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4 text-[#151515]" strokeWidth={2.8} />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. 4 Feature Badges (Mobile: 2 per row, Desktop: 4 in 1 row with Interactive Motion) */}
      <section className="py-5 sm:py-7 lg:py-8 bg-[#0e0e0e] border-y border-white/10 relative">
        <div className="container mx-auto px-3 sm:px-6 md:px-8 max-w-[1400px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2 sm:gap-x-4 lg:gap-0">
            {data.features?.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8 }}
                className={`text-center flex flex-col items-center px-2.5 sm:px-4 lg:px-6 relative cursor-pointer group ${
                  idx % 2 === 0 
                    ? 'border-r border-white/10' 
                    : (idx === 1 ? 'lg:border-r lg:border-white/10' : '')
                }`}
              >
                {/* Circular Gold Icon Badge with Interactive Scale & Glow Motion */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.12, 
                    rotate: [0, -3, 3, 0] 
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full border-2 border-[#e5b85a] flex items-center justify-center mb-3.5 sm:mb-4 lg:mb-5 relative shadow-[0_0_20px_rgba(229,184,90,0.15)] group-hover:shadow-[0_0_30px_rgba(229,184,90,0.45)] group-hover:border-[#f3cf7a] transition-all duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(229, 184, 90, 0.22) 0%, rgba(22, 19, 13, 0.95) 65%, #0e0e0e 100%)',
                  }}
                >
                  {renderFeatureIcon(feature.icon)}
                </motion.div>

                <h3 className="font-serif font-bold text-[#e5b85a] group-hover:text-[#f3cf7a] text-[15px] sm:text-[17px] lg:text-[19px] mb-1.5 sm:mb-2 leading-tight transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-[#d1d5db] text-[11.5px] sm:text-xs lg:text-[13.5px] leading-relaxed max-w-[200px] sm:max-w-[230px] mx-auto group-hover:text-white transition-colors duration-200">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Key Benefits Section with Motion */}
      <section className="py-5 sm:py-7 lg:py-8 relative overflow-hidden bg-[#121212]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Content (Benefits List) */}
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-4 h-[1.5px] bg-[#e5b85a]"></span>
                <span className="text-[#e5b85a] text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
                  {data.benefits_tag || "KEY BENEFITS"}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.18] mb-4">
                <span className="text-white block">{data.benefits_title_line1}</span>
                <span className="text-[#e5b85a] block">{data.benefits_title_line2}</span>
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed mb-6">
                {data.benefits_description}
              </p>

              {/* Interactive Animated Checklist */}
              <div className="space-y-3.5 w-full">
                {data.benefits_list?.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 text-gray-200 text-sm sm:text-[15px] font-medium cursor-pointer group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 rounded-full border border-[#e5b85a] group-hover:bg-[#e5b85a] group-hover:text-[#151515] flex items-center justify-center text-[#e5b85a] shrink-0 transition-colors"
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </motion.div>
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image with Golden Offset Shape */}
            <motion.div 
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[500px]">
                {/* Golden Backing Plate */}
                <motion.div 
                  className="absolute inset-0 -translate-x-5 translate-y-5 sm:-translate-x-7 sm:translate-y-7 bg-[#e5b85a] rounded-[2.5rem] sm:rounded-[3rem] z-0 shadow-lg"
                  aria-hidden="true"
                  animate={{
                    scale: [1, 1.01, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Image */}
                <motion.div 
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-full h-[320px] sm:h-[390px] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#111] cursor-pointer"
                >
                  <img 
                    src={data.benefits_image || "/class/yoga_pose_04.webp"} 
                    alt="Benefits" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Process Steps (How It Works with Card Hover Motions) */}
      <section className="py-5 sm:py-7 lg:py-8 bg-[#161616] relative">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-4 h-[1.5px] bg-[#e5b85a]"></span>
              <span className="text-[#e5b85a] text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
                {data.process_tag || "OUR PROCESS"}
              </span>
              <span className="w-4 h-[1.5px] bg-[#e5b85a]"></span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              {data.process_title}
            </h2>
          </motion.div>

          {/* Steps Grid (4 Steps with Step Number Badges) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {data.process_steps?.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ 
                    y: -10, 
                    borderColor: "rgba(229, 184, 90, 0.45)",
                    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.5)"
                  }}
                  className="bg-[#111111] rounded-3xl p-6 sm:p-7 border border-white/5 relative flex flex-col items-start transition-all duration-300 group cursor-pointer"
                >
                  {/* Step Number Top-Right */}
                  <span className="absolute top-6 right-6 font-serif font-bold text-2xl sm:text-3xl text-gray-500/40 group-hover:text-[#e5b85a] group-hover:scale-110 transition-all duration-300">
                    {step.step}
                  </span>

                  {/* Icon with Gold Circular Border */}
                  <motion.div 
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full border-2 border-[#e5b85a] flex items-center justify-center mb-5 relative shadow-[0_0_15px_rgba(229,184,90,0.18)] group-hover:shadow-[0_0_25px_rgba(229,184,90,0.35)] transition-all duration-300"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(229,184,90,0.25) 0%, rgba(28,24,16,0.95) 75%, #151515 100%)'
                    }}
                  >
                    {renderProcessIcon(step.icon)}
                  </motion.div>

                  {/* Title & Desc */}
                  <h4 className="font-bold text-white text-base sm:text-[17px] mb-1.5 group-hover:text-[#e5b85a] transition-colors duration-200">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                    {step.desc}
                  </p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

// Aliases for compatibility
export const ServiceDetails = ClassesDetails;
