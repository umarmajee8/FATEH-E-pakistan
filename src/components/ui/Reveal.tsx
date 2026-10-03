import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/utils/cn";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms. Use index * 80 for staggered lists. */
  delay?: number;
  dir?: "up" | "left" | "right" | "scale";
  as?: ElementType;
  className?: string;
}

/** Fades + lifts its children into view the first time they scroll on-screen. */
export function Reveal({ children, delay = 0, dir = "up", as: Tag = "div", className }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      data-dir={dir}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
