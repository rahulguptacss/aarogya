import React from 'react';
import { common, sections, pages } from '../../components/types';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Classes from '../../components/sections/Classes';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/BackToTop';

export const metadata = {
  title: pages.classes.metadata.title,
  description: pages.classes.metadata.description,
};

const componentMap: Record<string, React.ComponentType<any>> = {
  Breadcrumb,
  BreadcrumbSection: Breadcrumb,
  Classes,
  ClassesSection: Classes,
};

export default function ClassesPage() {
  const pageData = pages.classes;

  const sectionDataMap: Record<string, any> = {
    Breadcrumb: {
      title: pageData.title || pageData.page_title,
      breadcrumbs: pageData.breadcrumbs,
    },
    BreadcrumbSection: {
      title: pageData.title || pageData.page_title,
      breadcrumbs: pageData.breadcrumbs,
    },
    Classes: (sections as any).classes,
    ClassesSection: (sections as any).classes,
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#151515] font-sans text-white">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        {pageData.components?.map((comp, index) => {
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
