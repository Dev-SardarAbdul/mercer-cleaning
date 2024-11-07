import getInTouchImg from "@/assets/getInTouchImg.png";
import InputComp from "@/components/input";
import { RxArrowTopRight } from "react-icons/rx";

const GetInTouch = () => {
  return (
    <div className="container py-10 lg:py-20">
      <div className="flex items-center xl:gap-6 2xl:gap-12">
        <div>
          <img
            src={getInTouchImg}
            alt="Get InTouch Img"
            className="max-xl:hidden"
          />
        </div>

        <div className="flex-1">
          <h1 className="font-semibold text-[#040D11] text-5xl sm:text-6xl">
            Get In Touch
          </h1>

          <div className="flex flex-col gap-4 mt-6 xl:gap-6">
            <div className="flex flex-col w-full gap-4 sm:items-center sm:flex-row 2xl:gap-8">
              <div className="flex flex-col flex-1 gap-2">
                <label className="text-[#000000] text-lg sm:text-xl ">
                  First Name
                </label>
                <InputComp placeholder="Enter your first name" type="text" />
              </div>

              <div className="flex flex-col flex-1 gap-2">
                <label className="text-[#000000] text-lg sm:text-xl ">
                  Last Name
                </label>
                <InputComp placeholder="Enter your last name" type="text" />
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-2">
              <label className="text-[#000000] text-lg sm:text-xl ">
                Email
              </label>
              <InputComp placeholder="Enter your email" type="email" />
            </div>

            <div className="flex flex-col flex-1 gap-2">
              <label className="text-[#000000] text-lg sm:text-xl ">
                Message
              </label>
              <textarea
                placeholder="Type your message here..."
                className="text-[#666666] border border-[#E1E1E1] px-4 min-h-[120px] py-3 resize-none focus:outline-none rounded-2xl placeholder:text-[666666] placeholder:text-opacity-40 "
              />
            </div>
          </div>

          <button className="w-[143px] h-14 bg-[#0B3B4D] text-white mt-8 rounded-full flex items-center justify-center text-lg font-medium gap-2">
            Submit
            <RxArrowTopRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
