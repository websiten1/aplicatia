"use client";

import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ClockIcon } from "@/components/icons";
import { PRAYERS, PRAYER_CATEGORY_LABEL } from "@/lib/seedData";

const FONT_SIZES = ["16px", "18px", "21px"] as const;
const FONT_SIZE_LABELS = ["A", "A", "A"];

export default function PrayerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const prayer = PRAYERS.find((p) => p.id === id);
  const [sizeIdx, setSizeIdx] = useState(1);

  if (!prayer) return notFound();
  const title = PRAYER_CATEGORY_LABEL[prayer.category];

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader
        title={title}
        right={<BookmarkButton entityType="prayer" entityId={prayer.id} title={title} />}
      />

      <div className="flex items-center justify-between px-outer pt-[10px]">
        <span className="flex items-center gap-[6px] font-sans text-[12.5px] text-muted-ink">
          <ClockIcon className="h-[15px] w-[15px]" />
          {prayer.estimatedMinutes} min
        </span>
        <div className="flex items-center gap-[4px]">
          {FONT_SIZE_LABELS.map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSizeIdx(i)}
              aria-label={`Text size ${i + 1}`}
              className={`press flex h-[28px] w-[28px] items-center justify-center rounded-full font-sans font-semibold ${
                sizeIdx === i ? "bg-episcopal-navy text-white" : "text-muted-ink"
              }`}
              style={{ fontSize: 11 + i * 3 }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 px-outer py-[22px]">
        {prayer.text.map((para, i) => (
          <p
            key={i}
            className="mb-[16px] font-serif leading-[1.6] text-ink-black"
            style={{ fontSize: FONT_SIZES[sizeIdx] }}
          >
            {para}
          </p>
        ))}
        <p className="mt-[12px] font-sans text-[11.5px] text-muted-ink">{prayer.sourceAttribution}</p>
      </main>
    </div>
  );
}
