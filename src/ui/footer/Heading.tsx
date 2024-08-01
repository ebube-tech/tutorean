import clsx from "clsx";
import React, { FunctionComponent } from "react";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: FunctionComponent<HeadingProps> = ({ text, className }) => {
  return (
    <p
      className={clsx(
        "text-[#000] text-[1rem] leading-[140%]  font-[700]",
        className
      )}
    >
      {text}
    </p>
  );
};

export default Heading;
