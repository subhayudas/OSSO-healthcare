import React from "react";
import HomeSection from "@/components/sections/home/hero";
import AboutSection from "@/components/sections/home/about";
import TrustedBrands from "@/components/sections/home/trusted-brands";
import ServicesSection from "@/components/sections/home/services";
import ManagementSection from "@/components/sections/home/management";
import HowItWorksSection from "@/components/sections/home/how-it-works";
import FAQSection from "@/components/sections/home/faq";
import TestimonialsSection from "@/components/sections/home/testimonials";
import { WhyChooseFinexSection as WhyChooseOssoSection } from "@/components/sections/home/why-choose-finex";
import ContactCta from "@/components/ui/contact-cta";
import CoreValuesSection from "@/components/sections/home/core-values";
import PatientJourneySection from "@/components/sections/home/patient-journey";

const HomePage = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#EEF2FF] to-blue-50/30">
      <HomeSection />
      <TrustedBrands />
      <AboutSection />
      <CoreValuesSection />
      <ServicesSection />
      <PatientJourneySection />
      <ManagementSection />
      <HowItWorksSection />
      <FAQSection />
      <WhyChooseOssoSection />
      <TestimonialsSection />
      <ContactCta />
    </div>
  );
};
export default HomePage;
