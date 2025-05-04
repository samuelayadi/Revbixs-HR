import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import MiddleBar from "@/components/MiddleBar";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import RequestDemo from "@/components/RequestDemo";

export default function Home() {
  return (
    <>
      <MiddleBar />
      <div className="w-full pb-20 bg-pattern">
        <Navbar />
        <Hero />
      </div>
      <FeaturesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <RequestDemo/>
      <FAQSection />
      <Footer />
    </>
  );
}
