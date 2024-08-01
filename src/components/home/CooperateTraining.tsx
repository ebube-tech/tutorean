/* eslint-disable @next/next/no-img-element */
import React from "react";

function CooperateTraining() {
  return (
    <div className="px-[28px] pt-[158px] pb-[100px]">
      <div className="  bg-[#5C4033] flex flex-col lg:flex-row px-[20px]  gap-[20px] py-[150px] items-start justify-center rounded-[12px] lg:rounded-[62px] gap-[84px] ">
        <img
          src="/images/cooperate-training.png"
          alt=""
          className="w-[100%] lg:w-[auto] rounded-[8px]"
        />

        <div className="max-w-[800px]">
          <p className="text-[2rem] font-[700] leading-[38.73px] text-[#fff]">
            Interested in Corporate Training for your Organization?
          </p>

          <p className="text-[#fff] mt-[32px] lg:text-[1.25rem]">
            Satisfied students and tutors on Tutlee share their experience. They
            share how their individual journeys have been transformed by their
            use of Tutlee
          </p>

          <button className="bg-[#F77F00] px-[32px] py-[10px] rounded-[20px] mt-[32px]">
            <p className="text-[#fff] font-[600] lg:text-[1.25rem]">
              Talk to Us
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CooperateTraining;
