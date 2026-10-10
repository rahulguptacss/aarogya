import React from 'react';
import { common, sections, pages } from '../../components/types';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Appointment from '../../components/sections/Appointment';
import Stats from '../../components/sections/Stats';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/BackToTop';

export const metadata = {
  title: (pages as any)['book-a-appointment']?.metadata?.title || 'Book A Appointment | Aarogya - Yoga & Fitness',
  description: (pages as any)['book-a-appointment']?.metadata?.description || 'Schedule your yoga session with our expert trainers at your convenient date and time.',
};

const componentMap: Record<string, React.ComponentType<any>> = {
  Breadcrumb,
  BreadcrumbSection: Breadcrumb,
  Appointment,
  AppointmentSection: Appointment,
  Stats,
  StatsSection: Stats,
};

export default function BookAppointmentPage() {
  const pageData = (pages as any)['book-a-appointment'];

  const sectionDataMap: Record<string, any> = {
    Breadcrumb: {
      title: pageData?.title || pageData?.page_title,
      breadcrumbs: pageData?.breadcrumbs,
    },
    BreadcrumbSection: {
      title: pageData?.title || pageData?.page_title,
      breadcrumbs: pageData?.breadcrumbs,
    },
    Appointment: (sections as any).appointment,
    AppointmentSection: (sections as any).appointment,
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
