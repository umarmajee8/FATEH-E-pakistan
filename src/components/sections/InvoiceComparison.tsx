import { useState } from "react";
import { FileText } from "lucide-react";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";

const examples = [
  {
    image: "/images/receipt-example-redacted.jpg",
    imageAlt: "Takeaway receipt example with customer details removed.",
    imageLabel: "Receipt example",
    tone: "caution",
    title: "Receipt without visible FBR markers",
    description: "This sample does not visibly show FBR invoice details.",
    details: ["No FBR e-invoice number visible", "No FBR POS logo or QR code visible"],
  },
  {
    image: "/images/fbr-invoice-example.jpg",
    imageAlt: "FBR invoice example showing an invoice number, POS logo, and QR code.",
    imageLabel: "FBR invoice example",
    tone: "verified",
    title: "FBR invoice example",
    description: "Look for the FBR markers, then verify them in Tax Asaan.",
    details: ["FBR e-invoice number", "FBR POS logo", "FBR QR code"],
  },
] as const;

function ExampleImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <div className="grid h-[24rem] place-items-center border-y border-ink-100 bg-ink-50/70 p-3 sm:h-[30rem]">
      {unavailable ? (
        <div role="img" aria-label={alt} className="flex flex-col items-center gap-3 text-center text-ink-400">
          <FileText className="size-10" aria-hidden />
          <span className="text-sm font-medium">{label} image will appear here</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setUnavailable(true)}
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}

export function InvoiceComparison() {
  return (
    <section id="invoice-comparison" aria-labelledby="invoice-comparison-title" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="invoice-comparison-title"
          eyebrow="Invoice examples"
          title={
            <>
              Visual clues. <Accent>Verify before reporting.</Accent>
            </>
          }
          description="Compare the details shown on these example receipts. Appearance alone cannot confirm whether a sale was reported to FBR."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
          {examples.map((example) => (
            <article
              key={example.title}
              className={`overflow-hidden rounded-[1.7rem] border bg-white shadow-card ${
                example.tone === "caution" ? "border-amber-200" : "border-brand-200"
              }`}
            >
              <div className="p-5 sm:p-6">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    example.tone === "caution"
                      ? "bg-amber-50 text-amber-800"
                      : "bg-brand-50 text-brand-800"
                  }`}
                >
                  {example.imageLabel}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-ink-950">{example.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{example.description}</p>
              </div>

              <ExampleImage src={example.image} alt={example.imageAlt} label={example.imageLabel} />

              <ul className="grid gap-2 p-5 sm:p-6">
                {example.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-700">
                    <span
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                        example.tone === "caution" ? "bg-amber-500" : "bg-brand-600"
                      }`}
                      aria-hidden
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-ink-500">
          A receipt with no visible FBR marker is not, by itself, proof of wrongdoing. Verify the invoice through Tax Asaan before drawing conclusions or reporting a concern.
        </p>
      </div>
    </section>
  );
}
