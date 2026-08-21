"use client";

import { notFound, useParams } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { BookmarkButton } from "@/components/BookmarkButton";
import { FASTS, formatMediumDate } from "@/lib/seedData";

export default function FastDetailPage() {
  const { id } = useParams<{ id: string }>();
  const fast = FASTS.find((f) => f.id === id);
  if (!fast) return notFound();

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader
        title={fast.title}
        right={<BookmarkButton entityType="reading" entityId={fast.id} title={fast.title} />}
      />

      <main className="flex-1 px-outer py-[22px]">
        <p className="font-sans text-[13px] font-semibold text-romanian-red">
          {formatMediumDate(fast.startDate)} – {formatMediumDate(fast.endDate)}
        </p>
        <p className="mt-[14px] font-serif text-[17px] leading-[1.6] text-ink-black">{fast.description}</p>

        <p className="mt-section font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Permitted Foods
        </p>
        <p className="mt-[8px] font-sans text-[15px] leading-[1.55] text-ink-black">{fast.permittedFoods}</p>

        <p className="mt-section font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Liturgical Context
        </p>
        <p className="mt-[8px] font-sans text-[15px] leading-[1.55] text-ink-black">{fast.liturgicalContext}</p>
      </main>
    </div>
  );
}
