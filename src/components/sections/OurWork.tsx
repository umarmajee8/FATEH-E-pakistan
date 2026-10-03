import { BookOpen, FileCheck2, Scale, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";

const programs: { icon: LucideIcon; number: string; title: string; description: string; detail: string }[] = [
  {
    icon: BookOpen,
    number: "01",
    title: "Community awareness",
    description: "Make public finance easier to understand.",
    detail:
      "Plain-language learning and community conversations can help people understand everyday tax, receipts and their role in public accountability.",
  },
  {
    icon: FileCheck2,
    number: "02",
    title: "Responsible reporting",
    description: "Make space for concerns to be raised carefully.",
    detail:
      "We encourage thoughtful, privacy-conscious ways to document concerns. Treat every report as a starting point for review, never as proof on its own.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Fairness & advocacy",
    description: "Bring more voices into the conversation.",
    detail:
      "We support constructive dialogue around fair tax practice, transparent invoices and the conditions that help responsible businesses compete.",
  },
];

export function OurWork() {
  return (
    <section id="our-work" aria-labelledby="work-title" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-white/20 via-brand-50/55 to-white/10" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="work-title"
          eyebrow="Our work"
          title={
            <>
              A civic mission, <Accent>made practical.</Accent>
            </>
          }
          description="Our focus is on the people, practices and conversations that can strengthen accountability in everyday life."
        />

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.number} delay={index * 100}>
              <article className="group flex h-full flex-col rounded-[1.8rem] border border-ink-200/70 bg-white p-7 shadow-[0_12px_40px_-26px_rgb(38_24_24/0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-28px_rgb(125_37_47/0.18)] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                    <program.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-sm text-ink-300" aria-hidden>{program.number}</span>
                </div>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">{program.description}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink-950 sm:text-2xl">{program.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-600">{program.detail}</p>
                <a
                  href="#approach"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900 focus-visible:outline-offset-4"
                >
                  How we work
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
