"use client";

import { useCallback, useEffect, useState } from "react";

export type NavTab = "inicio" | "menu" | "reservas" | "redes";

export function useActiveNavTab(pathname: string): {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  scrollToRedes: () => void;
  scrollToTop: () => void;
} {
  const [activeTab, setActiveTab] = useState<NavTab>(() =>
    resolveTab(pathname, "")
  );

  const syncFromLocation = useCallback(() => {
    setActiveTab(resolveTab(pathname, window.location.hash));
  }, [pathname]);

  useEffect(() => {
    syncFromLocation();
  }, [syncFromLocation]);

  useEffect(() => {
    const onHashChange = () => syncFromLocation();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [syncFromLocation]);

  useEffect(() => {
    if (pathname !== "/") return;

    const section = document.getElementById("redes");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveTab("redes");
        } else if (window.scrollY < section.offsetTop - 120) {
          setActiveTab((prev) => (prev === "redes" ? "inicio" : prev));
        }
      },
      { threshold: 0.15, rootMargin: "-80px 0px -35% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  const scrollToRedes = useCallback(() => {
    setActiveTab("redes");
    window.history.replaceState(null, "", "/#redes");
    requestAnimationFrame(() => {
      document.getElementById("redes")?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  const scrollToTop = useCallback(() => {
    setActiveTab("inicio");
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#redes") {
      setActiveTab("redes");
      requestAnimationFrame(() => {
        document.getElementById("redes")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [pathname]);

  return { activeTab, setActiveTab, scrollToRedes, scrollToTop };
}

function resolveTab(pathname: string, hash: string): NavTab {
  if (pathname.startsWith("/menu")) return "menu";
  if (pathname.startsWith("/reservas")) return "reservas";
  if (pathname === "/" && hash === "#redes") return "redes";
  return "inicio";
}
