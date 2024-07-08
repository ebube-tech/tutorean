/* eslint-disable @next/next/no-img-element */
import React from "react";

import Container from "@/ui/Container";
import ListItems from "./ListItems";

const Stats = [
  "200,567+ 5-star reviews",
  "1300+ tutors use us",
  "40+ subjects available",
  "300,709+ students",
];

function HeroSection() {
  return (
    <Container>
      <div className="mt-[156px]"></div>

      <div className="flex lg:flex-row flex-col items-center lg:gap-[219px]">
        <div>
        <h1 className="max-w-[1000px] font-[700] text-[3.438rem] text-[#F77F00] leading-[66.56px]">
            With Tutorean, knowledge meets potential
          </h1>


<div className="flex lg:flex-row flex-col items-center lg:gap-[219px]">
<p >Join us as a tutor and guide students on the 
  educational path,share your expertise and availability, and make a meaningful impact!
</p>
</div>
          <div className="mt-[46px] flex gap-[20px]">
            <button className="bg-[#5C4033] rounded-[30px] px-[42px] py-[20px] flex items-center justify-center">
              <p className="font-[700] text-[1rem] text-[#fff]">DISCOVER THE BENEFITS</p>
            </button>
            <button className="bg-[#5C4033] rounded-[30px] px-[42px] py-[20px] flex items-center justify-center">
              <p className="font-[700] text-[1rem] text-[#fff]">SIGN UP</p>
            </button>
          </div>
        </div>

        <div className="mt-[36px] lg:mt-0">
          <img
            src="/images/heroSection.png"
            alt="Hero Image"
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>

    

      <div className="mt-[100px]">
        <p className="text-[3rem] text-[#000] font-[700] text-center leading-[58.09px]">
         Sign With Our Community of TUTORS
        </p>


        <div className="  text-center leading-[30.09px]">
<p >Join us as a tutor and guide students on the 
  educational path,share your expertise and availability, and make a meaningful impact!
</p>


      </div>
      </div>
    </Container>
  );
}

export default HeroSection;
