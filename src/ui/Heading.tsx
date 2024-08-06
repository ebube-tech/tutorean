import clsx from "clsx";
import React, { FunctionComponent } from "react";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: FunctionComponent<HeadingProps> = ({ text, className }) => {
  return (
    <h1
      className={clsx(
        "text-[#000] text-[2rem] leading-[140%] lg:text-[3.438rem] font-[700] lg:leading-[66.56px] text-center",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default Heading;
