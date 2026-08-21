"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BackIcon } from "./icons";

interface AppHeaderProps {
  title?: string;
  backHref?: string;
  right?: React.ReactNode;
  transparent?: boolean;
}

/** Standard back + centered title + optional right action bar used across secondary screens. */
export function AppHeader({ title, backHref, right, transparent }: AppHeaderProps) {
  const router = useRouter();
  return (
    <header
      className={`flex h-[52px] shrink-0 items-center justify-between px-outer ${
        transparent ? "" : "border-b border-divider bg-page-white"
      }`}
    >
      <div className="flex w-[36px]">
        {backHref ? (
          <Link
            href={backHref}
            aria-label="Back"
            className="press flex h-[36px] w-[36px] items-center justify-center rounded-control"
          >
            <BackIcon className="h-[22px] w-[22px] text-ink-black" />
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Back"
            className="press flex h-[36px] w-[36px] items-center justify-center rounded-control"
          >
            <BackIcon className="h-[22px] w-[22px] text-ink-black" />
          </button>
        )}
      </div>
      {title && (
        <h1 className="flex-1 truncate text-center font-sans text-[16px] font-semibold text-ink-black">{title}</h1>
      )}
      <div className="flex w-[36px] justify-end">{right}</div>
    </header>
  );
}
