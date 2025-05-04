// constants/footerData.ts
import { IconType } from "react-icons";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterCategory {
  title: string;
  links: FooterLink[];
}

export const footerNavLinks: FooterCategory[] = [
  {
    title: "Home",
    links: [
      { title: "Services", href: "/services" },
      { title: "Appointments", href: "/appointments" },
      { title: "Patient Portal", href: "/patient-portal" },
    ],
  },
  {
    title: "About OSSO",
    links: [
      { title: "Our Team", href: "/about/team" },
      { title: "Facilities", href: "/about/facilities" },
      { title: "Contact", href: "/contact" },
      { title: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Joint Replacement", href: "/services/joint-replacement" },
      { title: "Sports Medicine", href: "/services/sports-medicine" },
      { title: "Spine Care", href: "/services/spine-care" },
      { title: "Rehabilitation", href: "/services/rehabilitation" },
    ],
  },
  {
    title: "Patients",
    links: [
      { title: "Testimonials", href: "/patients/testimonials" },
      { title: "Insurance", href: "/patients/insurance" },
      { title: "Support", href: "/patients/support" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Education", href: "/resources/education" },
      { title: "FAQ", href: "/resources/faq" },
      { title: "Recovery Guides", href: "/resources/recovery-guides" },
    ],
  },
];

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/osso_clinic",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/osso-orthopaedic",
    icon: FaLinkedin,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/c/osso-orthopaedic",
    icon: FaYoutube,
  },
];

export const companySlogan = "Specialized orthopaedic care for improved mobility and quality of life";
