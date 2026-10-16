"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, ArrowRight, CheckCircle2, Share2 } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa6';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactSectionData } from '../../types';

interface ContactProps {
  data?: ContactSectionData;
}

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Youtube: FaYoutube,
  Pinterest: FaPinterestP,
};

export default function Contact({ data }: ContactProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneValue = data?.phone || '+100000000000';
  const emailValue = data?.email || 'info@xyz.com';
  const addressValue = data?.address || '123 Education Lane';
  const addressCityValue = data?.address_city || 'New York, NY 10001';
  const mapUrl = data?.location_map_url || `https://maps.google.com/?q=${encodeURIComponent(addressValue + ' ' + addressCityValue)}`;

  const defaultSocials = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
    { name: 'Youtube', icon: 'Youtube', url: 'https://youtube.com' },
    { name: 'Pinterest', icon: 'Pinterest', url: 'https://pinterest.com' },
  ];

  const socialsList = data?.socials && data.socials.length > 0 ? data.socials : defaultSocials;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    router.push('/thank-you');
  };

  return (
    <section className="relative bg-[#111111] py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Decorative Golden Lotus Flower Outline in Top Right with Floating Animation */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -right-6 sm:-top-14 sm:right-4 w-56 h-56 sm:w-80 sm:h-80 pointer-events-none opacity-20 sm:opacity-25 select-none z-0"
      >
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#c4a261]">
          <path d="M150 40 C170 90 200 130 200 170 C200 200 180 230 150 240 C120 230 100 200 100 170 C100 130 130 90 150 40 Z" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M150 70 C190 110 240 140 240 180 C240 215 210 240 170 245 C185 215 185 180 170 145 Z" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M150 70 C110 110 60 140 60 180 C60 215 90 240 130 245 C115 215 115 180 130 145 Z" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M170 120 C230 135 285 170 280 205 C275 235 240 250 200 250 C215 225 215 195 200 165 Z" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M130 120 C70 135 15 170 20 205 C25 235 60 250 100 250 C85 225 85 195 100 165 Z" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M70 245 C110 270 190 270 230 245" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 space-y-10 sm:space-y-12 lg:space-y-14">
        
        {/* 1. Top Section: Left Image (as in screenshot) & Right Header + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Featured Image with Decorative Offset Panel & Wellness Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative pt-4 pl-3 sm:pt-6 sm:pl-6 max-w-[360px] sm:max-w-md mx-auto lg:max-w-none w-full"
          >
            {/* Offset Decorative Golden Bronze Background Panel */}
            <div className="absolute top-6 left-0 right-6 sm:top-8 sm:right-8 bottom-0 bg-[#7a5a2e] rounded-2xl sm:rounded-3xl -z-10 shadow-2xl"></div>

            {/* Decorative Arched Gold Outline at Top-Right */}
            <div className="absolute top-0 right-0 left-8 sm:left-12 h-16 sm:h-20 border-t-2 border-r-2 border-[#c4a261]/60 rounded-tr-[28px] sm:rounded-tr-[36px] -z-10 pointer-events-none"></div>

            {/* Main Yoga Photo Card */}
            <motion.div 
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#c4a261]/40 bg-[#161616]"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={data?.image || "/img/contact_yoga.webp"}
                  alt="Yoga Meditation"
                  fill
                  priority
                  sizes="(max-width: 640px) 360px, (max-width: 1024px) 500px, 460px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>
            </motion.div>

            {/* Overlaid Wellness Quote Badge at Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.35 }}
              className="absolute -bottom-3 -left-1 sm:-bottom-5 sm:-left-3 max-w-[270px] sm:max-w-[310px] bg-gradient-to-br from-[#7e5d30] via-[#6a4c24] to-[#543b1c] text-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-[#c4a261]/40 backdrop-blur-sm"
            >
              <span className="text-[#deb97b] text-3xl sm:text-4xl font-serif font-black block leading-none -mb-1">
                {data?.badge_quote || "“"}
              </span>
              <h4 className="font-serif text-base sm:text-lg lg:text-xl font-bold leading-snug text-white">
                {data?.badge_title_line1 || "Let's Begin"}<br />
                {data?.badge_title_line2 || "Your Wellness Journey"}
              </h4>
              <p className="text-[#e2ceb5] text-[11px] sm:text-xs lg:text-[13px] leading-relaxed mt-1.5 font-sans">
                {data?.badge_description || "Get in touch with us for class details, personal training, or any queries."}
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Header & Full Form (Takes full width of the right side) */}
          <div className="lg:col-span-7 flex flex-col justify-start w-full space-y-4 sm:space-y-5">
            
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Tagline with horizontal lines */}
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-8 sm:w-12 h-[1.5px] bg-[#c4a261]"></span>
                <span className="text-[#c4a261] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase font-sans">
                  {data?.subtitle || "CONTACT US"}
                </span>
                <span className="w-8 sm:w-12 h-[1.5px] bg-[#c4a261]"></span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-1.5 sm:mb-2">
                {data?.title_line1 || "Get in"} <span className="text-[#c4a261]">{data?.title_highlight || "Touch"}</span>
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm md:text-[14.5px] leading-relaxed font-sans">
                {data?.description || "We'd love to hear from you! Whether you have a question about our yoga classes, need help with bookings, or want to know more about our programs, feel free to reach out."}
              </p>
            </motion.div>

            {/* Form Card (Full Width of Right Column) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-[#161616] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden w-full"
            >
              {/* Subtle Ambient Gold Glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#c4a261]/10 blur-[80px] rounded-full pointer-events-none -z-0" />

              <div className="relative z-10">
                <div className="mb-4 sm:mb-5 pb-3 border-b border-white/5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-0.5 leading-snug">
                    {data?.form_title_line1 || "Send Us a"} <span className="text-[#c4a261]">{data?.form_title_highlight || "Message"}</span>
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-[12.5px] font-sans">
                    {data?.form_description || "Fill out the form below and we'll get back to you as soon as possible."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Name */}
                    <div className="relative flex items-center bg-[#1c1c1c] border border-white/10 hover:border-white/20 focus-within:border-[#c4a261] focus-within:ring-1 focus-within:ring-[#c4a261]/30 rounded-xl px-3.5 py-2.5 h-[44px] sm:h-[46px] transition-all">
                      <User className="w-4 h-4 text-gray-400 mr-2.5 shrink-0 stroke-[1.8]" />
                      <input
                        type="text"
                        required
                        placeholder={data?.name_placeholder || "Your Name *"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-transparent text-white text-xs sm:text-[13px] placeholder:text-gray-400 focus:outline-none w-full"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative flex items-center bg-[#1c1c1c] border border-white/10 hover:border-white/20 focus-within:border-[#c4a261] focus-within:ring-1 focus-within:ring-[#c4a261]/30 rounded-xl px-3.5 py-2.5 h-[44px] sm:h-[46px] transition-all">
                      <Mail className="w-4 h-4 text-gray-400 mr-2.5 shrink-0 stroke-[1.8]" />
                      <input
                        type="email"
                        required
                        placeholder={data?.email_placeholder || "Your Email *"}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-transparent text-white text-xs sm:text-[13px] placeholder:text-gray-400 focus:outline-none w-full"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number */}
                  <div className="relative flex items-center bg-[#1c1c1c] border border-white/10 hover:border-white/20 focus-within:border-[#c4a261] focus-within:ring-1 focus-within:ring-[#c4a261]/30 rounded-xl px-3.5 py-2.5 h-[44px] sm:h-[46px] transition-all">
                    <Phone className="w-4 h-4 text-gray-400 mr-2.5 shrink-0 stroke-[1.8]" />
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      required
                      placeholder={data?.phone_placeholder || "Phone Number *"}
                      value={formData.phone}
                      onKeyDown={(e) => {
                        if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
                          return;
                        }
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) => {
                        const numericOnly = e.target.value.replace(/[^0-9]/g, '');
                        setFormData({ ...formData, phone: numericOnly });
                      }}
                      className="bg-transparent text-white text-xs sm:text-[13px] placeholder:text-gray-400 focus:outline-none w-full"
                    />
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="relative flex items-start bg-[#1c1c1c] border border-white/10 hover:border-white/20 focus-within:border-[#c4a261] focus-within:ring-1 focus-within:ring-[#c4a261]/30 rounded-xl px-3.5 py-2.5 transition-all">
                    <MessageSquare className="w-4 h-4 text-gray-400 mr-2.5 mt-1 shrink-0 stroke-[1.8]" />
                    <textarea
                      rows={3}
                      required
                      placeholder={data?.message_placeholder || "Your Message *"}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-transparent text-white text-xs sm:text-[13px] placeholder:text-gray-400 focus:outline-none w-full resize-none leading-relaxed h-[80px] sm:h-[90px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.015, boxShadow: '0 8px 25px -4px rgba(196, 162, 97, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#c59a52] hover:bg-[#d6a95f] text-[#151515] font-bold text-xs sm:text-sm py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] cursor-pointer"
                  >
                    <span>{data?.button_text || data?.form_button_text || "Send Message"}</span>
                    <span className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#151515] text-[#c59a52] flex items-center justify-center text-[10px] sm:text-xs font-black shadow-sm">
                      ➔
                    </span>
                  </motion.button>

                  {/* Feedback Message */}
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="p-2.5 bg-[#c4a261]/15 border border-[#c4a261]/40 rounded-xl text-center text-[#c4a261] text-xs font-semibold flex items-center justify-center gap-2 shadow-md"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c4a261] shrink-0" />
                        <span>{data?.success_message || "Thank you! Your message has been sent successfully."}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>

          </div>

        </div>

        {/* 2. Full-Width 4 Info Cards (Below Form: Call Us, Email Us, Visit Us, Follow Us) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            
            {/* Card 1: Call Us */}
            <motion.a
              href={`tel:${phoneValue.replace(/\s+/g, '')}`}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-[#161616] border border-white/10 hover:border-[#c4a261]/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-[#c4a261] bg-[#7a592b]/30 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#c4a261] group-hover:text-black transition-all shadow-md">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[#c4a261] font-semibold text-xs sm:text-[13px] tracking-wider uppercase font-sans">
                    {data?.phone_title || "Call Us"}
                  </h4>
                  <p className="text-white font-bold text-sm sm:text-base group-hover:text-[#c4a261] transition-colors">
                    {phoneValue}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-xs border-t border-white/5 pt-3 mt-auto font-sans">
                {data?.phone_hours || "Mon - Sat: 9:00 AM - 7:00 PM"}
              </p>
            </motion.a>

            {/* Card 2: Email Us */}
            <motion.a
              href={`mailto:${emailValue}`}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-[#161616] border border-white/10 hover:border-[#c4a261]/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-[#c4a261] bg-[#7a592b]/30 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#c4a261] group-hover:text-black transition-all shadow-md">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[#c4a261] font-semibold text-xs sm:text-[13px] tracking-wider uppercase font-sans">
                    {data?.email_title || "Email Us"}
                  </h4>
                  <p className="text-white font-bold text-sm sm:text-base truncate group-hover:text-[#c4a261] transition-colors">
                    {emailValue}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-xs border-t border-white/5 pt-3 mt-auto font-sans">
                {data?.email_reply || "We reply within 24 hours"}
              </p>
            </motion.a>

            {/* Card 3: Visit Us */}
            <motion.a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-[#161616] border border-white/10 hover:border-[#c4a261]/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-[#c4a261] bg-[#7a592b]/30 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#c4a261] group-hover:text-black transition-all shadow-md">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[#c4a261] font-semibold text-xs sm:text-[13px] tracking-wider uppercase font-sans">
                    {data?.address_title || "Visit Us"}
                  </h4>
                  <p className="text-white font-bold text-sm sm:text-base group-hover:text-[#c4a261] transition-colors">
                    {addressValue}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-xs border-t border-white/5 pt-3 mt-auto font-sans">
                {addressCityValue}
              </p>
            </motion.a>

            {/* Card 4: Follow Us */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-[#161616] border border-white/10 hover:border-[#c4a261]/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-[#c4a261] bg-[#7a592b]/30 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#c4a261] group-hover:text-black transition-all shadow-md">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[#c4a261] font-semibold text-xs sm:text-[13px] tracking-wider uppercase font-sans">
                    {data?.follow_title_line1 || "Follow"} {data?.follow_title_highlight || "Us"}
                  </h4>
                  <p className="text-white font-bold text-xs sm:text-sm">
                    Stay Connected
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-3 mt-auto flex items-center gap-2.5">
                {socialsList.map((social, idx) => {
                  const SocialIcon = socialIconMap[social.icon] || FaFacebookF;
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-white/10 hover:border-[#c4a261] hover:bg-[#c4a261] text-[#c4a261] hover:text-black flex items-center justify-center transition-all shadow"
                      aria-label={social.name}
                    >
                      <SocialIcon className="w-3.5 h-3.5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* 3. Full-Width Map Section (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full relative"
        >
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#161616]">
            <iframe
              title="Aarogya Yoga Studio Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(addressValue + ' ' + addressCityValue)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 grayscale-[20%] contrast-[1.05] hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Badge Over Map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#161616]/95 backdrop-blur-md border border-[#c4a261]/40 rounded-xl sm:rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#c4a261] text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h5 className="font-serif font-bold text-white text-sm sm:text-base leading-tight truncate">
                    {data?.location_title_line1 || "Aarogya"} {data?.location_title_highlight || "Yoga Studio"}
                  </h5>
                  <p className="text-gray-300 text-xs truncate mt-0.5">
                    {addressValue}, {addressCityValue}
                  </p>
                </div>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#c4a261] hover:bg-[#d6a95f] text-black text-xs font-bold px-3.5 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow hover:scale-105 active:scale-95"
              >
                <span>Directions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
