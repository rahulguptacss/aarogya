import Link from 'next/link';
import { Check } from 'lucide-react';
import { common, pages, sections } from '../../components/types';
import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/BackToTop';

const pageData = pages['thank-you'];
const thankYou = sections.thank_you;

export const metadata = {
  title: pageData.metadata.title,
  description: pageData.metadata.description,
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#151515] font-sans text-white">
      <Header data={common.Header} />
      <main className="flex w-full flex-1 items-center justify-center px-4 py-16 sm:py-24">
        <div className="w-full max-w-[640px] rounded-3xl border border-[#c4a261]/30 bg-[#161616] px-6 py-12 text-center shadow-2xl sm:px-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#c4a261]/15">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c4a261] text-[#151515]">
              <Check size={30} strokeWidth={3} />
            </span>
          </div>
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#c4a261] uppercase">{thankYou.eyebrow}</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">{thankYou.title}</h1>
          <div className="mx-auto my-5 h-[2px] w-16 bg-[#c4a261]" />
          <p className="mx-auto max-w-[480px] text-[15px] leading-7 text-gray-300">{thankYou.description}</p>
          <Link
            href={thankYou.button.href}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c59a52] px-8 py-3 text-sm font-bold text-[#151515] transition-colors hover:bg-[#d6a95f]"
          >
            {thankYou.button.text}
          </Link>
        </div>
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
