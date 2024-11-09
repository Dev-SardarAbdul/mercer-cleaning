import Navbar from "@/components/navbar";
import { RxArrowTopRight } from "react-icons/rx";
import heroVideo from "@/assets/video/video.mp4";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-between min-h-[80vh] sm:min-h-screen pt-5 pb-9 isolate">
      <div className="absolute top-0 left-0 w-full z-[-1] h-full bg-heroBg bg-cover bg-center bg-no-repeat">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="container flex-1">
        <Navbar />
      </div>

      <div className="container flex flex-col items-start justify-between gap-4 xl:flex-row">
        <h1 className="text-3xl sm:text-5xl  font-semibold !leading-snug text-white 2xl:text-6xl">
          Your Trusted Residential <br className="max-md:hidden" /> Cleaning
          Service
        </h1>

        <div className="w-full xl:w-[600px]">
          <p className="text-white sm:text-lg">
            Reliable, professional, and detailed house cleaning services
            customized to your needs. We take care of the cleaning, so you can
            relax and enjoy a spotless, cozy home.
          </p>

          <button className="w-[150px] sm:w-[182px] mt-4 h-12 sm:h-14 border border-[#0B3B4D] bg-white rounded-full flex items-center justify-center sm:text-lg font-medium gap-2 text-[#0B3B4D] ">
            Learn More
            <RxArrowTopRight className="text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
