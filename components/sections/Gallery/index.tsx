"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GallerySectionData } from '../../types';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GalleryProps {
  data: GallerySectionData;
}

export default function Gallery({ data }: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const itemsPerPage = 16;
  const items = data?.items || [];
  const totalPages = Math.ceil(items.length / itemsPerPage) || data?.pagination?.total_pages || 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === 0 ? displayedItems.length - 1 : prev! - 1));
  }, [selectedIndex, displayedItems.length]);

  const handleNextImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === displayedItems.length - 1 ? 0 : prev! + 1));
  }, [selectedIndex, displayedItems.length]);

  const handleCloseModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation for popup
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrevImage, handleNextImage, handleCloseModal]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    setSelectedIndex(null);
    const sectionEl = document.getElementById('gallery-section');
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!data) return null;

  const currentPhoto = selectedIndex !== null ? displayedItems[selectedIndex] : null;

  // Stagger motion container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="gallery-section" className="py-5 sm:py-7 lg:py-8 bg-[#151515] relative overflow-hidden">
      <div className="container mx-auto px-2.5 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header with reduced top/bottom spacing */}
        <div className="text-center mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2.5 sm:gap-4 mb-2 sm:mb-2.5"
          >
            <span className="h-[1px] w-8 sm:w-12 bg-[#c4a261]"></span>
            <span className="text-[#c4a261] text-[11px] sm:text-[13px] tracking-[0.25em] font-medium uppercase font-sans">
              {data.subtitle}
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#c4a261]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold tracking-tight text-center leading-tight mb-2"
          >
            <span className="text-white">{data.title_line1}</span>
            <span className="text-[#c4a261] ml-2 sm:ml-2.5">
              {data.title_highlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-neutral-300 sm:text-neutral-400 text-[11.5px] sm:text-sm max-w-xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Gallery Grid: 2 columns on Mobile, 4 columns on Tablet/Desktop, with reduced gap */}
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5"
        >
          {displayedItems.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => setSelectedIndex(idx)}
              className="group relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-[#c4a261]/25 hover:border-[#c4a261] transition-colors duration-300 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(196,162,97,0.25)]"
            >
              <Image
                src={item.image}
                alt={item.title || `Yoga gallery moment ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
              />

              {/* Overlay with subtle gold sheen and title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-2.5 sm:p-3.5">
                <div className="self-end">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 text-[#c4a261] flex items-center justify-center backdrop-blur-sm shadow border border-[#c4a261]/30">
                    <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                </div>
                <div>
                  <span className="text-[#c4a261] text-[9.5px] sm:text-[11px] font-semibold uppercase tracking-wider block mb-0.5">
                    View
                  </span>
                  <span className="text-white text-xs sm:text-[13px] font-semibold truncate block drop-shadow-md">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Section with compact margin */}
        <div className="mt-5 sm:mt-8 flex items-center justify-center gap-1.5 sm:gap-2">
          {/* Previous Page Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 flex items-center justify-center text-sm transition-all ${
              currentPage === 1
                ? 'opacity-30 cursor-not-allowed bg-[#181818] text-white/30'
                : 'bg-[#181818] text-white/80 hover:text-white hover:border-[#c4a261]/60 cursor-pointer active:scale-95'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Numbered Page Buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
            const isActive = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                aria-label={`Page ${pageNum}`}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#e5b85a] text-[#151515] shadow-md border border-[#e5b85a]'
                    : 'bg-[#181818] text-white/70 hover:text-white border border-white/10 hover:border-[#c4a261]/50 active:scale-95'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Page Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 flex items-center justify-center text-sm transition-all ${
              currentPage === totalPages
                ? 'opacity-30 cursor-not-allowed bg-[#181818] text-white/30'
                : 'bg-[#181818] text-white/80 hover:text-white hover:border-[#c4a261]/60 cursor-pointer active:scale-95'
            }`}
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal with Next & Prev Navigation */}
      <AnimatePresence>
        {selectedIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              aria-label="Close Preview"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 text-white/80 hover:text-white bg-white/10 hover:bg-red-500/80 p-2 sm:p-2.5 rounded-full transition-all border border-white/10 cursor-pointer active:scale-95"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Prev Image Button in Popup */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              aria-label="Previous Image"
              className="absolute left-2.5 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#c4a261] text-white hover:text-black border border-white/20 hover:border-[#c4a261] flex items-center justify-center transition-all duration-200 shadow-2xl cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Next Image Button in Popup */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              aria-label="Next Image"
              className="absolute right-2.5 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#c4a261] text-white hover:text-black border border-white/20 hover:border-[#c4a261] flex items-center justify-center transition-all duration-200 shadow-2xl cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Image Container with AnimatePresence */}
            <motion.div
              key={currentPhoto.id || selectedIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-[#c4a261]/40 shadow-2xl bg-black/40"
            >
              <Image
                src={currentPhoto.image}
                alt={currentPhoto.title || 'Yoga photo preview'}
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Title & Counter Badge at Bottom */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/80 border border-white/15 text-white text-[11px] sm:text-sm font-medium flex items-center gap-2.5 sm:gap-3 backdrop-blur-md shadow-lg"
            >
              <span className="truncate max-w-[150px] sm:max-w-xs">{currentPhoto.title}</span>
              <span className="text-[#c4a261] font-semibold border-l border-white/20 pl-2.5 sm:pl-3">
                {selectedIndex + 1} / {displayedItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
