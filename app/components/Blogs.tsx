"use client";

import Image from "next/image";
import { User, Tag, Calendar } from "lucide-react";

import articleImg1 from "../assets/service1.jpg";
import articleImg2 from "../assets/customblind3.jpg";
import articleImg3 from "../assets/window.jpg";

interface Article {
  id: number;
  author: string;
  category: string;
  date: string;
  title: string;
  image: any;
  isDarkBtn?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    author: "By Jerome Bell",
    category: "Apartments",
    date: "03 Feb 2026",
    title: "What To Admire About Custom Blackout Window Shades?",
    image: articleImg1,
  },
  {
    id: 2,
    author: "By Jerome Bell",
    category: "Commercial",
    date: "03 Feb 2026",
    title: "Is Room Darkening Shades Worth Considering?",
    image: articleImg2,
    isDarkBtn: true,
  },
  {
    id: 3,
    author: "By Jerome Bell",
    category: "Apartments",
    date: "03 Feb 2026",
    title: "Why Blackout Window Shades In New York City?",
    image: articleImg3,
  },
];

function MetaBadge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200 bg-white shadow-sm text-[10px] sm:text-[11px] font-medium text-gray-500 max-w-full">
      <Icon className="w-3 h-3 text-[#BC512B] shrink-0" />
      <span className="truncate">{text}</span>
    </div>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 lg:gap-12 py-6 sm:py-8 w-full overflow-hidden">
      <div className="w-full md:w-3/5 flex flex-col items-start min-w-0 mt-2 md:mt-0">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 w-full">
          <MetaBadge icon={User} text={article.author} />
          <MetaBadge icon={Tag} text={article.category} />
          <MetaBadge icon={Calendar} text={article.date} />
        </div>

        <h3 className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#18202F] leading-snug mb-4 tracking-tight max-w-2xl break-words">
          {article.title}
        </h3>

        <button
          className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition shadow-sm border ${
            article.isDarkBtn
              ? "bg-[#BC512B] text-white border-[#BC512B] hover:bg-[#a94824]"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          }`}
        >
          Read More
        </button>
      </div>

      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="relative w-full aspect-[21/9] md:aspect-[16/8] lg:aspect-[2.3/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority={article.id === 1}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function BlogAndNews() {
  return (
    <div id='blog' className="w-full bg-white overflow-x-hidden">
      <section  className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-24 py-5 sm:py-12">
        <div className="text-center mb-3 sm:mb-5 max-w-full px-2">
          <span className="uppercase tracking-[2px] text-[#BC512B] font-bold text-xs sm:text-sm block mb-1">
            BLOG & NEWS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#18202F] tracking-tight break-words">
            Browse Our Latest Articles & News
          </h2>
        </div>

        <div className="flex flex-col w-full divide-y divide-gray-200 border-t border-b border-gray-200">
          {articles.map((article) => (
            <ArticleRow key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}