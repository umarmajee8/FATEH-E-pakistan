import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  id?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", dark = false, id, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.13em]",
            dark ? "bg-white/8 text-brand-200 ring-1 ring-inset ring-white/15" : "bg-brand-50 text-brand-800 ring-1 ring-inset ring-brand-200"
          )}
        >
          <span className={cn("size-1.5 rounded-full", dark ? "bg-brand-300" : "bg-brand-600")} aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          id={id}
          className={cn(
            "mt-5 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-[3.2rem]",
            dark && "!text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
              align === "center" && "mx-auto max-w-2xl",
              dark ? "text-white/65" : "text-ink-600"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** A compact, semibold emphasis that stays within the SF Pro system type stack. */
export function Accent({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={cn("font-semibold not-italic", light ? "text-brand-200" : "text-brand-700")}>{children}</span>;
}
