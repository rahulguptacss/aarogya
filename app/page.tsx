import React from 'react';
import { common, sections, pages } from '../components/types';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/BackToTop';

export const metadata = {
  title: pages.home.metadata.title,
  description: pages.home.metadata.description,
};

const componentMap: Record<string, React.ComponentType<any>> = {
  Hero,
  HeroSection: Hero,
  About,
  AboutSection: About,
  Services,
  ServicesSection: Services,
  WhyChooseUs,
  WhyChooseUsSection: WhyChooseUs,
  Stats,
  StatsSection: Stats,
  Team,
  TeamSection: Team,
  Testimonials,
  TestimonialsSection: Testimonials,
};

export default function Home() {
  const pageData = pages.home;

  const sectionDataMap: Record<string, any> = {
    Hero: sections.hero,
    HeroSection: sections.hero,
    About: sections.about,
    AboutSection: sections.about,
    Services: sections.services,
    ServicesSection: sections.services,
    WhyChooseUs: (sections as any).why_choose_us,
    WhyChooseUsSection: (sections as any).why_choose_us,
    Stats: sections.stats,
    StatsSection: sections.stats,
    Team: sections.team,
    TeamSection: sections.team,
    Testimonials: sections.testimonials,
    TestimonialsSection: sections.testimonials,
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#151515] font-sans text-white">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        {pageData.components?.map((comp, index) => {
          const Component = componentMap[comp.component] || componentMap[comp.key];
          if (!Component) return null;
          const sectionData = sectionDataMap[comp.key] ?? sectionDataMap[comp.component];
          const isTeam = comp.key === 'Team' || comp.component === 'Team' || comp.key === 'TeamSection' || comp.component === 'TeamSection';
          const isAbout = comp.key === 'About' || comp.component === 'About' || comp.key === 'AboutSection' || comp.component === 'AboutSection';
          return (
            <Component 
              key={index} 
              data={sectionData} 
              {...(isTeam ? { limit: 4, showButton: true } : {})}
              {...(isAbout ? { showButton: true } : {})}
            />
          );
        })}
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
