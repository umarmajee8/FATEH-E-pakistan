import { useState } from "react";
import { MessageCircle, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/utils/cn";

const email = "hello@fateh-e-pakistan.org";

const faqs = [
  {
    q: "What does Feteh e Pakistan work on?",
    a: "We are a public-interest NGO focused on fair tax practices and public accountability. Our areas of focus include community awareness, responsible ways to raise concerns, research and constructive advocacy.",
  },
  {
    q: "Are you affiliated with the government or a political party?",
    a: "No. Feteh e Pakistan is independent and non-partisan. We are not affiliated with the Federal Board of Revenue, a government department or a political party.",
  },
  {
    q: "Does a report mean a person or business has done something wrong?",
    a: "No. A report or concern is not proof of wrongdoing. Any allegation should be handled with care and due process; official determinations belong to the competent authorities.",
  },
  {
    q: "How can I volunteer, partner or contribute?",
    a: "Write to us at hello@fateh-e-pakistan.org and tell us a little about how you would like to be involved. If you are considering a donation, contact us first for current contribution channels and related information.",
  },
  {
    q: "Does this website provide legal or tax advice?",
    a: "No. The information here is general and educational. For advice about a specific legal or tax matter, please consult a qualified professional or the relevant authority.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="Questions & answers"
            title={<>A little more <span className="text-brand-700">about us.</span></>}
            description="Learn more about our purpose, our independence and the careful way we approach public accountability."
          />
          <Reveal delay={220}>
            <a
              href={`mailto:${email}`}
              className="mt-7 flex items-center gap-4 rounded-3xl border border-ink-200/70 bg-white p-5 shadow-sm transition-colors hover:border-brand-200"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <MessageCircle className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink-950">Still have a question?</span>
                <span className="mt-0.5 block text-sm text-ink-500">Email our team</span>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <Reveal key={faq.q} delay={index * 55}>
                <div
                  className={cn(
                    "overflow-hidden rounded-3xl border bg-white transition-all duration-300",
                    isOpen ? "border-brand-200 shadow-[0_18px_45px_-32px_rgb(125_37_47/0.16)]" : "border-ink-200/70 shadow-sm hover:border-ink-300"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="flex min-h-[4.4rem] w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    >
                      <span className="text-base font-semibold tracking-[-0.02em] text-ink-950 sm:text-[1.05rem]">{faq.q}</span>
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                          isOpen ? "rotate-45 bg-brand-600 text-white" : "bg-ink-100 text-ink-700"
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 pr-12 text-sm leading-relaxed text-ink-600 sm:px-6 sm:text-[0.95rem]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
