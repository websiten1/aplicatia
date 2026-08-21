"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/Feedback";
import { LocationCrosshairIcon, MapPinIcon, SearchIcon } from "@/components/icons";
import { PARISHES } from "@/lib/seedData";

const CLUSTER_MARKERS = [
  { count: 8, top: "22%", left: "30%" },
  { count: 15, top: "16%", left: "62%" },
  { count: 12, top: "55%", left: "20%" },
  { count: 4, top: "62%", left: "70%" },
];

export function ParishesClient() {
  const [view, setView] = useState<"map" | "list">("list");
  const [query, setQuery] = useState("");
  const [locating, setLocating] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? PARISHES.filter((p) => p.name.toLowerCase().includes(q) || p.city.toLowerCase().includes(q))
      : PARISHES;
    return [...filtered].sort((a, b) => (a.distanceMi ?? 0) - (b.distanceMi ?? 0));
  }, [query]);

  return (
    <>
      <div className="flex items-center gap-[10px] rounded-pill bg-navy-06 px-[14px] py-[10px]">
        <SearchIcon className="h-[16px] w-[16px] shrink-0 text-muted-ink" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search parishes or cities"
          className="w-full bg-transparent font-sans text-[14px] text-ink-black outline-none placeholder:text-muted-ink"
        />
      </div>

      <div className="mt-section flex gap-[24px]">
        {(["map", "list"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            className={`press pb-[8px] font-sans text-[13px] font-semibold uppercase tracking-[0.04em] ${
              view === v ? "border-b-2 border-romanian-red text-romanian-red" : "text-muted-ink"
            }`}
          >
            {v === "map" ? "Map" : "List"}
          </button>
        ))}
      </div>

      {view === "map" ? (
        <div className="anim-fade-through relative mt-[16px] h-[220px] overflow-hidden rounded-card bg-[#e7ecf3]">
          <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
            <defs>
              <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#0B0057" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {CLUSTER_MARKERS.map((m, i) => (
            <span
              key={i}
              className="anim-scale-fade-in absolute flex h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-episcopal-navy font-sans text-[12px] font-bold text-white"
              style={{ top: m.top, left: m.left, animationDelay: `${i * 60}ms`, boxShadow: "0 4px 10px rgba(11,0,87,0.25)" }}
            >
              {m.count}
            </span>
          ))}
          <button
            type="button"
            onClick={() => setLocating(true)}
            aria-label="Use my location"
            className="press absolute bottom-[10px] right-[10px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-page-white text-episcopal-navy"
            style={{ boxShadow: "0 4px 10px rgba(11,0,87,0.18)" }}
          >
            <LocationCrosshairIcon className="h-[19px] w-[19px]" />
          </button>
          {locating && (
            <div className="absolute inset-x-0 bottom-0 bg-episcopal-navy/90 px-[12px] py-[8px] text-center font-sans text-[11.5px] text-white">
              Location access would be requested here in production.
            </div>
          )}
        </div>
      ) : null}

      <p className="mt-section pb-[8px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
        Nearby Parishes
      </p>

      {results.length === 0 ? (
        <EmptyState icon={<MapPinIcon className="h-[20px] w-[20px]" />} message="No parishes match your search." />
      ) : (
        results.map((p, i) => (
          <Link
            key={p.id}
            href={`/parishes/${p.id}`}
            className={`press flex items-center justify-between gap-[10px] py-[14px] ${
              i !== results.length - 1 ? "border-b border-divider" : ""
            }`}
          >
            <span className="min-w-0">
              <span className="block font-serif text-[15.5px] text-episcopal-navy">{p.name}</span>
              <span className="mt-[2px] block font-sans text-[13px] text-muted-ink">
                {p.city}, {p.state}
              </span>
            </span>
            {p.distanceMi != null && (
              <span className="shrink-0 font-sans text-[13px] text-muted-ink">{p.distanceMi} mi</span>
            )}
          </Link>
        ))
      )}
    </>
  );
}
