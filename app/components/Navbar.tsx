"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-100 z-50">
      <nav className="flex items-center justify-between px-6 sm:px-10 py-4 max-w-[1440px] mx-auto w-full relative z-50 bg-white">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg shrink-0 transition-transform group-hover:scale-105">
            <Image
              src={logoImg}
              alt="Window Horizons Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-[#0B2545] text-sm font-extrabold tracking-wider sm:text-base transition-colors duration-200 group-hover:text-[#BC512B]">
            WINDOW HORIZONS
          </span>
        </Link>

        <div className="hidden lg:flex gap-6 xl:gap-8 text-[11px] xl:text-xs font-bold tracking-widest text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-2 text-[#0B2545] hover:text-[#BC512B] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#BC512B] hover:after:w-full after:transition-all after:duration-300"
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
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#BC512B] focus:outline-none rounded-lg transition-colors"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-white z-[55] flex flex-col justify-between px-8 pb-10 pt-4 w-full h-[100dvh] overflow-hidden overscroll-behavior-none transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none invisible"
        }`}
        onTouchMove={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between w-full py-2 border-b border-transparent group">
          <Link href="#home" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg shrink-0">
              <Image
                src={logoImg}
                alt="Window Horizons Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-[#0B2545] text-sm font-extrabold tracking-wider hover:text-[#BC512B] transition-colors duration-200">
              WINDOW HORIZONS
            </span>
          </Link>
          
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-700 hover:text-[#BC512B] focus:outline-none transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col w-full mt-6 overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-black tracking-wider text-[#0B2545] hover:text-[#BC512B] active:text-[#BC512B] transition-colors duration-200 py-3.5 border-b border-gray-100/70 last:border-b-0 text-left"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="w-full mt-auto">
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#BC512B] text-white hover:bg-[#a94824] active:bg-[#a94824] py-4 rounded-full text-xs font-black tracking-widest shadow-md transition-colors duration-200"
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </header>
  );
}