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
    desc: "Seamless automation setups giving you effortless control over schedules and scenes.",
    priority: false,
  },
];

export default function CustomBlindsShowcase() {
  return (
    <section id="shades" className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#BC512B] block mb-2">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#18202F] tracking-tight mb-3 sm:mb-4">
            Custom Window Blinds NYC
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto">
            We Provide Custom Blinds Services Including Wood Blinds, Vertical Blinds, Aluminum Blinds, & Faux Wood.
          </p>
        </div>

        {/* Dynamic Display Grid */}
        <div className="relative w-full">
          
          {/* Pixel-Perfect Desktop Cross Hair Lines */}
          <div
            className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-gray-100 -translate-x-1/2 z-0"
            aria-hidden="true"
          />
          <div
            className="hidden md:block absolute inset-x-0 top-[47%] h-[1px] bg-gray-100 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 lg:gap-x-16 xl:gap-x-24 w-full relative z-10">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col w-full min-w-0 group cursor-pointer">
                
                {/* Image Container with Hover Overlay Engine */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-sm mb-4 sm:mb-5 bg-gray-50">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority={item.priority}
                  />
                  
                  {/* Glassmorphism/Solid Action Badge */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 sm:w-10 sm:h-10 bg-[#BC512B] hover:bg-[#a34321] rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 z-10">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white stroke-none ml-0.5" />
                  </div>
                </div>

                {/* Content Block */}
                <h3 className="text-lg sm:text-xl font-bold text-[#18202F] tracking-tight mb-1.5 transition-colors duration-300 group-hover:text-[#BC512B]">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-500 font-normal leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}