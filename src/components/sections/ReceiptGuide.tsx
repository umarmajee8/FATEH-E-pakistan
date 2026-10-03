import { ArrowRight, BadgeCheck, CircleAlert, FileSearch, QrCode, ShieldCheck, Store } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";

function ExampleInvoice() {
  return (
    <div className="mx-auto w-full max-w-[22rem] rotate-[-1deg] rounded-md border border-ink-200 bg-white px-5 py-5 font-mono text-[0.66rem] text-ink-700 shadow-[0_20px_45px_-28px_rgb(35_20_20/0.5)] sm:px-6 sm:py-6">
      <div className="text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full border-2 border-ink-800 text-ink-800">
          <Store className="size-5" aria-hidden />
        </span>
        <p className="mt-2 text-[0.72rem] font-bold tracking-[0.12em] text-ink-950">EXAMPLE BUSINESS</p>
        <p className="mt-0.5 text-[0.58rem] text-ink-500">Illustrative tax invoice</p>
      </div>

      <div className="my-3 border-t border-dashed border-ink-300" />
      <dl className="space-y-1.5">
        <div className="flex justify-between gap-3"><dt>Supplier ID</dt><dd className="font-semibold text-ink-900">Check official record</dd></div>
        <div className="flex justify-between gap-3"><dt>Tax type and rate</dt><dd className="font-semibold text-ink-900">As applicable</dd></div>
        <div className="flex justify-between gap-3"><dt>Invoice reference</dt><dd className="font-semibold text-ink-900">Example only</dd></div>
        <div className="flex justify-between gap-3"><dt>Date and time</dt><dd className="font-semibold text-ink-900">Shown on invoice</dd></div>
      </dl>

      <div className="my-3 border-t border-dashed border-ink-300" />
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 text-[0.6rem] font-semibold text-ink-500">
        <span>ITEM</span><span>QTY</span><span>AMOUNT</span>
      </div>
      <div className="mt-2 grid grid-cols-[1fr_auto_auto] gap-x-3 text-ink-800">
        <span>Example item</span><span>1</span><span>Rs 1,000</span>
      </div>
      <div className="my-3 border-t border-dashed border-ink-300" />
      <div className="space-y-1.5 text-right">
        <p>Tax shown: <b className="text-ink-950">verify applicable amount</b></p>
        <p className="text-[0.75rem] font-bold text-ink-950">TOTAL: see issued invoice</p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-dashed border-brand-300 bg-brand-50/70 p-2.5">
        <span className="flex items-center gap-2 text-[0.6rem] leading-snug text-ink-600">
          <QrCode className="size-5 shrink-0 text-brand-700" aria-hidden />
          Verification code area
        </span>
        <span className="rounded bg-white px-2 py-1 text-[0.55rem] font-bold uppercase tracking-wide text-brand-800">Demo only</span>
      </div>
      <p className="mt-3 text-center text-[0.58rem] leading-relaxed text-ink-500">Sample illustration. Not a scannable code or verified invoice.</p>
    </div>
  );
}

function ReviewReceipt() {
  return (
    <div className="mx-auto w-full max-w-[22rem] rotate-[1deg] rounded-sm border border-ink-300 bg-[#fffefa] px-5 py-5 font-mono text-[0.68rem] text-ink-800 shadow-[0_20px_45px_-28px_rgb(35_20_20/0.5)] sm:px-6 sm:py-6">
      <div className="text-center">
        <p className="text-[0.8rem] font-bold tracking-[0.14em] text-ink-950">LOCAL RESTAURANT</p>
        <p className="mt-1 text-[0.58rem] text-ink-500">Sanitized educational example</p>
      </div>
      <div className="my-3 border-t border-dashed border-ink-400" />
      <div className="space-y-1 text-[0.63rem]">
        <p>Receipt reference: <span className="text-ink-500">not clear in photo</span></p>
        <p>Customer details: <span className="text-ink-500">removed</span></p>
      </div>
      <div className="my-3 border-t border-dashed border-ink-400" />
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 text-[0.6rem] font-bold text-ink-500">
        <span>ITEM</span><span>QTY</span><span>AMOUNT</span>
      </div>
      <div className="mt-2 grid grid-cols-[1fr_auto_auto] gap-x-3">
        <span>Meal order</span><span>1</span><span>Rs 999.00</span>
      </div>
      <div className="my-3 border-t border-dashed border-ink-400" />
      <div className="space-y-1.5 text-right">
        <p>Subtotal: <b>Rs 999.00</b></p>
        <p>Tax shown at 16%: <b>Rs 159.84</b></p>
        <p>Rounding: <b>Rs 0.16</b></p>
        <p className="text-[0.78rem] font-bold text-ink-950">TOTAL: Rs 1,159.00</p>
      </div>
      <div className="my-3 border-t border-dashed border-ink-400" />
      <div className="flex items-center gap-2 rounded-lg border border-dashed border-rose-300 bg-rose-50/70 p-2.5">
        <CircleAlert className="size-5 shrink-0 text-rose-700" aria-hidden />
        <p className="text-[0.58rem] leading-snug text-ink-700">No clear official invoice reference or verification code is visible in this example photo.</p>
      </div>
      <p className="mt-3 text-center text-[0.58rem] leading-relaxed text-ink-500">Unverified does not mean fake. Check through the relevant authority.</p>
    </div>
  );
}

const checks = [
  {
    icon: Store,
    title: "Match the supplier",
    body: "Check the business name and tax registration details against the relevant official record, where applicable.",
  },
  {
    icon: BadgeCheck,
    title: "Review the tax details",
    body: "Look for the tax type, rate and amount, then check the arithmetic and the rules that apply to that transaction.",
  },
  {
    icon: ShieldCheck,
    title: "Verify independently",
    body: "Use the competent authority's official invoice or QR verification channel. A logo, layout or missing field alone proves nothing.",
  },
];

export function ReceiptGuide() {
  return (
    <section id="receipt-guide" aria-labelledby="receipt-guide-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="receipt-guide-title"
          eyebrow="Public awareness"
          title={
            <>
              Two slips, side by side. <Accent>What to look for.</Accent>
            </>
          }
          description="A receipt's appearance cannot confirm whether it is genuine. Use these sanitized illustrations to learn which details to check before drawing a conclusion."
        />

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[1.8rem] border border-ink-200/70 bg-paper p-5 sm:p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-800">Example 01</p>
                  <h3 className="mt-1 text-lg font-semibold text-ink-950">Tax invoice format</h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-[0.68rem] font-semibold text-brand-800 ring-1 ring-inset ring-brand-200">
                  <FileSearch className="size-3.5" aria-hidden /> Check details
                </span>
              </div>
              <figure>
                <ExampleInvoice />
                <figcaption className="mt-5 text-sm leading-relaxed text-ink-600">
                  The supplied top image is a template with placeholders such as “YOUR LOGO HERE” and “BUSINESS NAME”. It is an illustration, not a verified genuine receipt.
                </figcaption>
              </figure>
            </article>
          </Reveal>

          <Reveal delay={110}>
            <article className="h-full rounded-[1.8rem] border border-ink-200/70 bg-paper p-5 sm:p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-rose-700">Example 02</p>
                  <h3 className="mt-1 text-lg font-semibold text-ink-950">Receipt to review carefully</h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 text-[0.68rem] font-semibold text-rose-800 ring-1 ring-inset ring-rose-200">
                  <CircleAlert className="size-3.5" aria-hidden /> Unverified
                </span>
              </div>
              <figure>
                <ReviewReceipt />
                <figcaption className="mt-5 text-sm leading-relaxed text-ink-600">
                  In the supplied photo, a tax line is visible, but no clear official invoice reference or verification code can be confirmed from the image. That is a reason to check, not proof of fraud.
                </figcaption>
              </figure>
            </article>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="flex flex-col gap-4 border-y border-ink-200/70 py-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-800">What to look for</p>
                <h3 className="mt-1 text-xl font-semibold text-ink-950 sm:text-2xl">Check the details, then verify officially.</h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-ink-500">
                Applicable fields depend on the tax type, jurisdiction and transaction. When uncertain, ask for a proper invoice and consult the relevant authority.
              </p>
            </div>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {checks.map((check, index) => (
              <Reveal key={check.title} delay={index * 75}>
                <article className="flex h-full gap-4 rounded-2xl border border-ink-200/70 bg-white p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <check.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-ink-950">{check.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{check.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mt-7 rounded-2xl bg-brand-50/70 px-5 py-4 text-sm leading-relaxed text-brand-950 ring-1 ring-inset ring-brand-100">
            These are sanitized, illustrative recreations based on the images shared with us. They are not official FBR samples, legal advice or a finding about any business. Do not label a receipt fake based only on its design or one missing field.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <a href="#get-involved" className="mt-6 inline-flex items-center gap-2 rounded-xl text-sm font-semibold text-brand-800 transition-colors hover:text-brand-950">
            Need guidance on a concern?
            <ArrowRight className="size-4 transition-transform hover:translate-x-1" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
