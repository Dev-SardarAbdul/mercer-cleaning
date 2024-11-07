import verifiedIcon from "@/assets/verifiedIcon.svg";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

type item = {
  id: number;
  planName: string;
  description: string;
  pointsHeader: string;
  textArray: string[];
  subscription: boolean;
};

type Props = {
  item: item;
};

const PricingResidentialCard = ({ item }: Props) => {
  return (
    <div
      className={`${
        item.subscription ? "bg-[#0B3B4D]" : " border bg-white"
      }  border-[#DFDFDF] px-4 py-6 rounded-2xl `}
    >
      <h1
        className={`${
          item.subscription ? "text-white" : "text-[#040D11]"
        }  text-3xl font-medium`}
      >
        {item.planName}
      </h1>

      <p
        className={`${
          item.subscription ? "text-white" : "text-[#040D11]"
        }  text-lg font-medium pt-2`}
      >
        {item.description}
      </p>

      <div className="bg-[#C6D4D9] w-full h-[1px] my-5" />

      <h2
        className={`${
          item.subscription ? "text-white" : "text-[#040D11]"
        }  text-2xl sm:text-3xl font-semibold`}
      >
        {item.pointsHeader}
      </h2>

      <div
        className={`${
          item.subscription ? "bg-white bg-opacity-10" : "bg-[#EFF4F3]"
        }  mt-4 sm:mt-6 flex flex-col xl:min-h-[240px] gap-2 rounded-xl px-4 py-5`}
      >
        {item.textArray.map((text, index) => (
          <div className="flex items-start gap-2" key={index}>
            <img
              src={verifiedIcon}
              alt="verifiedIcon"
              className="flex-shrink-0 mt-1"
            />
            <p
              className={`${
                item.subscription ? "text-white" : "text-[#040D11]"
              }  sm:text-lg font-medium `}
            >
              {text}
            </p>
          </div>
        ))}
      </div>

      <Link
        target="_blank"
        to="https://calendly.com/mercercleaning/residential-quotes?month=2024-09"
      >
        <button
          className={`${
            item.subscription ? "" : "border border-[#0B3B4D]"
          }  flex items-center justify-center gap-2 rounded-full h-12 sm:h-16 bg-white mt-8 sm:mt-12 w-full text-[#0B3B4D] font-medium text-lg`}
        >
          Get Started
          <RxArrowTopRight className="text-xl" />
        </button>
      </Link>
    </div>
  );
};

export default PricingResidentialCard;
