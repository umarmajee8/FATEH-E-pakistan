import { BadgeCheck, HeartHandshake, Landmark, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const statements = [
  {
    icon: Target,
    title: "Our mission",
    urdu: "ہمارا مشن",
    body: "Build public understanding of tax transparency, support responsible receipt reporting and guide appropriate concerns to the relevant authorities.",
  },
  {
    icon: Landmark,
    title: "Our vision",
    urdu: "ہمارا وژن",
    body: "A Pakistan where people can take part in public accountability and fair tax practice with confidence, dignity and access to clear information.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal dir="left">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            <span className="h-px w-7 bg-brand-500" aria-hidden /> About Feteh e Pakistan
          </p>
          <h2 id="about-title" className="mt-5 max-w-xl text-balance text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.045em] text-ink-950 sm:text-5xl">
            Accountability should feel <span className="text-brand-700">within everyone’s reach.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
            We believe a fairer system begins when people can understand how it works, ask informed questions and be heard
            without fear or party politics.
          </p>
        </Reveal>

        <Reveal dir="right" delay={120}>
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-ink-800 sm:text-xl">
              Feteh e Pakistan is an independent, citizen-led public-interest NGO focused on fair tax practices and stronger
              public accountability in Pakistan.
            </p>
            <p className="leading-relaxed text-ink-600">
              Our role is to make civic knowledge more accessible, encourage responsible ways to raise concerns and support
              constructive dialogue about the public resources communities rely on. We approach this work with care for
              people, evidence and due process.
            </p>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-ink-200/70 bg-white p-4 shadow-sm">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <BadgeCheck className="size-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-ink-800">Independent &amp; non-partisan</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-ink-200/70 bg-white p-4 shadow-sm">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <HeartHandshake className="size-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-ink-800">People-centred by design</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2">
        {statements.map((statement, index) => (
          <Reveal key={statement.title} delay={index * 90}>
            <article className="flex h-full gap-4 rounded-3xl border border-ink-200/70 bg-white p-6 shadow-sm sm:p-7">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                <statement.icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink-950">{statement.title}</h3>
                <p lang="ur" dir="rtl" className="mt-1 font-urdu text-sm leading-[2] text-brand-800">{statement.urdu}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{statement.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
