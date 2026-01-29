import HeroSection from "../../HeroSection/HeroSection";
import ServicesSection from "../../ServicesSection/ServicesSection";
import DocumentShipping from "../../DocumentShipping/DocumentShipping";
import ShippingFAQSection from "../../ShippingFaqSection/ShippingFaqSection";
import BusinessSolutionsSection from "../../BusinessSolutionsSection/BusinessSolutionsSection";
import ShippingStepsSection from "../../ShippingSteps/ShippingSteps";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DocumentShipping />
      <ShippingFAQSection />
      <BusinessSolutionsSection />
      <ShippingStepsSection />
    </>
  );
};

export default Home;
