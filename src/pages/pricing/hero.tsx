import Navbar from "@/components/navbar";

const Hero = () => {
  return (
    <div className="h-[400px] sm:h-[720px] pt-5 bg-center bg-cover pb-9 bg-pricingHeroBg ">
      <div className="container ">
        <Navbar />
      </div>

      <div className="container relative h-[300px] sm:h-[600px]">
        <h1 className="absolute text-5xl font-semibold text-white -translate-y-1/2 sm:text-6xl left-4 top-1/2">
          Pricing
        </h1>
      </div>
    </div>
  );
};

export default Hero;
