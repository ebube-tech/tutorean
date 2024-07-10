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
      <p className="text-[#000] font-[700]">{label}</p>
    </Link>
  );
};

export default NavItem;
