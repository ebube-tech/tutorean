/* eslint-disable @next/next/no-img-element */
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

import ListItems from "./ListItems";

const Stats = [
  " 200,567+   5-star reviews",
  " 1300+ tutors use us",
  "40+ subjects available",
  " 300,709+ students",
];

function HeroSection() {
  return (
    <Container>
      <div className="lg:mt-[156px] mt-[80px]"></div>

      <div className="flex lg:flex-row flex-col items-center xl:gap-[219px] gap-[20px]">
        <div className="mr-[20px]">
          <h1 className="xl:max-w-[690px] font-[700] text-[3.438rem] leading-[120%] text-[#F77F00] lg:leading-[66.56px]">
            Grow one lesson at a time on Tutorean
          </h1>
          <div className="xl:w-[731px] flex flex-col gap-[13px] flex-none mt-[44px]">
            <ListItems text="Personalized 1-on-1 lessons, trusted by millions of learners in Africa" />
            <ListItems
              text="Learn from certified experts who match your budget and schedule.
"
            />
            <ListItems text="Join a global community of passionate learners and skilled instructors." />
          </div>

          <div className="mt-[46px] lg:flex">
            <button className="bg-[#5C4033] rounded-[30px] px-[42px] py-[20px] flex items-center justify-center ">
              <p className="font-[700] text-[1rem] text-[#fff]">GET STARTED</p>
            </button>
          </div>
        </div>

        <div className="w-[372px] flex-none relative bg-[#fff] rounded-[80px] h-[303px] mt-[100px]">
          <div className="w-[372px] flex-none relative bg-[#F77F00] rounded-[80px] h-[303px] -mt-[21px] -ml-[24px]">
            <img
              src="/images/students.png"
              alt=""
              className="absolute -bottom-[20px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <Heading text=" Get Tutored by expert professionals and peers from across the world" />

        <div className="mt-[57px] bg-[#F77F00] px-[68px] rounded-[30px] w-[100%] flex flex-col lg:flex-row gap-[30px] py-[20px] lg:h-[121px] items-center justify-between">
          {Stats.map((stats, index) => (
            <p key={index} className="text-[#fff] lg:text-[1.25rem] font-[700]">
              {stats}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
