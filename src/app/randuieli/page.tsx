import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { Sheet } from "@/components/Sheet";
import { ZILNIC_HEADER_DATE } from "@/lib/seedData";

/**
 * Fifth nav tab from Part A5 — no screen spec was given for it, so this is a
 * placeholder that follows the same shared design system as the other screens.
 */
export default function RanduieliPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-app">
      <Header date={ZILNIC_HEADER_DATE} />

      <Sheet>
        <h1 className="mt-lg font-serif text-[34px] font-semibold text-text-primary">
          Rânduieli
        </h1>
        <p className="mt-lg font-serif text-[16px] leading-[1.5] text-text-secondary">
          Conținutul acestei secțiuni va fi disponibil în curând.
        </p>
      </Sheet>

      <BottomNav activeTab="randuieli" />
    </div>
  );
}
