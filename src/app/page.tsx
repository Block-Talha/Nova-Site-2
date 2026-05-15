import { CoreCapabilities } from "@/components/CoreCapabilities";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { TargetedSectors } from "@/components/TargetedSectors";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10 pt-20">
        <Hero />
        <Services />
        <TargetedSectors />
        <Team />
        <CoreCapabilities />
      </main>
      <Footer />
    </>
  );
}
