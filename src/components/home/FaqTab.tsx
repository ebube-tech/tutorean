import React, { FunctionComponent } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface FaqTabProps {
  title: string;
  content: string;
}
const FaqTab: FunctionComponent<FaqTabProps> = ({ title, content }) => {
  return (
    <div className="rounded-[20px] bg-[#FF6600] h-[70px] px-[35px] flex items-center mx-auto max-w-[600px] w-[100%]">
      <div className="flex justify-between items-center w-[100%]">
        <p className="text-[1.25rem] font-[600] text-[#FFF3E5]">{title}</p>

        <IoIosArrowUp className="text-[#FFF3E5] text-[1.25rem] font-[600]" />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default FaqTab;
