/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { cn } from "@/utils/cn";

const NavItems = [
  {
    title: "Home",
    link: "/",
  },
  { title: "About Us", link: "/about-us" },
  { title: "Contact Us", link: "/contact-us" },
  {
    title: "Bootcamps",
    link: "/bootcamps",
  },

  { title: "Log In", link: "#" },
  { title: "Sign Up", link: "#" },
];

function MobileNav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pathname = usePathname();

  const handleClose = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="px-[20px]">
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
        <div className="flex justify-between items-center px-[20px] py-[20px]">
          <div>
            <Image src="/images/logo.png" alt={""} width={80} height={40} />
          </div>
          <div onClick={handleClose}>
            <IoMdClose className="text-[30px]" />
          </div>
        </div>

        <div className="flex flex-col gap-[30px] items-center mt-[32px] ">
          {NavItems.map((item) => (
            <Link href={item.link} key={item.title} onClick={handleClose}>
              <p
                className={cn(
                  "font-[500] text-[14px]",
                  pathname == item.link && "text-[#F77F00]"
                )}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
