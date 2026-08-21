"use client";

import { AppHeader } from "@/components/AppHeader";
import { EmptyState } from "@/components/Feedback";
import { CloseIcon, NoteIcon } from "@/components/icons";
import { useNotes } from "@/lib/storage";

export default function NotesPage() {
  const { notes, removeNote, hydrated } = useNotes();

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="Notes" />
      <main className="flex-1 px-outer py-[10px]">
        {!hydrated ? null : notes.length === 0 ? (
          <EmptyState
            icon={<NoteIcon className="h-[20px] w-[20px]" />}
            message="No notes yet. While reading Scripture or prayers, tap Add Note to save your reflections here."
          />
        ) : (
          notes.map((n, i) => (
            <div key={n.id} className={`py-[14px] ${i !== notes.length - 1 ? "border-b border-divider" : ""}`}>
              <div className="flex items-start justify-between gap-[10px]">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.06em] text-romanian-red">{n.anchor}</p>
                <button
                  type="button"
                  aria-label="Delete note"
                  onClick={() => removeNote(n.id)}
                  className="press flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-control text-muted-ink"
                >
                  <CloseIcon className="h-[14px] w-[14px]" />
                </button>
              </div>
              <p className="mt-[4px] font-serif text-[15px] leading-[1.5] text-ink-black">{n.body}</p>
              <p className="mt-[4px] font-sans text-[11.5px] text-muted-ink">
                {new Date(n.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
