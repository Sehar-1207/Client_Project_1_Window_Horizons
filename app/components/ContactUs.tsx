"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Home, Building2, Building, Layers, Eye } from 'lucide-react';
import bg from '../assets/service1.jpg';
import bg1 from '../assets/service4.jpg';

export default function ContactUs() {
  const [activeCategory, setActiveCategory] = useState('residential-1');

  const categories = [
    { id: 'residential-1', name: 'Residential', icon: Home },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
    { id: 'apartment', name: 'Apartment', icon: Building },
    { id: 'residential-2', name: 'Residential', icon: Layers },
  ];

  return (
    <div id='contact' className="flex flex-col lg:flex-row min-h-screen w-full bg-[#111] text-white font-sans selection:bg-orange-600">
      <div className="relative w-full lg:w-[75%] flex flex-col justify-center p-6 sm:p-10 lg:p-16 min-h-fit lg:min-h-screen overflow-hidden">
        <Image
          src={bg1} 
          alt="Background" 
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-4xl z-10 isolation-auto">
          <div className="flex flex-row md:flex-col gap-3 overflow-x-auto pb-3 md:pb-0 justify-start w-full md:w-auto shrink-0 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-xl border transition-all duration-300 shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-white/10 border-white/30 shadow-lg'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 mb-1.5 text-white/80" strokeWidth={1.5} />
                  <span className="text-[10px] md:text-xs font-light text-white/90 tracking-wide text-center px-1 truncate w-full">{cat.name}</span>
                </button>
              );
            })}
          </div>
          <div className="flex-1 min-w-0 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-2">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 lg:mb-8 text-white tracking-tight break-words">
              Request Window Quote
            </h2>

            <form className="space-y-4 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Your Phone*"
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Services Type*"
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="w-full">
                <textarea
                  placeholder="Write Your Message..."
                  rows={4}
                  className="w-full bg-white/10 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium text-xs tracking-wider uppercase px-6 py-3.5 rounded-md transition-all duration-200 active:scale-95 shadow-md"
              >
                SUBMIT A MESSAGE
              </button>
            </form>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 z-10 hidden sm:block">
          <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      <div className="relative w-full h-[200px] sm:h-[250px] lg:h-auto lg:w-[25%] shrink-0">
        <Image
          src={bg} 
          alt="Window Display Showcase" 
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}