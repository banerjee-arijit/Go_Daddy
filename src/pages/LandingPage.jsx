import React from "react";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CarouselSection from "./components/CarouselSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SearchSection />
      <HeroSection />
      <AboutSection />
      <CarouselSection />
      <WhyChooseUsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
