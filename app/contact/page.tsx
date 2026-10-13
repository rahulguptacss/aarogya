import React from 'react';
import { common, sections, pages } from '../../components/types';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Contact from '../../components/sections/Contact';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/BackToTop';

export const metadata = {
  title: (pages as any).contact?.metadata?.title || 'Contact Us | Aarogya - Yoga & Fitness',
  description: (pages as any).contact?.metadata?.description || "Get in touch with Aarogya Yoga Studio. We'd love to hear from you for class bookings, wellness programs and queries.",
};

export default function ContactPage() {
  const pageData = (pages as any).contact;
  const contactData = (sections as any).contact;

  return (
    <div className="flex min-h-screen flex-col bg-[#151515] font-sans text-white">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb 
          title={pageData?.title || 'Contact Us'} 
          breadcrumbs={pageData?.breadcrumbs || [
            { name: 'Home', href: '/' },
            { name: 'Contact Us', href: '/contact' }
          ]} 
        />
        <Contact data={contactData} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
