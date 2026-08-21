"use client";

import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useSettings, type SettingsState } from "@/lib/storage";

function Switch({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`press relative h-[26px] w-[46px] shrink-0 rounded-pill transition-colors duration-150 ${
        checked ? "bg-romanian-red" : "bg-navy-12"
      }`}
    >
      <span
        className={`absolute top-[3px] h-[20px] w-[20px] rounded-full bg-white transition-transform duration-150 ${
          checked ? "translate-x-[23px]" : "translate-x-[3px]"
        }`}
      />
    </button>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-divider py-[13px]">
      <span className="font-sans text-[14.5px] text-ink-black">{label}</span>
      {children}
    </div>
  );
}

function SegmentedChoice<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex rounded-pill bg-navy-06 p-[3px]">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange(o.id)}
          className={`press rounded-pill px-[10px] py-[5px] font-sans text-[12px] font-semibold transition-colors duration-150 ${
            value === o.id ? "bg-episcopal-navy text-white" : "text-muted-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function SettingsPage() {
  const { settings, update, hydrated } = useSettings();
  const [cacheCleared, setCacheCleared] = useState(false);

  if (!hydrated) return null;

  function updateNotif(key: keyof SettingsState, value: boolean) {
    update(key, value as never);
  }

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="Settings" />
      <main className="flex-1 px-outer py-[10px] pb-[40px]">
        <SectionLabel>Appearance</SectionLabel>
        <Row label="Theme">
          <SegmentedChoice
            options={[
              { id: "light", label: "Light" },
              { id: "system", label: "System" },
            ]}
            value={settings.appearance}
            onChange={(v) => update("appearance", v)}
          />
        </Row>
        <Row label="Text Size">
          <SegmentedChoice
            options={[
              { id: "standard", label: "A" },
              { id: "large", label: "A" },
              { id: "extra-large", label: "A" },
            ]}
            value={settings.textSize}
            onChange={(v) => update("textSize", v)}
          />
        </Row>

        <SectionLabel>Calendar</SectionLabel>
        <Row label="Calendar Style">
          <SegmentedChoice
            options={[
              { id: "new", label: "New" },
              { id: "old", label: "Old" },
            ]}
            value={settings.calendarPreference}
            onChange={(v) => update("calendarPreference", v)}
          />
        </Row>

        <SectionLabel>Notifications</SectionLabel>
        <Row label="Feast Reminders">
          <Switch checked={settings.notificationsFeastReminders} onChange={(v) => updateNotif("notificationsFeastReminders", v)} label="Feast reminders" />
        </Row>
        <Row label="Fasting Reminders">
          <Switch checked={settings.notificationsFastingReminders} onChange={(v) => updateNotif("notificationsFastingReminders", v)} label="Fasting reminders" />
        </Row>
        <Row label="Sunday Reminder">
          <Switch checked={settings.notificationsSundayReminder} onChange={(v) => updateNotif("notificationsSundayReminder", v)} label="Sunday reminder" />
        </Row>
        <Row label="Parish & Event Updates">
          <Switch checked={settings.notificationsParishEvents} onChange={(v) => updateNotif("notificationsParishEvents", v)} label="Parish and event updates" />
        </Row>
        <Row label="Diocesan Announcements">
          <Switch checked={settings.notificationsDiocesanAnnouncements} onChange={(v) => updateNotif("notificationsDiocesanAnnouncements", v)} label="Diocesan announcements" />
        </Row>

        <SectionLabel>Accessibility</SectionLabel>
        <Row label="Reduced Motion">
          <Switch checked={settings.reducedMotion} onChange={(v) => update("reducedMotion", v)} label="Reduced motion" />
        </Row>

        <SectionLabel>Language</SectionLabel>
        <Row label="App Language">
          <SegmentedChoice
            options={[
              { id: "en", label: "EN" },
              { id: "ro", label: "RO" },
            ]}
            value={settings.language}
            onChange={(v) => update("language", v)}
          />
        </Row>

        <SectionLabel>Storage</SectionLabel>
        <Row label="Audio Downloads">
          <span className="font-sans text-[13px] text-muted-ink">0 MB</span>
        </Row>
        <div className="py-[13px]">
          <button
            type="button"
            onClick={() => setCacheCleared(true)}
            className="press font-sans text-[13.5px] font-semibold text-romanian-red"
          >
            {cacheCleared ? "Cache cleared" : "Clear Cache & Offline Downloads"}
          </button>
        </div>

        <SectionLabel>Privacy</SectionLabel>
        <p className="pb-[8px] font-sans text-[13.5px] leading-[1.5] text-muted-ink">
          Bookmarks, notes and preferences are stored locally on this device. Signing in enables optional sync to
          your account; no data is shared with third parties.
        </p>
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-section pb-[6px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink first:mt-0">
      {children}
    </p>
  );
}
