import clsx from "clsx";
import React, { FunctionComponent } from "react";

interface TextProps {
  text: string;
  className?: string;
}

const Text: FunctionComponent<TextProps> = ({ text, className }) => {
  return (
    <p className={clsx(className, "text-[#808080] leading-[140%]")}>{text}</p>
  );
};

export default Text;
