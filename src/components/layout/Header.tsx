import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { LOGO_COLOR } from "@/lib/data/catalog";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100/80 bg-white/90 backdrop-blur-lg supports-[backdrop-filter]:bg-white/80">
      <div className="page-container flex items-center justify-between gap-2 py-1.5 sm:gap-3 sm:py-2">
        <Link href="/" className="min-w-0 shrink transition-opacity hover:opacity-85 active:opacity-70">
          <Image
            src={LOGO_COLOR}
            alt="Donde el Capi — Inicio"
            height={146}
            className="h-[5.25rem] w-auto max-w-[58vw] sm:h-[6.5rem] sm:max-w-none md:h-[7.75rem] lg:h-[9.125rem]"
            priority
          />
        </Link>

        <HeaderNav />

        <LinkButton href="/reservas" variant="primary" size="sm" className="shrink-0">
          Reservar
        </LinkButton>
      </div>
    </header>
  );
}
