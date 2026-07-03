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
    <section className="w-full bg-white py-2 lg:py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10" />

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[130px] sm:h-[150px] lg:h-[250px] rounded-3xl overflow-hidden"
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

          <div className="absolute left-1/2 bottom-1 -translate-x-1/2 -translate-y-1/2">
            <button className="flex items-center justify-between gap-8 bg-white rounded-full shadow-xl px-7 py-2 min-w-[320px] hover:shadow-2xl transition">
              <div className="flex items-center gap-4">
                <span className="w-6 h-[1px] bg-orange-500 rounded-full" />
                <span className="text-xl font-medium text-gray-700">
                  Follow On Instagram
                </span>
              </div>

              <div className="w-9 h-9 rounded-full border border-orange-200 flex items-center justify-center">
                <FaInstagram
                  size={22}
                  className="text-orange-500"
                  strokeWidth={2}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}