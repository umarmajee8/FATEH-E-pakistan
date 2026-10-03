import { ArrowUpRight, HandHeart, Mail, Users, Handshake, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactEmail = "hello@fateh-e-pakistan.org";

const ways: { icon: LucideIcon; title: string; body: string; action: string; subject: string }[] = [
  {
    icon: Users,
    title: "Volunteer your time",
    body: "Bring your skills, local knowledge or curiosity to public-interest work.",
    action: "Ask about volunteering",
    subject: "Volunteer with Feteh e Pakistan",
  },
  {
    icon: Handshake,
    title: "Build a partnership",
    body: "Explore a community, professional or institutional collaboration.",
    action: "Start a conversation",
    subject: "Partnership inquiry",
  },
  {
    icon: HandHeart,
    title: "Support the mission",
    body: "Interested in contributing? Ask about current giving options and how support is used.",
    action: "Ask about supporting",
    subject: "Support Feteh e Pakistan",
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" aria-labelledby="involved-title" className="bg-brand-50/65 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              id="involved-title"
              align="left"
              eyebrow="Get involved"
              title={<>Good change is a <span className="text-brand-700">shared effort.</span></>}
              description="There are many ways to help make public accountability part of everyday life. Find the one that feels right for you."
            />
            <Reveal delay={220}>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-7 inline-flex items-center gap-2 rounded-xl text-sm font-semibold text-brand-800 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-950"
              >
                <Mail className="size-4" aria-hidden /> {contactEmail}
              </a>
              <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
                Before making a contribution, please contact us for current donation channels and information about how support is used.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-3">
            {ways.map((way, index) => (
              <Reveal key={way.title} delay={index * 80}>
                <article className="group flex flex-col gap-5 rounded-3xl border border-ink-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                      <way.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink-950 sm:text-lg">{way.title}</h3>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-600">{way.body}</p>
                    </div>
                  </div>
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(way.subject)}`}
                    className="inline-flex shrink-0 items-center gap-2 pl-[3.75rem] text-sm font-semibold text-brand-700 transition-colors hover:text-brand-950 sm:pl-0"
                  >
                    {way.action}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
