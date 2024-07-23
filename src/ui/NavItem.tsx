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
      <div className="bg-[#F77F00] px-[44px] py-[11px] bg-[#F77F007A] rounded-[18px]">
        <p className="text-[#000] font-[700]">{label}</p>
      </div>
    </Link>
  );
};

export default NavItem;
