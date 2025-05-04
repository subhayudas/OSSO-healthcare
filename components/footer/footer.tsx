// components/Footer/Footer.tsx
import React from "react";

import { companySlogan } from "@/constants/footerData";
import FooterNavigation from "@/components/footer/footer-navigation";
import FooterLogo from "@/components/footer/footer-logo";
import FooterSocial from "@/components/footer/footer-social";
import StatusIndicator from "@/components/footer/status-indicatior";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-100/10 w-full py-12 px-6 md:px-12 lg:px-24 overflow-hidden rounded-t-[5rem]">
      {/* Giant Logo Text with Neumorphic Effect */}
      <div className="w-full mb-16">
        <h1
          className="text-center text-7xl md:text-9xl lg:text-[300px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-300 opacity-40"
          style={{
            textShadow:
              "3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.8)",
            letterSpacing: "-0.05em",
          }}
        >
          OSSO
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Logo and Social Links */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <FooterLogo />
            <p className="text-gray-600 mt-4">{companySlogan}</p>
          </div>
          <FooterSocial />
        </div>

        {/* Right Column: Navigation Links and Copyright */}
        <div className="flex flex-col justify-between h-full">
          <FooterNavigation />
        </div>
      </div>

      {/* Systems Status Indicator */}
      <div className="flex flex-wrap justify-between items-center mt-16 pt-8 border-t border-gray-200">
        <StatusIndicator />
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <p className="text-sm text-gray-500">
            © {currentYear} <span className="font-semibold">OSSO Orthopaedic Clinic</span>.
            All rights reserved.
          </p>
          <a href="/privacy" className="hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-900">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
