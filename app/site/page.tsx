import { AppCTA } from "../../components/app-cta";
import { Contact } from "../../components/contact";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { InteractiveGallery } from "../../components/interactive-gallery";
import { LocationMap } from "../../components/location-map";
import { ModernServices } from "../../components/modern-services";
import { ParallaxAbout } from "../../components/parallax-about";
import { ParallaxHero } from "../../components/parallax-hero";

export default function SitePage() {
  
  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <Header />
      <ParallaxHero />
      <ParallaxAbout />
      <ModernServices />
      <InteractiveGallery />
      <AppCTA />
      <LocationMap />
      <Contact />
      <Footer />
    </div>
  );
}
