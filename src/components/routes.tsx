import App from "@/App";
import ContactUs from "@/pages/contact-us";
import Cookies from "@/pages/cookies";
import Home from "@/pages/home";
import Pricing from "@/pages/pricing";
import PrivacyPolicy from "@/pages/privacy-policy";
import Suburbs from "@/pages/suburbs";
import SuburbsDetail from "@/pages/suburbs-detail";
import TermsOfService from "@/pages/terms-of-service";
import Waiver from "@/pages/waiver";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/suburbs" element={<Suburbs />} />
      <Route path="/suburbs/:type" element={<SuburbsDetail />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/waiver" element={<Waiver />} />
    </Route>
  )
);

export default router;
