"use client";

import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { AudioPlayerCard } from "@/components/AudioPlayerCard";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ShareButton } from "@/components/ShareButton";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { useNotes } from "@/lib/storage";
import { READINGS } from "@/lib/seedData";
import { NoteIcon } from "@/components/icons";

const TABS = [
  { id: "text", label: "Text" },
  { id: "listen", label: "Listen" },
];

export default function ReadingPage() {
  const { id } = useParams<{ id: string }>();
  const reading = READINGS.find((r) => r.id === id);
  const [tab, setTab] = useState("text");
  const [noteOpen, setNoteOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const { addNote } = useNotes();

  if (!reading) return notFound();

  function submitNote() {
    if (!noteText.trim()) return;
    addNote({ entityType: "reading", entityId: reading!.id, anchor: reading!.reference, body: noteText.trim() });
    setNoteText("");
    setNoteOpen(false);
  }

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader
        title={reading.reference}
        right={
          <div className="flex items-center gap-[6px]">
            <BookmarkButton entityType="reading" entityId={reading.id} title={reading.reference} subtitle={reading.title} />
          </div>
        }
      />
      <div className="flex items-center justify-end gap-[6px] px-outer pt-[8px]">
        <ShareButton title={reading.title} text={reading.reference} />
      </div>

      <SegmentedTabs tabs={TABS} active={tab} onChange={setTab} />

      <main key={tab} className="anim-fade-through flex-1 px-outer py-[20px]">
        {tab === "listen" ? (
          <AudioPlayerCard
            readingId={reading.id}
            title={reading.title}
            reference={reading.reference}
            durationLabel={reading.duration}
            audioUrl={reading.audioUrl}
          />
        ) : (
          <div>
            {reading.textEn.map((v) => (
              <p key={v.verse} className="mb-[14px] font-serif text-[17px] leading-[1.6] text-ink-black">
                <span className="mr-[6px] align-super font-sans text-[11px] font-semibold text-orthodox-blue">{v.verse}</span>
                {v.text}
              </p>
            ))}
            <p className="mt-[8px] font-sans text-[11.5px] text-muted-ink">{reading.sourceAttribution}</p>
          </div>
        )}
      </main>

      <div className="border-t border-divider px-outer py-[14px]">
        {noteOpen ? (
          <div className="anim-fade-through">
            <textarea
              autoFocus
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Add a note on this reading…"
              rows={3}
              className="w-full rounded-control border border-navy-12 bg-warm-ivory px-[12px] py-[10px] font-sans text-[14px] text-ink-black outline-none"
            />
            <div className="mt-[8px] flex justify-end gap-[8px]">
              <button
                type="button"
                onClick={() => setNoteOpen(false)}
                className="press rounded-pill px-[14px] py-[8px] font-sans text-[13px] font-medium text-muted-ink"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={submitNote}
                className="press rounded-pill bg-episcopal-navy px-[16px] py-[8px] font-sans text-[13px] font-semibold text-white"
              >
                Save Note
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setNoteOpen(true)}
            className="press flex items-center gap-[8px] font-sans text-[13px] font-medium text-episcopal-navy"
          >
            <NoteIcon className="h-[18px] w-[18px]" />
            Add Note
          </button>
        )}
      </div>
    </div>
  );
}
