import React from 'react';
import Header from '../../../components/sections/Header';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import ClassesDetails from '../../../components/sections/ClassesDetails';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/BackToTop';
import { common, pages, sections, toSlug, ClassesDetailData } from '../../../components/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const items = (sections as any)?.classes?.items || [];
  return items.map((item: any) => ({
    slug: item.slug || toSlug(item.category || item.title_line1)
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const items = (sections as any)?.classes?.items || [];
  const found = items.find((item: any) => (item.slug || toSlug(item.category || item.title_line1)) === slug);
  const title = found ? `${found.category} - Details | Aarogya` : 'Classes Details | Aarogya - Yoga & Fitness';
  return { title };
}

const componentMap: Record<string, React.ComponentType<any>> = {
  Breadcrumb,
  BreadcrumbSection: Breadcrumb,
  ClassesDetails,
  ClassesDetailsSection: ClassesDetails,
};

export default async function ClassDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = (pages as any)?.classes_details;
  const items = (sections as any)?.classes?.items || [];
  const activeClass = items.find((item: any) => (item.slug || toSlug(item.category || item.title_line1)) === slug);

  if (!activeClass) {
    notFound();
  }

  // Get all details strictly from sections.classes_details in data.json
  const classesDetailsSection = (sections as any)?.classes_details || {};
  const specificDetailsList = classesDetailsSection.items || [];
  const defaultDetails = classesDetailsSection.default || {};

  const specificDetails = specificDetailsList.find(
    (item: any) => item.slug === slug || toSlug(item.category || '') === slug
  );

  const detailSource = specificDetails || defaultDetails;

  const data: ClassesDetailData = {
    slug,
    category: activeClass.category,
    title_line1: activeClass.title_line1,
    title_line2: activeClass.title_line2,
    description: specificDetails?.description || activeClass.description,
    image: activeClass.image || detailSource.image,
    button_text: detailSource.button_text,
    button_link: detailSource.button_link,
    features: detailSource.features,
    benefits_tag: detailSource.benefits_tag,
    benefits_title_line1: detailSource.benefits_title_line1,
    benefits_title_line2: specificDetails?.benefits_title_line2 || activeClass.category,
    benefits_description: detailSource.benefits_description,
    benefits_image: detailSource.benefits_image,
    benefits_list: detailSource.benefits_list,
    process_tag: detailSource.process_tag,
    process_title: specificDetails?.process_title || `${detailSource.process_title || 'How It Works'} - ${activeClass.category}`,
    process_steps: detailSource.process_steps
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#151515] font-sans text-white">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        {pageData?.components?.map((comp: any, index: number) => {
          const Component = componentMap[comp.component] || componentMap[comp.key];
          if (!Component) return null;
          if (comp.component === 'Breadcrumb' || comp.key === 'BreadcrumbSection') {
            return (
              <Breadcrumb 
                key={index}
                title={pageData?.page_title || pageData?.title}
                breadcrumbs={pageData?.breadcrumbs}
              />
            );
          }
          return <Component key={index} data={data} />;
        })}
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
