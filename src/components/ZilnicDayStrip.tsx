"use client";

import { useEffect, useRef } from "react";

interface ZilnicDayStripProps {
  days: number[];
  selected: number;
}

/**
 * At 52px circles + 12px gaps, 7 items (364 + 72 = 436px) don't fit inside
 * the 402px frame, so `justify-center` alone can't center the selected day —
 * flexbox only distributes free space, and there isn't any once content
 * overflows. Scrolling the selected day into view on mount is what actually
 * centers it.
 */
export function ZilnicDayStrip({ days, selected }: ZilnicDayStripProps) {
  const selectedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    selectedRef.current?.scrollIntoView({ inline: "center", block: "nearest" });
  }, []);

  return (
    <div className="mt-[18px] overflow-x-auto no-scrollbar">
      <div className="flex gap-[12px] px-[22px]">
        {days.map((day) => {
          const active = day === selected;
          return (
            <span
              key={day}
              ref={active ? selectedRef : undefined}
              className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-pill font-[family-name:var(--font-pt-serif)] text-[17px] font-semibold text-white ${
                active ? "bg-[#B1303B]" : "bg-[#255C99]"
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
}
