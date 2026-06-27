import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { LinkButton } from "@/components/ui/Button";
import { getCategoryImage } from "@/lib/utils/category-image";
import type { Category } from "@/types/database";

interface MenuPreviewProps {
  categories: Category[];
}

export function MenuPreview({ categories }: MenuPreviewProps) {
  return (
    <div className="page-container">
      <FadeIn>
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
              Nuestro Menú
            </span>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tight lg:text-3xl">
              Antojitos, tamales y más
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500">
              Empanadas, pasteles, tamales y platos especiales. Pide directo por
              WhatsApp.
            </p>
          </div>
          <LinkButton
            href="/menu"
            variant="ghost"
            size="sm"
            className="hidden shrink-0 sm:inline-flex"
          >
            Ver todo
          </LinkButton>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="/menu"
              className="group relative h-24 overflow-hidden rounded-xl shadow-lg shadow-neutral-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-neutral-300/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-28 lg:h-32"
            >
              <Image
                src={getCategoryImage(category)}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] font-black uppercase tracking-wider text-white sm:text-xs">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={120}>
        <div className="mt-6 sm:hidden">
          <LinkButton href="/menu" variant="primary" size="md" className="w-full">
            Explorar menú completo
          </LinkButton>
        </div>
      </FadeIn>
    </div>
  );
}
