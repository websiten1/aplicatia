import { BottomTabBar } from "@/components/BottomTabBar";
import { EventsClient } from "./EventsClient";

export default function EventsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <header className="px-outer pt-[max(env(safe-area-inset-top),18px)]">
        <h1 className="font-serif text-[28px] font-bold text-ink-black">Events</h1>
      </header>

      <main className="flex-1 pb-[24px] pt-section">
        <EventsClient />
      </main>

      <BottomTabBar />
    </div>
  );
}
