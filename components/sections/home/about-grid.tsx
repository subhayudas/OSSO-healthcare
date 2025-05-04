"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { aboutSections } from "@/constants/homepage-data";
import React from "react";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function AboutGrid() {
  const router = useRouter();
  return (
    <BentoGrid className="lg:grid-rows-3 pb-10 lg:pb-32">
      {aboutSections.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
      <div className="max-lg:hidden flex justify-center items-center lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4 ">
        <Button
          className="bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-full text-white hover:text-white text-lg p-8 hover:drop-shadow-2xl transition duration-300 w-[15rem] hover:scale-110 cursor-pointer"
          variant={"outline"}
          onClick={() => router.push(`/company`)}
        >
          Learn More
        </Button>
      </div>
    </BentoGrid>
  );
}
