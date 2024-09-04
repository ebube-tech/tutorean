"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { FunctionComponent } from "react";

import { cn } from "@/utils/cn";

interface NavItemProps {
  label: string;
  className?: string;
  href: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({
  label,
  className,
  href,
}) => {
  const pathname = usePathname();

  return (
    <div className={clsx("", className)}>
      <div className="">
        <p
          className={cn(
            "text-[#000] font-[700]",
            pathname == href && "text-[#F77F00]"
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default NavItem;
