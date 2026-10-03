import { ExternalLink, QrCode } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";

export function ReportProcess() {
  return (
    <section id="verification" aria-labelledby="verification-title" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="verification-title"
          eyebrow="How to verify"
          title={
            <>
              Verify first. <Accent>Then report responsibly.</Accent>
            </>
          }
          description="Use the Tax Asaan app to verify the FBR QR code, and check the invoice details listed below."
        />

        <article
          id="verify-fbr"
          aria-labelledby="verify-fbr-title"
          className="scroll-mt-28 mt-6 rounded-[1.7rem] border border-brand-200/80 bg-brand-50/75 p-5 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-brand-700 ring-1 ring-inset ring-brand-200">
              <QrCode className="size-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-800">FBR invoice check</p>
              <h3 id="verify-fbr-title" className="mt-1 text-lg font-semibold text-ink-950">Verify the FBR QR code first</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700 sm:text-base">
                Scan the FBR QR code with the Tax Asaan app. If it cannot be verified in the app, enter the code printed below the FBR QR code to check it.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.pral.fbr_varification_system&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-full bg-brand-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
              >
                Download the Tax Asaan app on Google Play
                <ExternalLink className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="mt-4 border-t border-brand-200/80 pt-4">
            <p className="text-sm font-medium text-ink-700 sm:text-base">A genuine FBR invoice should include:</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              <li className="col-span-2 flex min-h-[4.5rem] flex-col justify-center rounded-xl border border-brand-200 bg-white px-4 py-3 sm:col-span-1">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] leading-normal text-brand-800">Most important</span>
                <p className="mt-1 text-sm font-semibold leading-normal text-ink-950">FBR e-invoice number</p>
              </li>
              <li className="flex min-h-[4.5rem] items-center rounded-xl border border-brand-100 bg-white px-4 py-3">
                <p className="text-sm font-semibold leading-normal text-ink-800">FBR QR code</p>
              </li>
              <li className="flex min-h-[4.5rem] items-center rounded-xl border border-brand-100 bg-white px-4 py-3">
                <p className="text-sm font-semibold leading-normal text-ink-800">POS logo</p>
              </li>
              <li className="flex min-h-[4.5rem] items-center rounded-xl border border-brand-100 bg-white px-4 py-3">
                <p className="text-sm font-semibold leading-normal text-ink-800">PNTN</p>
              </li>
              <li className="flex min-h-[4.5rem] items-center rounded-xl border border-brand-100 bg-white px-4 py-3">
                <p className="text-sm font-semibold leading-normal text-ink-800">NTN</p>
              </li>
            </ul>
          </div>
        </article>

        <Reveal delay={100}>
          <aside aria-labelledby="how-we-work-title" className="mt-5 rounded-2xl border border-ink-200/70 bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-800">How we work</p>
            <h3 id="how-we-work-title" className="mt-1 text-lg font-semibold text-ink-950">Our role ends at referring the concern.</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              We review reports of suspected sales-tax evasion and refer relevant information to FBR/PRA. Official investigations, enforcement and decisions belong to those authorities; we do not determine guilt or control what happens after referral.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
