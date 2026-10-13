'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FooterData } from '../../types';
import { ChevronDown } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa6';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface FooterProps {
  data: FooterData;
}

const socialIcons: Record<string, IconType> = { Facebook: FaFacebookF, Twitter: FaXTwitter, Instagram: FaInstagram, Youtube: FaYoutube, Linkedin: FaLinkedinIn };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Footer({ data }: FooterProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const servicesList = (data.our_services || []).slice(0, 8);

  return (
    <footer className="bg-[#111111] pt-12 border-t border-[#c4a261]/20">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1.05fr] gap-8 lg:gap-10 mb-8 lg:mb-10 items-start"
        >
          {/* Column 1: Logo & Description (Always Visible) */}
          <motion.div variants={itemVariants} className="pr-2 lg:pr-8 mb-8 md:mb-0 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="inline-block mb-2">
               <img src={data.logo_image || "/logo/logo.webp"} alt={data.logo_text || "Aarogya Logo"} className="h-20 sm:h-24 w-auto object-contain" />
            </Link>
            <p className="text-gray-300 text-[15px] md:text-[16.5px] leading-relaxed mb-5 md:mb-5">
              {data.description}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {data.socials.map((social, idx) => {
                const SocialIcon = socialIcons[social.icon] || FaFacebookF;
                return (
                  <Link key={idx} href={social.href} className="w-11 h-11 rounded-full border border-[#c4a261] flex items-center justify-center text-white hover:bg-[#c4a261] transition-all duration-300">
                    <SocialIcon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="border-t border-[#c4a261]/20 md:border-none pt-4 md:pt-0">
            <button 
              className="w-full text-left md:cursor-default flex justify-between items-center md:block"
              onClick={() => toggleAccordion(2)}
            >
              <h4 className="text-white font-bold text-[20px] md:mb-2">Quick <span className="text-[#c4a261]">Links</span></h4>
              <ChevronDown className={`w-5 h-5 text-[#c4a261] md:hidden transition-transform duration-300 ${expanded === 2 ? 'rotate-180' : ''}`} />
            </button>
            <div className="hidden md:block w-8 h-[2px] bg-[#c4a261] mb-6"></div>
            
            <div className={`overflow-hidden transition-all duration-300 md:max-h-none md:overflow-visible ${expanded === 2 ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'} md:opacity-100 md:mt-0`}>
              <ul className="space-y-2 pb-2 md:pb-0">
                {data.quick_links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-gray-300 hover:text-white text-[14px] flex items-center gap-2.5 transition-colors group">
                      <span className="text-[#c4a261] font-bold text-lg leading-none group-hover:translate-x-1 transition-transform">&rsaquo;</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Column 3: Our Services */}
          <motion.div variants={itemVariants} className="border-t border-[#c4a261]/20 md:border-none pt-4 md:pt-0">
            <button 
              className="w-full text-left md:cursor-default flex justify-between items-center md:block"
              onClick={() => toggleAccordion(3)}
            >
              <h4 className="text-white font-bold text-[20px] md:mb-2">Our <span className="text-[#c4a261]">Services</span></h4>
              <ChevronDown className={`w-5 h-5 text-[#c4a261] md:hidden transition-transform duration-300 ${expanded === 3 ? 'rotate-180' : ''}`} />
            </button>
            <div className="hidden md:block w-8 h-[2px] bg-[#c4a261] mb-6"></div>
            
            <div className={`overflow-hidden transition-all duration-300 md:max-h-none md:overflow-visible ${expanded === 3 ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'} md:opacity-100 md:mt-0`}>
              <ul className="space-y-2 pb-2 md:pb-0">
                {servicesList.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-gray-300 hover:text-white text-[14px] flex items-center gap-2.5 transition-colors group">
                      <span className="text-[#c4a261] font-bold text-lg leading-none group-hover:translate-x-1 transition-transform">&rsaquo;</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Column 4: Contact Us */}
          <motion.div variants={itemVariants} className="border-y border-[#c4a261]/20 md:border-none py-4 md:py-0">
            <button 
              className="w-full text-left md:cursor-default flex justify-between items-center md:block"
              onClick={() => toggleAccordion(4)}
            >
              <h4 className="text-white font-bold text-[20px] md:mb-2">Contact <span className="text-[#c4a261]">Us</span></h4>
              <ChevronDown className={`w-5 h-5 text-[#c4a261] md:hidden transition-transform duration-300 ${expanded === 4 ? 'rotate-180' : ''}`} />
            </button>
            <div className="hidden md:block w-8 h-[2px] bg-[#c4a261] mb-6"></div>
            
            <div className={`overflow-hidden transition-all duration-300 md:max-h-none md:overflow-visible ${expanded === 4 ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'} md:opacity-100 md:mt-0`}>
              <div className="space-y-5 pb-2 md:pb-0">
                <a 
                  href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} 
                  className="flex items-start gap-4 group transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7a602d] group-hover:bg-[#c4a261] flex items-center justify-center text-white flex-shrink-0 transition-colors shadow-sm">
                    <FaPhoneAlt className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-[#c4a261] text-[16px] font-medium leading-tight mb-1 transition-colors">{data.contact.phone}</p>
                    <p className="text-gray-500 text-[13px]">{data.contact.hours}</p>
                  </div>
                </a>
                
                <a 
                  href={`mailto:${data.contact.email}`} 
                  className="flex items-start gap-4 group transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7a602d] group-hover:bg-[#c4a261] flex items-center justify-center text-white flex-shrink-0 transition-colors shadow-sm">
                    <FaEnvelope className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-[#c4a261] text-[16px] font-medium leading-tight mb-1 transition-colors">{data.contact.email}</p>
                    <p className="text-gray-500 text-[13px]">{data.contact.reply_text || "We reply within 24 hours"}</p>
                  </div>
                </a>
                
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(data.contact.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 group transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7a602d] group-hover:bg-[#c4a261] flex items-center justify-center text-white flex-shrink-0 transition-colors shadow-sm">
                    <FaMapMarkerAlt className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-gray-300 group-hover:text-[#c4a261] text-[15px] leading-relaxed transition-colors">
                    {data.contact.address}
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
        
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-[#c4a261]/20 py-4">
         <div className="container mx-auto px-4 md:px-8 max-w-[1400px] flex items-center justify-center text-center">
           <p className="text-gray-400 text-[13px] sm:text-[14px]">
             {data.copyright || "Copyright © 2026. All rights reserved. Powered by Lestow"}
           </p>
         </div>
      </div>
    </footer>
  );
}
