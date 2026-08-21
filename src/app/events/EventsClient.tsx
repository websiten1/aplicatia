"use client";

import Link from "next/link";
import { useState } from "react";
import { EmptyState } from "@/components/Feedback";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { ClockIcon } from "@/components/icons";
import { EVENTS } from "@/lib/seedData";

const TABS = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
];

const MONTH_SHORT = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export function EventsClient() {
  const [tab, setTab] = useState("upcoming");
  const events = EVENTS.filter((e) => e.status === tab);

  return (
    <>
      <SegmentedTabs tabs={TABS} active={tab} onChange={setTab} />

      <div key={tab} className="anim-fade-through px-outer py-[8px]">
        {events.length === 0 ? (
          <EmptyState icon={<ClockIcon className="h-[20px] w-[20px]" />} message="No past events yet." />
        ) : (
          events.map((e, i) => {
            const d = new Date(e.startDateTime);
            const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
            return (
              <Link
                key={e.id}
                href={`/events/${e.id}`}
                className={`press flex items-start gap-[14px] py-[16px] ${i !== events.length - 1 ? "border-b border-divider" : ""}`}
              >
                <span className="flex w-[46px] shrink-0 flex-col items-center rounded-control bg-navy-06 py-[8px]">
                  <span className="font-sans text-[10px] font-bold uppercase text-romanian-red">{MONTH_SHORT[d.getMonth()]}</span>
                  <span className="font-serif text-[18px] font-bold text-episcopal-navy">{d.getDate()}</span>
                  <span className="font-sans text-[9.5px] font-medium text-muted-ink">
                    {d.toLocaleDateString("en-US", { weekday: "short" })}
                  </span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-[16px] font-bold text-ink-black">{e.title}</span>
                  <span className="mt-[2px] block font-sans text-[13px] text-muted-ink">{e.parishName}</span>
                  <span className="block font-sans text-[13px] text-muted-ink">{e.location}</span>
                  <span className="mt-[2px] block font-sans text-[12.5px] font-medium text-episcopal-navy">
                    {e.allDay ? "All Day" : time}
                  </span>
                </span>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}
