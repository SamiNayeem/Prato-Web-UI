import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import VideoIntro from "./components/video-intro";
import FeaturesSection from "./components/features2";
import PratoFeaturesSection from "./components/prato-features";
import AboutSection from "./components/about";
import Faqs from "./components/faqs";
import PricingSection from "./components/pricing";
import ContactSection from "./components/contact-us";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <VideoIntro />
      <FeaturesSection />
      <AboutSection />
      <PratoFeaturesSection />
      <Faqs />
      <PricingSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
