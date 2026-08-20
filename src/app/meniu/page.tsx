import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { Sheet } from "@/components/Sheet";
import { BellIcon, ChevronRightIcon, HeartIcon } from "@/components/icons";
import { MENIU_LINKS, ZILNIC_HEADER_DATE } from "@/lib/seedData";

export default function MeniuPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-app">
      <Header date={ZILNIC_HEADER_DATE} icons="bell-only" />

      <Sheet>
        <h1 className="mt-lg font-serif text-[34px] font-semibold text-accent">Meniu</h1>

        <div className="mt-lg flex gap-md">
          <button
            type="button"
            className="flex h-[300px] flex-[1.4] flex-col justify-between rounded-card bg-accent-deep p-[20px] text-left"
          >
            <span className="flex h-[56px] w-[56px] items-center justify-center rounded-pill bg-white">
              <HeartIcon className="h-6 w-6 text-accent" />
            </span>
            <span className="font-serif text-[26px] font-medium leading-[1.2] text-white">
              Susține Calendarul Ortodox
            </span>
          </button>
          <button
            type="button"
            className="flex h-[300px] flex-1 flex-col justify-between rounded-card bg-bg-sheet p-[20px] text-left ring-1 ring-inset ring-divider"
          >
            <span className="flex h-[56px] w-[56px] items-center justify-center rounded-pill bg-accent">
              <BellIcon className="h-6 w-6 text-white" />
            </span>
            <span className="font-serif text-[26px] font-medium leading-[1.2] text-text-primary">
              Abonare notificări
            </span>
          </button>
        </div>

        <div className="mt-section">
          {MENIU_LINKS.map((label, i) => (
            <button
              key={label}
              type="button"
              className={`flex w-full items-center justify-between py-[28px] text-left ${
                i !== MENIU_LINKS.length - 1 ? "border-b border-divider" : ""
              }`}
            >
              <span className="font-serif text-[16px] font-normal text-text-primary">{label}</span>
              <ChevronRightIcon className="h-5 w-5 text-accent" />
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-[10px] py-section text-center">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
            Calendar Ortodox
          </p>
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
            © 2024 - 2026 Patriarhia Română
          </p>
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
            Ver. 1.4.0
          </p>
        </div>
      </Sheet>

      <BottomNav activeTab="meniu" />
    </div>
  );
}
