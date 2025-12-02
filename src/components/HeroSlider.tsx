"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    slug: "mm-ss-3pcs-elegant-auro-pot-combo-mm4199",
    title: "Elegant Auro Pot Combo",
    subtitle: "Heavy-gauge stainless steel pots for biryani & gravies.",
    imageUrl:
      "https://www.meenakshiandmeenakshi.com/image/mm-ss-3pcs-elegant-auro-pot-combo-mm4199.jpg",
  },
  {
    slug: "mm-ss-6pcs-sleek-full-set-sambadam-combo-mm4195",
    title: "Sleek Sambadam Storage Set",
    subtitle: "Organised grain storage for traditional South Indian kitchens.",
    imageUrl:
      "https://www.meenakshiandmeenakshi.com/image/mm-ss-6pcs-sleek-full-set-sambadam-combo-mm4195.jpg",
  },
  {
    slug: "mm-water-bottle-glory-1000ml-with-jute-bag-combo-mm4201",
    title: "Glory Water Bottle Combo",
    subtitle: "Steel hydration with eco-friendly jute carry bag.",
    imageUrl:
      "https://www.meenakshiandmeenakshi.com/image/mm-water-bottle-glory-1000ml-with-jute-bag-combo-mm4201.jpg",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <Link
      href={`/product/${current.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-[#e5e5e5] bg-[#111111] text-white"
    >
      <div className="relative h-40 w-full overflow-hidden sm:h-48">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${current.imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="relative px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e1c16e]">
          Featured Metal Pick
        </p>
        <p className="mt-1 text-sm font-semibold sm:text-base">{current.title}</p>
        <p className="mt-1 text-[11px] text-neutral-300 line-clamp-2">
          {current.subtitle}
        </p>
        <p className="mt-2 text-[11px] font-semibold text-[#e1c16e]">
          View details →
        </p>
        <div className="mt-2 flex gap-1">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i === index ? "bg-[#e1c16e]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}


