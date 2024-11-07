import cleaningCompanyImage from "@/assets/cleaningCompanyImage.png";
import cleaningCompanyImage2 from "@/assets/cleaningCompanyImage2.png";

const CleaningCompany = () => {
  return (
    <div className="container py-12 lg:py-20">
      <h1 className="text-[#040D11] font-semibold text-4xl sm:text-5xl lg:text-6xl">
        Mercer Cleaning Company
      </h1>
      <div className="flex flex-col items-start gap-4 mt-4 xl:gap-8 xl:flex-row ">
        <div className="flex-1 w-full">
          <img
            src={cleaningCompanyImage}
            alt="Cleaning Company Image"
            className="mt-6 max-xl:w-full "
          />
        </div>

        <div className="w-full xl:w-[700px] mt-4">
          <p className="sm:text-lg text-[#040D11]">
            At Mercer Cleaning Company, we understand that a clean home is key
            to your comfort and well-being. As a trusted residential cleaning
            service, we strive to provide exceptional cleaning solutions
            tailored to your needs. Whether you need a one-time deep clean or
            ongoing maintenance, our skilled team approaches each task with
            meticulous care. We use environmentally safe products to ensure not
            only a spotless home but also a healthier space for you and your
            family.
          </p>

          <div className="flex flex-col-reverse items-start gap-4 mt-4 xl:gap-8 sm:flex-row">
            <p className="sm:text-lg text-[#040D11] w-full xl:w-[416px]">
              Our mission is to offer dependable, thorough, and personalized
              services that leave your home immaculate and you at ease. At
              Mercer Cleaning Company, we treat your home like our own, ensuring
              every detail is handled with care and precision.
            </p>

            <div className="max-sm:w-[250px] sm:block hidden max-xl:w-[350px] xl:flex-1">
              <img
                src={cleaningCompanyImage2}
                alt="Cleaning Company Image2"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningCompany;
