import React from "react";

interface InfoBoxProps {
  text: string;
}

function InfoBox({ text }: InfoBoxProps) {
  return (
    <div className="lg:w-[50%] bg-[#FF6600] border-[1px] border-[#000] py-[56px] px-[85px] rounded-[10px]">
      <p className="text-[#fff] font-[900] text-[1.2rem]">{text}</p>
    </div>
  );
}

export default InfoBox;
