import { Check, Eye, Heart, Scale } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  {
    icon: Eye,
    title: "Evidence over assumptions",
    body: "We take context seriously and distinguish a concern from a confirmed finding.",
  },
  {
    icon: Heart,
    title: "Privacy & dignity",
    body: "People should be treated with respect when they ask questions or raise concerns.",
  },
  {
    icon: Scale,
    title: "Fair process",
    body: "Official determinations belong to the competent authorities, not to a campaign or a website.",
  },
  {
    icon: Check,
    title: "Independent voice",
    body: "Our public-interest purpose stays separate from party politics and government affiliation.",
  },
];

export function OurApproach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="px-3 py-6 sm:px-6 sm:py-10">
      <div className="relative isolate mx-auto max-w-[92rem] overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-50 sm:rounded-[3rem]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-28 -top-40 size-[34rem] rounded-full bg-white/80 blur-3xl" />
          <div className="absolute -left-32 bottom-0 size-[28rem] rounded-full bg-brand-100/80 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="approach-title"
              align="left"
              eyebrow="Our approach"
              title={<>Trust is built by <span className="text-brand-700">how we work.</span></>}
              description="Accountability work must be careful, fair and open about its limits. These principles guide how we show up."
            />
            <Reveal delay={240}>
              <p lang="ur" dir="rtl" className="mt-8 w-fit font-urdu text-xl leading-[2] text-brand-800 sm:text-2xl">
                دیانت، احترام، جوابدہی
              </p>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {commitments.map((commitment, index) => (
              <Reveal key={commitment.title} delay={index * 80}>
                <article className="h-full rounded-3xl border border-white/90 bg-white/90 p-6 shadow-[0_14px_38px_-28px_rgb(125_37_47/0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-26px_rgb(125_37_47/0.3)] sm:p-7">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                    <commitment.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-950">{commitment.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{commitment.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
