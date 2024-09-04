import clsx from "clsx";
import React, { FunctionComponent } from "react";

import Spinner from "./Spinner";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  isLoading,
  onClick,
  type = "submit",
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick || (() => {})}
      type={type}
      className={clsx("text-[#fff] outline-none border-0", className)}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
