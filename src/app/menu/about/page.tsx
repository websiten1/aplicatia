import { AppHeader } from "@/components/AppHeader";
import { EpiscopalSeal } from "@/components/EpiscopalSeal";
import { SacredRule } from "@/components/SacredRule";

const CLERGY_LEADERSHIP = [
  { name: "His Grace, Bishop of the Episcopate", role: "Ruling Hierarch" },
  { name: "V. Rev. Protopresbyter", role: "Vicar General" },
  { name: "Diocesan Council", role: "Governing Body" },
];

const INSTITUTIONS = ["Parishes & Missions", "Camp & Retreat Ministries", "Theological Scholarship Fund", "Romanian Language & Heritage Programs"];

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-page-white">
      <AppHeader title="About Us" />
      <main className="flex-1 px-outer py-[22px]">
        <div className="flex flex-col items-center text-center">
          <EpiscopalSeal tone="navy" className="h-[64px] w-[64px]" />
          <p className="mt-[12px] font-serif text-[20px] font-bold text-episcopal-navy">
            Romanian Orthodox Episcopate of America
          </p>
          <SacredRule tone="navy" className="mt-[10px] h-[14px] w-[140px]" />
        </div>

        <p className="mt-section font-sans text-[15px] leading-[1.6] text-ink-black">
          The Romanian Orthodox Episcopate of America carries forward the apostolic faith and Romanian Orthodox
          tradition for parishes and faithful across North America, serving communities through the sacramental life
          of the Church, catechesis, charitable outreach, and the preservation of Romanian Orthodox heritage.
        </p>

        <p className="mt-section font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">Mission</p>
        <p className="mt-[8px] font-sans text-[15px] leading-[1.55] text-ink-black">
          To proclaim the Gospel of Jesus Christ, nurture the sacramental and liturgical life of the faithful, and
          preserve Romanian Orthodox spiritual heritage for future generations in America.
        </p>

        <p className="mt-section pb-[6px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Clergy Leadership
        </p>
        {CLERGY_LEADERSHIP.map((c, i) => (
          <div key={c.name} className={`py-[12px] ${i !== CLERGY_LEADERSHIP.length - 1 ? "border-b border-divider" : ""}`}>
            <p className="font-serif text-[15px] text-ink-black">{c.name}</p>
            <p className="font-sans text-[12.5px] text-muted-ink">{c.role}</p>
          </div>
        ))}

        <p className="mt-section pb-[6px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-ink">
          Institutions
        </p>
        <ul className="list-inside list-disc font-sans text-[14.5px] leading-[2] text-ink-black">
          {INSTITUTIONS.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
