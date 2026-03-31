import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import LuminescenceBanner from "@/components/LuminescenceBanner";
import ScienceSection from "@/components/ScienceSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import NewsSection from "@/components/NewsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <SolutionsSection />
      <LuminescenceBanner />
      <ScienceSection />
      <SustainabilitySection />
      <NewsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
