import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import RealResults from "./components/RealResults";
import SportsSupported from "./components/SportsSupported";
import AboutMaitClub from "./components/AboutMaitClub";
import CTA from "./components/CTA";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <RealResults />
      <SportsSupported />
      <AboutMaitClub />
      <CTA />
      <Stats />
      <Footer />
    </div>
  );
}
