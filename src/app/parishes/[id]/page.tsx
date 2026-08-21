"use client";

import { notFound, useParams } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ShareButton } from "@/components/ShareButton";
import { ClockIcon, DirectionsIcon, GlobeIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { PARISHES } from "@/lib/seedData";

export default function ParishProfilePage() {
  const { id } = useParams<{ id: string }>();
  const parish = PARISHES.find((p) => p.id === id);
  if (!parish) return notFound();

  const directionsUrl = `https://maps.google.com/?q=${encodeURIComponent(`${parish.address}, ${parish.city}, ${parish.state}`)}`;

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader
        title="Parish Profile"
        right={
          <div className="flex items-center gap-[4px]">
            <BookmarkButton entityType="parish" entityId={parish.id} title={parish.name} subtitle={parish.city} />
          </div>
        }
      />

      <main className="flex-1 px-outer py-[20px]">
        <p className="font-serif text-[22px] font-bold leading-[1.25] text-episcopal-navy">{parish.name}</p>
        <p className="mt-[4px] font-sans text-[13px] text-muted-ink">{parish.jurisdiction}</p>
        <p className="mt-[10px] font-sans text-[14px] text-ink-black">
          {parish.address}, {parish.city}, {parish.state}
          {parish.distanceMi != null && ` · ${parish.distanceMi} mi`}
        </p>

        <div className="mt-[16px] flex gap-[10px]">
          <ActionButton href={directionsUrl} icon={<DirectionsIcon className="h-[18px] w-[18px]" />} label="Directions" />
          <ActionButton href={`tel:${parish.phone.replace(/[^\d+]/g, "")}`} icon={<PhoneIcon className="h-[18px] w-[18px]" />} label="Call" />
          <ActionButton href={`https://${parish.website}`} icon={<GlobeIcon className="h-[18px] w-[18px]" />} label="Website" />
          <ShareButton
            title={parish.name}
            text={`${parish.name} — ${parish.city}, ${parish.state}`}
            className="press flex flex-1 flex-col items-center gap-[6px] rounded-control bg-navy-06 py-[12px] text-episcopal-navy"
          />
        </div>

        <p className="mt-section pb-[8px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Service Schedule
        </p>
        {parish.serviceSchedule.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center justify-between py-[12px] ${i !== parish.serviceSchedule.length - 1 ? "border-b border-divider" : ""}`}
          >
            <span className="flex items-center gap-[10px] font-sans text-[14.5px] text-ink-black">
              <ClockIcon className="h-[17px] w-[17px] text-episcopal-navy" />
              {s.label}
            </span>
            <span className="font-sans text-[14px] font-medium text-episcopal-navy">{s.time}</span>
          </div>
        ))}

        <p className="mt-section pb-[8px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Clergy
        </p>
        {parish.clergy.map((c, i) => (
          <div key={c.name} className={`py-[10px] ${i !== parish.clergy.length - 1 ? "border-b border-divider" : ""}`}>
            <p className="font-serif text-[15px] text-ink-black">{c.name}</p>
            <p className="font-sans text-[12.5px] text-muted-ink">{c.role}</p>
          </div>
        ))}

        <a
          href={`mailto:${parish.email}`}
          className="press mt-section flex items-center gap-[10px] font-sans text-[14px] text-episcopal-navy"
        >
          <MailIcon className="h-[18px] w-[18px]" />
          {parish.email}
        </a>
      </main>
    </div>
  );
}

function ActionButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="press flex flex-1 flex-col items-center gap-[6px] rounded-control bg-navy-06 py-[12px] text-episcopal-navy"
    >
      {icon}
      <span className="font-sans text-[11px] font-medium">{label}</span>
    </a>
  );
}
