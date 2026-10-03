import { cn } from "@/utils/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/feteh-e-pakistan-logo.svg"
      alt=""
      aria-hidden="true"
      className={cn("size-14 shrink-0 object-contain sm:size-16", className)}
      width="108"
      height="108"
    />
  );
}

export function Logo({
  dark = false,
  urduOnly = false,
  className,
}: {
  dark?: boolean;
  urduOnly?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col justify-center leading-none">
        {!urduOnly && (
          <span className={cn("text-[1.02rem] font-bold tracking-[-0.035em]", dark ? "text-white" : "text-ink-950")}>
            Feteh <span className={dark ? "text-brand-300" : "text-brand-600"}>e</span> Pakistan
          </span>
        )}
        <span
          lang="ur"
          dir="rtl"
          className={cn(
            "self-start font-urdu",
            urduOnly ? "text-[0.9rem] leading-[1.7]" : "mt-1.5 text-[0.7rem] leading-none",
            dark ? "text-white/75" : "text-ink-600"
          )}
        >
          فتح پاکستان آرگنائزیشن
        </span>
      </span>
    </span>
  );
}
