'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import heroImage1 from '../assets/furniture.jpg'; 
import heroImage2 from '../assets/furniture2.jpg';
import heroImage3 from '../assets/furniture3.jpg';

const slides = [
  { id: '01', image: heroImage1 },
  { id: '02', image: heroImage2 }, 
  { id: '03', image: heroImage3 },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] max-w-[1440px] mx-auto overflow-hidden rounded-[30px] mt-4 bg-grey-100">
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100 z-0' 
              : 'opacity-0 scale-105 pointer-events-none z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Room Interior Background ${slide.id}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-black/45 z-10" />

      <div className="relative z-20 h-full w-full flex flex-col justify-between p-12 lg:p-16 text-white">
        
        <div className="my-auto max-w-3xl">
          <p className="text-brand-primary font-bold uppercase text-xs sm:text-sm tracking-widest mb-4">
            Take 10% to 15% off
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Window Treatments<br />Shades & Blinds
          </h1>

          <p className="text-sm sm:text-base text-gray-200 mb-8 max-w-lg leading-relaxed">
            Custom Blinds, Shades, And Drapery Designed For Comfort, Privacy, And Style.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-btn-brand text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide">
              BOOK FREE CONSULTATION
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition">
              EXPLORE PRODUCTS
            </button>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <div className="flex gap-6 text-xs sm:text-sm font-semibold tracking-widest select-none">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide 
                    ? 'text-white border-b-2 border-brand-primary pb-1 font-bold' 
                    : 'text-white/40 hover:text-white/70 pb-1'
                }`}
              >
                {slide.id}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}