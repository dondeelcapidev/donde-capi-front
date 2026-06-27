"use client";

import type { Category } from "@/types/database";

interface CategoryFiltersProps {
  categories: Category[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
}

export function CategoryFilters({
  categories,
  selectedSlug,
  onSelect,
}: CategoryFiltersProps) {
  return (
    <div className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto py-3 lg:flex-wrap lg:justify-start lg:overflow-visible lg:py-4 lg:snap-none">
      {categories.map((category) => (
        <FilterPill
          key={category.id}
          label={category.name}
          active={selectedSlug === category.slug}
          onClick={() => onSelect(category.slug)}
        />
      ))}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`snap-start whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 lg:px-6 lg:py-3 lg:text-sm ${
        active
          ? "bg-neutral-900 text-white shadow-md shadow-neutral-900/20"
          : "bg-neutral-100 text-neutral-700 shadow-sm hover:bg-neutral-200 hover:shadow-md"
      }`}
    >
      {label}
    </button>
  );
}
