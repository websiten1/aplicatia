import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomTabBar } from "@/components/BottomTabBar";
import { NavReadingsIcon } from "@/components/icons";
import { CalendarClient } from "./CalendarClient";

export default function CalendarPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader
        title="May 2025"
        backHref="/today"
        right={
          <Link
            href="/calendar/list"
            aria-label="Liturgical month list"
            className="press flex h-[36px] w-[36px] items-center justify-center rounded-control text-episcopal-navy"
          >
            <NavReadingsIcon className="h-[20px] w-[20px]" />
          </Link>
        }
      />
      <main className="flex-1 px-outer pb-[24px] pt-[8px]">
        <CalendarClient />
      </main>
      <BottomTabBar />
    </div>
  );
}
