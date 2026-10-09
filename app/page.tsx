import React from 'react';
import { common, sections, pages } from '../components/types';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/BackToTop';

export const metadata = {
  title: pages.home.metadata.title,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#151515] font-sans text-white">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Hero data={sections.hero} />
        <About data={sections.about} />
        <Stats data={sections.stats} />
        <Services data={sections.services} />
        <Team data={sections.team} />
        <Testimonials data={sections.testimonials} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
