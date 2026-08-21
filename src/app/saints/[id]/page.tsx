"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ShareButton } from "@/components/ShareButton";
import { ScrollIcon } from "@/components/icons";
import { READINGS, SAINTS, formatMediumDate } from "@/lib/seedData";

export default function SaintProfilePage() {
  const { id } = useParams<{ id: string }>();
  const saint = SAINTS.find((s) => s.id === id);
  if (!saint) return notFound();

  const readings = READINGS.filter((r) => saint.readings.includes(r.id));

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader
        title="Saint"
        right={
          <div className="flex items-center gap-[2px]">
            <BookmarkButton entityType="saint" entityId={saint.id} title={saint.nameEn} subtitle={saint.nameRo} />
          </div>
        }
      />

      <main className="flex-1 px-outer py-[10px]">
        <div className="flex items-center justify-end">
          <ShareButton title={saint.nameEn} text={saint.shortDescription} />
        </div>

        <div className="flex flex-col items-center pt-[6px] text-center">
          <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] border-navy-06 bg-warm-ivory">
            <ScrollIcon className="h-[36px] w-[36px] text-episcopal-navy" />
          </div>
          <p className="mt-[14px] font-serif text-[20px] font-bold text-episcopal-navy">{saint.nameEn}</p>
          <p className="mt-[2px] font-sans text-[13px] text-muted-ink">{saint.nameRo}</p>
          <p className="mt-[4px] font-sans text-[12px] font-medium text-romanian-red">Feast: {formatMediumDate(saint.feastDate)}</p>
        </div>

        <p className="mt-section font-sans text-[15.5px] italic leading-[1.55] text-ink-black">{saint.shortDescription}</p>

        <p className="mt-section font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">Life</p>
        <p className="mt-[8px] font-serif text-[16px] leading-[1.6] text-ink-black">{saint.fullLife}</p>

        <p className="mt-section font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">Troparion</p>
        <p className="mt-[8px] font-serif text-[16px] italic leading-[1.6] text-episcopal-navy">{saint.troparion}</p>

        <p className="mt-section font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">Kontakion</p>
        <p className="mt-[8px] font-serif text-[16px] italic leading-[1.6] text-episcopal-navy">{saint.kontakion}</p>

        {readings.length > 0 && (
          <>
            <p className="mt-section font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
              Related Readings
            </p>
            {readings.map((r, i) => (
              <Link
                key={r.id}
                href={`/reading/${r.id}`}
                className={`press block py-[12px] ${i !== readings.length - 1 ? "border-b border-divider" : ""}`}
              >
                <p className="font-serif text-[15px] text-episcopal-navy">{r.title}</p>
                <p className="font-sans text-[12.5px] text-muted-ink">{r.reference}</p>
              </Link>
            ))}
          </>
        )}
      </main>
    </div>
  );
}
