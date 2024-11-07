import Navbar from "@/components/navbar";
import { suburbData } from "@/data/suburbs-data";
import { useParams } from "react-router-dom";

const SuburbsDetail = () => {
  let { type } = useParams();

  function convertToTitleCase(text: string) {
    return text
      .replace(/-/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  const filteredName = convertToTitleCase(type!);

  const filteredContent = suburbData.find((data) => data.name === filteredName);

  return (
    <div className="container pt-5">
      <Navbar />
      <div className="w-full mt-12 prose prose-lg prose:w-full max-w-max prose-li:marker:text-[#0B3B4D]">
        <div dangerouslySetInnerHTML={{ __html: filteredContent!.content }} />
      </div>
    </div>
  );
};

export default SuburbsDetail;
