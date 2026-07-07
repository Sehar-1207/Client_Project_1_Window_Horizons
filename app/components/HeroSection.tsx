'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

import heroImage1 from '../assets/furniture.jpg'; 
import heroImage2 from '../assets/furniture2.jpg';
import heroImage3 from '../assets/furniture3.jpg';

const slides = [
  { 
    id: '01', 
    image: heroImage1,
    tagline: 'Take 10% to 15% off',
    title: 'Window Treatments,\nShades & Blinds',
    desc: 'Custom blinds, shades, and drapery precisely engineered for premium comfort, privacy, and architectural style.'
  },
  { 
    id: '02', 
    image: heroImage2,
    tagline: 'Premium Materials',
    title: 'Crafted For Elegant\nModern Living Space',
    desc: 'Explore boutique custom-made textiles and automated shade profiles built to complement modern luxury aesthetics.'
  }, 
  { 
    id: '03', 
    image: heroImage3,
    tagline: 'Expert Installation',
    title: 'Flawless Precision\nFrom Start To Finish',
    desc: 'Enjoy specialized shop-at-home consultations paired with dedicated White-Glove measurements and setups.'
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideSelect = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="w-full bg-[#f5f5f7] pt-3 pb-6 sm:pt-6 sm:pb-10 px-0 sm:px-4 md:px-6">
      <section
        className="relative w-full h-[78vh] sm:h-[82vh] lg:h-[88vh] max-w-[1440px] mx-auto overflow-hidden sm:rounded-[32px] bg-gray-900 shadow-xl select-none"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Premium Room Interior Space ${slide.id}`}
              fill
              sizes="1440px"
              className="object-cover brightness-[0.75]"
              priority={index === 0}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20 z-10" />

        <div className="relative z-20 h-full w-full flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-20 text-white">
          
          <div className="my-auto max-w-3xl pt-4 sm:pt-0">
            <div className="overflow-hidden mb-3 sm:mb-4">
              <span className="inline-block text-[#FF7A45] font-extrabold uppercase text-xs sm:text-sm tracking-[3px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] animate-fade-in">
                {slides[currentSlide].tagline}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.12] mb-6 tracking-tight max-w-2xl whitespace-pre-line transition-all duration-500 drop-shadow-sm">
              {slides[currentSlide].title}
            </h1>

          <p className="text-sm sm:text-base text-gray-100/95 mb-8 max-w-md sm:max-w-lg leading-relaxed transition-all duration-500 font-medium drop-shadow-sm">
              {slides[currentSlide].desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-[#BC512B] hover:bg-[#a94824] transition-all duration-300 text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-black/10 active:scale-98 transform hover:-translate-y-0.5">
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase active:scale-98 transform hover:-translate-y-0.5">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end w-full pt-4">
            <div className="flex gap-8 text-xs font-bold tracking-widest">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => handleSlideSelect(index)}
                  className="group relative py-2 px-1 flex flex-col items-center gap-1 cursor-pointer outline-none"
                >
                  <span className={`transition-colors duration-300 ${
                    index === currentSlide ? 'text-white scale-110' : 'text-white/40 group-hover:text-white/80'
                  }`}>
                    {slide.id}
                  </span>
                  <span className={`h-[2px] rounded-full bg-[#BC512B] transition-all duration-500 origin-left ${
                    index === currentSlide ? 'w-full scale-x-100' : 'w-0 scale-x-0'
                  }`} />
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}