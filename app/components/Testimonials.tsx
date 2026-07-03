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
      rating: 4,
      text: '“Wanted To Use A Local Window Covering Company But Am Very Selective. Had The Best Experience With Meni Who Was Helpful With Selection And Extremely Timely With My Order And The Appt Prior To Ordering. Went With His Suggestions And Got The Hunter-Douglas Blinds And They Look Fantastic”.',
      name: 'Cameron Williamson',
      role: 'CEO',
      avatar: cameronAvatar,
    },
    {
      id: 2,
      logo: yelpLogo,
      logoAlt: 'Yelp',
      rating: 4,
      text: '“Wanted To Use A Local Window Covering Company But Am Very Selective. Had The Best Experience With Meni Who Was Helpful With Selection And Extremely Timely With My Order And The Appt Prior To Ordering. Went With His Suggestions And Got The Hunter-Douglas Blinds And They Look Fantastic”.',
      name: 'Cody Fisher',
      role: 'CEO',
      avatar: codyAvatar,
    },
    {
      id: 3,
      logo: houzzLogo,
      logoAlt: 'Houzz',
      rating: 4,
      text: '“Wanted To Use A Local Window Covering Company But Am Very Selective. Had The Best Experience With Meni Who Was Helpful With Selection And Extremely Timely With My Order And The Appt Prior To Ordering. Went With His Suggestions And Got The Hunter-Douglas Blinds And They Look Fantastic”.',
      name: 'Dianne Russell',
      role: 'CEO',
      avatar: dianneAvatar,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-2">
            CONTRIBUTING TO THE SUCCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Our Clients Testimonial
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E2E8F0]">
                  <div className="h-17 flex items-center">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      height={34}
                      className="h-full w-auto object-contain object-left max-w-[120px]"
                    />
                  </div>
                  <div className="flex items-center gap-0.5">
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

                <p className="text-sm leading-relaxed text-[#475569] font-light mb-8">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-base font-semibold text-[#0F172A]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8] tracking-wide font-medium uppercase mt-0.5">
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