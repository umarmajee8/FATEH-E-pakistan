import { ArrowUp, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "About us", href: "#about" },
      { label: "Our work", href: "#our-work" },
      { label: "Receipt guide", href: "#receipt-guide" },
      { label: "Our approach", href: "#approach" },
      { label: "Why it matters", href: "#impact" },
    ],
  },
  {
    title: "Take part",
    links: [
      { label: "How to report", href: "#reporting" },
      { label: "Volunteer", href: "#get-involved" },
      { label: "Partner with us", href: "#get-involved" },
      { label: "Support our work", href: "#get-involved" },
      { label: "Membership, coming soon", href: "#membership" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <a href="#top" aria-label="Feteh e Pakistan, back to top" className="inline-block rounded-xl">
              <Logo />
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-600">
              An independent, citizen-led public-interest NGO working toward fair tax practices and stronger accountability in Pakistan.
            </p>
            <p lang="ur" dir="rtl" className="mt-3 w-fit font-urdu text-lg leading-[2] text-brand-700">
              شفافیت، انصاف، جوابدہی
            </p>
            <a
              href="mailto:hello@fateh-e-pakistan.org"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-brand-700"
            >
              <Mail className="size-4 text-brand-600" aria-hidden />
              hello@fateh-e-pakistan.org
            </a>
          </Reveal>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:justify-self-end sm:gap-16">
            {columns.map((column, index) => (
              <Reveal key={column.title} delay={index * 80}>
                <h2 className="text-sm font-semibold text-ink-950">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-ink-600 transition-colors hover:text-brand-700">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-200/70 py-7 text-xs leading-relaxed text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-2 text-sm">
            <MapPin className="size-4 shrink-0 text-brand-600" aria-hidden />
            Pakistan
          </p>
          <p className="max-w-3xl sm:text-right">
            Feteh e Pakistan is independent and non-partisan, and is not affiliated with the Federal Board of Revenue or any government body.
            A report is not proof of wrongdoing; official determinations belong to the competent authorities.
          </p>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-ink-200/70 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">© {new Date().getFullYear()} Feteh e Pakistan. All rights reserved.</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-ink-700 ring-1 ring-inset ring-ink-200 transition-colors hover:bg-paper hover:text-ink-950"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden px-4 pb-2 text-center">
        <p
          className="whitespace-nowrap bg-gradient-to-b from-ink-200 to-transparent bg-clip-text pb-[0.08em] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent"
          style={{ fontSize: "clamp(2rem, 9vw, 9rem)" }}
        >
          Feteh e Pakistan
        </p>
      </div>
    </footer>
  );
}
