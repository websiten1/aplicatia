import Link from "next/link";
import { BottomTabBar } from "@/components/BottomTabBar";
import { EpiscopalSeal } from "@/components/EpiscopalSeal";
import { PullToRefreshToday } from "./PullToRefreshToday";
import { SacredRule } from "@/components/SacredRule";
import {
  BellIcon,
  CrossIcon,
  FastingFishIcon,
  HeartCrossIcon,
  NavCalendarIcon,
  NavReadingsIcon,
} from "@/components/icons";
import { BackgroundChurchIllustration } from "@/components/BackgroundChurchIllustration";
import { dayTitle, formatLongDate, formatMediumDate, getLiturgicalDay, REFERENCE_DATE } from "@/lib/seedData";

export default function TodayPage() {
  const day = getLiturgicalDay(REFERENCE_DATE)!;
  const title = dayTitle(day);
  const ascension = getLiturgicalDay("2025-05-29")!;

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <header className="flex items-center justify-between px-outer pt-[max(env(safe-area-inset-top),14px)]">
        <div className="flex items-center gap-[10px]">
          <EpiscopalSeal tone="navy" className="h-[34px] w-[34px]" />
          <p className="font-sans text-[12px] font-semibold leading-[1.3] text-episcopal-navy">
            ROMANIAN ORTHODOX
            <br />
            EPISCOPATE OF AMERICA
          </p>
        </div>
        <Link
          href="/menu/notifications"
          aria-label="Notifications"
          className="press flex h-[38px] w-[38px] items-center justify-center rounded-full bg-navy-06 text-episcopal-navy"
        >
          <BellIcon className="h-[19px] w-[19px]" />
        </Link>
      </header>

      <PullToRefreshToday>
        <main className="flex-1 px-outer pb-[24px] pt-[18px]">
          <p className="font-serif text-[19px] font-bold text-romanian-red">{formatLongDate(REFERENCE_DATE)}</p>

          <Link
            href={`/day/${REFERENCE_DATE}`}
            className="press relative mt-[16px] block overflow-hidden rounded-hero bg-episcopal-navy px-[20px] pb-[20px] pt-[18px] text-center"
          >
            <BackgroundChurchIllustration className="pointer-events-none absolute -bottom-6 -right-8 h-[140px] w-[140px] text-white opacity-[0.08]" />
            <SacredRule tone="gold" className="mx-auto h-[14px] w-[110px]" />
            <p className="mt-[10px] font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-muted">
              Today&apos;s Saints
            </p>
            <p className="relative mt-[8px] font-serif text-[20px] font-bold leading-[1.3] text-white">{title}</p>
            <p className="relative mt-[8px] font-sans text-[12px] text-white/70">
              Tone {day.tone} · Matins Gospel 2
            </p>
          </Link>

          <div className="mt-section grid grid-cols-4 gap-[10px]">
            <QuickAction href="/calendar" label="Calendar" icon={<NavCalendarIcon className="h-[22px] w-[22px]" />} />
            <QuickAction href="/readings" label="Readings" icon={<NavReadingsIcon className="h-[22px] w-[22px]" />} />
            <QuickAction href="/prayers" label="Prayers" icon={<CrossIcon className="h-[22px] w-[22px]" />} />
            <QuickAction href="/fasting" label="Fasting" icon={<FastingFishIcon className="h-[22px] w-[22px]" />} />
          </div>

          <p className="mt-section font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
            Upcoming Feast
          </p>
          <Link
            href={`/day/${ascension.civilDate}`}
            className="press mt-[10px] flex items-center gap-[14px] rounded-card border border-navy-12 bg-page-white px-[18px] py-[16px]"
          >
            <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-red-08 text-romanian-red">
              <HeartCrossIcon className="h-[19px] w-[19px]" />
            </span>
            <span>
              <span className="block font-serif text-[16px] font-bold text-ink-black">Ascension of the Lord</span>
              <span className="mt-[2px] block font-sans text-[13px] text-muted-ink">
                {formatMediumDate(ascension.civilDate)}
              </span>
            </span>
          </Link>
        </main>
      </PullToRefreshToday>

      <BottomTabBar />
    </div>
  );
}

function QuickAction({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="press flex flex-col items-center gap-[8px]">
      <span className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-navy-12 text-episcopal-navy">
        {icon}
      </span>
      <span className="font-sans text-[11.5px] font-medium text-ink-black">{label}</span>
    </Link>
  );
}
