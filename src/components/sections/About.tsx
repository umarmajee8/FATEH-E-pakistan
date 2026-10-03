import { BadgeCheck, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  { icon: BadgeCheck, label: "Independent and non-partisan" },
  { icon: HeartHandshake, label: "People-centred and evidence-led" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 pb-8 sm:px-8 sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.8rem] border border-brand-100 bg-brand-50/55 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
        <Reveal dir="left">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            <span className="h-px w-7 bg-brand-500" aria-hidden /> About Feteh e Pakistan
          </p>
          <h2 id="about-title" className="mt-3 max-w-3xl text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink-950 sm:text-3xl">
            Independent, citizen-led work for <span className="text-brand-700">fair tax practices.</span>
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-600 sm:text-base">
            Feteh e Pakistan is an independent, non-profit organization. It is not part of, operated by, or affiliated with any government body. We focus on fair tax practices and public accountability, making information easier to understand and encouraging people to raise concerns responsibly.
          </p>
        </Reveal>

        <Reveal dir="right" delay={80}>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" aria-label="Our principles">
            {principles.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/85 px-4 py-3 shadow-sm">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-ink-800">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
