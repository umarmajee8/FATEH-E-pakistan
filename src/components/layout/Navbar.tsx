import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const links = [
  { href: "#about", label: "About us" },
  { href: "#our-work", label: "Our work" },
  { href: "#receipt-guide", label: "Receipt guide" },
  { href: "#reporting", label: "How to report" },
  { href: "#membership", label: "Membership" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-paper/90 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-[4.7rem] max-w-7xl items-center justify-between px-4 sm:px-8"
      >
        <a href="#top" onClick={closeMenu} className="rounded-xl" aria-label="فتح پاکستان، ہوم">
          <Logo urduOnly />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-white/80 hover:text-brand-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="#get-involved" size="md" arrow className="hidden sm:inline-flex">
            Support our work
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink-900 transition hover:bg-ink-900/5 active:scale-95 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "absolute inset-x-3 top-[calc(100%+0.5rem)] origin-top rounded-3xl border border-ink-200/70 bg-white p-3 shadow-2xl shadow-ink-950/15 transition-all duration-300 lg:hidden",
            open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-[0.98] opacity-0"
          )}
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center rounded-2xl px-4 text-base font-medium text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 p-1">
            <Button href="#get-involved" size="lg" arrow className="w-full" onClick={closeMenu}>
              Support our work
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
