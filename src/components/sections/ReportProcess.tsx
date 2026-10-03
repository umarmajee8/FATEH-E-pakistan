import { Check, ExternalLink, QrCode } from "lucide-react";
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
              Verify first.<Accent>{" "}Then report responsibly.</Accent>
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
            <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                { label: "FBR e-invoice number", important: true },
                { label: "FBR QR code", important: false },
                { label: "POS logo", important: false },
                { label: "PNTN", important: false },
                { label: "NTN", important: false },
              ].map(({ label, important }) => (
                <li
                  key={label}
                  className={`flex min-h-12 items-center gap-2 rounded-lg border bg-white px-3 py-2 ${
                    important ? "border-brand-200" : "border-brand-100"
                  }`}
                >
                  <span
                    className={`grid size-5 shrink-0 place-items-center rounded-full ${
                      important ? "bg-brand-100 text-brand-800" : "bg-brand-50 text-brand-700"
                    }`}
                  >
                    <Check className="size-3" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    {important && (
                      <span className="block text-[0.58rem] font-bold uppercase leading-tight tracking-[0.08em] text-brand-800">
                        Most important
                      </span>
                    )}
                    <p className={`text-sm font-semibold leading-snug ${important ? "text-ink-950" : "text-ink-800"}`}>
                      {label}
                    </p>
                  </div>
                </li>
              ))}
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
