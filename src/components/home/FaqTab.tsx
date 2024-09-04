"use client";

import React, { FunctionComponent, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { cn } from "@/utils/cn";

interface FaqTabProps {
  title: string;
  content: string;
  className?: string;
}
const FaqTab: FunctionComponent<FaqTabProps> = ({
  title,
  content,
  className,
}) => {
  const [showContent, setShowContent] = useState(false);

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div
      className={cn(
        "rounded-[20px] bg-[#FF6600] py-[20px] px-[35px]  items-center mx-auto w-[100%]",
        className
      )}
    >
      <div
        className="flex  justify-between items-start w-[100%] cursor-pointer gap-[25px]"
        onClick={handleToggleContent}
      >
        <p className="text-[1.25rem] font-[600] text-[#FFF3E5]">{title}</p>

        {!showContent && (
          <IoIosArrowUp
            className="text-[#FFF3E5] text-[1.25rem] font-[600]"
            size={30}
          />
        )}
        {showContent && (
          <IoIosArrowDown
            className="text-[#FFF3E5] text-[1.25rem] font-[600]"
            size={30}
          />
        )}
      </div>
      {showContent && <p className="text-[#FFF3E5] mt-[20px]">{content}</p>}
    </div>
  );
};

export default FaqTab;
