import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ReportProcess } from "@/components/sections/ReportProcess";
import { InvoiceComparison } from "@/components/sections/InvoiceComparison";
import { GetInvolved } from "@/components/sections/GetInvolved";

export default function App() {
  return (
    <div className="relative">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <ReportProcess />
        <InvoiceComparison />
        <GetInvolved />
      </main>

      <Footer />
    </div>
  );
}
