import React from "react";
import { logos } from "@/constants/homepage-data";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const TrustedBrands = () => {
  return (
    <section className="bg-[#EEF2FF] -mt-32 flex justify-center items-center mx-auto">
      <div className="relative overflow-hidden text-center flex flex-col items-center bg-[#EEF2FF] ">
        <h3 className="text-2xl md:text-3xl text-[#626877] font-bold leading-none pt-20 pb-10 max-w-lg md:max-w-3xl lg:max-w-4xl">
          Trusted by thousands across the world
        </h3>
        <ul className="flex justify-center flex-wrap bg-transparent mask-x-[linear-gradient(90deg,#fff_0%,#fff_10%,#fff_90%,#fff_100%)]">
          <Marquee pauseOnHover className="[--duration:20s]">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10 basis-1/3">
                <Image src={url} width={width} height={height} alt={title} />
              </li>
            ))}{" "}
          </Marquee>
        </ul>
      </div>
    </section>
  );
};
export default TrustedBrands;
