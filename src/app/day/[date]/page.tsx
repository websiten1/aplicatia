"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BackIcon, ChevronRightIcon, EpistleIcon, GospelIcon, ScrollIcon } from "@/components/icons";
import { ShareButton } from "@/components/ShareButton";
import { BottomTabBar } from "@/components/BottomTabBar";
import { dayTitle, formatMediumDate, getLiturgicalDay, oldCalendarDate, SAINTS } from "@/lib/seedData";

export default function DayDetailsPage() {
  const { date } = useParams<{ date: string }>();
  const day = getLiturgicalDay(date);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!day) return notFound();

  const title = dayTitle(day);
  const primarySaint = SAINTS.find((s) => day.saints.includes(s.id));

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <div
        className={`sticky top-0 z-20 flex h-[52px] items-center justify-between px-outer transition-colors duration-200 ${
          scrolled ? "border-b border-divider bg-page-white" : "bg-transparent"
        }`}
      >
        <Link
          href="/today"
          aria-label="Back"
          className={`press flex h-[36px] w-[36px] items-center justify-center rounded-control ${scrolled ? "text-ink-black" : "text-white"}`}
        >
          <BackIcon className="h-[22px] w-[22px]" />
        </Link>
        <span
          className={`flex-1 truncate text-center font-sans text-[14px] font-semibold text-ink-black transition-opacity duration-200 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          {formatMediumDate(day.civilDate)}
        </span>
        <ShareButton
          title={title}
          text={`${title} — ${formatMediumDate(day.civilDate)}`}
          className={`press flex h-[36px] w-[36px] items-center justify-center rounded-control ${scrolled ? "text-ink-black" : "text-white"}`}
        />
      </div>

      <div className="-mt-[52px] bg-episcopal-navy px-outer pb-[52px] pt-[calc(max(env(safe-area-inset-top),14px)+52px)] text-center">
        <p className="font-serif text-[20px] font-bold text-white">{formatMediumDate(day.civilDate)}</p>
        <p className="mt-[4px] font-sans text-[12px] text-white/65">Old Calendar: {formatMediumDate(oldCalendarDate(day.civilDate))}</p>
      </div>

      <div className="relative -mt-[38px] flex justify-center">
        <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-[3px] border-warm-ivory bg-navy-06">
          <ScrollIcon className="h-[30px] w-[30px] text-episcopal-navy" />
        </div>
      </div>

      <main className="-mt-[16px] flex-1 rounded-hero bg-warm-ivory px-outer pb-[36px] pt-[34px] text-center">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-ink">Today&apos;s Saints</p>
        <p className="mt-[8px] font-serif text-[20px] font-bold leading-[1.3] text-episcopal-navy">{title}</p>
        <p className="mt-[6px] font-sans text-[12.5px] text-muted-ink">Tone {day.tone} · Matins Gospel 2</p>

        <div className="mt-section text-left">
          {primarySaint && (
            <>
              <DetailRow
                href={`/saints/${primarySaint.id}`}
                icon={<ScrollIcon className="h-[19px] w-[19px]" />}
                label="Troparion"
              />
              <DetailRow
                href={`/saints/${primarySaint.id}`}
                icon={<ScrollIcon className="h-[19px] w-[19px]" />}
                label="Kontakion"
              />
            </>
          )}
          <DetailRow
            href={`/reading/${day.epistle}`}
            icon={<EpistleIcon className="h-[19px] w-[19px]" />}
            label="Epistle Reading"
            sub="Acts 6:8-15; 7:1-5, 47-60"
          />
          <DetailRow
            href={`/reading/${day.gospel}`}
            icon={<GospelIcon className="h-[19px] w-[19px]" />}
            label="Gospel Reading"
            sub="John 4:46-54"
            divider={false}
          />
        </div>
      </main>

      <BottomTabBar />
    </div>
  );
}

function DetailRow({
  href,
  icon,
  label,
  sub,
  divider = true,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub?: string;
  divider?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`press flex items-center gap-[14px] py-[14px] ${divider ? "border-b border-navy-12" : ""}`}
    >
      <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-control bg-page-white text-episcopal-navy">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-sans text-[14.5px] font-medium text-ink-black">{label}</span>
        {sub && <span className="mt-[2px] block font-sans text-[12.5px] text-muted-ink">{sub}</span>}
      </span>
      <ChevronRightIcon className="h-[17px] w-[17px] shrink-0 text-muted-ink" />
    </Link>
  );
}
