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
  links: LinkType[];
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_text: string;
  logo_subtext: string;
  description: string;
  socials: { icon: string; href: string }[];
  quick_links: LinkType[];
  our_services: LinkType[];
  contact: { phone: string; hours: string; email: string; address: string };
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
  items: {
    title: string;
    subtitle: string;
    icon: string;
    image: string;
    content_title: string;
    description: string;
    benefits: string[];
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
