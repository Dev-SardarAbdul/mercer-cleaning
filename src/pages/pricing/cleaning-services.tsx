import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import {
  basicData,
  commercialData,
  deepData,
  residentialExtraData,
} from "@/data/swiperData";

const CleaningServices = () => {
  const swiperRef = useRef<any>();
  const [selectedTab, setSelectedTab] = useState("basic");

  const breakPoints = {
    200: {
      slidesPerView: 1.5,
    },

    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3.5,
    },
  };

  const filterData =
    selectedTab === "basic"
      ? basicData
      : selectedTab === "deep"
      ? deepData
      : selectedTab === "extra"
      ? residentialExtraData
      : commercialData;

  return (
    <div className="bg-[#EFF4F3] py-10 lg:py-20">
      <div className="container">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#040D11]  ">
          Our Cleaning Services
        </h1>

        <div className="flex flex-col justify-between gap-4 lg:gap-0 lg:items-center lg:flex-row">
          <div className="flex items-center gap-2 mt-8 sm:gap-4 max-lg:flex-wrap">
            <button
              className={`${
                selectedTab === "basic"
                  ? "text-white border-transparent"
                  : "text-[#0B3B4D] border-[#DBDBDB] bg-transparent"
              } rounded-full h-12 text-base lg:text-lg border transition-all w-fit px-4 sm:px-6 duration-500 font-medium relative isolate`}
              onClick={() => setSelectedTab("basic")}
            >
              Residential Basic
              {selectedTab === "basic" && (
                <motion.span
                  layoutId="pricingOurCleaningServices"
                  transition={{ type: "spring", damping: 12 }}
                  className="bg-[#0B3B4D] absolute rounded-full inset-0 w-full h-full z-[-1]"
                />
              )}
            </button>

            <button
              className={`${
                selectedTab === "deep"
                  ? "text-white border-transparent"
                  : "text-[#0B3B4D] border-[#DBDBDB] bg-transparent"
              } rounded-full h-12 text-base lg:text-lg border transition-all w-fit px-4 sm:px-6 duration-500 font-medium relative isolate`}
              onClick={() => setSelectedTab("deep")}
            >
              Residential Deep
              {selectedTab === "deep" && (
                <motion.span
                  layoutId="pricingOurCleaningServices"
                  transition={{ type: "spring", damping: 12 }}
                  className="bg-[#0B3B4D] absolute rounded-full inset-0 w-full h-full z-[-1]"
                />
              )}
            </button>

            <button
              className={`${
                selectedTab === "extra"
                  ? "text-white border-transparent"
                  : "text-[#0B3B4D] border-[#DBDBDB] bg-transparent"
              } rounded-full h-12 text-base lg:text-lg border transition-all w-fit px-4 sm:px-6 duration-500 font-medium relative isolate`}
              onClick={() => setSelectedTab("extra")}
            >
              Residential Extra
              {selectedTab === "extra" && (
                <motion.span
                  layoutId="pricingOurCleaningServices"
                  transition={{ type: "spring", damping: 12 }}
                  className="bg-[#0B3B4D] absolute rounded-full inset-0 w-full h-full z-[-1]"
                />
              )}
            </button>

            <button
              className={`${
                selectedTab === "commercial"
                  ? "text-white border-transparent"
                  : "text-[#0B3B4D] border-[#DBDBDB] bg-transparent"
              } rounded-full h-12 text-base lg:text-lg border transition-all w-fit px-4 sm:px-6 duration-500 font-medium relative isolate`}
              onClick={() => setSelectedTab("commercial")}
            >
              Commercial
              {selectedTab === "commercial" && (
                <motion.span
                  layoutId="pricingOurCleaningServices"
                  transition={{ type: "spring", damping: 12 }}
                  className="bg-[#0B3B4D] absolute rounded-full inset-0 w-full h-full z-[-1]"
                />
              )}
            </button>
          </div>

          <div className="flex items-end gap-2 max-lg:justify-end lg:items-center">
            <div
              className="size-12 rounded-full border border-[#787A7A] group hover:border-black transition-all duration-500 cursor-pointer flex items-center justify-center"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <IoIosArrowBack className="text-xl text-[#787A7A] group-hover:text-black" />
            </div>
            <div
              className="size-12 rounded-full border border-[#787A7A] group hover:border-black transition-all duration-500 cursor-pointer flex items-center justify-center"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <IoIosArrowForward className="text-xl text-[#787A7A] group-hover:text-black" />
            </div>
          </div>
        </div>

        {selectedTab === "commercial" ? (
          <div className="mt-8 min-h-[400px] sm:min-h-[533px] px-3 border border-[#DFDFDF] rounded-2xl flex items-center justify-center  ">
            <h1 className="text-[#040D11] text-center font-bold text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl">
              Coming Soon
            </h1>
          </div>
        ) : (
          <div className="mt-8">
            <Swiper
              breakpoints={breakPoints}
              spaceBetween={10}
              slidesPerView={3.5}
              className="min-h-[400px] sm:min-h-[533px]"
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {filterData.map((item: any) => (
                <SwiperSlide key={item.id}>
                  <div className="">
                    <img src={item.img} alt="image" />
                    <p className="font-semibold text-[#040D11] text-lg xl:text-2xl pt-3">
                      {item.name}
                    </p>
                    {item?.price && (
                      <p className="mt-1 text-lg text-[#626A6C]">
                        {item?.price}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default CleaningServices;
