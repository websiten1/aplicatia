"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { ChevronDownIcon } from "@/components/icons";

const OLD_TESTAMENT = ["Genesis", "Exodus", "Psalms", "Isaiah", "Jeremiah"];
const NEW_TESTAMENT = ["Matthew", "Mark", "Luke", "John", "Acts of the Apostles", "Romans", "Revelation"];

const SEEDED_READINGS: Record<string, Record<number, string>> = {
  "John": { 4: "reading-john-4" },
  "Acts of the Apostles": { 6: "reading-acts-6" },
};

function chapterCount(book: string): number {
  const counts: Record<string, number> = {
    Genesis: 50,
    Exodus: 40,
    Psalms: 150,
    Isaiah: 66,
    Jeremiah: 52,
    Matthew: 28,
    Mark: 16,
    Luke: 24,
    John: 21,
    "Acts of the Apostles": 28,
    Romans: 16,
    Revelation: 22,
  };
  return counts[book] ?? 1;
}

export default function BibleSelectorPage() {
  const router = useRouter();
  const [openBook, setOpenBook] = useState<string | null>(null);

  function selectChapter(book: string, chapter: number) {
    const readingId = SEEDED_READINGS[book]?.[chapter];
    if (readingId) {
      router.push(`/reading/${readingId}`);
    } else {
      alert(`${book} ${chapter} — full text coming soon.`);
    }
  }

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="Bible" backHref="/resources" />
      <main className="flex-1 px-outer py-[16px]">
        <BookGroup label="Old Testament" books={OLD_TESTAMENT} openBook={openBook} setOpenBook={setOpenBook} onSelect={selectChapter} />
        <BookGroup label="New Testament" books={NEW_TESTAMENT} openBook={openBook} setOpenBook={setOpenBook} onSelect={selectChapter} />
      </main>
    </div>
  );
}

function BookGroup({
  label,
  books,
  openBook,
  setOpenBook,
  onSelect,
}: {
  label: string;
  books: string[];
  openBook: string | null;
  setOpenBook: (b: string | null) => void;
  onSelect: (book: string, chapter: number) => void;
}) {
  return (
    <div className="mb-section">
      <p className="pb-[8px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">{label}</p>
      {books.map((book, i) => {
        const isOpen = openBook === book;
        return (
          <div key={book} className={i !== books.length - 1 ? "border-b border-divider" : ""}>
            <button
              type="button"
              onClick={() => setOpenBook(isOpen ? null : book)}
              className="press flex w-full items-center justify-between py-[14px] text-left"
            >
              <span className="font-serif text-[16px] text-ink-black">{book}</span>
              <ChevronDownIcon className={`h-[16px] w-[16px] text-muted-ink transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="anim-fade-through grid grid-cols-6 gap-[8px] pb-[14px]">
                {Array.from({ length: chapterCount(book) }, (_, i) => i + 1).map((chapter) => (
                  <button
                    key={chapter}
                    type="button"
                    onClick={() => onSelect(book, chapter)}
                    className="press flex h-[36px] items-center justify-center rounded-control bg-navy-06 font-sans text-[13px] font-medium text-episcopal-navy"
                  >
                    {chapter}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
