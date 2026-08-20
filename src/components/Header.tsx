import { BellIcon, CrossCrossletLogo, HeartIcon } from "./icons";

interface HeaderProps {
  date: string;
  /** Zilnic screen only: eyebrow + big title + logo above the date row. */
  expanded?: boolean;
  /** Meniu screen shows only the bell, no heart. */
  icons?: "both" | "bell-only";
}

export function Header({ date, expanded = false, icons = "both" }: HeaderProps) {
  return (
    <header className="px-screen-x pt-[max(env(safe-area-inset-top),12px)]">
      {expanded && (
        <div className="flex items-start justify-between gap-md pb-5">
          <div>
            <p className="font-sans text-[15px] font-semibold uppercase tracking-[0.10em] text-text-secondary">
              Patriarhia Română
            </p>
            <h1 className="font-serif text-[34px] font-bold uppercase leading-[1.05] text-accent">
              Calendar
              <br />
              Ortodox
            </h1>
          </div>
          <CrossCrossletLogo className="mt-1 h-[90px] w-[90px] shrink-0 text-accent" />
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="font-serif text-[22px] font-medium text-accent">{date}</p>
        <div className="flex items-center gap-md">
          {icons === "both" && (
            <button
              type="button"
              aria-label="Favorite"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-pill bg-accent text-white"
            >
              <HeartIcon className="h-[18px] w-[18px]" />
            </button>
          )}
          <button
            type="button"
            aria-label="Notificări"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-pill bg-accent text-white"
          >
            <BellIcon className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      <div className="mx-0 mt-4 h-px bg-divider" />
    </header>
  );
}
