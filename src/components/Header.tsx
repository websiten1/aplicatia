import { BellIcon, HeartIcon } from "./icons";

interface HeaderProps {
  date: string;
  /** Zilnic screen only: eyebrow + big title + logo above the date row. */
  expanded?: boolean;
  /** Meniu screen shows only the bell, no heart. */
  icons?: "both" | "bell-only";
  /** Zilnic screen only: episcopate logo image src. Shows a neutral placeholder slot when empty. */
  episcopateLogo?: string;
}

export function Header({
  date,
  expanded = false,
  icons = "both",
  episcopateLogo,
}: HeaderProps) {
  return (
    <header className="px-screen-x pt-[max(env(safe-area-inset-top),12px)]">
      {expanded && (
        <div className="flex items-start justify-between gap-md pb-5">
          <div className="min-w-0 flex-1">
            <p className="font-[family-name:var(--font-cinzel)] text-[11.5px] font-medium leading-[1.15] tracking-[0.04em] text-[#EF6F6C]">
              Romanian Orthodox Episcopate of America
            </p>
            <h1 className="mt-[6px] font-[family-name:var(--font-pt-serif)] text-[34px] font-bold uppercase leading-[0.98] tracking-[-0.02em] text-[#255C99]">
              Calendar
              <br />
              Ortodox
            </h1>
          </div>
          {episcopateLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={episcopateLogo}
              alt="Romanian Orthodox Episcopate of America"
              className="mt-1 h-[120px] w-[120px] shrink-0 object-contain"
            />
          ) : (
            <div className="mt-1 flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-[12px] border border-divider">
              <span className="font-sans text-[11px] font-semibold uppercase text-text-muted">
                Logo
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="font-[family-name:var(--font-pt-serif)] text-[20px] font-normal text-[#255C99]">
          {date}
        </p>
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
