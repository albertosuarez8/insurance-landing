import Navbar from "../components/Navbar";
import QuoteForm from "../components/QuoteForm";
import StatsBar from "../components/StatsBar";
import WhyYouNeed from "../components/WhyYouNeed";
import WhatCovers from "../components/WhatCovers";
import WhyChooseUs from "../components/WhyChooseUs";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="app-root min-h-screen bg-cream">
      <Navbar />
      <main className="w-full pt-24">
        <QuoteForm />
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
