import { Hero } from "./components/Hero";
import { MobileBottomBar } from "./components/MobileBottomBar";
import { NavBar } from "./components/NavBar";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonial";
import { CtaCard } from "./components/CtaCard";
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { SectionReveal } from "./components/SectionReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <NavBar />
      <Hero />
      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <Gallery />
      </SectionReveal>
      <SectionReveal delay={0.08}>
        <Testimonial />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <CtaCard />
      </SectionReveal>
      <SectionReveal delay={0.12}>
        <Footer />
      </SectionReveal>
      <MobileBottomBar />
    </div>
  );
}
