import React from 'react';
import { common, sections, pages } from '../../components/types';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Team from '../../components/sections/Team';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/BackToTop';

export const metadata = {
  title: (pages as any)['yoga-trainer']?.metadata?.title || 'Yoga Trainer | Aarogya - Yoga & Fitness',
  description: (pages as any)['yoga-trainer']?.metadata?.description || 'Meet our experienced and certified yoga instructors dedicated to your health and well-being.',
};

export default function YogaTrainerPage() {
  const pageData = (pages as any)['yoga-trainer'];
  const teamData = (sections as any).team;

  return (
    <div className="flex min-h-screen flex-col bg-[#151515] font-sans text-white">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb 
          title={pageData?.title || 'Yoga Trainer'} 
          breadcrumbs={pageData?.breadcrumbs || [
            { name: 'Home', href: '/' },
            { name: 'Yoga Trainer', href: '/yoga-trainer' }
          ]} 
        />
        <Team data={teamData} showButton={false} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
