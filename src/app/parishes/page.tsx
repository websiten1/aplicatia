import { BottomTabBar } from "@/components/BottomTabBar";
import { ParishesClient } from "./ParishesClient";

export default function ParishesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <header className="px-outer pt-[max(env(safe-area-inset-top),18px)]">
        <h1 className="font-serif text-[28px] font-bold text-ink-black">Parishes</h1>
      </header>

      <main className="flex-1 px-outer pb-[24px] pt-section">
        <ParishesClient />
      </main>

      <BottomTabBar />
    </div>
  );
}
