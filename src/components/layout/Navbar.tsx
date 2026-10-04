import { useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-paper/90 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-[4.7rem] max-w-7xl items-center justify-between px-4 sm:px-8"
      >
        <a href="#top" className="rounded-xl" aria-label="فتح پاکستان، ہوم">
          <Logo urduOnly />
        </a>

        <div className="flex items-center gap-2">
          <Button href="#get-involved" size="md" arrow shine={false}>
            Send a receipt
          </Button>
        </div>
      </nav>
    </header>
  );
}
