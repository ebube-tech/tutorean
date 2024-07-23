import Image from "next/image";
import React from "react";

import MobileNav from "@/layout/MobileNav";
import NavItem from "@/ui/NavItem";
const NavItems = [
  { title: "Find a Tutor", link: "" },
  { title: "Become a Tutor", link: "tutor_registration" },
  { title: "Log In", link: "login" },
  { title: "Sign Up", link: "tutor_registration" },
];

function Header() {
  return (
    <div className="bg-[#fff] border-b-[1px] border-[#F77F00] lg:mt-[20px] lg:mx-[18px] ">
      <div className="lg:hidden">
        <MobileNav />
      </div>

      <div className="hidden lg:flex items-center justify-between h-[110px] mx-auto max-w-[1280px] px-[24px] lg:px-50px">
        <Image src="/images/logo.svg" alt={""} width={155} height={40} />

        <div className=" flex gap-[30px] items-center">
          {NavItems.map((navItem, index) => (
            <div key={index}>
              <NavItem label={navItem.title} href={navItem.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
