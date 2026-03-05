import { AboutSection } from '@/components/about-section';
import { JoinCTA } from '@/components/cta';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { ImpactSection } from '@/components/impact';
import { Navbar } from '@/components/navbar';

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
