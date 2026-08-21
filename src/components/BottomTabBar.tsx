"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavCalendarIcon,
  NavHomeIcon,
  NavMenuIcon,
  NavReadingsIcon,
  NavResourceIcon,
} from "./icons";

type NavTab = "today" | "calendar" | "readings" | "resources" | "menu";

const TABS: { id: NavTab; href: string; label: string; Icon: (p: { className?: string }) => React.JSX.Element }[] = [
  { id: "today", href: "/today", label: "Today", Icon: NavHomeIcon },
  { id: "calendar", href: "/calendar", label: "Calendar", Icon: NavCalendarIcon },
  { id: "readings", href: "/readings", label: "Readings", Icon: NavReadingsIcon },
  { id: "resources", href: "/resources", label: "Resources", Icon: NavResourceIcon },
  { id: "menu", href: "/menu", label: "Menu", Icon: NavMenuIcon },
];

function tabForPath(pathname: string): NavTab | null {
  if (pathname.startsWith("/today") || pathname.startsWith("/day")) return "today";
  if (pathname.startsWith("/calendar") || pathname.startsWith("/reading")) return "calendar";
  if (pathname.startsWith("/readings") || pathname.startsWith("/saints")) return "readings";
  if (
    pathname.startsWith("/prayers") ||
    pathname.startsWith("/fasting") ||
    pathname.startsWith("/resources") ||
    pathname.startsWith("/parishes")
  )
    return "resources";
  if (pathname.startsWith("/events") || pathname.startsWith("/menu")) return "menu";
  return null;
}

export function BottomTabBar() {
  const pathname = usePathname();
  const active = tabForPath(pathname);

  return (
    <nav
      className="sticky bottom-0 z-20 flex w-full shrink-0 items-stretch border-t border-divider bg-page-white pb-[max(env(safe-area-inset-bottom),0px)]"
      aria-label="Primary"
    >
      {TABS.map(({ id, href, label, Icon }) => {
        const isActive = id === active;
        return (
          <Link
            key={id}
            href={href}
            className="press flex min-h-[44px] flex-1 flex-col items-center justify-center gap-[4px] py-[10px]"
            aria-current={isActive ? "page" : undefined}
          >
            <Icon className={`h-[23px] w-[23px] transition-colors duration-150 ${isActive ? "text-romanian-red" : "text-ink-black/45"}`} />
            <span
              className={`font-sans text-[10.5px] font-medium transition-colors duration-150 ${
                isActive ? "text-romanian-red" : "text-ink-black/45"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
