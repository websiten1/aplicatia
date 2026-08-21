"use client";

import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { ChevronDownIcon, MailIcon, PhoneIcon } from "@/components/icons";

const FAQS = [
  {
    q: "How do I find my local parish?",
    a: "Open the Resources tab and tap Parishes, then search by city or use the map to find parishes near you.",
  },
  {
    q: "Can I listen to Scripture readings offline?",
    a: "Downloadable audio is available for select readings and prayers; downloaded items appear under Settings → Audio Downloads.",
  },
  {
    q: "How do I report an error in the calendar?",
    a: "Use the Report a Calendar Issue form below and our editorial team will review it promptly.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="Support & Contact" />
      <main className="flex-1 px-outer py-[22px]">
        <div className="flex gap-[10px]">
          <a
            href="tel:+13125550100"
            className="press flex flex-1 flex-col items-center gap-[6px] rounded-control bg-navy-06 py-[14px] text-episcopal-navy"
          >
            <PhoneIcon className="h-[19px] w-[19px]" />
            <span className="font-sans text-[12px] font-medium">Call</span>
          </a>
          <a
            href="mailto:support@romanianorthodoxepiscopate.org"
            className="press flex flex-1 flex-col items-center gap-[6px] rounded-control bg-navy-06 py-[14px] text-episcopal-navy"
          >
            <MailIcon className="h-[19px] w-[19px]" />
            <span className="font-sans text-[12px] font-medium">Email</span>
          </a>
        </div>

        <p className="mt-section pb-[6px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">FAQ</p>
        {FAQS.map((f, i) => {
          const open = openFaq === i;
          return (
            <div key={f.q} className={i !== FAQS.length - 1 ? "border-b border-divider" : ""}>
              <button
                type="button"
                onClick={() => setOpenFaq(open ? null : i)}
                className="press flex w-full items-center justify-between gap-[10px] py-[13px] text-left"
              >
                <span className="font-sans text-[14px] font-medium text-ink-black">{f.q}</span>
                <ChevronDownIcon className={`h-[15px] w-[15px] shrink-0 text-muted-ink transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
              </button>
              {open && <p className="anim-fade-through pb-[13px] font-sans text-[13.5px] leading-[1.5] text-muted-ink">{f.a}</p>}
            </div>
          );
        })}

        <p className="mt-section pb-[8px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Contact Form
        </p>
        {sent ? (
          <p className="rounded-card bg-warm-ivory px-[16px] py-[14px] font-sans text-[13.5px] text-episcopal-navy">
            Thank you — your message has been received.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="How can we help?"
              className="w-full rounded-control border border-navy-12 bg-page-white px-[14px] py-[12px] font-sans text-[14px] text-ink-black outline-none focus:border-episcopal-navy"
            />
            <button
              type="submit"
              className="press mt-[10px] w-full rounded-pill bg-episcopal-navy py-[13px] font-sans text-[14px] font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        )}

        <a
          href="mailto:calendar@romanianorthodoxepiscopate.org?subject=Calendar%20Issue%20Report"
          className="press mt-section block text-center font-sans text-[13px] font-semibold text-romanian-red"
        >
          Report a Calendar Issue
        </a>
      </main>
    </div>
  );
}
