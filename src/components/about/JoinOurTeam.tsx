/* eslint-disable @next/next/no-img-element */
import React from "react";

function JoinOurTeam() {
  return (
    <div className="px-[28px]">
      <div className="h-[720px]  bg-[url('/images/office.png')] bg-no-repeat bg-cover flex items-center justify-center rounded-[62px]">
        <div className="bg-[#F77F00] rounded-[40px] flex overflow-hidden">
          <div className="pl-[44px] pr-[18px] text-[#fff] pt-[72px]">
            <p className="text-[2rem] font-[700] leading-[38.73px]">
              Join our team of qualified <br />
              Tutors today
            </p>

            <p className="mt-[24px] max-w-[343px] text-[#F5F2F2] text-[0.825rem]">
              Lorem ipsum dolor sit amet consectetur. Sed aliquam vel a egestas
              in. Elit dui pellentesque amet erat facilisis. Lacinia nibh
              facilisis varius interdum pretium nunc quis. Justo orci facilisi
              quis.
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
