import React from 'react';
import { common, sections, pages } from '../../components/types';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Packages from '../../components/sections/Packages';
import Stats from '../../components/sections/Stats';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/BackToTop';

export const metadata = {
  title: (pages as any).packages?.metadata?.title || 'Our Package | Aarogya - Yoga & Fitness',
  description: (pages as any).packages?.metadata?.description || 'Choose your yoga journey with flexible plans designed for every age group and lifestyle.',
};

const componentMap: Record<string, React.ComponentType<any>> = {
  Breadcrumb,
  BreadcrumbSection: Breadcrumb,
  Packages,
  PackagesSection: Packages,
  Stats,
  StatsSection: Stats,
};

export default function PackagesPage() {
  const pageData = (pages as any).packages;

  const sectionDataMap: Record<string, any> = {
    Breadcrumb: {
      title: pageData?.title || pageData?.page_title,
      breadcrumbs: pageData?.breadcrumbs,
    },
    BreadcrumbSection: {
      title: pageData?.title || pageData?.page_title,
      breadcrumbs: pageData?.breadcrumbs,
    },
    Packages: (sections as any).packages,
    PackagesSection: (sections as any).packages,
    Stats: sections.stats,
    StatsSection: sections.stats,
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#151515] font-sans text-white">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        {pageData?.components?.map((comp: any, index: number) => {
          const Component = componentMap[comp.component] || componentMap[comp.key];
          if (!Component) return null;
          const sectionData = sectionDataMap[comp.key] ?? sectionDataMap[comp.component];
          return (
            <Component 
              key={index} 
              data={sectionData} 
              {...(comp.component === 'Breadcrumb' ? sectionData : {})} 
            />
          );
        })}
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
