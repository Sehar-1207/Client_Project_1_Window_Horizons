"use client";

import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";

import mainBlindsImage from "../assets/window.jpg";
import videoThumbnailImage from "../assets/furniture2.jpg";

function ExperienceCard() {
  return (
    <div className="flex items-start gap-3 w-full max-w-full">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#18202F] leading-none shrink-0">26</h2>
      <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 leading-tight pt-1 min-w-0 break-words">
        <p>Years Of Quality</p>
        <p>Service In Window Treatments</p>
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="relative w-full max-w-[200px] h-[130px] overflow-hidden rounded-2xl group cursor-pointer shadow-sm shrink-0">
      <Image
        src={videoThumbnailImage}
        alt="Watch Video"
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white z-10">
        <PlayCircle className="w-4 h-4 fill-white stroke-black/40" />
        <span className="text-[11px] font-bold tracking-wide">Watch Video</span>
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="flex flex-col h-full justify-between gap-3 md:gap-5 lg:gap-0 w-full min-w-0">
      <div className="w-full">
        <span className="uppercase tracking-[2px] text-[#BC512B] font-bold text-sm block mb-3 sm:mb-4">
          COMPANY ABOUT US
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#18202F] ">
          Crafting Elegant Window Solutions With Precision & Care
        </h2>

        <div className="space-y-3 sm:space-y-4 text-gray-500 text-xs font-medium leading-relaxed mt-4 sm:mt-6 max-w-2xl break-words">
          <p>
            Our Company Specializes In Shop At Home Service. Professional And Experienced Design consultants 
            Will Guide You In Selecting The Window Treatments That Fit Your Personal Budget And Décor. We Carry 
            Various Hunter Douglas Window Treatments, Shades, And Blinds Such As Silhouettes, Luminettes,
          </p>
          <p>
            Honeycomb Shades, Duettes, Miniblinds, Wood Blinds, Faux Wood, Roller Shades, Roman Shades, 
            Woven Woods, Solar Shades, Blackout Shades, Curtains, Drapery, Room-Darkening Shades, Energy-Efficient 
            Blinds, Top-Down Bottom-Up, Motorized Shades And More.
          </p>
        </div>

        <button className="mt-5 sm:mt-6 inline-flex items-center gap-2 bg-[#BC512B] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#a94824] transition shadow-sm">
          More About Us
        </button>
      </div>

      <div className="mt-3 lg:mt-4 pt-2 sm:pt-3 border-t border-gray-100 w-full">
        <p className="text-sm font-bold leading-snug text-[#18202F] max-w-xl break-words">
          A Dedicated Team Of Designers, Installers, And Consultants With Years Of 
          Experience In Residential And Commercial Window Treatments.
        </p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div id='about' className="w-full bg-[#f4f4f4] pt-4 sm:pt-8 overflow-x-hidden">
      <section  className="w-full bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-12 sm:py-16 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-0 w-full">
          
          <div className="lg:col-span-3 lg:border-r lg:border-gray-200 lg:pr-8 flex flex-col justify-between gap-6 sm:gap-8 lg:gap-0 min-h-fit lg:min-h-0 w-full min-w-0">
            <ExperienceCard />
            <VideoCard />
          </div>

          <div className="lg:col-span-6 lg:border-r lg:border-gray-200 lg:px-10 w-full min-w-0">
            <AboutContent />
          </div>

          <div className="lg:col-span-3 lg:pl-10 flex items-stretch justify-center lg:justify-end w-full min-w-0">
            <div className="relative w-full max-w-[340px] min-h-[350px] sm:min-h-[450px] lg:h-full rounded-3xl overflow-hidden shadow-sm">
              <Image
                src={mainBlindsImage}
                alt="Installer adjusting window treatment shades"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}