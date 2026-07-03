"use client";

import Image from 'next/image';
import React from 'react';
import { Orbit } from 'lucide-react';

import panoramaBg from '../assets/panorama.jpg';

export default function Panorama() {
  return (
<section className="relative w-full h-[200px] sm:h-[240px] lg:h-[280px] xl:h-[360px] overflow-hidden bg-[#1a1c1e]">
      <Image
        src={panoramaBg}
        alt="Interior room 360 panorama preview"
        fill
        priority
        className="object-cover object-center select-none pointer-events-none brightness-70 contrast-[1.02]"
      />
      
      <div className="absolute inset-0 bg-black/15" />

      <div className="absolute inset-0 flex items-center justify-center">
        
          <div className="relative flex flex-col items-center justify-center text-white">
            <Orbit className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500 transition-transform duration-500 group-hover:rotate-180" strokeWidth={1.5} />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest mt-1 text-white/95">
              360
            </span>
          </div>
          </div>
    </section>
  );
}