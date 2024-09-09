import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface BootcampFaqTabProps {
  item: {
    title: string;
    content: string;
  };
}

function BootcampFaqTab({ item }: BootcampFaqTabProps) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="border-[1px]  lg:w-[calc((100%/2)-40px)] border-[#00000066] rounded-[10px] p-[20px] relative w-[100%]"
      style={{
        boxShadow: "0px 2.57px 2.57px 0px #00000040",
      }}
    >
      <div className="flex justify-between items-center">
        <p className="text-[#F77F00] font-[700] lg:text-[1.24rem]">
          {item.title}
        </p>

        {showContent && (
          <ChevronUp onClick={() => setShowContent((prev) => !prev)} />
        )}

        {!showContent && (
          <ChevronDown onClick={() => setShowContent((prev) => !prev)} />
        )}
      </div>

      {showContent && (
        <div className="mt-[20px]">
          <p> {item.content}</p>
        </div>
      )}
    </div>
  );
}

export default BootcampFaqTab;
