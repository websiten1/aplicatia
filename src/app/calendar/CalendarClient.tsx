"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CrossIcon, FastingFishIcon, NavReadingsIcon } from "@/components/icons";
import { dayTitle, LITURGICAL_DAYS, REFERENCE_DATE, WEEKDAY_INITIAL } from "@/lib/seedData";
import type { LiturgicalDay } from "@/lib/types";

const YEAR = 2025;
const MONTH = 5; // May

function leadingBlanks(): number {
  return new Date(YEAR, MONTH - 1, 1).getDay();
}

export function CalendarClient() {
  const [selected, setSelected] = useState<string>(REFERENCE_DATE);
  const blanks = useMemo(() => leadingBlanks(), []);
  const selectedDay = LITURGICAL_DAYS.find((d) => d.civilDate === selected);

  return (
    <>
      <div className="mt-[14px] grid grid-cols-7 gap-y-[6px]">
        {WEEKDAY_INITIAL.map((w, i) => (
          <span key={i} className="pb-[6px] text-center font-sans text-[12px] font-semibold text-muted-ink">
            {w}
          </span>
        ))}

        {Array.from({ length: blanks }).map((_, i) => (
          <div key={`b-${i}`} />
        ))}

        {LITURGICAL_DAYS.map((day) => {
          const dayNum = Number(day.civilDate.slice(-2));
          const isSelected = day.civilDate === selected;
          const isToday = day.civilDate === REFERENCE_DATE;
          return (
            <button
              key={day.civilDate}
              type="button"
              onClick={() => setSelected(day.civilDate)}
              aria-current={isSelected ? "date" : undefined}
              aria-label={`${dayTitle(day)}, May ${dayNum}`}
              className="press flex h-[42px] items-center justify-center"
            >
              <span
                className={`flex h-[36px] w-[36px] items-center justify-center rounded-full font-sans text-[14px] transition-transform duration-[160ms] ${
                  isSelected
                    ? "scale-100 bg-episcopal-navy font-semibold text-white"
                    : day.isMajorFeast
                      ? `font-semibold text-romanian-red ${isToday ? "ring-1 ring-romanian-red" : ""}`
                      : `text-ink-black ${isToday ? "ring-1 ring-episcopal-navy" : ""}`
                }`}
              >
                {dayNum}
              </span>
            </button>
          );
        })}
      </div>

      {selectedDay && <DaySummaryCard key={selectedDay.civilDate} day={selectedDay} />}
    </>
  );
}

function DaySummaryCard({ day }: { day: LiturgicalDay }) {
  const dayNum = Number(day.civilDate.slice(-2));
  return (
    <div className="anim-fade-through mt-section rounded-card bg-warm-ivory px-[18px] py-[18px]">
      <p className="font-sans text-[12px] font-semibold text-muted-ink">May {dayNum}, {YEAR}</p>
      <p className="mt-[6px] font-serif text-[19px] font-bold leading-[1.3] text-episcopal-navy">{dayTitle(day)}</p>
      <p className="mt-[6px] font-sans text-[12.5px] text-muted-ink">Tone {day.tone} · Matins Gospel 2</p>

      <div className="mt-[16px] grid grid-cols-4 gap-[10px]">
        <SummaryAction href={`/day/${day.civilDate}`} label="Day" icon={<CrossIcon className="h-[20px] w-[20px]" />} />
        <SummaryAction href={`/reading/${day.gospel}`} label="Readings" icon={<NavReadingsIcon className="h-[20px] w-[20px]" />} />
        <SummaryAction href="/fasting" label="Fasting" icon={<FastingFishIcon className="h-[20px] w-[20px]" />} />
        <SummaryAction href="/prayers" label="Prayers" icon={<CrossIcon className="h-[20px] w-[20px]" />} />
      </div>
    </div>
  );
}

function SummaryAction({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="press flex flex-col items-center gap-[6px]">
      <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-page-white text-episcopal-navy">
        {icon}
      </span>
      <span className="font-sans text-[10.5px] font-medium text-ink-black">{label}</span>
    </Link>
  );
}
