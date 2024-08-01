"use client";

import React, { FunctionComponent, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FaqTabProps {
  title: string;
  content: string;
}
const FaqTab: FunctionComponent<FaqTabProps> = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="rounded-[20px] bg-[#FF6600] py-[20px] px-[35px]  items-center mx-auto max-w-[600px] w-[100%]">
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
