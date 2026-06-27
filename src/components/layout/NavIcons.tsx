import type { ReactNode } from "react";

/** Tamaño fijo compartido — activo e inactivo usan la misma caja */
export const NAV_ICON_CLASS = "h-[22px] w-[22px] shrink-0";

interface IconProps {
  className?: string;
}

function NavSvg({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function HomeIcon({ className = NAV_ICON_CLASS }: IconProps) {
  return (
    <NavSvg className={className}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10.5V19a1 1 0 0 0 1 1h3v-4h4v4h3a1 1 0 0 0 1-1v-8.5" />
    </NavSvg>
  );
}

/** Empanada — mismo bounding box que el resto (y: 6–19) */
export function FoodMenuIcon({ className = NAV_ICON_CLASS }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        fill="currentColor"
        stroke="none"
        d="M12 7C7.03 7 3.5 10.8 3.5 15.5c0 .55.45 1 1 1h15c.55 0 1-.45 1-1C20.5 10.8 16.97 7 12 7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
        opacity={0.35}
        d="M5.5 16c1-.75 2-.75 3 0s2 .75 3 0 2-.75 3 0 2 .75 3 0 2-.75 3 0"
      />
    </svg>
  );
}

export function CalendarIcon({ className = NAV_ICON_CLASS }: IconProps) {
  return (
    <NavSvg className={className}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 9.5h16M8 3v3M16 3v3" />
      <circle cx="12" cy="14" r="1.25" fill="currentColor" stroke="none" />
    </NavSvg>
  );
}

export function SocialIcon({ className = NAV_ICON_CLASS }: IconProps) {
  return (
    <NavSvg className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4a10 10 0 0 1 0 16M12 4a10 10 0 0 0 0 16" />
    </NavSvg>
  );
}

export function navIconFor(id: string): ReactNode {
  switch (id) {
    case "inicio":
      return <HomeIcon />;
    case "menu":
      return <FoodMenuIcon />;
    case "reservas":
      return <CalendarIcon />;
    case "redes":
      return <SocialIcon />;
    default:
      return null;
  }
}
