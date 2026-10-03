import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PurposeStrip } from "@/components/sections/PurposeStrip";
import { About } from "@/components/sections/About";
import { OurWork } from "@/components/sections/OurWork";
import { ReceiptGuide } from "@/components/sections/ReceiptGuide";
import { OurApproach } from "@/components/sections/OurApproach";
import { Impact } from "@/components/sections/Impact";
import { GetInvolved } from "@/components/sections/GetInvolved";
import { FAQ } from "@/components/sections/FAQ";

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
        <PurposeStrip />
        <About />
        <OurWork />
        <ReceiptGuide />
        <OurApproach />
        <Impact />
        <GetInvolved />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
