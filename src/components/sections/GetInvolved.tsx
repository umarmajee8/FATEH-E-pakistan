import { ArrowRight, Mail } from "lucide-react";

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-current" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.946L0 24l6.335-1.662a11.882 11.882 0 0 0 5.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.412Z" />
    </svg>
  );
}

const contactEmail = "hello@fateh-e-pakistan.org";
const whatsappNumber = "923332288877";
const whatsappMessage = "Hi, I have a receipt that I would like to send for review.";

export function GetInvolved() {
  return (
    <section id="get-involved" aria-labelledby="receipt-contact-title" className="bg-brand-50/65 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 rounded-[1.8rem] border border-brand-100 bg-white p-5 shadow-sm sm:p-7 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
              <span className="h-px w-6 bg-brand-500" aria-hidden /> Send a receipt
            </p>
            <h2 id="receipt-contact-title" className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink-950 sm:text-3xl">
              Think a receipt may be fake?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600 sm:text-base">
              If a receipt looks suspicious or may be fake, send us a clear photo and a short explanation. Please remove customers’ personal details first.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap md:justify-end">
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent("Suspicious receipt")}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
              >
                <Mail className="size-4" aria-hidden /> Send by email <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send a receipt on WhatsApp"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
              >
                <WhatsAppLogo /> WhatsApp <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
