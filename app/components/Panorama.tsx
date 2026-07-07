"use client";

import Image from 'next/image';
import React from 'react';
import { Orbit } from 'lucide-react';

import panoramaBg from '../assets/panorama.jpg';

export default function Panorama() {
  return (
    <section className="relative w-full h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[400px] overflow-hidden bg-[#1A1A1A] group cursor-pointer">
      <Image
        src={panoramaBg}
        alt="Interior room 360 panorama preview"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center select-none pointer-events-none brightness-[0.65] contrast-[1.02] transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center text-white bg-black/40 backdrop-blur-md w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/10 transition-all duration-500 transform group-hover:scale-110 group-hover:border-[#BC512B]/50 group-hover:bg-black/50 shadow-xl shadow-black/20">
          <Orbit 
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#BC512B] transition-transform duration-700 ease-in-out group-hover:rotate-180" 
            strokeWidth={1.5} 
          />
          <span className="text-[10px] sm:text-xs font-bold tracking-[2px] mt-1.5 text-white/90 uppercase">
            360°
          </span>
        </div>
      </div>
    </section>
  );
}