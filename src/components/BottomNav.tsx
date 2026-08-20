import Link from "next/link";
import {
  NavAnualIcon,
  NavLunarIcon,
  NavMeniuIcon,
  NavRanduieliIcon,
  NavZilnicIcon,
} from "./icons";

export type NavTab = "zilnic" | "lunar" | "anual" | "randuieli" | "meniu";

const TABS: {
  id: NavTab;
  href: string;
  label: string;
  Icon: (props: { className?: string; active?: boolean }) => React.JSX.Element;
}[] = [
  { id: "zilnic", href: "/zilnic", label: "Zilnic", Icon: NavZilnicIcon },
  { id: "lunar", href: "/lunar", label: "Lunar", Icon: NavLunarIcon },
  { id: "anual", href: "/anual", label: "Anual", Icon: NavAnualIcon },
  { id: "randuieli", href: "/randuieli", label: "Rânduieli", Icon: NavRanduieliIcon },
  { id: "meniu", href: "/meniu", label: "Meniu", Icon: NavMeniuIcon },
];

export function BottomNav({ activeTab }: { activeTab: NavTab }) {
  return (
    <nav className="sticky bottom-0 z-10 flex w-full shrink-0 bg-navbar-bg pb-[max(env(safe-area-inset-bottom),0px)]">
      {TABS.map(({ id, href, label, Icon }) => {
        const active = id === activeTab;
        const color = active ? "text-navbar-active" : "text-navbar-inactive";
        return (
          <Link
            key={id}
            href={href}
            className={`flex min-h-[44px] flex-1 flex-col items-center gap-[5px] py-[11px] ${color}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon className="h-[22px] w-[22px]" active={active} />
            <span className="whitespace-nowrap font-sans text-[11px] font-semibold uppercase tracking-[0.04em]">
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
