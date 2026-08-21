"use client";

import { notFound, useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { BookmarkButton } from "@/components/BookmarkButton";
import { EmptyState } from "@/components/Feedback";
import { SearchIcon } from "@/components/icons";
import { RESOURCE_ITEMS } from "@/lib/seedData";
import type { ResourceCategoryId } from "@/lib/types";

const LABELS: Record<ResourceCategoryId, string> = {
  "church-fathers": "Church Fathers",
  articles: "Articles & Essays",
  videos: "Videos",
  books: "Books",
  "audio-library": "Audio Library",
};

const SEARCHABLE: ResourceCategoryId[] = ["videos", "audio-library"];

export default function ResourceCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [query, setQuery] = useState("");
  const categoryId = category as ResourceCategoryId;

  const items = useMemo(
    () =>
      RESOURCE_ITEMS.filter((r) => r.category === categoryId).filter((r) =>
        query ? r.title.toLowerCase().includes(query.toLowerCase()) : true
      ),
    [categoryId, query]
  );

  if (!(category in LABELS)) return notFound();
  const label = LABELS[categoryId];

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title={label} backHref="/resources" />

      <main className="flex-1 px-outer py-[16px]">
        {SEARCHABLE.includes(categoryId) && (
          <div className="mb-[16px] flex items-center gap-[10px] rounded-pill bg-navy-06 px-[14px] py-[10px]">
            <SearchIcon className="h-[16px] w-[16px] shrink-0 text-muted-ink" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${label.toLowerCase()}`}
              className="w-full bg-transparent font-sans text-[14px] text-ink-black outline-none placeholder:text-muted-ink"
            />
          </div>
        )}

        {items.length === 0 ? (
          <EmptyState icon={<SearchIcon className="h-[20px] w-[20px]" />} message="No results found." />
        ) : (
          items.map((item, i) => (
            <div key={item.id} className={`flex items-center gap-[12px] py-[14px] ${i !== items.length - 1 ? "border-b border-divider" : ""}`}>
              <div className="min-w-0 flex-1">
                <p className="truncate font-serif text-[15.5px] text-ink-black">{item.title}</p>
                {item.subtitle && <p className="mt-[2px] truncate font-sans text-[12.5px] text-muted-ink">{item.subtitle}</p>}
              </div>
              <BookmarkButton entityType="article" entityId={item.id} title={item.title} subtitle={item.subtitle} />
            </div>
          ))
        )}
      </main>
    </div>
  );
}
