"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EmptyState } from "@/components/Feedback";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { CrossIcon, NavCalendarIcon } from "@/components/icons";
import { dayTitle, LITURGICAL_DAYS, REFERENCE_DATE, weekdayOf } from "@/lib/seedData";

const TABS = [
  { id: "feasts", label: "Feasts" },
  { id: "saints", label: "Saints" },
  { id: "fasts", label: "Fasts" },
];

export function ListClient() {
  const router = useRouter();
  const [tab, setTab] = useState("feasts");

  const rows = LITURGICAL_DAYS.filter((d) => {
    if (tab === "feasts") return d.feasts.length > 0 || d.isMajorFeast;
    if (tab === "saints") return d.saints.length > 0;
    return false;
  });

  return (
    <>
      <SegmentedTabs tabs={TABS} active={tab} onChange={setTab} />

      <div key={tab} className="anim-fade-through">
        {tab === "fasts" ? (
          <EmptyState
            icon={<CrossIcon className="h-[22px] w-[22px]" />}
            message="No fasting periods fall within May. View the full fasting calendar for upcoming fasts."
            actionLabel="Go to Fasting"
            onAction={() => router.push("/fasting")}
          />
        ) : rows.length === 0 ? (
          <EmptyState icon={<NavCalendarIcon className="h-[22px] w-[22px]" />} message="Nothing to show for this filter." />
        ) : (
          rows.map((day) => {
            const dayNum = Number(day.civilDate.slice(-2));
            const isCurrent = day.civilDate === REFERENCE_DATE;
            const isMajor = day.isMajorFeast;
            return (
              <Link
                key={day.civilDate}
                href={`/day/${day.civilDate}`}
                className={`press flex items-center gap-[14px] border-b border-divider px-outer py-[14px] ${
                  isCurrent ? "bg-warm-ivory" : ""
                }`}
              >
                <span className="flex w-[38px] shrink-0 flex-col items-center">
                  <span className={`font-serif text-[18px] font-bold ${isMajor ? "text-romanian-red" : "text-ink-black"}`}>
                    {dayNum}
                  </span>
                  <span className="font-sans text-[10px] font-medium uppercase text-muted-ink">{weekdayOf(day.civilDate)}</span>
                </span>
                <span className="min-w-0 flex-1">
                  {isMajor && (
                    <span className="mb-[2px] block font-sans text-[10.5px] font-bold uppercase tracking-[0.06em] text-romanian-red">
                      Major Feast
                    </span>
                  )}
                  <span className="block font-serif text-[15.5px] leading-[1.3] text-ink-black">{dayTitle(day)}</span>
                </span>
                {isMajor && <CrossIcon className="h-[18px] w-[18px] shrink-0 text-romanian-red" />}
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}
