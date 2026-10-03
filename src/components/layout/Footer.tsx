import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  return (
    <footer className="border-t border-ink-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
          <Reveal>
            <a href="#top" aria-label="فتح پاکستان آرگنائزیشن، اوپر جائیں" className="inline-block rounded-xl">
              <Logo urduOnly />
            </a>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-600">
              An independent, citizen-led non-profit organization focused on fair tax practices and public accountability in Pakistan.
            </p>
          </Reveal>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-ink-200/70 pt-5 text-xs leading-relaxed text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Pakistan · © {new Date().getFullYear()}</p>
          <p className="max-w-3xl sm:text-right">
            Not part of or operated by any government body, and not affiliated with FBR. A concern is not proof of wrongdoing; official determinations belong to the relevant authorities.
          </p>
        </div>

        <div className="mt-4 flex justify-end">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-ink-700 ring-1 ring-inset ring-ink-200 transition-colors hover:bg-paper hover:text-ink-950"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
