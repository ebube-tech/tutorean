import Image from "next/image";
import React from "react";

import NavItem from "@/ui/NavItem";

const NavItems = ["Find a Tutor", "Become a Tutor", "Log In", "Sign Up"];

function Header() {
  return (
    <div className="bg-[#fff] border-b-[1px] border-[#F77F00] mt-[20px] mx-[18px]">
      <div className="hidden lg:flex items-center justify-between h-[110px] mx-auto max-w-[1280px] px-[24px] lg:px-50px">
        <Image src="/images/logo.svg" alt={""} width={155} height={40} />

        <div className=" flex gap-[30px] items-center">
          {NavItems.map((navItem, index) => (
            <div
              className="bg-[#F77F00] px-[44px] py-[11px] bg-[#F77F007A] rounded-[18px]"
              key={index}
            >
              <NavItem label={navItem} href="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
