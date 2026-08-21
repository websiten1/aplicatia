"use client";

import { notFound, useParams } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { BackgroundChurchIllustration } from "@/components/BackgroundChurchIllustration";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ShareButton } from "@/components/ShareButton";
import { ClockIcon, DownloadIcon, MapPinIcon } from "@/components/icons";
import { EVENTS } from "@/lib/seedData";

function buildIcs(event: (typeof EVENTS)[number]): string {
  const fmt = (iso: string) => iso.replace(/[-:]/g, "").split(".")[0];
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DTSTART:${fmt(event.startDateTime)}`,
    `DTEND:${fmt(event.endDateTime)}`,
    `LOCATION:${event.location}`,
    `DESCRIPTION:${event.description.replace(/\n/g, " ")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS.find((e) => e.id === id);
  if (!event) return notFound();

  const start = new Date(event.startDateTime);
  const end = new Date(event.endDateTime);
  const dateLabel = start.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const timeLabel = event.allDay
    ? "All Day"
    : `${start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })} – ${end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;

  const icsHref = `data:text/calendar;charset=utf-8,${encodeURIComponent(buildIcs(event))}`;

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader
        title="Event"
        right={<BookmarkButton entityType="event" entityId={event.id} title={event.title} subtitle={event.parishName} />}
      />

      <main className="flex-1 pb-[24px]">
        <div className="relative mx-outer mt-[8px] h-[150px] overflow-hidden rounded-hero bg-episcopal-navy">
          <BackgroundChurchIllustration className="pointer-events-none absolute -bottom-6 -right-6 h-[160px] w-[160px] text-white opacity-[0.14]" />
        </div>

        <div className="px-outer pt-[18px]">
          <p className="font-serif text-[22px] font-bold leading-[1.25] text-ink-black">{event.title}</p>
          <p className="mt-[6px] font-sans text-[14px] text-muted-ink">{event.parishName}</p>

          <div className="mt-[14px] flex items-start gap-[10px]">
            <ClockIcon className="mt-[2px] h-[17px] w-[17px] shrink-0 text-episcopal-navy" />
            <div>
              <p className="font-sans text-[14px] font-medium text-ink-black">{dateLabel}</p>
              <p className="font-sans text-[13px] text-muted-ink">{timeLabel}</p>
            </div>
          </div>
          <div className="mt-[10px] flex items-start gap-[10px]">
            <MapPinIcon className="mt-[2px] h-[17px] w-[17px] shrink-0 text-episcopal-navy" />
            <p className="font-sans text-[14px] text-ink-black">{event.location}</p>
          </div>

          <p className="mt-[18px] font-sans text-[15px] leading-[1.55] text-ink-black">{event.description}</p>

          <div className="mt-[20px] flex gap-[10px]">
            <a
              href={icsHref}
              download={`${event.id}.ics`}
              className="press flex flex-1 items-center justify-center gap-[8px] rounded-pill bg-episcopal-navy py-[13px] font-sans text-[14px] font-semibold text-white"
            >
              <DownloadIcon className="h-[16px] w-[16px]" />
              Add to Calendar
            </a>
            <ShareButton
              title={event.title}
              text={`${event.title} — ${dateLabel}`}
              className="press flex items-center justify-center rounded-pill bg-navy-06 px-[18px] py-[13px] text-episcopal-navy"
            />
          </div>

          {event.registrationUrl && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press mt-[10px] block text-center font-sans text-[13px] font-semibold text-romanian-red"
            >
              Register for this event
            </a>
          )}
        </div>
      </main>
    </div>
  );
}
