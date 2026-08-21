import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomTabBar } from "@/components/BottomTabBar";
import { NavCalendarIcon } from "@/components/icons";
import { ListClient } from "./ListClient";

export default function CalendarListPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader
        title="May"
        backHref="/calendar"
        right={
          <Link
            href="/calendar"
            aria-label="Grid view"
            className="press flex h-[36px] w-[36px] items-center justify-center rounded-control text-episcopal-navy"
          >
            <NavCalendarIcon className="h-[20px] w-[20px]" />
          </Link>
        }
      />
      <main className="flex-1 pb-[24px]">
        <ListClient />
      </main>
      <BottomTabBar />
    </div>
  );
}
