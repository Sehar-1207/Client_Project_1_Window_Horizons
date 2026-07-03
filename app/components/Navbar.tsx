"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import logoImg from "../assets/logo1.png";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "BLINDS", href: "/blinds" },
  { name: "SHADES", href: "/shades" },
  { name: "SERVICES", href: "/services" },
  { name: "PROMOTION", href: "/promotion" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50 overflow-x-hidden">
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 max-w-[1440px] mx-auto w-full">
        
        <Link href="/" className="flex items-center gap-4 z-50">
          <div className="relative w-12 h-12 overflow-hidden rounded-md shrink-0 sm:w-14 sm:h-14">
            <Image
              src={logoImg}
              alt="Window Horizons Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-gray-700 text-base font-bold tracking-tight leading-tight sm:text-lg">
            WINDOW<br />HORIZONS
          </span>
        </Link>

        <div className="hidden lg:flex gap-6 xl:gap-7 text-[11px] xl:text-xs font-semibold tracking-wider text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#BC512B] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="bg-[#BC512B] text-white hover:bg-[#a94824] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider shadow-sm transition-colors duration-200 whitespace-nowrap">
            BOOK AN APPOINTMENT
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 flex flex-col justify-between p-6 pt-24 transform transition-transform duration-300 ease-in-out w-full h-screen ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5 overflow-y-auto max-h-[60vh] py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-bold tracking-wider text-gray-800 hover:text-[#BC512B] transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-auto pb-8 w-full">
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#BC512B] text-white hover:bg-[#a94824] py-3.5 rounded-full text-xs font-bold tracking-wider shadow-md transition-colors duration-200"
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </header>
  );
}