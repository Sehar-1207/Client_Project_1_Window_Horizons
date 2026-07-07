"use client";

import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";

import mainBlindsImage from "../assets/window.jpg";
import videoThumbnailImage from "../assets/furniture2.jpg";

function ExperienceCard() {
  return (
    <div className="flex items-start gap-4 w-full max-w-full">
      <h2 className="text-5xl sm:text-6xl font-bold text-[#18202F] tracking-tighter leading-none shrink-0">
        26
      </h2>
      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 leading-normal pt-1.5 min-w-0 break-words">
        <p>Years Of Quality</p>
        <p className="text-[#BC512B]">Service In Window</p>
        <p>Treatments</p>
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="relative w-full max-w-[240px] h-[140px] overflow-hidden rounded-2xl group cursor-pointer shadow-md shrink-0">
      <Image
        src={videoThumbnailImage}
        alt="Watch Video Overview"
        fill
        sizes="(max-w-700px) 240px, 240px"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-opacity group-hover:opacity-90" />
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white z-10">
        <PlayCircle className="w-5 h-5 fill-white stroke-black/20 drop-shadow-sm" />
        <span className="text-xs font-bold tracking-wide">Watch Video</span>
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="flex flex-col h-full justify-between gap-6 lg:gap-8 w-full min-w-0">
      <div className="w-full">
        <span className="uppercase tracking-[3px] text-[#BC512B] font-bold text-xs block mb-3">
          COMPANY ABOUT US
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#18202F] leading-[1.15] tracking-tight">
          Crafting Elegant Window Solutions With Precision & Care
        </h2>

        <div className="space-y-4 text-gray-500 text-sm font-medium leading-relaxed mt-6 max-w-2xl break-words">
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

        <button className="mt-6 inline-flex items-center gap-2 bg-[#BC512B] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#a94824] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
          More About Us
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="pt-4 border-t border-gray-200 w-full">
        <p className="text-sm font-semibold leading-relaxed text-[#18202F] max-w-xl break-words">
          A Dedicated Team Of Designers, Installers, And Consultants With Years Of 
          Experience In Residential And Commercial Window Treatments.
        </p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    /* The scroll-mt-20 utility acts as an anchor offset. Change 20 to matching height 
      of your sticky header (e.g., scroll-mt-16 if navbar is h-16) to ensure pixel-perfect jumps.
    */
    <section 
      id="about" 
      className="w-full bg-white max-w-[1440px] mx-auto px-6 lg:px-16 xl:px-24 py-16 sm:py-24 overflow-hidden scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch w-full">
        
        {/* Left Column: Stats & Media */}
        <div className="lg:col-span-3 lg:border-r lg:border-gray-200 lg:pr-10 flex flex-col justify-between gap-8 lg:gap-12 min-h-fit w-full min-w-0">
          <ExperienceCard />
          <VideoCard />
        </div>

        {/* Center Column: Core Content */}
        <div className="lg:col-span-6 lg:border-r lg:border-gray-200 lg:px-12 w-full min-w-0 flex items-center">
          <AboutContent />
        </div>

        {/* Right Column: Featured Display Image */}
        <div className="lg:col-span-3 lg:pl-10 flex items-center justify-center lg:justify-end w-full min-w-0">
          <div className="relative w-full max-w-[360px] min-h-[400px] lg:h-full lg:min-h-[480px] rounded-[32px] overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.01]">
            <Image
              src={mainBlindsImage}
              alt="Installer adjusting window treatment shades"
              fill
              priority
              sizes="(max-w-1024px) 360px, 25vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}