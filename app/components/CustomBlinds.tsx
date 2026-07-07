"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import showcase1 from "../assets/customBlind1.jpg";
import showcase2 from "../assets/customblind2.jpg";
import showcase3 from "../assets/customblind3.jpg";
import showcase4 from "../assets/customblinds4.jpg";

const items = [
  {
    src: showcase1,
    alt: "Custom Measurements",
    title: "Custom Measurements",
    desc: "Millimeter-Accurate On-Site Measurement Ensures A Perfect, Gap-Free Fit.",
    priority: true,
  },
  {
    src: showcase2,
    alt: "Premium Fabrics & Materials",
    title: "Premium Fabrics & Materials",
    desc: "Fade-Resistant, Durable Materials Selected For Both Aesthetics And Longevity.",
    priority: true,
  },
  {
    src: showcase3,
    alt: "Light & Privacy Control",
    title: "Light & Privacy Control",
    desc: "Flexible Opacity Options To Balance Natural Light With Privacy.",
    priority: false,
  },
  {
    src: showcase4,
    alt: "Motorized & Smart Ready",
    title: "Motorized & Smart Ready",
    desc: "Millimeter-Accurate On-Site Measurement Ensures A Perfect, Gap-Free Fit.",
    priority: false,
  },
];

export default function CustomBlindsShowcase() {
  return (
    <section id='shades' className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-16 xl:px-24 overflow-x-hidden">
      <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto px-2">
        <span className="text-xs font-bold uppercase tracking-[3px] text-[#BC512B] block mb-3">
          SELECTED WORK
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#18202F] tracking-tight mb-3 sm:mb-4 break-words">
          Custom Window Blinds NYC
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed break-words">
          We Provide Custom Blinds Services Including Wood Blinds, Verticle Blinds, Aluminum Blinds, & Faux Wood.
        </p>
      </div>

      <div className="relative max-w-[1440px] mx-auto w-full">
        <div
          className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gray-100 -translate-x-1/2"
          aria-hidden="true"
        />
        <div
          className="hidden md:block absolute inset-x-0 top-1/2 h-px bg-gray-100 -translate-y-1/2"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-14 gap-x-0 md:gap-x-10 lg:gap-x-12 w-full">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col w-full min-w-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer shadow-sm mb-4 sm:mb-6">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                  className="object-cover transition duration-500 group-hover:scale-102"
                  priority={item.priority}
                />
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 bg-[#E25C30] hover:bg-[#c94f27] rounded-full flex items-center justify-center text-white shadow-md transition transform group-hover:scale-110 z-10">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white stroke-none ml-0.5" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#18202F] tracking-tight mb-1.5 sm:mb-2 break-words">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed max-w-xl break-words">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}