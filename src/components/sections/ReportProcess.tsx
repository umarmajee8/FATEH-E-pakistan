import { ArrowRight, FileSearch, Mail, Send, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Share the concern",
    urdu: "اپنی تشویش کی تفصیل بھیجیں",
    body: "Keep the original receipt and send a clear photo with a short explanation. Avoid including customer names, phone numbers or other personal information.",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "We review the information",
    urdu: "فراہم کردہ معلومات کا جائزہ",
    body: "We consider the receipt details and context. A layout, calculation issue or missing field alone is not proof of fraud.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Guidance or referral, if appropriate",
    urdu: "ضرورت کے مطابق رہنمائی یا متعلقہ ادارے تک رسائی",
    body: "Where appropriate, we guide the concern to the relevant authority. Only the competent authority can make an official determination.",
  },
];

const reportEmail = "hello@fateh-e-pakistan.org";

export function ReportProcess() {
  return (
    <section id="reporting" aria-labelledby="reporting-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="reporting-title"
          eyebrow="Receipt reporting"
          title={
            <>
              A careful process, <Accent>from concern to guidance.</Accent>
            </>
          }
          description="If a receipt raises a question, share it privately and let the details be reviewed before drawing conclusions."
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-3 sm:mt-16">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 85} as="li" className="list-none">
              <article className="flex h-full flex-col rounded-[1.7rem] border border-ink-200/70 bg-white p-6 shadow-[0_14px_42px_-30px_rgb(38_24_24/0.22)] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                    <step.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-sm text-ink-300" aria-hidden>{step.number}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink-950">{step.title}</h3>
                <p lang="ur" dir="rtl" className="mt-1 font-urdu text-xs leading-[2] text-brand-800">{step.urdu}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={160}>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl bg-brand-50/80 p-5 ring-1 ring-inset ring-brand-100 sm:flex-row sm:items-center sm:px-7">
            <div>
              <p className="text-sm font-semibold text-brand-950">Contact us about a receipt concern</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-600">Email is not an anonymous reporting channel. Please remove third-party personal details before sending.</p>
            </div>
            <a
              href={`mailto:${reportEmail}?subject=${encodeURIComponent("Receipt concern")}`}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-brand-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              <Mail className="size-4" aria-hidden /> {reportEmail} <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
