import Navbar from "../components/Navbar";
import QuoteForm from "../components/QuoteForm";
import StatsBar from "../components/StatsBar";
import WhyYouNeed from "../components/WhyYouNeed";
import WhatCovers from "../components/WhatCovers";
import WhyChooseUs from "../components/WhyChooseUs";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import HomeownersCarriers from "../components/HomeownersCarriers";
import { useLanguage } from "../context/LanguageContext";

export default function Landing() {
  const { isHomeownersFlow } = useLanguage();

  return (
    <div className="app-root min-h-screen bg-cream">
      <Navbar />
      <main className="w-full pt-24">
        <QuoteForm />
        {isHomeownersFlow && <HomeownersCarriers />}
        <StatsBar />
        <WhyYouNeed />
        <WhatCovers />
        <WhyChooseUs />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
