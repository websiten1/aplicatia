"use client";

import { AppHeader } from "@/components/AppHeader";
import { EmptyState } from "@/components/Feedback";
import { BookmarkIcon, CloseIcon } from "@/components/icons";
import { useBookmarks } from "@/lib/storage";

const ENTITY_HREF: Record<string, (id: string) => string> = {
  saint: (id) => `/saints/${id}`,
  reading: (id) => `/reading/${id}`,
  prayer: (id) => `/prayers/${id}`,
  event: (id) => `/events/${id}`,
  parish: (id) => `/parishes/${id}`,
  article: () => `/resources`,
};

export default function BookmarksPage() {
  const { bookmarks, toggle, hydrated } = useBookmarks();

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="Bookmarks" />
      <main className="flex-1 px-outer py-[10px]">
        {!hydrated ? null : bookmarks.length === 0 ? (
          <EmptyState
            icon={<BookmarkIcon className="h-[20px] w-[20px]" />}
            message="No bookmarks yet. Tap the bookmark icon on any saint, reading, prayer, event or parish to save it here."
          />
        ) : (
          bookmarks.map((b, i) => (
            <div
              key={b.id}
              className={`flex items-center gap-[12px] py-[14px] ${i !== bookmarks.length - 1 ? "border-b border-divider" : ""}`}
            >
              <a href={ENTITY_HREF[b.entityType]?.(b.entityId) ?? "#"} className="min-w-0 flex-1">
                <p className="truncate font-serif text-[15.5px] text-ink-black">{b.title}</p>
                {b.subtitle && <p className="mt-[2px] truncate font-sans text-[12.5px] text-muted-ink">{b.subtitle}</p>}
              </a>
              <button
                type="button"
                aria-label="Remove bookmark"
                onClick={() => toggle({ entityType: b.entityType, entityId: b.entityId, title: b.title, subtitle: b.subtitle })}
                className="press flex h-[32px] w-[32px] items-center justify-center rounded-control text-muted-ink"
              >
                <CloseIcon className="h-[16px] w-[16px]" />
              </button>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
