"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import logoImg from "../assets/logo1.png";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT US", href: "#about" },
  { name: "BLINDS", href: "#blinds" },
  { name: "SHADES", href: "#shades" },
  { name: "SERVICES", href: "#services" },
  { name: "TESTIMONIALS", href: "#testimonials" },
  { name: "INSTAGRAM", href: "#instagram" },
  { name: "BLOG", href: "#blog" },
  { name: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <nav className="flex items-center justify-between px-6 sm:px-10 py-4 max-w-[1440px] mx-auto w-full">
        
        <Link href="#home" className="flex items-center gap-3 z-50 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg shrink-0 transition-transform group-hover:scale-105">
            <Image
              src={logoImg}
              alt="Window Horizons Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-gray-800 text-sm font-extrabold tracking-wider sm:text-base">
            WINDOW HORIZONS
          </span>
        </Link>

        <div className="hidden lg:flex gap-6 xl:gap-8 text-[11px] xl:text-xs font-bold tracking-widest text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-2 hover:text-[#BC512B] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#BC512B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="bg-[#BC512B] text-white hover:bg-[#a94824] px-6 py-3 rounded-full text-xs font-bold tracking-widest shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap">
            BOOK AN APPOINTMENT
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none z-50 rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 flex flex-col justify-between p-8 pt-28 transform transition-transform duration-300 ease-in-out w-full h-screen ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[65vh] py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold tracking-wide text-gray-800 hover:text-[#BC512B] transition-colors py-2 border-b border-gray-50"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-auto pb-10 w-full">
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#BC512B] text-white hover:bg-[#a94824] py-4 rounded-full text-xs font-bold tracking-widest shadow-md transition-colors duration-200"
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </header>
  );
}