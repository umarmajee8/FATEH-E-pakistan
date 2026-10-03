import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "dark" | "light" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  shine?: boolean;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold tracking-tight transition-all duration-300 ease-[var(--ease-out-expo)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-brand-700 to-brand-800 text-white shadow-glow ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgb(194_56_68/0.3)]",
  secondary:
    "bg-white/80 text-ink-900 ring-1 ring-inset ring-ink-200 backdrop-blur hover:-translate-y-0.5 hover:bg-white hover:ring-ink-300 hover:shadow-lg hover:shadow-ink-900/5",
  dark: "bg-ink-950 text-white ring-1 ring-inset ring-white/10 hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-950/25",
  light:
    "bg-white text-brand-950 shadow-[0_10px_40px_-10px_rgb(255_255_255/0.35)] hover:-translate-y-0.5 hover:bg-brand-50",
  ghost: "text-ink-700 hover:bg-ink-900/5 hover:text-ink-950",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 min-h-[3.25rem] px-7 text-[0.95rem]",
};

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "primary", size = "md", arrow = false, shine = true, className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {variant === "primary" && shine && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[120%] skew-x-[-18deg] bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-[320%]"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
      </span>
    </>
  );

  if ("href" in props && props.href !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { variant: _v, size: _s, arrow: _a, shine: _shine, className: _c, children: _ch, href, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, size: _s, arrow: _a, shine: _shine, className: _c, children: _ch, href: _h, type, ...rest } = props as NativeButtonProps;
  return (
    <button type={type ?? "button"} className={classes} {...rest}>
      {inner}
    </button>
  );
}
