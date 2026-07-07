"use client";

import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

import img1 from "../assets/service1.jpg";
import img2 from "../assets/service2.jpg";
import img3 from "../assets/furniture3.jpg";
import img4 from "../assets/customblinds4.jpg";
import img5 from "../assets/window.jpg";

const images = [img1, img2, img3, img4, img5];

export default function InstagramGallery() {
  return (
    <section id='instagram' className="w-full bg-white py-6 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col lg:block gap-6">
          <div className="flex flex-row lg:grid lg:grid-cols-5 gap-4 lg:gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[180px] sm:h-[220px] lg:h-[250px] w-[140px] sm:w-[180px] lg:w-full rounded-2xl lg:rounded-3xl overflow-hidden shrink-0 snap-center"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 lg:mt-0 lg:absolute lg:left-1/2 lg:bottom-1 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 w-full sm:w-auto">
            <button className="flex items-center justify-between gap-6 sm:gap-8 bg-white rounded-full shadow-lg border border-gray-100 lg:border-none px-6 py-2.5 sm:px-7 sm:py-2 w-full max-w-[340px] sm:min-w-[320px] hover:shadow-2xl transition active:scale-98">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="w-5 sm:w-6 h-[1px] bg-orange-500 rounded-full" />
                <span className="text-lg sm:text-xl font-medium text-gray-700 whitespace-nowrap">
                  Follow On Instagram
                </span>
              </div>

              <div className="w-9 h-9 rounded-full border border-orange-200 flex items-center justify-center shrink-0">
                <FaInstagram
                  size={20}
                  className="text-orange-500"
                />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}