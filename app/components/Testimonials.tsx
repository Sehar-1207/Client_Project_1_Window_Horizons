"use client";

import Image from 'next/image';
import React from 'react';
import { Star } from 'lucide-react';

import googleLogo from '../assets/google.jpg';
import yelpLogo from '../assets/yelp.jpg';
import houzzLogo from '../assets/houzz.jpg';

import cameronAvatar from '../assets/testimonial1.jpg';
import codyAvatar from '../assets/testimonial2.jpg';
import dianneAvatar from '../assets/testimonial1.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      logo: googleLogo,
      logoAlt: 'Google',
      rating: 5,
      text: '“Wanted To Use A Local Window Covering Company But Am Very Selective. Had The Best Experience With Meni Who Was Helpful With Selection And Extremely Timely With My Order And The Appt Prior To Ordering. Went With His Suggestions And Got The Hunter-Douglas Blinds And They Look Fantastic”.',
      name: 'Cameron Williamson',
      role: 'CEO',
      avatar: cameronAvatar,
    },
    {
      id: 2,
      logo: yelpLogo,
      logoAlt: 'Yelp',
      rating: 5,
      text: '“Wanted To Use A Local Window Covering Company But Am Very Selective. Had The Best Experience With Meni Who Was Helpful With Selection And Extremely Timely With My Order And The Appt Prior To Ordering. Went With His Suggestions And Got The Hunter-Douglas Blinds And They Look Fantastic”.',
      name: 'Cody Fisher',
      role: 'CEO',
      avatar: codyAvatar,
    },
    {
      id: 3,
      logo: houzzLogo,
      logoAlt: 'Houzz',
      rating: 5,
      text: '“Wanted To Use A Local Window Covering Company But Am Very Selective. Had The Best Experience With Meni Who Was Helpful With Selection And Extremely Timely With My Order And The Appt Prior To Ordering. Went With His Suggestions And Got The Hunter-Douglas Blinds And They Look Fantastic”.',
      name: 'Dianne Russell',
      role: 'CEO',
      avatar: dianneAvatar,
    },
  ];

  return (
    <section id='testimonials' className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#BC512B] block mb-2">
            CONTRIBUTING TO THE SUCCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Our Clients Testimonial
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300/60 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-[#E2E8F0]">
                  <div className="h-8 relative w-[100px] flex items-center">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      height={32}
                      className="h-full w-auto object-contain object-left"
                    />
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 ${
                          index < item.rating
                            ? 'text-orange-500 fill-orange-500'
                            : 'text-[#CBD5E1]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#475569] font-normal mb-6">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-3.5 mt-auto pt-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-[#1A1A1A] tracking-tight truncate">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-[#94A3B8] tracking-widest font-bold uppercase mt-0.5 truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}