import { BottomTabBar } from "@/components/BottomTabBar";
import { ChevronRow } from "@/components/ChevronRow";
import { EpistleIcon, GospelIcon, NavResourceIcon } from "@/components/icons";
import { formatMediumDate, getLiturgicalDay, REFERENCE_DATE } from "@/lib/seedData";

export default function ReadingsPage() {
  const day = getLiturgicalDay(REFERENCE_DATE)!;

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <header className="px-outer pt-[max(env(safe-area-inset-top),18px)]">
        <h1 className="font-serif text-[28px] font-bold text-ink-black">Readings</h1>
        <p className="mt-[4px] font-sans text-[13px] text-muted-ink">{formatMediumDate(day.civilDate)}</p>
      </header>

      <main className="flex-1 pb-[24px] pt-section">
        <p className="px-outer pb-[8px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Today&apos;s Readings
        </p>
        <div className="px-outer">
          <ChevronRow
            href={`/reading/${day.epistle}`}
            title="Epistle Reading"
            subtitle="Acts 6:8-15; 7:1-5, 47-60"
            icon={<EpistleIcon className="h-[19px] w-[19px]" />}
          />
          <ChevronRow
            href={`/reading/${day.gospel}`}
            title="Gospel Reading"
            subtitle="John 4:46-54"
            icon={<GospelIcon className="h-[19px] w-[19px]" />}
            divider={false}
          />
        </div>

        <p className="mt-section px-outer pb-[8px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Browse Scripture
        </p>
        <div className="px-outer">
          <ChevronRow
            href="/resources/bible"
            title="Bible — Book & Chapter"
            subtitle="Read the Holy Scriptures"
            icon={<NavResourceIcon className="h-[19px] w-[19px]" />}
            divider={false}
          />
        </div>
      </main>

      <BottomTabBar />
    </div>
  );
}
