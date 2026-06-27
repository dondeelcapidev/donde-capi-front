"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio", match: (path: string) => path === "/" },
  {
    href: "/menu",
    label: "Menú",
    match: (path: string) => path.startsWith("/menu"),
  },
  {
    href: "/reservas",
    label: "Reservas",
    match: (path: string) => path.startsWith("/reservas"),
  },
  { href: "/#redes", label: "Redes", match: () => false },
];

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
      {navItems.map((item) => {
        const isActive = item.match(pathname);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              isActive
                ? "bg-amber-50 text-amber-700"
                : "text-neutral-500 hover:bg-neutral-50 hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
