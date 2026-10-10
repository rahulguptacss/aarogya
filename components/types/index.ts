import data from '../data/data.json';

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Yoga.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;

export interface LinkType {
  name: string;
  href: string;
}

export interface HeaderData {
  logo_text: string;
  logo_subtext: string;
  logo_image?: string;
  links: LinkType[];
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_text: string;
  logo_subtext: string;
  logo_image?: string;
  description: string;
  gallery?: string[];
  socials: { icon: string; href: string }[];
  quick_links: LinkType[];
  our_services: LinkType[];
  contact: { phone: string; hours: string; email: string; address: string; reply_text?: string };
  copyright: string;
}

export interface HeroData {
  subtitle: string;
  title_line1: string;
  title_line2: string;
  title_highlight: string;
  description: string;
  primary_button: { text: string; href: string };
  secondary_button: { text: string; href: string };
  image: string;
  video?: string;
  badges: { icon: string; label: string }[];
}

export interface AboutData {
  subtitle: string;
  title_line1: string;
  title_line2: string;
  title_highlight: string;
  title_line3: string;
  description: string;
  image: string;
  cards: { icon: string; title: string; description: string }[];
  button: { text: string; href: string };
}

export interface StatsData {
  items: { value: string; label: string; icon: string }[];
}

export interface ServicesData {
  subtitle: string;
  title: string;
  button_text?: string;
  button_link?: string;
  items: {
    title: string;
    subtitle: string;
    icon: string;
    image: string;
    content_title: string;
    description: string;
    benefits: string[];
    button_text?: string;
    button_link?: string;
  }[];
}

export interface TeamData {
  subtitle: string;
  title: string;
  members: {
    name: string;
    role: string;
    description: string;
    image: string;
    socials: { icon: string; href: string }[];
  }[];
  button: { text: string; href: string };
}

export interface TestimonialsData {
  subtitle: string;
  title: string;
  reviews: {
    text: string;
    rating: number;
    author: string;
    role: string;
    location: string;
    avatar: string;
  }[];
}

export interface ClassItem {
  id: number;
  category: string;
  title_line1: string;
  title_line2: string;
  description: string;
  image: string;
  button_text: string;
  button_link: string;
  slug?: string;
}

export interface ClassesSectionData {
  items: ClassItem[];
}

export interface ServiceDetailFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceDetailProcessStep {
  step: string;
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceDetailData {
  slug: string;
  category: string;
  title_line1: string;
  title_line2: string;
  description: string;
  image: string;
  button_text: string;
  button_link: string;
  features: ServiceDetailFeature[];
  benefits_tag: string;
  benefits_title_line1: string;
  benefits_title_line2: string;
  benefits_description: string;
  benefits_image: string;
  benefits_list: string[];
  process_tag: string;
  process_title: string;
  process_steps: ServiceDetailProcessStep[];
}

export type ClassesDetailFeature = ServiceDetailFeature;
export type ClassesDetailProcessStep = ServiceDetailProcessStep;
export type ClassesDetailData = ServiceDetailData;
export type ClassDetailData = ServiceDetailData;

export interface WhyChooseUsFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title_line1: string;
  title_line2: string;
  description: string;
  center_image: string;
  left_features: WhyChooseUsFeature[];
  right_features: WhyChooseUsFeature[];
}

export interface PageComponentItem {
  key: string;
  component: string;
}

export interface PageData {
  title?: string;
  pageName?: string;
  page_title?: string;
  metadata: {
    title: string;
    description?: string;
  };
  breadcrumbs?: LinkType[];
  components?: PageComponentItem[];
}

export interface PackageItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  price: string;
  period: string;
  button_text: string;
  button_link: string;
  is_popular?: boolean;
  badge?: string;
}

export interface PackagesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  items: PackageItem[];
}

export interface GalleryItem {
  id: number;
  image: string;
  title?: string;
  category?: string;
}

export interface GallerySectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  items: GalleryItem[];
  pagination?: {
    current_page: number;
    total_pages: number;
  };
}

export interface AppointmentFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface AppointmentSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  form_title_line1: string;
  form_title_highlight: string;
  form_description: string;
  name_placeholder?: string;
  email_placeholder?: string;
  phone_placeholder?: string;
  date_placeholder?: string;
  time_placeholder?: string;
  service_placeholder?: string;
  message_placeholder?: string;
  button_text: string;
  success_message?: string;
  image: string;
  services: string[];
  time_slots: string[];
  features: AppointmentFeature[];
}

export interface ContactSocialItem {
  name: string;
  icon: string;
  url: string;
}

export interface ContactSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  badge_quote?: string;
  badge_title_line1?: string;
  badge_title_line2?: string;
  badge_description?: string;
  image?: string;
  phone_title?: string;
  phone: string;
  phone_hours: string;
  email_title?: string;
  email: string;
  email_reply: string;
  address_title?: string;
  address: string;
  address_city: string;
  form_title_line1?: string;
  form_title_highlight?: string;
  form_description?: string;
  name_placeholder?: string;
  email_placeholder?: string;
  phone_placeholder?: string;
  message_placeholder?: string;
  button_text?: string;
  form_button_text?: string;
  success_message?: string;
  follow_title_line1?: string;
  follow_title_highlight?: string;
  follow_description?: string;
  socials?: ContactSocialItem[];
  location_title_line1?: string;
  location_title_highlight?: string;
  location_description?: string;
  location_map_image?: string;
  location_map_url?: string;
}

export function toSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}



