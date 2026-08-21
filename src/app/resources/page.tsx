import Link from "next/link";
import { BottomTabBar } from "@/components/BottomTabBar";
import { ChevronRow } from "@/components/ChevronRow";
import { CalendarBookIcon, GospelIcon, NavResourceIcon, ScrollIcon } from "@/components/icons";
import { BackgroundChurchIllustration } from "@/components/BackgroundChurchIllustration";

const CATEGORIES = [
  { id: "church-fathers", title: "Church Fathers", icon: <ScrollIcon className="h-[19px] w-[19px]" /> },
  { id: "articles", title: "Articles & Essays", icon: <NavResourceIcon className="h-[19px] w-[19px]" /> },
  { id: "videos", title: "Videos", icon: <GospelIcon className="h-[19px] w-[19px]" /> },
  { id: "books", title: "Books", icon: <CalendarBookIcon className="h-[19px] w-[19px]" /> },
  { id: "audio-library", title: "Audio Library", icon: <ScrollIcon className="h-[19px] w-[19px]" /> },
];

export default function ResourcesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <header className="px-outer pt-[max(env(safe-area-inset-top),18px)]">
        <h1 className="font-serif text-[28px] font-bold text-ink-black">Resources</h1>
      </header>

      <main className="flex-1 pb-[24px] pt-section">
        <div className="px-outer">
          <Link
            href="/resources/bible"
            className="press relative block h-[130px] overflow-hidden rounded-hero bg-episcopal-navy px-[18px] py-[16px]"
          >
            <BackgroundChurchIllustration className="pointer-events-none absolute -bottom-4 -right-6 h-[130px] w-[130px] text-white opacity-[0.14]" />
            <p className="relative font-serif text-[22px] font-bold uppercase tracking-[0.02em] text-white">Bible</p>
            <p className="relative mt-[4px] font-sans text-[13px] text-white/75">Read the Holy Scriptures</p>
          </Link>
        </div>

        <div className="mt-section px-outer">
          {CATEGORIES.map((c, i) => (
            <ChevronRow
              key={c.id}
              href={`/resources/${c.id}`}
              title={c.title}
              icon={c.icon}
              divider={i !== CATEGORIES.length - 1}
            />
          ))}
        </div>
      </main>

      <BottomTabBar />
    </div>
  );
}
