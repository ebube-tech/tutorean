import React from "react";

interface InfoBoxProps {
  text: string;
}

function InfoBox({ text }: InfoBoxProps) {
  return (
    <div
      className="lg:w-[50%] border-[1px] border-[#000] py-[56px] px-[25px] rounded-[10px]"
      style={{
        background: " linear-gradient(180deg, #F77F00 32%, #5C4033 90%)",
      }}
    >
      <p className="text-[#fff] font-[900] text-[1.2rem]">{text}</p>
    </div>
  );
}

export default InfoBox;
