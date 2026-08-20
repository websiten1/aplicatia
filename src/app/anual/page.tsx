import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { StripPill } from "@/components/HorizontalStrip";
import { Sheet } from "@/components/Sheet";
import { CoatOfArmsIcon } from "@/components/icons";
import {
  ANUAL_ACTIVE_YEAR,
  ANUAL_DEDICATION,
  ANUAL_MONTHS,
  ANUAL_YEARS,
  WEEKDAY_LETTERS,
  ZILNIC_HEADER_DATE,
} from "@/lib/seedData";
import type { DayClass } from "@/lib/types";

const CELL_STYLES: Record<DayClass, { bg: string; fg: string }> = {
  normal: { bg: "bg-bg-row-alt", fg: "text-text-primary" },
  feast: { bg: "bg-feast-chip-bg", fg: "text-feast-red" },
  blue: { bg: "bg-special-blue-bg", fg: "text-special-blue" },
};

export default function AnualPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-app">
      <Header date={ZILNIC_HEADER_DATE} />

      <div className="flex justify-center gap-md py-lg">
        {ANUAL_YEARS.map((y) => (
          <StripPill key={y} label={y} active={y === ANUAL_ACTIVE_YEAR} />
        ))}
      </div>

      <Sheet>
        <div className="flex flex-col items-center pb-section text-center">
          <CoatOfArmsIcon className="h-[120px] w-[120px] text-accent" />
          <p className="mt-lg max-w-[520px] font-sans text-[15px] font-semibold uppercase leading-[1.5] tracking-[0.04em] text-accent">
            {ANUAL_DEDICATION}
          </p>
        </div>
        <div className="h-px bg-divider" />

        {ANUAL_MONTHS.map((month) => (
          <section key={month.name} className="pt-section pb-section">
            <p className="font-sans text-[15px] font-semibold uppercase tracking-[0.10em] text-text-secondary">
              {month.eyebrow}
            </p>
            <h2 className="font-serif text-[34px] font-semibold text-text-primary">
              {month.name}
            </h2>
            <p className="mt-1 font-serif text-[15px] italic text-text-secondary">
              {month.subLine}
            </p>

            <div className="mt-lg grid grid-cols-7 gap-[6px]">
              {WEEKDAY_LETTERS.map((letter, i) => (
                <span
                  key={i}
                  className="pb-[8px] text-center font-sans text-[14px] font-semibold text-text-primary"
                >
                  {letter}
                </span>
              ))}

              {Array.from({ length: month.leadingBlanks }).map((_, i) => (
                <div key={`blank-${i}`} />
              ))}

              {month.days.map((cell) => {
                const { bg, fg } = CELL_STYLES[cell.class];
                return (
                  <div
                    key={cell.day}
                    className={`flex aspect-square flex-col items-center justify-center gap-[2px] rounded-chip ${bg}`}
                  >
                    <span className={`font-serif text-[16px] font-medium ${fg}`}>{cell.day}</span>
                    {cell.marker && (
                      <span className={`font-serif text-[10px] leading-none ${fg}`}>{cell.marker}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </Sheet>

      <BottomNav activeTab="anual" />
    </div>
  );
}
