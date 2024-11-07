import CleaningCompany from "./cleaning-company";
import CleaningServices from "./cleaning-services";
import ClientSay from "./client-say";
import Faqs from "./faqs";
import Hero from "./hero";
import PricingPlan from "./pricing-plan";
import ServicePrinciples from "./service-principles";

const Home = () => {
  return (
    <div>
      <Hero />
      <CleaningCompany />
      <CleaningServices />
      <PricingPlan />
      <ServicePrinciples />
      <ClientSay />
      <Faqs />
    </div>
  );
};

export default Home;
