import { RxArrowTopRight } from "react-icons/rx";
import logo from "@/assets/logo.png";
import darkLogo from "@/assets/darkLogo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Drawer from "./drawer";
import { AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);

  const suburbsRoute =
    location.pathname.startsWith("/suburbs/") ||
    location.pathname === "/terms-of-service" ||
    location.pathname === "/privacy-policy" ||
    location.pathname === "/waiver" ||
    location.pathname === "/cookies";

  const textStyle = (route: string) => {
    return `${
      location.pathname === route ? "font-bold" : "font-normal"
    } text-lg ${suburbsRoute ? "text-[#040D11]" : "text-white"}  `;
  };

  useEffect(() => {
    if (showDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDrawer]);

  return (
    <div className={`flex items-center justify-between max-xl:gap-2  `}>
      {suburbsRoute ? (
        <Link to={"/"}>
          <img
            src={darkLogo}
            alt="Logo"
            className="max-sm:w-[300px] w-[350px]"
          />
        </Link>
      ) : (
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="max-sm:w-[300px] w-[350px]" />
        </Link>
      )}

      <div className="items-center hidden xl:flex gap-7">
        <Link to={"/"}>
          <p className={textStyle("/")}>Home</p>
        </Link>

        <Link to={"/suburbs"}>
          <p className={textStyle("/suburbs")}>Suburbs</p>
        </Link>

        <Link to={"/pricing"}>
          <p className={textStyle("/pricing")}>Pricing</p>
        </Link>

        <Link to={"/contact-us"}>
          <p className={textStyle("/contact-us")}>Contact</p>
        </Link>
      </div>

      <button className="w-[143px] hidden h-14 border border-[#0B3B4D] bg-white rounded-full  items-center justify-center text-lg font-medium gap-2 text-[#0B3B4D] ">
        Sign In
        <RxArrowTopRight className="text-2xl" />
      </button>

      <div className="max-xl:hidden" />

      <div
        className="p-1.5 backdrop-blur-sm border border-white rounded-xl hidden max-xl:block"
        onClick={() => setShowDrawer(true)}
      >
        <HiOutlineMenuAlt3
          className={`text-3xl ${suburbsRoute ? "text-black" : "text-white"} `}
        />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {showDrawer && <Drawer setShowDrawer={setShowDrawer} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
