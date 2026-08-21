import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { CrossIcon, FastingFishIcon, ScrollIcon } from "@/components/icons";

const NOTIFICATIONS = [
  {
    id: 1,
    icon: <CrossIcon className="h-[18px] w-[18px]" />,
    title: "Upcoming Feast — Ascension of the Lord",
    body: "May 29, 2025 · one of the Twelve Great Feasts",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    icon: <FastingFishIcon className="h-[18px] w-[18px]" />,
    title: "Fasting Reminder",
    body: "This week is fast-free — no fasting rules apply.",
    time: "1d ago",
    unread: true,
  },
  {
    id: 3,
    icon: <ScrollIcon className="h-[18px] w-[18px]" />,
    title: "Diocesan Announcement",
    body: "Registration is now open for the Diocesan Assembly.",
    time: "3d ago",
    unread: false,
  },
];

export default function NotificationsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="Notifications" />
      <main className="flex-1 px-outer py-[10px]">
        {NOTIFICATIONS.map((n, i) => (
          <div key={n.id} className={`flex items-start gap-[12px] py-[14px] ${i !== NOTIFICATIONS.length - 1 ? "border-b border-divider" : ""}`}>
            <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-navy-06 text-episcopal-navy">
              {n.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-sans text-[14px] font-semibold text-ink-black">{n.title}</p>
              <p className="mt-[2px] font-sans text-[13px] text-muted-ink">{n.body}</p>
              <p className="mt-[4px] font-sans text-[11px] text-muted-ink">{n.time}</p>
            </div>
            {n.unread && <span className="mt-[4px] h-[8px] w-[8px] shrink-0 rounded-full bg-romanian-red" />}
          </div>
        ))}

        <p className="mt-section text-center font-sans text-[12.5px] text-muted-ink">
          Manage what you&apos;re notified about in{" "}
          <Link href="/menu/settings" className="font-semibold text-episcopal-navy underline underline-offset-2">
            Settings
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
