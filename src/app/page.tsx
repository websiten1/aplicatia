"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BackgroundChurchIllustration } from "@/components/BackgroundChurchIllustration";
import { EpiscopalSeal } from "@/components/EpiscopalSeal";
import { SacredRule } from "@/components/SacredRule";
import { CrossIcon } from "@/components/icons";

const BRAND_LINES = ["ROMANIAN", "ORTHODOX", "EPISCOPATE", "OF AMERICA"];

export default function SplashPage() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), 1500);
    const navTimer = setTimeout(() => router.replace("/today"), 1750);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(navTimer);
    };
  }, [router]);

  return (
    <div
      className={`relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-episcopal-navy px-outer transition-opacity duration-[250ms] ease-out ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <BackgroundChurchIllustration className="anim-fade-in pointer-events-none absolute inset-x-0 bottom-[-6%] h-[40%] w-full text-white opacity-[0.1]" />

      <div className="relative flex flex-col items-center text-center">
        <span className="anim-rise-fade-in text-gold-muted">
          <CrossIcon className="h-[22px] w-[22px]" />
        </span>

        <div className="anim-scale-fade-in mt-[18px] [animation-delay:80ms]">
          <EpiscopalSeal tone="gold" className="h-[92px] w-[92px]" />
        </div>

        <div className="mt-[22px] font-serif text-[26px] font-bold uppercase leading-[1.15] text-white">
          {BRAND_LINES.map((line, i) => (
            <p key={line} className="anim-rise-fade-in" style={{ animationDelay: `${180 + i * 60}ms` }}>
              {line}
            </p>
          ))}
        </div>

        <p
          className="anim-rise-fade-in mt-[14px] font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-muted"
          style={{ animationDelay: "440ms" }}
        >
          Faith. Heritage. Mission.
        </p>

        <SacredRule
          tone="gold"
          className="anim-draw-line mt-[20px] h-[16px] w-[160px]"
          style={{ animationDelay: "520ms" }}
        />
      </div>
    </div>
  );
}
