import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { HorizontalStrip, StripPill } from "@/components/HorizontalStrip";
import { Sheet } from "@/components/Sheet";
import {
  FastRankIcon,
  FastRestrictionIcon,
  MealIcon,
  RankCrossIcon,
} from "@/components/icons";
import {
  LUNAR_DAYS,
  MONTH_STRIP,
  MONTH_STRIP_ACTIVE,
  ZILNIC_HEADER_DATE,
} from "@/lib/seedData";

const ROW_ICONS = [RankCrossIcon, MealIcon, FastRestrictionIcon, FastRankIcon];

function rowBgClass(index: number) {
  if (index === 0) return "";
  return index % 2 === 1 ? "bg-bg-row-alt" : "bg-bg-app";
}

export default function LunarPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-app">
      <Header date={ZILNIC_HEADER_DATE} />

      <div className="py-lg">
        <HorizontalStrip>
          {MONTH_STRIP.map((m) => (
            <StripPill key={m} label={m} active={m === MONTH_STRIP_ACTIVE} />
          ))}
        </HorizontalStrip>
      </div>

      <Sheet contentClassName="">
        {LUNAR_DAYS.map((day, i) => (
          <div key={day.number} className={`px-screen-x py-[24px] ${rowBgClass(i)}`}>
            <div className="flex gap-lg">
              <div
                className={`flex h-[84px] w-[64px] shrink-0 flex-col items-center justify-center rounded-chip ${
                  day.isFeast ? "bg-feast-chip-bg" : "bg-chip-neutral-bg"
                }`}
              >
                <span
                  className={`font-serif text-[20px] font-medium ${
                    day.isFeast ? "text-feast-red" : "text-text-primary"
                  }`}
                >
                  {day.number}
                </span>
                <span className="mt-1 font-sans text-[11px] font-semibold uppercase text-text-muted">
                  {day.weekday}
                </span>
              </div>
              <p
                className={`flex-1 font-serif text-[22px] font-medium leading-[1.3] ${
                  day.isFeast ? "text-feast-red" : "text-text-primary"
                }`}
              >
                {day.title}
              </p>
            </div>
            <div className="mt-[20px] flex gap-[10px]">
              {ROW_ICONS.map((Icon, idx) => (
                <span
                  key={idx}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-pill bg-chip-neutral-bg"
                >
                  <Icon
                    className={`h-[20px] w-[20px] ${day.isFeast ? "text-feast-red" : "text-text-primary"}`}
                  />
                </span>
              ))}
            </div>
          </div>
        ))}
      </Sheet>

      <BottomNav activeTab="lunar" />
    </div>
  );
}
