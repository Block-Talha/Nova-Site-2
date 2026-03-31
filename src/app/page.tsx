import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Goals } from "@/components/Goals";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden bg-background text-on-surface">
        <Hero />
        <Goals />
        <Pricing />
        <Testimonials />
        <Team />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
