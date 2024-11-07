import Navbar from "@/components/navbar";
import { privacyPolicyContent } from "@/data/privacy-policy";

const PrivacyPolicy = () => {
  return (
    <div className="container pt-5">
      <Navbar />

      <div className="w-full mt-12 prose prose-lg prose:w-full max-w-max prose-li:marker:text-[#0B3B4D]">
        <div
          dangerouslySetInnerHTML={{ __html: privacyPolicyContent!.content }}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
