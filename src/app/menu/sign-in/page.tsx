"use client";

import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { PersonIcon } from "@/components/icons";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="Sign In" />
      <main className="flex-1 px-outer py-[28px]">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-navy-06 text-episcopal-navy">
            <PersonIcon className="h-[30px] w-[30px]" />
          </span>
          <p className="mt-[16px] font-serif text-[20px] font-bold text-ink-black">Sign in to sync</p>
          <p className="mt-[6px] max-w-[260px] font-sans text-[13.5px] text-muted-ink">
            Access your bookmarks, notes and preferences across devices. Browsing and local bookmarks remain available
            without an account.
          </p>
        </div>

        {submitted ? (
          <div className="mt-section rounded-card border border-navy-06 bg-warm-ivory px-[16px] py-[14px] text-center">
            <p className="font-sans text-[13.5px] text-episcopal-navy">
              Account sync isn&apos;t connected in this preview build — your bookmarks and notes stay saved locally on
              this device.
            </p>
          </div>
        ) : (
          <form
            className="mt-section"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="block font-sans text-[12px] font-medium text-muted-ink" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-[6px] w-full rounded-control border border-navy-12 bg-page-white px-[14px] py-[12px] font-sans text-[14px] text-ink-black outline-none focus:border-episcopal-navy"
            />
            <button
              type="submit"
              className="press mt-[16px] w-full rounded-pill bg-episcopal-navy py-[13px] font-sans text-[14px] font-semibold text-white"
            >
              Continue
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
