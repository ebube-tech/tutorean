/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ScholarshipTabProps {
  title: string;
  img?: string;
  content: string;
}

function ScholarshipTab({ title, img, content }: ScholarshipTabProps) {
  return (
    <div
      className="border-[1px]  lg:w-[calc((100%/2)-40px)] border-[#00000066] rounded-[10px] p-[20px] relative pb-[80px]"
      style={{
        boxShadow: "0px 2.57px 2.57px 0px #00000040",
      }}
    >
      <p className="text-[#F77F00] font-[700] text-[1.24rem]">{title}</p>

      <div className="flex gap-[30px] mt-[20px] flex-col lg:flex-row">
        {img && (
          <img
            src={img}
            alt={title}
            className="object-contain w-[100%] lg:w-[230px] h-[300px]"
          />
        )}
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ScholarshipTab;
