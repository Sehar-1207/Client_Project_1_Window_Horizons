"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import blindImg1 from "../assets/service1.jpg"; 
import shadeImg2 from "../assets/furniture3.jpg"; 
import woodImg3 from "../assets/service2.jpg";
import customImg4 from "../assets/furniture2.jpg";

const solutions = [
  { id: 1, title: "Window Blinds", image: blindImg1 },
  { id: 2, title: "Honeycomb Shades", image: shadeImg2 },
  { id: 3, title: "Woven Woods", image: woodImg3 },
  { id: 4, title: "Custom Blinds & Shades", image: customImg4 },
  { id: 5, title: "Motorized Drapes", image: blindImg1 },
  { id: 6, title: "Solar Shades", image: shadeImg2 },
];

export default function WindowSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxVisibleCards, setMaxVisibleCards] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setMaxVisibleCards(1);
      else if (window.innerWidth < 1024) setMaxVisibleCards(2);
      else if (window.innerWidth < 1280) setMaxVisibleCards(3);
      else setMaxVisibleCards(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, solutions.length - maxVisibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 100;

  return (
    <section className="bg-[#F8F9FA] w-full overflow-hidden py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="text-[#BC512B] text-xs font-bold tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#141E28] tracking-tight leading-tight max-w-xl">
              Smart Window Solutions For Homes
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
              Window Horizons Is An Expert At Working With Any Style Window Including Bay Windows,
              Skylights, Floor To Ceiling, And More. We Can Provide You With A Wide Range Of Quality
              Products. We Are An Authorized Hunter Douglas Window Treatment.
            </p>
          </div>
        </div>

        <div className="relative w-full" ref={containerRef}>
          <div className="w-full overflow-hidden px-1 -mx-1 pb-14">
            <motion.div
              className="flex gap-6 w-full"
              animate={{ x: `calc(-${currentIndex * (100 / maxVisibleCards)}% - ${currentIndex * (24 / maxVisibleCards)}px)` }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {solutions.map((item) => (
                <div
                  key={item.id}
                  className="relative shrink-0 flex flex-col items-center"
                  style={{
                    width: `calc((100% - ${(maxVisibleCards - 1) * 24}px) / ${maxVisibleCards})`,
                  }}
                >
                  <div className="relative w-full rounded-[24px] overflow-hidden group aspect-[4/5] z-0 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority
                    />
                  </div>
                  
                  <div className="absolute left-4 right-4 bottom-0 translate-y-1/2 z-20 flex justify-center">
                    <div className="bg-white w-full py-4 px-4 text-center rounded-xl shadow-md border-b-2 border-transparent hover:border-[#BC512B] transition-all duration-300">
                      <span className="text-[#141E28] text-xs sm:text-sm md:text-base font-bold tracking-tight block whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 w-full gap-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center transition-all shrink-0 shadow-sm ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#BC512B] hover:text-white hover:border-[#BC512B]"
            }`}
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-4 h-4 text-current" />
          </button>

          <div className="flex-1 h-[2px] bg-gray-200 relative rounded-full overflow-hidden max-w-4xl mx-auto">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-[#BC512B] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{
                width: maxIndex > 0 ? `calc(33.33% + ${progressPercentage * 0.6667}%)` : "100%"
              }}
            />
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-11 h-11 rounded-full bg-[#BC512B] text-white flex items-center justify-center transition-all shrink-0 shadow-sm ${
              currentIndex >= maxIndex
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#a54320]"
            }`}
            aria-label="Next slide"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}