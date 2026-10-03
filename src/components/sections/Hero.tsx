import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-10 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-48 size-[34rem] rounded-full bg-brand-100/80 blur-3xl" />
        <div className="absolute -right-32 top-1/4 size-[28rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 sm:gap-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="relative z-10 text-center lg:text-left">
          <Reveal delay={70}>
            <h1
              id="hero-title"
              className="mx-auto max-w-3xl text-balance text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.055em] text-ink-950 sm:text-6xl lg:mx-0 lg:text-[4.45rem]"
            >
              For a Pakistan where <span className="text-brand-700">public money</span> works for everyone.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
              <Button href="#get-involved" size="lg" arrow>
                Send a receipt
              </Button>
              <Button href="#verify-fbr" size="lg" variant="secondary" className="group">
                Verify an FBR invoice
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal dir="right" delay={100} className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
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
          </figure>
          <p className="mt-2 text-center text-[0.7rem] text-ink-400 lg:text-right">Illustrative image · community dialogue in practice</p>
        </Reveal>
      </div>
    </section>
  );
}
