import Link from "next/link";
import { BottomTabBar } from "@/components/BottomTabBar";
import { ChevronRow } from "@/components/ChevronRow";
import { EpiscopalSeal } from "@/components/EpiscopalSeal";
import {
  BellIcon,
  BookmarkIcon,
  MailIcon,
  NoteIcon,
  PersonIcon,
  ScrollIcon,
  SettingsIcon,
} from "@/components/icons";

export default function MenuPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <div className="bg-episcopal-navy px-outer pb-[46px] pt-[max(env(safe-area-inset-top),20px)] text-center">
        <EpiscopalSeal tone="gold" className="mx-auto h-[52px] w-[52px]" />
        <p className="mt-[10px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-white/85">
          Romanian Orthodox Episcopate of America
        </p>
      </div>

      <main className="flex-1 px-outer pb-[24px]">
        <Link
          href="/menu/sign-in"
          className="press -mt-[30px] flex items-center gap-[14px] rounded-card border border-navy-06 bg-warm-ivory px-[18px] py-[16px]"
          style={{ boxShadow: "0 8px 24px rgba(11,0,87,0.08)" }}
        >
          <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-navy-06 text-episcopal-navy">
            <PersonIcon className="h-[22px] w-[22px]" />
          </span>
          <span>
            <span className="block font-serif text-[16px] font-bold text-episcopal-navy">Sign In</span>
            <span className="mt-[2px] block font-sans text-[12.5px] text-muted-ink">
              Access your bookmarks, notes and preferences
            </span>
          </span>
        </Link>

        <div className="mt-section">
          <ChevronRow href="/menu/bookmarks" title="Bookmarks" icon={<BookmarkIcon className="h-[19px] w-[19px]" />} />
          <ChevronRow href="/menu/notes" title="Notes" icon={<NoteIcon className="h-[19px] w-[19px]" />} />
          <ChevronRow href="/menu/settings" title="Settings" icon={<SettingsIcon className="h-[19px] w-[19px]" />} />
          <ChevronRow href="/menu/notifications" title="Notifications" icon={<BellIcon className="h-[19px] w-[19px]" />} />
          <ChevronRow href="/menu/about" title="About Us" icon={<ScrollIcon className="h-[19px] w-[19px]" />} />
          <ChevronRow href="/menu/support" title="Support & Contact" icon={<MailIcon className="h-[19px] w-[19px]" />} divider={false} />
        </div>
      </main>

      <BottomTabBar />
    </div>
  );
}
