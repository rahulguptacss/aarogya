'use client';
import React from 'react';
import Link from 'next/link';
import { TeamData } from '../../types';
import { ArrowUpRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface TeamProps {
  data: TeamData;
}

const icons: Record<string, IconType> = { 
  Facebook: FaFacebookF, 
  Twitter: FaInstagram, // Mapping Twitter from data to Instagram to match screenshot
  Linkedin: FaLinkedinIn, 
  Youtube: FaYoutube 
};

// Fallback images if local files don't exist
const fallbackImages = [
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=600&auto=format&fit=crop"
];

export default function Team({ data }: TeamProps) {
  return (
    <section className="py-6 lg:py-10 bg-[#151515] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 lg:mb-8"
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
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide uppercase">
            {data.subtitle.split(' ').map((word, i, arr) => (
              <span key={i} className={i === arr.length - 1 ? "text-[#c4a261]" : "text-white"}>
                {word}{i !== arr.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h2>
          <p className="text-gray-400 text-[15px] lg:text-[16px] max-w-2xl mx-auto">
            {data.title}
          </p>
        </motion.div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
          {data.members.map((member, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={idx} 
              className="bg-[#1c1c1c] rounded-[1.5rem] overflow-hidden border border-white/5 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c4a261]/10"
            >
              
              {/* Image with padding inside card */}
              <div className="p-3 pb-0">
                <div className="h-[210px] w-full rounded-xl overflow-hidden relative">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-bold text-white mb-0.5">{member.name}</h3>
                <p className="text-[#c4a261] text-[13px] font-semibold tracking-wide mb-3">{member.role}</p>
                
                {/* Small Divider */}
                <div className="w-8 h-[1px] bg-[#c4a261]/40 mb-2"></div>
                
                <p className="text-gray-400 text-[13px] leading-relaxed mb-4 line-clamp-3">
                  {member.description}
                </p>
                
                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  {member.socials.map((social, sidx) => {
                    const SocialIcon = icons[social.icon] || FaFacebookF;
                    return (
                      <Link key={sidx} href={social.href} className="w-8 h-8 rounded-full border border-[#c4a261]/80 flex items-center justify-center text-gray-300 hover:bg-[#c4a261] hover:text-[#151515] transition-colors">
                        <SocialIcon className="w-3.5 h-3.5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
           <Link href={data.button.href} className="inline-flex items-center gap-3 bg-[#c4a261] text-[#151515] hover:bg-[#b09054] pl-8 pr-2 py-2 rounded-full font-bold text-[15px] transition-all">
             {data.button.text || "View More"}
             <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 ml-2">
               <ArrowUpRight className="w-5 h-5 text-[#151515]" strokeWidth={2.5} />
             </div>
           </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
