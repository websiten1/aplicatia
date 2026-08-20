import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { HorizontalStrip } from "@/components/HorizontalStrip";
import { Sheet } from "@/components/Sheet";
import {
  AudioWaveIcon,
  MemorialCrossIcon,
  PlayIcon,
  WeddingRingIcon,
} from "@/components/icons";
import {
  ZILNIC_DAY_STRIP,
  ZILNIC_DAY_TITLE,
  ZILNIC_HEADER_DATE,
  ZILNIC_INFO_ROWS,
  ZILNIC_SELECTED_DAY,
} from "@/lib/seedData";

function dayNumberColorClass(distance: number) {
  if (distance <= 1) return "text-text-primary";
  if (distance <= 2) return "text-text-secondary";
  return "text-text-muted";
}

export default function ZilnicPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-app">
      <Header date={ZILNIC_HEADER_DATE} expanded />

      <div className="py-lg">
        <HorizontalStrip className="gap-0">
          {ZILNIC_DAY_STRIP.map((day) => {
            const distance = Math.abs(day - ZILNIC_SELECTED_DAY);
            const active = day === ZILNIC_SELECTED_DAY;
            return (
              <div key={day} className="flex w-[40px] shrink-0 justify-center">
                {active ? (
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-pill bg-accent font-sans text-[15px] font-semibold text-white">
                    {day}
                  </span>
                ) : (
                  <span
                    className={`flex h-[40px] w-[40px] items-center justify-center font-sans text-[15px] font-semibold ${dayNumberColorClass(distance)}`}
                  >
                    {day}
                  </span>
                )}
              </div>
            );
          })}
        </HorizontalStrip>
      </div>

      <Sheet>
        <h2 className="font-serif text-[24px] font-medium leading-[1.3] text-text-primary">
          {ZILNIC_DAY_TITLE}
        </h2>

        <div className="mt-lg flex gap-[10px]">
          <button
            type="button"
            className="flex h-[52px] flex-1 items-center gap-[10px] rounded-[12px] bg-chip-neutral-bg px-md"
          >
            <AudioWaveIcon className="h-[18px] w-[18px] shrink-0 text-accent" />
            <span className="truncate font-serif text-[16px] font-medium text-text-primary">
              Sinaxar Audio
            </span>
          </button>
          <button
            type="button"
            className="flex h-[52px] flex-1 items-center gap-[10px] rounded-[12px] bg-chip-neutral-bg px-md"
          >
            <PlayIcon className="h-[18px] w-[18px] shrink-0 text-accent" />
            <span className="truncate font-serif text-[16px] font-medium text-text-primary">
              Sinaxar Video
            </span>
          </button>
        </div>

        <div className="mt-lg flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[8px] border-[2px] border-[#4A1226] bg-chip-neutral-bg">
          <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
            Icoană
          </span>
        </div>

        <h3 className="mt-section font-serif text-[28px] font-semibold text-text-primary">
          Astăzi este:
        </h3>
        <div>
          {ZILNIC_INFO_ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-md py-[28px] ${
                i !== ZILNIC_INFO_ROWS.length - 1 ? "border-b border-divider" : ""
              }`}
            >
              <span className="font-serif text-[16px] text-text-primary">{row.label}</span>
              <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-pill bg-chip-neutral-bg">
                {row.icon === "wedding" ? (
                  <WeddingRingIcon className="h-5 w-5 text-text-primary" />
                ) : (
                  <MemorialCrossIcon className="h-5 w-5 text-text-primary" />
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-section pb-section">
          <h3 className="font-serif text-[34px] font-semibold leading-[1.15] text-text-primary">
            Susține aplicația
            <br />
            Calendar Ortodox
          </h3>
          <p className="mt-lg font-serif text-[16px] leading-[1.5] text-text-primary">
            Donează pentru susținerea si dezvoltarea aplicației Calendar Ortodox. Poți dona
            ușor și în deplină siguranță fie cu cardul bancar, fie prin Apple Pay sau Google
            Pay. Dumnezeu să vă primească jertfa!
          </p>
          <button
            type="button"
            className="mt-lg flex h-[56px] w-full items-center justify-center rounded-card bg-accent"
          >
            <span className="font-sans text-[16px] font-semibold text-white">Donează</span>
          </button>
        </div>
      </Sheet>

      <BottomNav activeTab="zilnic" />
    </div>
  );
}
