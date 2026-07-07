"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo1.png";
import bg from "../assets/furniture3.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#141E28] text-white w-full overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-0 items-start w-full">
          <div className="flex flex-col lg:pr-16 w-full">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={logo}
                alt="Window Horizons Logo"
                width={130}
                height={50}
                className="object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
                Window Horizons
              </span>
            </div>

            <div className="flex items-center border-b border-gray-600/70 pb-2 max-w-sm w-full mt-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent flex-1 outline-none placeholder:text-gray-400 text-sm"
              />
              <button className="text-gray-400 hover:text-white transition shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm mt-5 leading-relaxed max-w-sm">
              Our Agency Specialize In Different Types Of Properties
              Such As Residential, Commercial
            </p>

            <div className="flex gap-2.5 mt-6">
              {[
                { icon: <FaFacebookF />, active: false },
                { icon: <FaInstagram />, active: false },
                { icon: <FaXTwitter />, active: true },
                { icon: <FaLinkedinIn />, active: false },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors duration-200 ${
                    item.active
                      ? "bg-[#BC512B] text-white"
                      : "bg-[#222E3B] text-gray-400 hover:bg-[#BC512B] hover:text-white"
                  }`}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:border-l lg:border-r border-gray-700/60 md:px-8 lg:px-16 py-2">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-6 tracking-wide">
              Pages Links
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 text-gray-400 text-xs sm:text-sm">
              <Link href="#" className="hover:text-white transition">Services</Link>
              <Link href="#" className="hover:text-white transition">About Us</Link>
              <Link href="#" className="hover:text-white transition">Projects</Link>
              <Link href="#" className="hover:text-white transition">Meet The Team</Link>
              <Link href="#" className="hover:text-white transition">Awards</Link>
              <Link href="#" className="hover:text-white transition">Testimonials</Link>
              <Link href="#" className="hover:text-white transition">Core Values</Link>
              <Link href="#" className="hover:text-white transition">FAQs</Link>
              <Link href="#" className="hover:text-white transition">Blog</Link>
              <Link href="#" className="hover:text-white transition">Contact Us</Link>
            </div>
          </div>

          <div className="w-full lg:pl-16 py-2">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-6 tracking-wide">
              Contact Info
            </h3>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-200 tracking-tight">
              (800)123-456-789
            </h2>

            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              hello@compnyname.com
            </p>

            <p className="mt-8 text-gray-400 text-xs sm:text-sm leading-relaxed">
              28 Valencia Street, New York
              <br />
              United States Of America
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700/50 my-12" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-tight max-w-xl">
            Let&apos;s Create Something Timeless
          </h2>

          <button className="bg-[#BC512B] hover:bg-[#a64522] text-white transition-colors duration-200 px-7 py-3 rounded-md text-xs font-bold tracking-wider uppercase whitespace-nowrap shrink-0 shadow-sm">
            GET STARTED
          </button>
        </div>
      </div>

      <div className="relative border-t border-gray-700/40 bg-[#0F1720]/60 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.12] select-none mix-blend-luminosity">
          <Image
            src={bg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs text-gray-300 font-medium tracking-wide">
          <p className="text-center sm:text-left">
            © 2026 <span className="text-[#BC512B]">TechXen solutions</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="#" className="hover:text-white transition">Terms & Condition</Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="hover:text-white transition">Privacy & Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}