"use client";

import { useCallback, useEffect, useState } from "react";
import type { Bookmark, NoteEntry } from "./types";

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function useLocalStorageState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Reading localStorage during SSR would throw and cause a hydration
    // mismatch, so state is intentionally hydrated from an effect here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue(readStorage(key, initial));
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, hydrated]);

  return [value, setValue, hydrated] as const;
}

export interface SettingsState {
  appearance: "light" | "system";
  textSize: "standard" | "large" | "extra-large";
  calendarPreference: "new" | "old";
  notificationsFeastReminders: boolean;
  notificationsFastingReminders: boolean;
  notificationsSundayReminder: boolean;
  notificationsParishEvents: boolean;
  notificationsDiocesanAnnouncements: boolean;
  reducedMotion: boolean;
  language: "en" | "ro";
}

const DEFAULT_SETTINGS: SettingsState = {
  appearance: "light",
  textSize: "standard",
  calendarPreference: "new",
  notificationsFeastReminders: true,
  notificationsFastingReminders: true,
  notificationsSundayReminder: true,
  notificationsParishEvents: false,
  notificationsDiocesanAnnouncements: true,
  reducedMotion: false,
  language: "en",
};

export function useSettings() {
  const [settings, setSettings, hydrated] = useLocalStorageState<SettingsState>("roea:settings", DEFAULT_SETTINGS);
  const update = useCallback(
    <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    },
    [setSettings]
  );
  return { settings, update, hydrated };
}

export function useBookmarks() {
  const [bookmarks, setBookmarks, hydrated] = useLocalStorageState<Bookmark[]>("roea:bookmarks", []);

  const isBookmarked = useCallback(
    (entityType: Bookmark["entityType"], entityId: string) =>
      bookmarks.some((b) => b.entityType === entityType && b.entityId === entityId),
    [bookmarks]
  );

  const toggle = useCallback(
    (bookmark: Omit<Bookmark, "id" | "createdAt">) => {
      setBookmarks((prev) => {
        const exists = prev.some((b) => b.entityType === bookmark.entityType && b.entityId === bookmark.entityId);
        if (exists) {
          return prev.filter((b) => !(b.entityType === bookmark.entityType && b.entityId === bookmark.entityId));
        }
        return [
          { ...bookmark, id: `${bookmark.entityType}-${bookmark.entityId}-${Date.now()}`, createdAt: new Date().toISOString() },
          ...prev,
        ];
      });
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate?.(8);
      }
    },
    [setBookmarks]
  );

  return { bookmarks, toggle, isBookmarked, hydrated };
}

export function useNotes() {
  const [notes, setNotes, hydrated] = useLocalStorageState<NoteEntry[]>("roea:notes", []);

  const addNote = useCallback(
    (note: Omit<NoteEntry, "id" | "createdAt" | "updatedAt">) => {
      const now = new Date().toISOString();
      setNotes((prev) => [{ ...note, id: `note-${Date.now()}`, createdAt: now, updatedAt: now }, ...prev]);
    },
    [setNotes]
  );

  const removeNote = useCallback(
    (id: string) => {
      setNotes((prev) => prev.filter((n) => n.id !== id));
    },
    [setNotes]
  );

  return { notes, addNote, removeNote, hydrated };
}

export function usePlaybackPosition(readingId: string) {
  const key = `roea:playback:${readingId}`;
  const [position, setPosition] = useLocalStorageState<number>(key, 0);
  return [position, setPosition] as const;
}
