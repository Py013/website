import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ImpactSection } from "@/components/impact";
import { JoinCTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ImpactSection />
        <JoinCTA />
        <Footer />
      </main>
    </>
  );
}
