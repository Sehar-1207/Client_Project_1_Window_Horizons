"use client";

import Image from "next/image";
import showcaseImage from "../assets/whyChoose.jpg";

import {
  PanelsTopLeft,
  Building2,
  Blinds,
  ShieldCheck,
  Cpu,
  Layers3,
} from "lucide-react";

const features = [
  {
    icon: PanelsTopLeft,
    title: "Design-Led Approach",
    description:
      "Every solution starts with understanding your space, light, and lifestyle—not pushing products.",
  },
  {
    icon: Building2,
    title: "Premium Materials Only",
    description:
      "We source high-quality fabrics, hardware, and systems built for durability and elegance.",
  },
  {
    icon: Blinds,
    title: "100% Custom Fit",
    description:
      "Precise measurements and tailored fabrication ensure a perfect fit for every window.",
  },
  {
    icon: ShieldCheck,
    title: "Expert Installation",
    description:
      "Trained professionals ensure clean, accurate, and hassle-free installation.",
  },
  {
    icon: Cpu,
    title: "Smart & Motorized Expertise",
    description:
      "Seamless integration with modern smart-home systems for comfort and control.",
  },
  {
    icon: Layers3,
    title: "End-To-End Service",
    description:
      "From consultation to after-sales support, we manage everything so you don't have to.",
  },
];

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="border-t border-gray-200 pt-4 flex flex-col gap-2.5 group">
      <div className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#BC512B]/5 group-hover:border-[#BC512B]/20">
        <Icon className="w-4 h-4 text-[#1A1A1A] stroke-[1.5] transition-colors duration-300 group-hover:text-[#BC512B]" />
      </div>

      <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="services" className="w-full bg-white px-4 py-6 sm:px-6 md:py-20 lg:px-8 xl:px-10">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <span className="block text-xs font-bold uppercase tracking-[3px] text-[#BC512B] mb-2">
            SMART & CREATIVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            What Makes Us Different
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 xl:gap-16 items-center">
      
          {/* Features Column */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Image Showcase Column */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-4 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-square md:aspect-[4/5] lg:aspect-auto lg:h-[580px] overflow-hidden rounded-tl-[70px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] shadow-sm">
              <Image
                src={showcaseImage}
                alt="Premium tailored window blinds showcase"
                fill
                sizes="(max-w: 768px) 100vw, (max-w: 1024px) 50vw, 400px"
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}