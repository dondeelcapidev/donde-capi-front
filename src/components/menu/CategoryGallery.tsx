"use client";

import Image from "next/image";
import { getCategoryImage } from "@/lib/utils/category-image";
import type { Category } from "@/types/database";

interface CategoryGalleryProps {
  categories: Category[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
}

export function CategoryGallery({
  categories,
  selectedSlug,
  onSelect,
}: CategoryGalleryProps) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {categories.map((category) => {
        const isActive = selectedSlug === category.slug;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.slug)}
            aria-pressed={isActive}
            className={`group relative h-28 overflow-hidden rounded-2xl transition-all duration-300 lg:h-36 ${
              isActive
                ? "scale-[1.02] ring-2 ring-amber-500 ring-offset-2 shadow-xl shadow-amber-500/20"
                : "shadow-lg shadow-neutral-200/80 hover:shadow-xl hover:shadow-neutral-300/50 hover:scale-[1.01]"
            }`}
          >
            <Image
              src={getCategoryImage(category)}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <span className="absolute bottom-3 left-3 text-xs font-black uppercase tracking-wider text-white lg:text-sm">
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
