/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function MobileNav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClose = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center">
        <Image src="/images/logo.png" alt={""} width={80} height={40} />
        <CiMenuFries onClick={() => setShowMobileMenu(!showMobileMenu)} />
      </div>

      <div
        className={clsx("z-40 flex flex-col bg-[#fff] ")}
        style={{
          zIndex: 100,
          position: "fixed",
          right: 0,
          left: 0,
          bottom: 0,
          top: 0,
          transform: `translateY(${showMobileMenu ? "0" : "-130vh"})`,
          transition: "all 0.5s ease-in-out",
        }}
      >
        <div className="flex justify-between px-[20px] py-[20px]">
          <div>
            <Image src="/images/logo.png" alt={""} width={80} height={40} />
          </div>
          <div onClick={handleClose}>
            <IoMdClose className="text-[30px]" />
          </div>
        </div>

        <div className="flex flex-col gap-[30px] items-center mt-[32px] ">
          <a>
            <p className="font-[500] text-[14px]">Home</p>
          </a>
          <Link href={"/about-us"} onClick={handleClose}>
            <p className="font-[500] text-[14px]">About Us</p>
          </Link>

          <Link href={"/contact-us"} onClick={handleClose}>
            <p className="font-[500] text-[14px]">Contact Us</p>
          </Link>
          <Link href={"#"}>
            <p className="font-[500] text-[14px] border-[2px] py-[10px] px-[20px] rounded-[5px]">
              Login
            </p>
          </Link>
          <Link href={"#"}>
            <p className="font-[500] text-[14px] border-[2px] py-[10px] px-[20px] rounded-[5px]">
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
