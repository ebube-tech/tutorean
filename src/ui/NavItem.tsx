"use client";

import clsx from "clsx";
import React, { FunctionComponent } from "react";

interface NavItemProps {
  label: string;
  className?: string;
}
const NavItem: FunctionComponent<NavItemProps> = ({ label, className }) => {
  return (
    <div className={clsx("", className)}>
      <div className="">
        <p className="text-[#000] font-[700]">{label}</p>
      </div>
    </div>
  );
};

export default NavItem;
