"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ClassesSectionData } from '../../types';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ClassesProps {
  data: ClassesSectionData;
}

export default function Classes({ data }: ClassesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const itemsPerPage = 6;
  const totalPages = Math.ceil((data?.items?.length || 0) / itemsPerPage) || 6;

  // Sliced items for the current active page
  const currentItems = data?.items?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) || [];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Generate pagination numbers matching screenshot layout
  const getPaginationItems = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 2) {
      return [1, 2, 3, '...', totalPages];
    } else if (currentPage >= totalPages - 1) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [1, currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
  };

  return (
    <section ref={sectionRef} className="py-5 sm:py-7 lg:py-8 bg-[#151515] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        {/* Classes Cards Grid (2 Columns) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`page-${currentPage}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5"
          >
            {currentItems.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-[#181818] border border-white/5 hover:border-[#c4a261]/40 rounded-[2.2rem] p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 transition-all duration-300 shadow-xl group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c4a261]/10"
              >
                {/* Left side Image with golden offset decorative backing */}
                <div className="relative w-full sm:w-[220px] md:w-[240px] h-[200px] sm:h-[210px] shrink-0">
                  <div 
                    className={`absolute rounded-[1.8rem] bg-[#c4a261] z-0 transition-transform duration-300 group-hover:scale-105 ${
                      idx % 2 === 0
                        ? 'top-2.5 -bottom-2 -left-2 right-2.5'
                        : 'top-2 -bottom-2.5 -right-2 left-2.5'
                    }`}
                  />
                  <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden z-10 border border-white/10 shadow-lg bg-[#111]">
                    <img 
                      src={item.image} 
                      alt={`${item.title_line1} ${item.title_line2}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </div>

                {/* Right side Content */}
                <div className="flex-1 w-full flex flex-col justify-between py-1">
                  <div>
                    {/* Category Tag */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3.5 h-[1.5px] bg-[#c4a261]"></span>
                      <span className="text-[#c4a261] text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase">
                        {item.category}
                      </span>
                    </div>

                    {/* Title (Line 1: White, Line 2: Gold) */}
                    <h3 className="font-serif font-bold text-2xl sm:text-[1.65rem] leading-[1.18] mb-3">
                      <span className="text-white block">{item.title_line1}</span>
                      <span className="text-[#c4a261] block">{item.title_line2}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-[13px] sm:text-[13.5px] leading-relaxed mb-5 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Read More Pill Button */}
                  <div>
                    <Link 
                      href={item.button_link || "/classes"}
                      className="inline-flex items-center gap-3 bg-[#c4a261] hover:bg-[#b09054] text-[#151515] font-bold text-[13px] sm:text-[14px] pl-5 pr-1.5 py-1.5 rounded-full transition-all group/btn hover:scale-105 active:scale-95 shadow-md"
                    >
                      <span>{item.button_text || "Read More"}</span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shrink-0 group-hover/btn:translate-x-0.5 transition-transform shadow-sm">
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#151515]" strokeWidth={2.5} />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Working Pagination Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-10 lg:mt-12">
          {/* Previous Page Button */}
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 bg-[#1a1a1a] flex items-center justify-center transition-all ${
              currentPage === 1 
                ? 'opacity-40 cursor-not-allowed text-gray-500' 
                : 'text-gray-300 hover:text-white hover:border-[#c4a261]/50 cursor-pointer active:scale-95'
            }`}
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {/* Number Buttons & Ellipsis */}
          {getPaginationItems().map((item, idx) => {
            if (item === '...') {
              return (
                <span key={`dots-${idx}`} className="text-gray-500 font-bold px-1 select-none">
                  ...
                </span>
              );
            }

            const pageNum = item as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg font-bold text-sm flex items-center justify-center transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c4a261] text-[#151515] shadow-lg shadow-[#c4a261]/20 scale-105 border border-[#c4a261]'
                    : 'border border-white/10 bg-[#1a1a1a] text-gray-300 hover:border-white hover:text-white active:scale-95'
                }`}
                aria-label={`Go to page ${pageNum}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNum}
              </button>
            );
          })}
          
          {/* Next Page Button */}
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 bg-[#1a1a1a] flex items-center justify-center transition-all ${
              currentPage === totalPages 
                ? 'opacity-40 cursor-not-allowed text-gray-500' 
                : 'text-gray-300 hover:text-white hover:border-[#c4a261]/50 cursor-pointer active:scale-95'
            }`}
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
