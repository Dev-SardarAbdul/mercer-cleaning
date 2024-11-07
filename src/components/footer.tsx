import logo from "@/assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import footerIcon from "@/assets/footerIcon.svg";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#0B3B4D] mt-12">
      <div className="container grid justify-between grid-cols-1 gap-8 pt-8 md:grid-cols-2 xl:grid-cols-3 sm:pt-14 ">
        <div className="flex-1">
          <img src={logo} alt="logo" className="max-sm:w-[350px]" />

          <div className="flex items-center gap-3 sm:gap-5 mt-9">
            <div className="flex items-center justify-center border border-white rounded-full cursor-pointer size-10 sm:size-14">
              <FaFacebookF className="text-lg text-white sm:text-2xl" />
            </div>
            <div className="flex items-center justify-center border border-white rounded-full cursor-pointer size-10 sm:size-14">
              <FaInstagram className="text-lg text-white sm:text-2xl" />
            </div>
            <div className="flex items-center justify-center border border-white rounded-full cursor-pointer size-10 sm:size-14">
              <FaLinkedinIn className="text-lg text-white sm:text-2xl" />
            </div>
            <div className="flex items-center justify-center border border-white rounded-full cursor-pointer size-10 sm:size-14">
              <FaTiktok className="text-lg text-white sm:text-2xl" />
            </div>
            <div className="flex items-center justify-center border border-white rounded-full cursor-pointer size-10 sm:size-14">
              <img
                src={footerIcon}
                alt="Footer Icon"
                className="max-sm:w-[15px]"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 md:ms-10 2xl:ms-20">
          <h1 className="text-2xl font-medium text-white">Contact</h1>

          <div className="flex flex-col gap-3 mt-8">
            <div className="border-t border-[#28505E] pt-3 cursor-pointer flex items-center justify-between ">
              <p className="text-lg text-[#CED8DB] sm:text-xl">Yelp.com</p>

              <HiArrowRight className="text-2xl text-white sm:text-3xl" />
            </div>
            <div className="border-t border-[#28505E] pt-3 cursor-pointer flex items-center justify-between ">
              <p className="text-lg text-[#CED8DB] sm:text-xl">
                (609) 631-5483
              </p>

              <HiArrowRight className="text-2xl text-white sm:text-3xl" />
            </div>
            <div className="border-t border-[#28505E] pt-3 cursor-pointer gap-1.5  flex items-start justify-between ">
              <p className="text-[#CED8DB] max-w-2xl:text-sm break-all">
                <a href="mailto:hello@mercercleaningcompany.com">
                  hello@mercercleaningcompany.com
                </a>
              </p>

              <HiArrowRight className="flex-shrink-0 text-2xl text-white sm:text-3xl" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 xl:items-end">
          <div className="flex flex-col gap-4">
            <Link to={"/terms-of-service"}>
              <p className="text-lg text-[#CED8DB] font-normal sm:text-xl">
                Terms of Service
              </p>
            </Link>
            <Link to={"/privacy-policy"}>
              <p className="text-lg text-[#CED8DB] font-normal sm:text-xl">
                Privacy Policy
              </p>
            </Link>

            <Link to={"/cookies"}>
              <p className="text-lg text-[#CED8DB] font-normal sm:text-xl">
                Cookies
              </p>
            </Link>

            <Link to={"/waiver"}>
              <p className="text-lg text-[#CED8DB] font-normal sm:text-xl">
                Waiver
              </p>
            </Link>
            <p className="text-lg text-[#CED8DB] font-normal sm:text-xl">
              Booking Fee Link
            </p>
            <p className="text-lg text-[#CED8DB] font-normal sm:text-xl">
              Share Your Feedback!
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#45646F] mt-8 py-5">
        <p className="sm:text-lg text-center text-[#CED8DB] px-4">
          © {currentYear} Mercer Cleaning Company LLC. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
