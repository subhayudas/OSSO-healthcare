// components/Footer/FooterNavigation.tsx
import React from "react";
import Link from "next/link";
import { footerNavLinks } from "@/constants/footerData";

const FooterNavigation: React.FC = () => {
  return (
    <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {footerNavLinks.map((category) => (
        <div key={category.title} className="space-y-3">
          <h3
            className="text-sm font-medium text-gray-900 px-3 py-1.5 inline-block rounded-lg"
            style={{
              background: "linear-gradient(145deg, #f0f0f0, #e6e6e6)",
              boxShadow: "2px 2px 5px #d1d1d1, -2px -2px 5px #ffffff",
            }}
          >
            {category.title}
          </h3>
          <ul className="space-y-2">
            {category.links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterNavigation;
