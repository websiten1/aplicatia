interface HorizontalStripProps {
  children: React.ReactNode;
  className?: string;
}

/** Scrollable, scrollbar-less, scroll-snapping horizontal row (day numbers, months, years). */
export function HorizontalStrip({ children, className }: HorizontalStripProps) {
  return (
    <div
      className={`no-scrollbar snap-x-strip flex items-center gap-md overflow-x-auto px-screen-x ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

/** A month/year pill item: filled accent pill when active, muted label otherwise. */
export function StripPill({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className={
        active
          ? "shrink-0 rounded-pill bg-accent px-[22px] py-[10px] font-sans text-[15px] font-semibold uppercase text-white"
          : "shrink-0 px-[22px] py-[10px] font-sans text-[15px] font-semibold uppercase text-text-muted"
      }
    >
      {label}
    </span>
  );
}
