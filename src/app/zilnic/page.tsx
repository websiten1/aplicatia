import Link from "next/link";
import { EqualizerIcon } from "@/components/icons";
import { ZilnicDayStrip } from "@/components/ZilnicDayStrip";
import {
  ZILNIC_DAY_STRIP,
  ZILNIC_DAY_TITLE,
  ZILNIC_SELECTED_DAY,
  ZILNIC_SYNAXARION,
} from "@/lib/seedData";

/**
 * This screen has its own, self-contained visual language (ivory/indigo/blue
 * + burgundy, Cinzel/PT Serif) distinct from the shared design system used
 * by the other screens, so it doesn't reuse the shared Header/Sheet/
 * HorizontalStrip/BottomNav components — those stay untouched for Lunar,
 * Anual, Meniu and Rânduieli.
 */
export default function ZilnicPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="flex flex-col items-center px-[22px] pt-[max(env(safe-area-inset-top),16px)] text-center">
        <p className="font-[family-name:var(--font-cinzel)] text-[9.5px] font-medium tracking-[0.06em] text-black">
          Romanian Orthodox Episcopate of America
        </p>
        {/* Title locked to ~42px so "CALENDAR" renders roughly as wide as the eyebrow line above it. */}
        <h1 className="mt-[6px] font-[family-name:var(--font-pt-serif)] text-[42px] font-bold uppercase leading-[0.95] tracking-[0.01em] text-[#0B0057]">
          Calendar
          <br />
          Ortodox
        </h1>
      </header>

      <div className="mt-[20px] px-[22px]">
        <div className="h-[2px] bg-[#0B0057]" />
      </div>

      <ZilnicDayStrip days={ZILNIC_DAY_STRIP} selected={ZILNIC_SELECTED_DAY} />

      <div className="mt-[18px] px-[10px]">
        <div className="rounded-[28px] bg-[#FDFAF2] px-[22px] pt-[26px] pb-[20px]">
          <p className="font-[family-name:var(--font-pt-serif)] text-[20px] font-medium leading-[1.25] text-[#0B0057]">
            {ZILNIC_DAY_TITLE}
          </p>

          <p className="zn-dropcap mt-[14px] text-justify font-[family-name:var(--font-pt-serif)] text-[15px] leading-[1.55] text-[#17161B]">
            {ZILNIC_SYNAXARION}
          </p>

          <div className="mt-[22px] flex items-center gap-[12px]">
            <button
              type="button"
              className="flex h-[70px] flex-1 items-center justify-center rounded-pill bg-[#255C99] px-[12px]"
            >
              <span className="truncate font-[family-name:var(--font-pt-serif)] text-[16px] font-medium text-white">
                Citește mai multe...
              </span>
            </button>
            <button
              type="button"
              aria-label="Susține"
              className="flex h-[70px] w-[86px] shrink-0 items-center justify-center rounded-[26px] bg-[#B1303B]"
            />
            <button
              type="button"
              aria-label="Ascultă sinaxarul"
              className="flex h-[70px] w-[86px] shrink-0 items-center justify-center rounded-[26px] bg-[#0B0057]"
            />
          </div>
        </div>
      </div>

      <nav className="sticky bottom-0 z-10 mt-auto flex h-[66px] w-full shrink-0 items-center justify-evenly bg-[#0B0057] pb-[max(env(safe-area-inset-bottom),0px)]">
        <Link href="/zilnic" className="flex h-[44px] w-[44px] items-center justify-center" aria-current="page">
          <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border-2 border-white font-[family-name:var(--font-pt-serif)] text-[16px] font-semibold text-white">
            {ZILNIC_SELECTED_DAY}
          </span>
        </Link>
        <Link href="/lunar" className="flex h-[44px] w-[44px] items-center justify-center">
          <span className="h-[40px] w-[40px] rounded-[12px] border-2 border-white" />
        </Link>
        <Link href="/anual" className="flex h-[44px] w-[44px] items-center justify-center">
          <span className="h-[40px] w-[40px] rounded-[12px] border-2 border-white" />
        </Link>
        <Link href="/randuieli" className="flex h-[44px] w-[44px] items-center justify-center">
          <span className="h-[40px] w-[40px] rounded-[12px] border-2 border-white" />
        </Link>
        <Link href="/meniu" className="flex h-[44px] w-[44px] items-center justify-center">
          <EqualizerIcon className="h-[26px] w-[26px] text-white" />
        </Link>
      </nav>
    </div>
  );
}
