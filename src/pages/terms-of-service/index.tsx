import Navbar from "@/components/navbar";
import { termServicesData } from "@/data/terms-servics-data";
import { tableOfContents } from "@/data/terms-table-data";

const TermsOfService = () => {
  return (
    <div className="container pt-5">
      <Navbar />

      <div className="pt-12">
        <h1 className="text-3xl font-semibold text-black sm:text-4xl">
          Terms of Service
        </h1>

        <p className="text-black sm:text-lg">
          <br />
          <span className="pt-4 font-medium">
            Last updated September 10, 2024{" "}
          </span>{" "}
          <br /> <br /> <strong> AGREEMENT TO OUR LEGAL TERMS </strong> <br />{" "}
          We are <strong> Mercer Cleaning Company LLC </strong> (“Company,”
          “we,” “us,” “our“), a company registered in New Jersey, United States.
          <br /> We operate the website{" "}
          <span className="text-[#1155CC] underline cursor-pointer font-medium">
            mercercleaningcompany.com
          </span>{" "}
          (the “Site“), as well as any other related products and services that
          refer or link to these legal terms (the “Legal Terms“) (collectively,
          the “Services“). <br /> <br /> You can contact us by email at
          <strong> hello@mercercleaningcompany.com</strong>, or by mail to{" "}
          <strong>
            {" "}
            1246 River Road, Titusville, NJ, 08560, United States
          </strong>
          .
          <br /> These Legal Terms constitute a legally binding agreement made
          between you, whether personally or on behalf of an entity (“you“), and
          <strong> Mercer Cleaning Company LLC</strong>, concerning your access
          to and use of the Services. By accessing the Services, you have read,
          understood, and agreed to be bound by these Legal Terms.
          <br /> <br /> IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN
          YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND MUST
          DISCONTINUE USE IMMEDIATELY. <br /> <br /> Supplemental terms and
          conditions or documents that may be posted on the Services from time
          to time are hereby expressly incorporated herein by reference. We
          reserve the right to make changes or modifications to these Legal
          Terms at any time and for any reason. We will alert you to any changes
          by updating the “Last updated” date of these Legal Terms, and you
          waive any right to receive specific notice of each such change. It is
          your responsibility to periodically review these Legal Terms to stay
          informed of updates. By your continued use of the Services, you will
          be deemed to have accepted the changes to these Legal Terms.
          <br /> <br /> The Services are intended for users who are at least 18
          years old. Persons under the age of 18 are not permitted to use or
          register for the Services.
          <br /> <br /> We recommend that you print a copy of these Legal Terms
          for your records.
        </p>

        <div className="w-full h-[1px] bg-[#0B3B4D] my-9 " />

        <h2 className="text-xl font-semibold text-black sm:text-2xl">
          TABLE OF CONTENTS
        </h2>

        <div className="pt-4">
          {tableOfContents.map((text, index) => (
            <p className="ps-2 sm:ps-8">
              {index + 1}. {text}
            </p>
          ))}
        </div>

        <div className="w-full h-[1px] bg-[#0B3B4D] my-9 " />

        <div className="flex flex-col gap-4">
          {termServicesData.map((text) => (
            <>
              <h3
                className="text-xl font-semibold text-black sm:text-2xl"
                key={text.id}
              >
                {text.id}. {text.header}
              </h3>
              <p className="text-black ">{text.text}</p>
            </>
          ))}
          <div>
            <h3 className="text-xl font-semibold text-black sm:text-2xl">
              30. CONTACT US
            </h3>
            <p className="pt-4 text-black">
              For any questions regarding these Legal Terms, please contact us
              at: <br />
              <strong>Mercer Cleaning Company LLC</strong>
              <br />
              <strong>
                1246 River Road, Titusville, NJ, 08560, United States
              </strong>
              <br />
              <strong>hello@mercercleaningcompany.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
