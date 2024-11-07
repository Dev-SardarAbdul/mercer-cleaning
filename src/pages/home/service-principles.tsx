import serviceImage from "@/assets/serviceImage.png";
import ServiceCard from "@/components/cards/service-card";
import trustIcon from "@/assets/trustIcon.svg";
import professionalismImg from "@/assets/professionalismImg.svg";
import satisfactionImg from "@/assets/satisfactionImg.svg";

const ServicePrinciples = () => {
  const valuesData = [
    {
      title: "Trustworthiness",
      img: trustIcon,
      description:
        "At Mercer Cleaning Company, trust is our foundation. Our fully vetted and insured team gives you peace of mind, ensuring your home is always in safe and dependable hands with every clean.",
    },
    {
      title: "Professionalism",
      img: professionalismImg,
      description:
        "Professionalism is the cornerstone of our service. Our team is meticulously trained to deliver reliable, detail-oriented, and courteous cleaning that consistently surpasses your highest expectations.",
    },
    {
      title: "Customer Satisfaction",
      img: satisfactionImg,
      description:
        "Ensuring customer satisfaction is our highest priority. We consistently go the extra mile to make sure every cleaning service leaves your home pristine and you thoroughly pleased with the results.",
    },
  ];

  return (
    <div className="py-10 lg:py-20">
      <img
        src={serviceImage}
        alt="Service Image"
        className="h-[350px] md:h-[456px] object-cover"
      />

      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 -mt-36">
        {valuesData.map((item, index) => (
          <ServiceCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicePrinciples;
