import { BottomTabBar } from "@/components/BottomTabBar";
import { ChevronRow } from "@/components/ChevronRow";
import {
  CandleIcon,
  CrossIcon,
  ForkKnifeIcon,
  HeartCrossIcon,
  MoonIcon,
  ScrollIcon,
  SunIcon,
} from "@/components/icons";
import { PRAYERS, PRAYER_CATEGORY_LABEL } from "@/lib/seedData";
import type { PrayerCategory } from "@/lib/types";

const ICONS: Record<PrayerCategory, React.ReactNode> = {
  morning: <SunIcon className="h-[19px] w-[19px]" />,
  evening: <MoonIcon className="h-[19px] w-[19px]" />,
  "before-meals": <ForkKnifeIcon className="h-[19px] w-[19px]" />,
  "after-meals": <ForkKnifeIcon className="h-[19px] w-[19px]" />,
  "prayer-rule": <ScrollIcon className="h-[19px] w-[19px]" />,
  akathist: <CandleIcon className="h-[19px] w-[19px]" />,
  paraklesis: <CrossIcon className="h-[19px] w-[19px]" />,
  comforting: <HeartCrossIcon className="h-[19px] w-[19px]" />,
};

export default function PrayersPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <header className="px-outer pt-[max(env(safe-area-inset-top),18px)]">
        <h1 className="font-serif text-[28px] font-bold text-ink-black">Prayers</h1>
      </header>

      <main className="flex-1 px-outer pb-[24px] pt-section">
        {PRAYERS.map((p) => (
          <ChevronRow
            key={p.id}
            href={`/prayers/${p.id}`}
            title={PRAYER_CATEGORY_LABEL[p.category]}
            icon={ICONS[p.category]}
          />
        ))}
      </main>

      <BottomTabBar />
    </div>
  );
}
