type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

/* ---------- Bottom nav ---------- */

export function NavHomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h3v-5.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2V20h3a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function NavCalendarIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="3.5" x2="8" y2="6.5" />
      <line x1="16" y1="3.5" x2="16" y2="6.5" />
    </svg>
  );
}

export function NavReadingsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 6.5c-1.5-1.2-3.6-1.7-5.5-1.5-1 .1-1.5.6-1.5 1.5v11c0 .9.5 1.4 1.5 1.5 1.9.2 4 .7 5.5 1.9 1.5-1.2 3.6-1.7 5.5-1.9 1-.1 1.5-.6 1.5-1.5v-11c0-.9-.5-1.4-1.5-1.5-1.9-.2-4 .3-5.5 1.5Z" />
      <line x1="12" y1="6.5" x2="12" y2="19.4" />
    </svg>
  );
}

export function NavResourceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3.5h9a2.5 2.5 0 0 1 2.5 2.5v14.5l-7-3.6-7 3.6V6a2.5 2.5 0 0 1 2.5-2.5Z" />
      <circle cx="10.5" cy="9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function NavMenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

/* ---------- Chrome / structural ---------- */

export function BackIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 10a6 6 0 0 1 12 0v3.6c0 .5.18 1 .5 1.4l.8.9a1 1 0 0 1-.75 1.6H5.45a1 1 0 0 1-.75-1.6l.8-.9c.32-.4.5-.9.5-1.4Z" />
      <path d="M10 19.5a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <line x1="8.2" y1="10.8" x2="15.8" y2="7.2" />
      <line x1="8.2" y1="13.2" x2="15.8" y2="16.8" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="20" y1="20" x2="15.3" y2="15.3" />
    </svg>
  );
}

export function BookmarkIcon({ className, filled }: IconProps & { filled?: boolean }) {
  return (
    <svg {...base} fill={filled ? "currentColor" : "none"} className={className}>
      <path d="M6.5 4.5h11a1 1 0 0 1 1 1V20l-6.5-3.6L5.5 20V5.5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function NoteIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3.5h9l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M14.5 3.5V8h4.5" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" />
      <line x1="8.5" y1="15.5" x2="13.5" y2="15.5" />
    </svg>
  );
}

export function SettingsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.75v2.1M12 18.15v2.1M20.25 12h-2.1M5.85 12h-2.1M17.66 6.34l-1.49 1.49M7.83 16.17l-1.49 1.49M17.66 17.66l-1.49-1.49M7.83 7.83 6.34 6.34" />
    </svg>
  );
}

export function PersonIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5 20c0-3.6 3.1-6.3 7-6.3s7 2.7 7 6.3" />
    </svg>
  );
}

/* ---------- Sacred ---------- */

export function CrossIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="6.5" y1="8" x2="17.5" y2="8" />
      <line x1="8.5" y1="12.5" x2="15.5" y2="12.5" />
    </svg>
  );
}

export function FastingFishIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 12c3.2-4 7-4.6 10-2.2M3 12c3.2 4 7 4.6 10 2.2M13 9.8C16 7.5 19 8.5 21 12c-2 3.5-5 4.5-8 2.2" />
      <circle cx="7.3" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function AudioWaveIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <line x1="4" y1="10" x2="4" y2="14" />
      <line x1="8" y1="6" x2="8" y2="18" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="16" y1="6" x2="16" y2="18" />
      <line x1="20" y1="10" x2="20" y2="14" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8.5 6.2c0-1 1.1-1.6 1.9-1.1l9 5.8a1.3 1.3 0 0 1 0 2.2l-9 5.8c-.8.5-1.9-.1-1.9-1.1Z" />
    </svg>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="6.5" y="5" width="4" height="14" rx="1.2" />
      <rect x="13.5" y="5" width="4" height="14" rx="1.2" />
    </svg>
  );
}

export function Replay15Icon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12a7.5 7.5 0 1 1 2.2 5.3" />
      <path d="M4 8v4h4" />
    </svg>
  );
}

export function Forward15Icon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M19.5 12a7.5 7.5 0 1 0-2.2 5.3" />
      <path d="M20 8v4h-4" />
    </svg>
  );
}

export function CalendarBookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5h9a2 2 0 0 1 2 2v13l-5.5-2.6L4 20.5Z" />
      <path d="M15 5.5h4.5V19" />
    </svg>
  );
}

export function ScrollIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 4h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z" />
      <path d="M7 6.5A2.5 2.5 0 0 0 4.5 9v8A2.5 2.5 0 0 0 7 19.5" />
      <line x1="10.5" y1="9" x2="15.5" y2="9" />
      <line x1="10.5" y1="12.5" x2="15.5" y2="12.5" />
    </svg>
  );
}

export function EpistleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function GospelIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 6.5c-1.5-1.2-3.6-1.7-5.5-1.5-1 .1-1.5.6-1.5 1.5v11c0 .9.5 1.4 1.5 1.5 1.9.2 4 .7 5.5 1.9 1.5-1.2 3.6-1.7 5.5-1.9 1-.1 1.5-.6 1.5-1.5v-11c0-.9-.5-1.4-1.5-1.5-1.9-.2-4 .3-5.5 1.5Z" />
      <line x1="12" y1="6.5" x2="12" y2="19.4" />
      <line x1="8.3" y1="9" x2="10.6" y2="9" />
      <line x1="8.3" y1="11.5" x2="10.6" y2="11.5" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2.5" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="21.5" />
      <line x1="4.5" y1="12" x2="2" y2="12" />
      <line x1="22" y1="12" x2="19.5" y2="12" />
      <line x1="5.6" y1="5.6" x2="7.3" y2="7.3" />
      <line x1="16.7" y1="16.7" x2="18.4" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="16.7" y2="7.3" />
      <line x1="7.3" y1="16.7" x2="5.6" y2="18.4" />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 14.2A8.4 8.4 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2Z" />
    </svg>
  );
}

export function ForkKnifeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3v7a1.5 1.5 0 0 0 3 0V3" />
      <line x1="8.5" y1="3" x2="8.5" y2="21" />
      <path d="M16.5 3c-1.4 0-2.5 1.8-2.5 4.5S15.1 12 16.5 12V21" />
    </svg>
  );
}

export function CandleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5c1 1.2 1.6 2.1 1.6 3a1.6 1.6 0 1 1-3.2 0c0-.9.6-1.8 1.6-3Z" />
      <rect x="9.5" y="9" width="5" height="11.5" rx="1" />
    </svg>
  );
}

export function HeartCrossIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20.2c-.28 0-.55-.09-.78-.27C7.5 16.9 4.6 14.4 3.4 11.7c-.9-2-.5-4.3 1.1-5.7 1.5-1.4 3.7-1.4 5.3.1L12 8.1l2.2-2c1.6-1.5 3.8-1.5 5.3-.1 1.6 1.4 2 3.7 1.1 5.7-1.2 2.7-4.1 5.2-7.82 8.23-.23.18-.5.27-.78.27Z" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function LocationCrosshairIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2.5" x2="12" y2="5.5" />
      <line x1="12" y1="18.5" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="5.5" y2="12" />
      <line x1="18.5" y1="12" x2="21.5" y2="12" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5h2l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v2a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.5 5.6a2 2 0 0 1 2-2.1Z" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <ellipse cx="12" cy="12" rx="3.6" ry="8.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
    </svg>
  );
}

export function DirectionsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12 20 4l-4 16-4-7-8-1Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5v11.5M8 11l4 4 4-4" />
      <path d="M4.5 17v2A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-2" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12.5 10 17l9-10.5" />
    </svg>
  );
}

export function FilterIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </svg>
  );
}
