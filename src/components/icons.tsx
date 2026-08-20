type IconProps = {
  className?: string;
};

/* ---------- Header icons ---------- */

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 20.2c-.28 0-.55-.09-.78-.27C7.5 16.9 4.6 14.4 3.4 11.7c-.9-2-.5-4.3 1.1-5.7 1.5-1.4 3.7-1.4 5.3.1L12 8.1l2.2-2c1.6-1.5 3.8-1.5 5.3-.1 1.6 1.4 2 3.7 1.1 5.7-1.2 2.7-4.1 5.2-7.82 8.23-.23.18-.5.27-.78.27Z" />
    </svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3c-3.31 0-6 2.69-6 6v3.55c0 .5-.18.98-.5 1.36L4 15.6c-.7.82-.13 2.1.95 2.1h14.1c1.08 0 1.65-1.28.95-2.1l-1.5-1.69c-.32-.38-.5-.86-.5-1.36V9c0-3.31-2.69-6-6-6Z" />
      <path d="M9.5 19.5a2.5 2.5 0 0 0 5 0h-5Z" />
    </svg>
  );
}

/* ---------- Lunar row-of-4 icons ---------- */

export function RankCrossIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className={className} aria-hidden="true">
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="6" y1="8" x2="18" y2="8" />
      <line x1="8" y1="13" x2="16" y2="13" />
    </svg>
  );
}

export function MealIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 3v7a2 2 0 0 0 4 0V3" />
      <line x1="8" y1="3" x2="8" y2="21" />
      <path d="M17 3c-1.5 0-2.5 2-2.5 5s1 5 2.5 5v8" />
    </svg>
  );
}

export function FastRestrictionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12c3-3.5 6-3.5 9 0-3 3.5-6 3.5-9 0Z" />
      <circle cx="9" cy="12" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 12h3.5" />
      <ellipse cx="18.5" cy="12" rx="2.5" ry="3.2" />
      <line x1="2.5" y1="20" x2="21.5" y2="4" strokeWidth={1.4} />
    </svg>
  );
}

export function FastRankIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <line x1="3" y1="14" x2="21" y2="14" />
      <line x1="9" y1="18" x2="9" y2="20.5" />
      <line x1="15" y1="18" x2="15" y2="20.5" />
      <line x1="12" y1="18" x2="12" y2="21.5" />
    </svg>
  );
}

/* ---------- Meniu ---------- */

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* ---------- Bottom nav icons ---------- */

export function NavZilnicIcon({ className, active }: IconProps & { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 0 : 1.8} className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" fill={active ? "currentColor" : "none"} />
    </svg>
  );
}

export function NavLunarIcon({ className, active }: IconProps & { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="3" fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.15 : 0} />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="3.5" x2="8" y2="6.5" />
      <line x1="16" y1="3.5" x2="16" y2="6.5" />
      <line x1="7" y1="13" x2="9" y2="13" />
      <line x1="11" y1="13" x2="13" y2="13" />
      <line x1="15" y1="13" x2="17" y2="13" />
      <line x1="7" y1="16.5" x2="9" y2="16.5" />
      <line x1="11" y1="16.5" x2="13" y2="16.5" />
    </svg>
  );
}

export function NavAnualIcon({ className, active }: IconProps & { active?: boolean }) {
  const positions = [5, 10.4, 15.8];
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {positions.map((y) =>
        positions.map((x) => <circle key={`${x}-${y}`} cx={x + 1.5} cy={y + 1.5} r={active ? 1.5 : 1.3} />)
      )}
    </svg>
  );
}

export function NavRanduieliIcon({ className }: IconProps & { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="4.5" cy="6" r="1" fill="currentColor" stroke="none" />
      <line x1="8" y1="6" x2="20" y2="6" />
      <circle cx="4.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <line x1="8" y1="12" x2="20" y2="12" />
      <circle cx="4.5" cy="18" r="1" fill="currentColor" stroke="none" />
      <line x1="8" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function NavMeniuIcon({ className, active }: IconProps & { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="2" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="2" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="2" />
    </svg>
  );
}

/** Three vertical rounded bars — used by the new Zilnic nav's Meniu slot. */
export function EqualizerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className={className} aria-hidden="true">
      <line x1="6" y1="16" x2="6" y2="8" />
      <line x1="12" y1="18" x2="12" y2="6" />
      <line x1="18" y1="14" x2="18" y2="10" />
    </svg>
  );
}

/* ---------- Decorative marks ---------- */

export function CrossCrossletLogo({ className }: IconProps) {
  const rays = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);
  return (
    <svg viewBox="0 0 150 150" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden="true">
      <g opacity={0.75}>
        {rays.map((deg) => (
          <line
            key={deg}
            x1={75 + 58 * Math.cos((deg * Math.PI) / 180)}
            y1={75 + 58 * Math.sin((deg * Math.PI) / 180)}
            x2={75 + 68 * Math.cos((deg * Math.PI) / 180)}
            y2={75 + 68 * Math.sin((deg * Math.PI) / 180)}
          />
        ))}
      </g>
      {/* cross crosslet: equal arms with small crossbars at each end */}
      <g strokeWidth={2.2} strokeLinecap="square">
        <line x1="75" y1="35" x2="75" y2="115" />
        <line x1="35" y1="75" x2="115" y2="75" />
        <line x1="67" y1="37" x2="83" y2="37" />
        <line x1="67" y1="113" x2="83" y2="113" />
        <line x1="37" y1="67" x2="37" y2="83" />
        <line x1="113" y1="67" x2="113" y2="83" />
      </g>
    </svg>
  );
}

/**
 * Neutral placeholder for the brand crest slot. The real Patriarhia crest
 * belongs to Patriarhia Română — any shipped app needs its own mark here
 * anyway, so this is intentionally a plain shield outline rather than an
 * attempt to hand-draw the real emblem.
 */
export function CoatOfArmsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path
        d="M60 8 L108 24 V56 C108 84 88 104 60 114 C32 104 12 84 12 56 V24 Z"
        strokeLinejoin="round"
      />
      <line x1="60" y1="8" x2="60" y2="114" opacity={0.4} />
    </svg>
  );
}
