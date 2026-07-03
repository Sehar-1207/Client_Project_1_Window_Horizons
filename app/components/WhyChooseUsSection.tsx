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
      "From consultation to after-sales support, we manage everything—so you don't have to.",
  },
];

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="border-t border-gray-200 pt-4 flex flex-col gap-2">
      <div className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
        <Icon className="w-4 h-4 text-[#1A1A1A] stroke-[1.5]" />
      </div>

      <h3 className="text-lg font-bold text-[#1A1A1A]">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="max-w-[1440px] mx-auto bg-white px-6 py-12 lg:px-16 xl:px-24">

      <div className="text-center mb-12">
        <span className="block text-xs font-bold uppercase tracking-[3px] text-[#BC512B] mb-3">
          SMART & CREATIVE
        </span>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
          What Makes Us Different
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
    
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((feature) => (
              <div key={feature.title}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] h-[400px] lg:h-full min-h-[450px] overflow-hidden rounded-tl-[70px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] shadow-sm">
            <Image
              src={showcaseImage}
              alt="Window blinds"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}