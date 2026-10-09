"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderData } from '../../types';
import { Calendar, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  data: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 left-0 right-0 z-50 py-2 px-4 md:px-8 bg-[#151515] border-b border-white/5 shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
           <img src="/logo/logo.png" alt="Aarogya Logo" className="h-12 sm:h-14 md:h-20 w-auto object-contain" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {data.links.map((link, index) => {
            const isActive = link.name === 'Home';
            return (
              <Link 
                key={index} 
                href={link.href} 
                className={`text-sm font-medium transition-colors relative py-2 ${isActive ? 'text-[#c4a261]' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c4a261]" 
                  />
                )}
              </Link>
            );
          })}
        </nav>
        
        {/* Desktop Button */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="w-px h-8 bg-white/20"></div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={data.button_link} className="flex items-center gap-2 bg-[#c4a261] hover:bg-[#b09054] text-white px-6 py-2.5 rounded-full transition-colors text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>{data.button_text}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Header Buttons */}
        <div className="lg:hidden flex items-center gap-3">
          <Link href={data.button_link} className="flex items-center gap-1.5 bg-[#c4a261] hover:bg-[#b09054] text-white px-4 py-2 rounded-full transition-colors text-[13px] font-medium">
            <Calendar className="w-3.5 h-3.5" />
            <span>{data.button_text}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button 
            className="bg-[#c4a261] text-white p-2 rounded-lg hover:bg-[#b09054] transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#151515] border-t border-white/5 absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {data.links.map((link, index) => {
                const isActive = link.name === 'Home';
                return (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg font-medium transition-colors ${isActive ? 'text-[#C6A87C]' : 'text-gray-300 hover:text-white'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
