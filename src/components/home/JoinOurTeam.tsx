/* eslint-disable @next/next/no-img-element */
import React from "react";

function JoinOurTeam() {
  return (
    <div className="px-[28px]">
      <div className="h-[720px]  lg:bg-[url('/images/office.png')] bg-no-repeat bg-cover flex  items-center justify-center rounded-[62px]">
        <div className="bg-[#F77F00] rounded-[40px] flex overflow-hidden flex-col lg:flex-row p-[20px] gap-[20px]">
          <div className="pl-[44px] pr-[18px] text-[#fff] pt-[72px]">
            <p className="text-[2rem] font-[700] leading-[38.73px]">
              Join our team of qualified <br />
              Tutors today
            </p>

            <p className="mt-[24px] max-w-[343px] text-[#F5F2F2] text-[0.825rem]">
              Join the Tutoring Revolution and transform lives. Enjoy the
              freedom to set your own tutoring hours and work from anywhere.
              Enjoy great earning potential. Don’t miss out.
            </p>
          </div>
          <div>
            <img src="/images/laugh.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinOurTeam;
