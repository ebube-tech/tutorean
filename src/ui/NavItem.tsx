"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { FunctionComponent } from "react";

interface NavItemProps {
  label: string;
  href: string;
  className?: string;
}
const NavItem: FunctionComponent<NavItemProps> = ({
  label,
  href,
  className,
}) => {
  return (
    <Link href={href} className={clsx("", className)}>
      <div
        className="bg-[#F77F00] bg-[#F77F007A] rounded-[18px]"
        style={{
          height: 46,
          display: "flex",
          alignItems: "center",
          padding: "0px 15px",
          borderRadius: 10,
        }}
      >
        <p className="text-[#000] font-[700] text-[0.865rem]">{label}</p>
      </div>
    </Link>
  );
};

export default NavItem;
