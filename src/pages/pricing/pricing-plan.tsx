import PricingResidentialCard from "@/components/cards/pricing-residential-card";
import { motion } from "framer-motion";
import { useState } from "react";

const PricingPlan = () => {
  const [selectedTab, setSelectedTab] = useState("residential");

  const cardData = [
    {
      id: 1,
      planName: "Basic",
      description: "Essential Clean, Exceptional Care.",
      pointsHeader: "Custom",
      textArray: [
        "Experienced & Trained Cleaners",
        "Access To All Basic Cleaning Services",
        "Eco-Friendly Products",
        "Optional Wearable Camera",
        "No Long-Term Commitments",
      ],
      subscription: false,
    },
    {
      id: 2,
      planName: "Deep",
      description: "Ultimate Clean, Unmatched Care.",
      pointsHeader: "Custom",
      textArray: [
        "Includes All Basic Features",
        "Access To All Deep Cleaning Services",
        "Thorough Deep Cleaning",
        "Free Cleaning of 3 Select Windows",
        "And More!",
      ],
      subscription: false,
    },
    {
      id: 3,
      planName: "Subscription",
      description: "Recurring Clean, Reliable Care.",
      pointsHeader: "Custom",
      textArray: [
        "Choose From Our Basic Or Deep Cleaning Services",
        "Priority Scheduling",
        "Weekly: Receive A 10% Discount",
        "Bi-Weekly: Enjoy A 5% Discount",
        "Monthly: Get A 1% Discount",
      ],
      subscription: true,
    },
  ];

  return (
    <div className="container py-12 lg:py-20">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#040D11]  text-center">
        Choose Your Plan
      </h1>

      <div className="border border-[#DFDFDF] rounded-full w-full sm:w-[319px] flex items-center justify-center mx-auto mt-10 p-1">
        <button
          className={`${
            selectedTab === "residential"
              ? "text-white"
              : "text-[#0B3B4D] bg-transparent"
          } w-full rounded-full h-14 text-lg transition-all duration-500 font-medium relative isolate`}
          onClick={() => setSelectedTab("residential")}
        >
          Residential
          {selectedTab === "residential" && (
            <motion.span
              layoutId="secondaryPricingSection"
              transition={{ type: "spring", damping: 12 }}
              className="bg-[#0B3B4D] absolute rounded-full inset-0 w-full h-full z-[-1]"
            />
          )}
        </button>
        <button
          className={`${
            selectedTab === "commercial"
              ? "text-white"
              : "text-[#0B3B4D] bg-transparent"
          } w-full rounded-full h-14 text-lg transition-all duration-500 font-medium relative isolate`}
          onClick={() => setSelectedTab("commercial")}
        >
          Commercial
          {selectedTab === "commercial" && (
            <motion.span
              layoutId="secondaryPricingSection"
              transition={{ type: "spring", damping: 12 }}
              className="bg-[#0B3B4D] absolute rounded-full inset-0 w-full h-full z-[-1]"
            />
          )}
        </button>
      </div>

      <div className="mt-12">
        {selectedTab === "residential" ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
            {cardData.map((item) => (
              <PricingResidentialCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="min-h-[400px] sm:min-h-[533px] px-3 border border-[#DFDFDF] rounded-2xl flex items-center justify-center  ">
            <h1 className="text-[#040D11] text-center font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Coming Soon
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPlan;
