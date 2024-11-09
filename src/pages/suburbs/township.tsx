import { suburbData } from "@/data/suburbs-data";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const Township = () => {
  return (
    <div className="container py-10 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {suburbData.map((data, index) => {
          function convertText(text: string) {
            return text.toLowerCase().replace(/\s+/g, "-");
          }

          const route = convertText(data.name);

          return (
            <div
              className={` ${index % 3 ? "lg:border-l" : ""}  ${
                index === 12 ? "border-b-none border-r" : "border-b"
              } ${
                index % 2 ? "" : "max-sm:border-r-transparent max-lg:border-r"
              }  border-[#D9D9D9]  sm:px-4 py-4 sm:py-8`}
              key={index}
            >
              <h1 className="text-[#040D11] font-semibold text-2xl sm:text-3xl">
                {data?.name}
              </h1>
              <div
                className="text-[#040D11] line-clamp-2 pt-2 font-light text-lg"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />

              <Link to={`/suburbs/${route}`}>
                <button className="flex items-center mt-4 gap-2 font-medium text-[#0B3B4D] text-lg">
                  Read More
                  <RxArrowTopRight className="text-xl" />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Township;
