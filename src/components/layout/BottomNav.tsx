"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navIconFor } from "./NavIcons";
import { useActiveNavTab, type NavTab } from "./useActiveNavTab";

const navItems: { id: NavTab; href: string; label: string }[] = [
  { id: "inicio", href: "/", label: "Inicio" },
  { id: "menu", href: "/menu", label: "Menú" },
  { id: "reservas", href: "/reservas", label: "Reservas" },
  { id: "redes", href: "/#redes", label: "Redes" },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { activeTab, setActiveTab, scrollToRedes, scrollToTop } =
    useActiveNavTab(pathname);

  const handleClick = (
    item: (typeof navItems)[number],
    e: React.MouseEvent
  ) => {
    if (item.id === "redes") {
      e.preventDefault();
      if (pathname !== "/") {
        setActiveTab("redes");
        router.push("/#redes");
        return;
      }
      scrollToRedes();
      return;
    }

    if (item.id === "inicio" && pathname === "/") {
      e.preventDefault();
      scrollToTop();
      return;
    }

    setActiveTab(item.id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe lg:hidden" aria-label="Navegación móvil">
      <div className="mx-3 mb-3 rounded-2xl border border-neutral-200/80 bg-white/95 px-1 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/90">
        <div className="flex items-stretch">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(item, e)}
                aria-current={isActive ? "page" : undefined}
                className="relative flex flex-1 flex-col items-center justify-center py-1"
              >
                <span
                  className={`flex h-10 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ease-out ${
                    isActive
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/40"
                      : "text-neutral-400 active:scale-95"
                  }`}
                >
                  {navIconFor(item.id)}
                </span>
                <span
                  className={`mt-0.5 text-[9px] font-black uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? "text-amber-600" : "text-neutral-400"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
