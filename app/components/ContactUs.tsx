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
    <div id='contact' className="flex flex-col lg:flex-row lg:min-h-screen w-full bg-[#111] text-white font-sans selection:bg-[#BC512B]/30 overflow-hidden">
      
      {/* Left Form Panel Container */}
      <div className="relative w-full lg:w-[75%] flex flex-col justify-center items-center px-4 py-12 sm:px-8 md:px-16 lg:py-20 xl:px-24 min-h-screen lg:min-h-0">
        <Image
          src={bg1} 
          alt="Background Texture Overlay" 
          fill
          priority
          sizes="(max-w: 1024px) 100vw, 75vw"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/90 backdrop-blur-[2px]" />
        
        {/* Core Content Engine Wrapper */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full max-w-4xl z-10 relative items-start">
          
          {/* Categories Tab Navigation Switcher */}
          <div className="flex flex-row md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 justify-start w-full md:w-auto shrink-0 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-xl border transition-all duration-300 shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#BC512B]/40 ${
                    isActive
                      ? 'bg-white/10 border-[#BC512B] shadow-xl shadow-[#BC512B]/5'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <Icon 
                    className={`w-5 h-5 md:w-6 md:h-6 mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[#BC512B]' : 'text-gray-400 group-hover:text-white'
                    }`} 
                    strokeWidth={1.5} 
                  />
                  <span className={`text-[10px] md:text-xs font-medium tracking-wide text-center px-1 truncate w-full transition-colors duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Contact Input Form Context */}
          <div className="flex-1 min-w-0 w-full">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#BC512B] block mb-2">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-white tracking-tight">
              Request Window Quote
            </h2>

            <form className="space-y-4 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#BC512B] focus:ring-1 focus:ring-[#BC512B]/40 transition-all duration-200"
                />
                <input
                  type="tel"
                  placeholder="Your Phone*"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#BC512B] focus:ring-1 focus:ring-[#BC512B]/40 transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#BC512B] focus:ring-1 focus:ring-[#BC512B]/40 transition-all duration-200"
                />
                <input
                  type="text"
                  placeholder="Services Type*"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#BC512B] focus:ring-1 focus:ring-[#BC512B]/40 transition-all duration-200"
                />
              </div>

              <div className="w-full">
                <textarea
                  placeholder="Write Your Message..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#BC512B] focus:ring-1 focus:ring-[#BC512B]/40 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#BC512B] hover:bg-[#a34321] text-white font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.98] shadow-md shadow-black/20"
              >
                SUBMIT A MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        {/* Floating Accessibility Action Module */}
        <div className="absolute bottom-6 left-6 z-10 hidden lg:block">
          <button 
            type="button"
            aria-label="View application configurations"
            className="bg-neutral-800 border border-neutral-700 hover:border-neutral-600 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center group"
          >
            <Eye className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
          </button>
        </div>
      </div>

      {/* Right Product Display Sidebar Component */}
      <div className="relative w-full h-[250px] sm:h-[320px] lg:h-auto lg:w-[25%] shrink-0 border-t lg:border-t-0 lg:border-l border-white/5 bg-neutral-900">
        <Image
          src={bg} 
          alt="Premium luxury tailored window blind sample showcase" 
          fill
          sizes="(max-w: 1024px) 100vw, 25vw"
          className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
        />
      </div>
      
    </div>
  );
}