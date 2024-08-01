import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileNav from "@/layout/MobileNav";
import NavItem from "@/ui/NavItem";
const NavItems = [
  { title: "About Us", link: "/about-us" },
  { title: "Contact Us", link: "/contact-us" },
  { title: "Log In", link: "#" },
  { title: "Sign Up", link: "#" },
];

function Header() {
  return (
    <div className="bg-[#fff] border-b-[1px] border-[#F77F00] lg:mt-[20px] lg:mx-[18px] ">
      <div className="lg:hidden">
        <MobileNav />
      </div>

      <div className="hidden lg:flex items-center justify-between h-[110px] mx-auto max-w-[1280px] px-[24px] lg:px-50px">
        <Link href="/">
          <Image src="/images/logo.png" alt={""} width={155} height={40} />
        </Link>

        <div className=" flex gap-[30px] items-center">
          {NavItems.map((navItem, index) => (
            <div
              key={index}
              className="bg-[#F77F00] px-[44px] h-[46px] flex items-center rounded-[18px]"
            >
              <NavItem
                label={navItem.title}
                href={navItem.link}
                className="px-[12px] py-[11px]rounded-[18px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
