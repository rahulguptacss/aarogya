import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
  breadcrumbs: { name: string; href: string }[];
}

export default function Breadcrumb({ title, breadcrumbs }: BreadcrumbProps) {
  return (
    <section className="bg-[#151515] py-6 sm:py-8 md:py-10 border-b border-[#c4a261]/20 flex flex-col items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 md:mb-5 z-10 text-center px-4 leading-tight">{title}</h1>
      <div className="flex items-center gap-2 sm:gap-2.5 z-10 text-[13px] sm:text-[14px] md:text-[15px] font-medium px-4 py-1.5 sm:px-5 sm:py-2 bg-[#161616] border border-[#7a592b] rounded-lg shadow-md">
        {breadcrumbs.map((bc, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <React.Fragment key={idx}>
              {isLast ? (
                <span className="text-[#c4a261] font-medium">{bc.name}</span>
              ) : (
                <Link href={bc.href} className="text-white hover:text-[#c4a261] transition-colors">
                  {bc.name}
                </Link>
              )}
              {!isLast && (
                <span className="text-[#c4a261] mx-0.5 text-xs font-bold">
                  ➔
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[#c4a261]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
}
