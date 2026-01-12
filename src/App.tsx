// import React from "react";
import Header from "./Components/Header/Header";
import TopBar from "./Components/TopBar/TopBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import DocumentShipping from "./Components/DocumentShipping/DocumentShipping"
import ShippingFAQSection from "./Components/ShippingFaqSection/ShippingFaqSection";
import BusinessSolutionsSection from "./Components/BusinessSolutionsSection/BusinessSolutionsSection";
import ShippingStepsSection from "./Components/ShippingSteps/ShippingSteps";
import FooterSection from "./Components/FooterSection/FooterSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TopBar />
      <HeroSection />
      <ServicesSection />
      <DocumentShipping />
      <ShippingFAQSection />
      <BusinessSolutionsSection />
      <ShippingStepsSection />
      <FooterSection />
    </div>
  );
}

export default App;
