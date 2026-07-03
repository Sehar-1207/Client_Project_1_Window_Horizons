'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import bgBannerImage from '../assets/workbanner.jpg'; 

export default function WorkBanner() {
  const features = [
    'Free On-Site Measurement',
    'Expert Design Consultation',
    'Limited-Time Installation Offers',
  ];

  return (
    /* Outer wrapper creating the white space above and below the section */
    <div className="w-full bg-white py-12 md:py-20">
      
      {/* Main banner card spanning 100% full width from edge to edge */}
      <section className="relative w-full min-h-[420px] md:min-h-[480px] flex items-center bg-gray-900 overflow-hidden">
        
        {/* Background Image filling the complete container context */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bgBannerImage}
            alt="Room Interior Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Tint overlay matching the design */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60 md:to-black/55" />
        </div>

        {/* Content Layer - Max width container keeps text aligned perfectly with layout grids */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-12 lg:px-16 xl:px-24 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs lg:text-sm font-bold tracking-wider uppercase text-[#BC512B] mb-4 block">
                SELECTED WORK
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.2] mb-8 max-w-2xl">
                Upgrade Your Windows With Custom Shades & Blinds
              </h2>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-gray-200">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BC512B] fill-[#BC512B]/10 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-6">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md lg:text-left">
                Book A Free Consultation Today And Discover Window Treatments 
                Tailored To Your Space, Style, And Comfort.
              </p>
              
              <button className="bg-[#BC512B] hover:bg-[#a34423] text-white px-8 py-3.5 rounded-md font-semibold text-xs sm:text-sm tracking-wide transition-colors uppercase shadow-md">
                BOOK FREE CONSULTATION
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}