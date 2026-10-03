import { ArrowDown, ArrowRight, HandHeart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-48 size-[34rem] rounded-full bg-brand-100/80 blur-3xl" />
        <div className="absolute -right-32 top-1/4 size-[28rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="relative z-10 text-center lg:text-left">
          <Reveal>
            <p className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-brand-200/80 bg-white/75 px-4 py-2 text-xs font-semibold tracking-wide text-brand-800 shadow-sm backdrop-blur sm:text-sm lg:mx-0">
              <span className="size-2 rounded-full bg-brand-500" aria-hidden />
              Independent · Non-partisan · Citizen-led
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mx-auto mt-7 max-w-3xl text-balance text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.055em] text-ink-950 sm:text-6xl lg:mx-0 lg:text-[4.45rem]"
            >
              For a Pakistan where <span className="text-brand-700">public money</span> works for everyone.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-600 sm:text-lg lg:mx-0">
              Feteh e Pakistan is a public-interest NGO advancing fair tax practices and stronger public accountability. We
              help make the issues easier to understand, and create thoughtful ways for people to take part in positive change.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
              <Button href="#get-involved" size="lg" arrow>
                Support our work
              </Button>
              <Button href="#our-work" size="lg" variant="secondary" className="group">
                Explore our work
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-ink-500 sm:text-sm lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-600" aria-hidden /> Evidence before assumptions
              </span>
              <span className="hidden size-1 rounded-full bg-ink-300 sm:inline-block" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <HandHeart className="size-4 text-brand-600" aria-hidden /> People at the heart of progress
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal dir="right" delay={120} className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 via-transparent to-brand-100/75 blur-2xl" />
          <figure className="relative overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-ink-100 shadow-[0_36px_80px_-34px_rgb(70_24_28/0.22)] sm:rounded-[2.35rem] sm:border-[8px]">
            <img
              src="/images/community-accountability.jpg"
              alt="Illustrative photograph of community members and volunteers discussing a document together."
              width="1536"
              height="1024"
              fetchPriority="high"
              className="aspect-[4/4.25] w-full object-cover object-[62%_center] sm:aspect-[4/3.7] lg:aspect-[4/4.15]"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950/65 via-ink-950/10 to-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-paper/95 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-brand-800 shadow-lg backdrop-blur sm:left-6 sm:top-6 sm:text-xs">
              <span className="size-1.5 rounded-full bg-brand-500" aria-hidden />
              Community first
            </div>
            <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-6 sm:bottom-6">
              <div className="max-w-xs text-left text-white">
                <p className="text-sm font-semibold sm:text-base">Accountability starts with a conversation.</p>
                <p className="mt-1 text-xs leading-relaxed text-white/75 sm:text-sm">Listening, learning and acting together.</p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 text-white ring-1 ring-inset ring-white/30 backdrop-blur">
                <ArrowRight className="size-5 -rotate-45" aria-hidden />
              </span>
            </figcaption>
          </figure>
          <p className="mt-3 text-center text-[0.7rem] text-ink-400 lg:text-right">Illustrative image · community dialogue in practice</p>
        </Reveal>
      </div>
    </section>
  );
}
