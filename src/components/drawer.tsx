"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";

interface DrawerTypes {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ setShowDrawer }: DrawerTypes) => {
  const location = useLocation();

  return (
    <motion.div
      className="fixed flex justify-end items-center inset-0 w-full h-screen bg-white bg-opacity-30 backdrop-blur-sm z-[200]"
      onClick={() => setShowDrawer(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.25 }}
        className="h-full bg-[#EFF4F3] border-l-2 border-primary border-[#ffffff1e] p-4 w-60 "
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="text-2xl text-black cursor-pointer"
          onClick={() => setShowDrawer(false)}
        />

        <div className="flex flex-col gap-4 mt-4 ">
          <Link to={"/"}>
            <p
              className={`${
                location.pathname === "/" ? "font-bold" : "font-normal"
              } text-lg text-[#0B3B4D]`}
            >
              Home
            </p>
          </Link>

          <Link to={"/suburbs"}>
            <p
              className={`${
                location.pathname === "/suburbs" ? "font-bold" : "font-normal"
              } text-lg text-[#0B3B4D]`}
            >
              Suburbs
            </p>
          </Link>

          <Link to={"/pricing"}>
            <p
              className={`${
                location.pathname === "/pricing" ? "font-bold" : "font-normal"
              } text-lg text-[#0B3B4D]`}
            >
              Pricing
            </p>
          </Link>

          <Link to={"/contact-us"}>
            <p
              className={`${
                location.pathname === "/contact-us"
                  ? "font-bold"
                  : "font-normal"
              } text-lg text-[#0B3B4D]`}
            >
              Contact
            </p>
          </Link>
        </div>

        <button className="w-full  h-12 mt-5 hidden border border-[#0B3B4D] bg-white rounded-full  items-center justify-center text-lg font-medium gap-2 text-[#0B3B4D] ">
          Sign In
          <RxArrowTopRight className="text-2xl" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
