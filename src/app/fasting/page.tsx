"use client";

import Link from "next/link";
import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { BottomTabBar } from "@/components/BottomTabBar";
import { ChevronDownIcon, FastingFishIcon } from "@/components/icons";
import { CURRENT_FAST_LABEL, FASTS, formatMediumDate } from "@/lib/seedData";

export default function FastingPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="Fasting" backHref="/today" />

      <main className="flex-1 px-outer pb-[24px] pt-section">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="press w-full rounded-card bg-warm-ivory px-[18px] py-[16px] text-left"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">Current Fast</p>
              <p className="mt-[6px] font-serif text-[22px] font-bold text-episcopal-navy">{CURRENT_FAST_LABEL}</p>
              <p className="mt-[4px] font-sans text-[13px] text-muted-ink">Today is a</p>
              <p className="font-sans text-[13px] font-semibold text-ink-black">Fast-Free Week</p>
            </div>
            <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-red-08 text-romanian-red">
              <FastingFishIcon className="h-[22px] w-[22px]" />
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[4px] font-sans text-[12px] font-medium text-episcopal-navy">
            What does this mean?
            <ChevronDownIcon className={`h-[14px] w-[14px] transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          </div>
          {expanded && (
            <p className="anim-fade-through mt-[10px] border-t border-navy-12 pt-[10px] font-sans text-[13px] leading-[1.5] text-ink-black">
              During Fast-Free Weeks, all foods are permitted without restriction, including meat, dairy, fish, wine and
              oil — even on Wednesdays and Fridays, which are normally days of abstinence.
            </p>
          )}
        </button>

        <p className="mt-section px-[2px] pb-[8px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Upcoming Fasts
        </p>
        {FASTS.map((fast, i) => (
          <Link
            key={fast.id}
            href={`/fasting/${fast.id}`}
            className={`press block py-[14px] ${i !== FASTS.length - 1 ? "border-b border-divider" : ""}`}
          >
            <p className="font-serif text-[16px] font-bold text-ink-black">{fast.title}</p>
            <p className="mt-[2px] font-sans text-[13px] text-muted-ink">
              {formatMediumDate(fast.startDate)} – {formatMediumDate(fast.endDate)}
            </p>
          </Link>
        ))}
      </main>

      <BottomTabBar />
    </div>
  );
}
