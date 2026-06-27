"use client";

import { useState } from "react";
import { getProductsByCategory } from "@/lib/data/catalog";
import { FadeIn } from "@/components/ui/FadeIn";
import { CategoryFilters } from "./CategoryFilters";
import { CategoryGallery } from "./CategoryGallery";
import { ProductCard } from "./ProductCard";
import type { Category } from "@/types/database";

interface MenuContentProps {
  categories: Category[];
  whatsappNumber: string;
}

export function MenuContent({ categories, whatsappNumber }: MenuContentProps) {
  const [selectedSlug, setSelectedSlug] = useState("todos");

  const filteredProducts = getProductsByCategory(selectedSlug);

  return (
    <div className="py-8 lg:py-12">
      <div className="page-container">
        <FadeIn>
          <h1 className="text-2xl font-black uppercase tracking-tight lg:text-3xl">
            Nuestro Menú
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Elige una categoría y pide directo por WhatsApp.
          </p>
        </FadeIn>

        <FadeIn delay={60}>
          <CategoryGallery
            categories={categories}
            selectedSlug={selectedSlug}
            onSelect={setSelectedSlug}
          />
        </FadeIn>

        <CategoryFilters
          categories={categories}
          selectedSlug={selectedSlug}
          onSelect={setSelectedSlug}
        />

        <div
          key={selectedSlug}
          className="animate-scale-in motion-reduce:animate-none mt-4 grid gap-4 sm:grid-cols-2 lg:mt-6 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3"
          role="list"
          aria-label={`Productos: ${categories.find((c) => c.slug === selectedSlug)?.name ?? "Todos"}`}
        >
          {filteredProducts.length === 0 ? (
            <p className="col-span-full py-12 text-center text-sm text-neutral-500">
              No hay productos en esta categoría.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} role="listitem">
                <ProductCard
                  product={product}
                  whatsappNumber={whatsappNumber}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
