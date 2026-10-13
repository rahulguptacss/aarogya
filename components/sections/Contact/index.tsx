"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
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

// Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
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
    <section className="relative bg-[#111111] py-5 sm:py-7 lg:py-8 overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start"
        >
          
          {/* LEFT COLUMN: Featured Image with Decorative Offset & Wellness Badge */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative pt-4 pl-3 sm:pt-6 sm:pl-6 max-w-[340px] sm:max-w-md mx-auto lg:max-w-none w-full"
          >
            {/* Offset Decorative Golden Bronze Background Panel */}
            <div className="absolute top-6 left-0 right-6 sm:top-8 sm:right-8 bottom-0 bg-[#7a5a2e] rounded-2xl sm:rounded-3xl -z-10 shadow-2xl"></div>

            {/* Decorative Arched Gold Outline at Top-Right */}
            <div className="absolute top-0 right-0 left-8 sm:left-12 h-16 sm:h-20 border-t-2 border-r-2 border-[#c4a261]/60 rounded-tr-[28px] sm:rounded-tr-[36px] -z-10 pointer-events-none"></div>

            {/* Main Yoga Photo Card */}
            <motion.div 
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#c4a261]/30 bg-[#161616]"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={data?.image || "/img/contact_yoga.webp"}
                  alt="Yoga Meditation"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 500px, 450px"
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
              className="absolute -bottom-3 -left-1 sm:-bottom-5 sm:-left-3 max-w-[270px] sm:max-w-[310px] bg-gradient-to-br from-[#7e5d30] via-[#6a4c24] to-[#543b1c] text-white p-4 sm:p-5 rounded-xl sm:rounded-3xl shadow-2xl border border-[#c4a261]/40 backdrop-blur-sm"
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

          {/* RIGHT COLUMN: Contact Us Title, 3 Info Cards, Form, Follow Us & Location */}
          <div className="lg:col-span-7 flex flex-col justify-start w-full">
            
            {/* Header Section */}
            <motion.div
              variants={itemVariants}
              className="mb-3 sm:mb-4"
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
              <p className="text-gray-300 text-xs sm:text-sm md:text-[14.5px] leading-relaxed max-w-2xl font-sans">
                {data?.description || "We'd love to hear from you! Whether you have a question about our yoga classes, need help with bookings, or want to know more about our programs, feel free to reach out."}
              </p>
            </motion.div>

            {/* 3 Contact Info Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-3.5 mb-3.5 sm:mb-4"
            >
              {/* Card 1: Call Us */}
              <motion.a 
                href={`tel:${phoneValue.replace(/\s+/g, '')}`}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-[#181818] border border-white/5 hover:border-[#c4a261]/50 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-3.5 flex items-center gap-3 transition-all duration-300 group shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-[#7a592b] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#8e6834] transition-all shadow-md">
                  <FaPhoneAlt className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-[#c4a261] font-semibold text-xs sm:text-[13px] leading-tight mb-0.5">
                    {data?.phone_title || "Call Us"}
                  </h5>
                  <p className="text-white font-bold text-xs sm:text-[13px] truncate">
                    {phoneValue}
                  </p>
                  <p className="text-gray-400 text-[10px] sm:text-[11px] truncate mt-0.5">
                    {data?.phone_hours || "Mon - Sat: 9:00 AM - 7:00 PM"}
                  </p>
                </div>
              </motion.a>

              {/* Card 2: Email Us */}
              <motion.a 
                href={`mailto:${emailValue}`}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-[#181818] border border-white/5 hover:border-[#c4a261]/50 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-3.5 flex items-center gap-3 transition-all duration-300 group shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-[#7a592b] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#8e6834] transition-all shadow-md">
                  <FaEnvelope className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-[#c4a261] font-semibold text-xs sm:text-[13px] leading-tight mb-0.5">
                    {data?.email_title || "Email Us"}
                  </h5>
                  <p className="text-white font-bold text-xs sm:text-[13px] truncate">
                    {emailValue}
                  </p>
                  <p className="text-gray-400 text-[10px] sm:text-[11px] truncate mt-0.5">
                    {data?.email_reply || "We reply within 24 hours"}
                  </p>
                </div>
              </motion.a>

              {/* Card 3: Visit Us */}
              <motion.a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-[#181818] border border-white/5 hover:border-[#c4a261]/50 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-3.5 flex items-center gap-3 transition-all duration-300 group shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-[#7a592b] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#8e6834] transition-all shadow-md">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-[#c4a261] font-semibold text-xs sm:text-[13px] leading-tight mb-0.5">
                    {data?.address_title || "Visit Us"}
                  </h5>
                  <p className="text-white font-bold text-xs sm:text-[13px] truncate">
                    {addressValue}
                  </p>
                  <p className="text-gray-400 text-[10px] sm:text-[11px] truncate mt-0.5">
                    {addressCityValue}
                  </p>
                </div>
              </motion.a>
            </motion.div>

            {/* Split Section: Form on Left & Social + Map on Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-start w-full">
              
              {/* Form Card (col-span-7) */}
              <motion.div 
                variants={itemVariants}
                className="md:col-span-7 bg-[#161616] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl w-full"
              >
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-0.5 leading-snug">
                    {data?.form_title_line1 || "Send Us a"} <span className="text-[#c4a261]">{data?.form_title_highlight || "Message"}</span>
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-[12.5px] mb-3 sm:mb-3.5 leading-relaxed font-sans">
                    {data?.form_description || "Fill out the form below and we'll get back to you as soon as possible."}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {/* Name */}
                      <div className="relative flex items-center bg-[#1c1c1c] border border-white/10 hover:border-white/20 focus-within:border-[#c4a261] focus-within:ring-1 focus-within:ring-[#c4a261]/30 rounded-lg sm:rounded-xl px-3 py-2 sm:py-2.5 h-[42px] sm:h-[44px] transition-all">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 mr-2 shrink-0 stroke-[1.8]" />
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
                      <div className="relative flex items-center bg-[#1c1c1c] border border-white/10 hover:border-white/20 focus-within:border-[#c4a261] focus-within:ring-1 focus-within:ring-[#c4a261]/30 rounded-lg sm:rounded-xl px-3 py-2 sm:py-2.5 h-[42px] sm:h-[44px] transition-all">
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 mr-2 shrink-0 stroke-[1.8]" />
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

                    {/* Row 2: Phone Number (STRICTLY NUMBERS ONLY) */}
                    <div className="relative flex items-center bg-[#1c1c1c] border border-white/10 hover:border-white/20 focus-within:border-[#c4a261] focus-within:ring-1 focus-within:ring-[#c4a261]/30 rounded-lg sm:rounded-xl px-3 py-2 sm:py-2.5 h-[42px] sm:h-[44px] transition-all">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 mr-2 shrink-0 stroke-[1.8]" />
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        placeholder={data?.phone_placeholder || "Phone Number *"}
                        value={formData.phone}
                        onKeyDown={(e) => {
                          // Allow navigation and editing control keys
                          if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
                            return;
                          }
                          // Block any non-digit character
                          if (!/^[0-9]$/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          // Double enforce only digits (strip everything else)
                          const numericOnly = e.target.value.replace(/[^0-9]/g, '');
                          setFormData({ ...formData, phone: numericOnly });
                        }}
                        className="bg-transparent text-white text-xs sm:text-[13px] placeholder:text-gray-400 focus:outline-none w-full"
                      />
                    </div>

                    {/* Row 3: Message Textarea */}
                    <div className="relative flex items-start bg-[#1c1c1c] border border-white/10 hover:border-white/20 focus-within:border-[#c4a261] focus-within:ring-1 focus-within:ring-[#c4a261]/30 rounded-lg sm:rounded-xl px-3 py-2 sm:py-2.5 transition-all">
                      <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 mr-2 mt-1 shrink-0 stroke-[1.8]" />
                      <textarea
                        rows={2}
                        required
                        placeholder={data?.message_placeholder || "Your Message *"}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-transparent text-white text-xs sm:text-[13px] placeholder:text-gray-400 focus:outline-none w-full resize-none leading-relaxed h-[62px] sm:h-[68px]"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.015, boxShadow: '0 8px 25px -4px rgba(196, 162, 97, 0.35)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#c59a52] hover:bg-[#d6a95f] text-[#151515] font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] cursor-pointer mt-1.5"
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
                          className="p-2.5 bg-[#c4a261]/15 border border-[#c4a261]/40 rounded-lg text-center text-[#c4a261] text-xs font-semibold flex items-center justify-center gap-2 mt-1.5 shadow-md"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c4a261] shrink-0" />
                          <span>{data?.success_message || "Thank you! Your message has been sent successfully."}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </motion.div>

              {/* Right Cards: Follow Us & Our Location (col-span-5) */}
              <div className="md:col-span-5 flex flex-col gap-3 sm:gap-3.5 w-full">
                
                {/* Follow Us Card */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-[#161616] border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-xl"
                >
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-0.5">
                    {data?.follow_title_line1 || "Follow"} <span className="text-[#c4a261]">{data?.follow_title_highlight || "Us"}</span>
                  </h4>
                  <p className="text-gray-400 text-[11px] sm:text-xs leading-normal mb-2.5 sm:mb-3 font-sans">
                    {data?.follow_description || "Stay connected and get the latest updates on our classes, events and wellness tips."}
                  </p>
                  
                  {/* Social Buttons with Official Links */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
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
                          className="w-9 h-9 rounded-full bg-[#7a592b] hover:bg-[#967038] text-white flex items-center justify-center transition-colors shadow-md"
                          aria-label={social.name}
                        >
                          <SocialIcon className="w-3.5 h-3.5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Our Location Card */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-[#161616] border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-xl"
                >
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-0.5">
                    {data?.location_title_line1 || "Our"} <span className="text-[#c4a261]">{data?.location_title_highlight || "Location"}</span>
                  </h4>
                  <p className="text-gray-400 text-[11px] sm:text-xs leading-normal mb-2 font-sans">
                    {data?.location_description || "Visit our studio for a peaceful and refreshing yoga experience."}
                  </p>
                  
                  {/* Map Graphic Preview with Link */}
                  <motion.a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="block relative w-full h-[95px] sm:h-[105px] rounded-lg sm:rounded-xl overflow-hidden border border-white/10 shadow-md group cursor-pointer"
                  >
                    <Image
                      src={data?.location_map_image || "/img/contact_map.webp"}
                      alt="Studio Location Map"
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-1.5 right-1.5 bg-[#181818]/90 backdrop-blur-sm border border-[#c4a261]/40 rounded px-2 py-0.5 text-[10px] font-medium text-[#c4a261] flex items-center gap-1 group-hover:border-[#c4a261] shadow">
                      <span>Open in Maps</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </motion.a>
                </motion.div>

              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
