import CleaningServices from "./cleaning-services";
import Hero from "./hero";
import PricingFaqs from "./pricing-faqs";
import PricingPlan from "./pricing-plan";

const Pricing = () => {
  return (
    <div>
      <Hero />
      <CleaningServices />
      <PricingPlan />
      <PricingFaqs />
    </div>
  );
};

export default Pricing;
