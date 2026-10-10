import React from 'react';
import { common, sections, pages } from '../../components/types';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import About from '../../components/sections/About';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Stats from '../../components/sections/Stats';
import Team from '../../components/sections/Team';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/BackToTop';

export const metadata = {
  title: pages.about.metadata.title,
  description: pages.about.metadata.description,
};

const componentMap: Record<string, React.ComponentType<any>> = {
  Breadcrumb,
  BreadcrumbSection: Breadcrumb,
  About,
  AboutSection: About,
  WhyChooseUs,
  WhyChooseUsSection: WhyChooseUs,
  Stats,
  StatsSection: Stats,
  Team,
  TeamSection: Team,
};

export default function AboutPage() {
  const pageData = pages.about;

  const sectionDataMap: Record<string, any> = {
    Breadcrumb: {
      title: pageData.title || pageData.page_title,
      breadcrumbs: pageData.breadcrumbs,
    },
    BreadcrumbSection: {
      title: pageData.title || pageData.page_title,
      breadcrumbs: pageData.breadcrumbs,
    },
    About: sections.about,
    AboutSection: sections.about,
    WhyChooseUs: (sections as any).why_choose_us,
    WhyChooseUsSection: (sections as any).why_choose_us,
    Stats: sections.stats,
    StatsSection: sections.stats,
    Team: sections.team,
    TeamSection: sections.team,
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
              {...(comp.component === 'Breadcrumb' ? sectionData : {})} 
              {...(isTeam ? { limit: 4, showButton: true } : {})}
              {...(isAbout ? { showButton: false } : {})}
            />
          );
        })}
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
