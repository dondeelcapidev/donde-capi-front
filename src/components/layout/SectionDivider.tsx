interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`page-container py-1 ${className}`} aria-hidden>
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </div>
  );
}

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export function PageSection({
  children,
  className = "",
  muted = false,
}: PageSectionProps) {
  return (
    <section
      className={`py-10 lg:py-14 ${muted ? "bg-neutral-50/60" : "bg-white"} ${className}`}
    >
      {children}
    </section>
  );
}
