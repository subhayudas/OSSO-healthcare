"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useNavProvider } from "@/providers/nav-provider";

export function useSectionScroll(sectionSlug: string) {
  const ref = useRef<HTMLDivElement>(null);
  const { setActiveLink } = useNavProvider();

  const isInView = useInView(ref, {
    margin: "-49% 0px -49% 0px",
    once: false,
    amount: 0.2,
  });

  useEffect(() => {
    if (isInView) {
      setActiveLink(sectionSlug);
      // Only update history if we're on the correct page
      if (window.location.pathname === `/${sectionSlug.split("-")[0]}`) {
        window.history.replaceState(null, "", `#${sectionSlug}`);
      }
    }
  }, [isInView, sectionSlug, setActiveLink]);

  // Handle hash changes for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === sectionSlug) {
        // Smooth scroll to section when hash changes
        document
          .getElementById(sectionSlug)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [sectionSlug]);

  return { ref };
}
