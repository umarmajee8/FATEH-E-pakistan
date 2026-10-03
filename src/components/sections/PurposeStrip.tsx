import { BookOpen, Landmark, Scale } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: BookOpen,
    title: "Public awareness",
    body: "Make important civic and tax questions easier to understand.",
  },
  {
    icon: Scale,
    title: "Fair markets",
    body: "Support a level playing field for people and responsible businesses.",
  },
  {
    icon: Landmark,
    title: "Public trust",
    body: "Encourage open, evidence-led conversations about accountability.",
  },
];

export function PurposeStrip() {
  return (
    <section aria-label="Our shared purpose" className="border-y border-ink-200/70 bg-white/60">
      <div className="mx-auto grid max-w-7xl divide-y divide-ink-200/70 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 90}>
            <article className="flex h-full items-start gap-4 py-6 md:px-6 md:py-8 first:md:pl-0 last:md:pr-0">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                <pillar.icon className="size-5" aria-hidden />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-ink-950 sm:text-base">{pillar.title}</h2>
                <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink-500">{pillar.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
