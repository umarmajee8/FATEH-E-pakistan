import { Clock3, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Membership() {
  return (
    <section id="membership" aria-labelledby="membership-title" className="px-5 py-12 sm:px-8 sm:py-16">
      <Reveal dir="scale">
        <div className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-100/70 p-6 sm:p-9 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:p-12">
          <div aria-hidden className="absolute -right-20 -top-24 size-72 rounded-full bg-white/80 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 ring-1 ring-inset ring-brand-200">
              <Clock3 className="size-3.5" aria-hidden /> Membership · Coming soon
            </span>
            <h2 id="membership-title" className="mt-5 max-w-2xl text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.045em] text-ink-950 sm:text-4xl">
              A way to stand with this work is on the way.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-600 sm:text-base">
              Feteh e Pakistan membership has not officially launched. Eligibility, terms and any contribution details will be shared here once they are confirmed.
            </p>
            <p lang="ur" dir="rtl" className="mt-3 max-w-2xl font-urdu text-sm leading-[2] text-brand-900">
              تنظیم کی رکنیت ابھی شروع نہیں ہوئی۔ تفصیلات کی تصدیق کے بعد یہاں شائع کی جائیں گی۔
            </p>
          </div>

          <div className="relative rounded-3xl border border-white/90 bg-white/90 p-6 shadow-[0_20px_55px_-38px_rgb(125_37_47/0.35)] sm:p-7">
            <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
              <HeartHandshake className="size-5" aria-hidden />
            </span>
            <p className="mt-4 text-base font-semibold text-ink-950">Not open yet</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">
              Registration, sign-up forms and membership payments are not available on this page.
            </p>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="mt-5 inline-flex h-11 cursor-not-allowed items-center justify-center rounded-full bg-ink-100 px-5 text-sm font-semibold text-ink-500"
            >
              Membership coming soon
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
