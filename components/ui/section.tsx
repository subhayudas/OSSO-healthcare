"use client";

import { ReactNode } from "react";
import { useSectionScroll } from "@/hooks/use-section-scroll";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  id,
  className = "",
  children,
}: SectionProps) {
  const { ref } = useSectionScroll(id);

  return (
    <section id={id} ref={ref} className={`pt-20 pb-12 ${className}`}>
      {children}
    </section>
  );
}
