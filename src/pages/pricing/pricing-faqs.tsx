import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

const PricingFaqs = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What cleaning services do you offer?",
      answer:
        "We provide a full suite of cleaning services, including residential and commercial cleaning, window cleaning, furniture care, and stain removal. Every service is tailored to meet the unique requirements of our clients, ensuring a pristine and inviting space for both homes and businesses.",
    },
    {
      question: "Do you offer eco-friendly cleaning options?",
      answer:
        "All of our cleaning services are eco-friendly, using environmentally safe products to ensure a clean and healthy space while minimizing environmental impact.",
    },
    {
      question: "How do you vet your cleaning staff?",
      answer:
        "We carefully vet our cleaning staff through background checks, reference checks, and interviews. Every team member is trained to uphold our high standards of professionalism and service, ensuring a dependable and trustworthy service for your home or business.",
    },
    {
      question: "What happens to the footage if my cleaner wears a camera?",
      answer:
        "If you request your cleaner to wear a camera, which is included in all of our plans, the footage is securely stored and only reviewed if you specifically request it or in the event of a dispute. It will be automatically deleted 30 days after the cleaning session to ensure your privacy.",
    },
    {
      question: "Can I request the same cleaner for every session?",
      answer:
        "Yes, with our subscription plan, you can request the same cleaner for consistency and comfort. We will make every effort to fulfill your request, based on the cleaner's availability.",
    },
  ];

  return (
    <div className="container py-10 lg:py-20">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#040D11]  text-center">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col gap-6 mt-12">
        {faqData.map((data, index) => (
          <div className="border-b border-[#E3E3E3] pb-6 w-full xl:w-[1100px] mx-auto block">
            <div
              className="flex items-start justify-between gap-2 cursor-pointer"
              onClick={() =>
                setOpenFAQIndex(openFAQIndex === index ? null : index)
              }
            >
              <p className="text-xl font-medium text-black">{data.question}</p>

              <RiArrowDownWideFill
                className={`${
                  openFAQIndex === index ? "rotate-180" : ""
                } text-2xl mt-1 flex-shrink-0 text-black transition-all duration-500`}
              />
            </div>

            <AnimatePresence>
              {openFAQIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="pt-4 font-light text-black">{data.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFaqs;
