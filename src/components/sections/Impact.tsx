import { ArrowUpRight, Landmark, ShieldCheck, Store } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";

const outcomes = [
  {
    icon: ShieldCheck,
    index: "01",
    title: "Confidence in public life",
    body: "Clear information and credible accountability can help strengthen trust between people and institutions.",
  },
  {
    icon: Store,
    index: "02",
    title: "Fairness for business",
    body: "Consistent, transparent tax practice helps responsible businesses compete on more equal terms.",
  },
  {
    icon: Landmark,
    index: "03",
    title: "Resources for shared needs",
    body: "Public revenue is one part of supporting the services and infrastructure communities depend on.",
  },
];

export function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="impact-title"
          eyebrow="Why it matters"
          title={
            <>
              Fair tax practices are about <Accent>more than receipts.</Accent>
            </>
          }
          description="They touch the trust between citizens and institutions, the fairness of local markets and the public resources we all rely on."
        />

        <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-[1.1fr_0.9fr_1.1fr]">
          {outcomes.map((outcome, index) => (
            <Reveal key={outcome.index} delay={index * 90}>
              <article className="relative flex h-full min-h-[16rem] flex-col overflow-hidden rounded-[1.7rem] border border-ink-200/70 bg-white p-7 shadow-sm sm:p-8">
                <div aria-hidden className="absolute -right-12 -top-12 size-36 rounded-full bg-brand-50 transition-transform duration-700 group-hover:scale-110" />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                    <outcome.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-sm text-ink-300" aria-hidden>{outcome.index}</span>
                </div>
                <h3 className="relative mt-8 text-xl font-semibold tracking-[-0.03em] text-ink-950 sm:text-2xl">{outcome.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-600 sm:text-[0.95rem]">{outcome.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl bg-brand-50/80 px-6 py-5 ring-1 ring-inset ring-brand-100 sm:flex-row sm:items-center sm:px-8">
            <p className="max-w-3xl text-sm leading-relaxed text-brand-900 sm:text-base">
              <strong className="font-semibold">Our focus is the work ahead:</strong> making public accountability easier to understand,
              more responsible to act on and more useful to communities.
            </p>
            <a href="#get-involved" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-950">
              Be part of it <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
