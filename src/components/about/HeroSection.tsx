/* eslint-disable @next/next/no-img-element */
import React from "react";

import Container from "@/ui/Container";

function HeroSection() {
  return (
    <Container>
      <div className="mt-[156px]"></div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-[40px]">
        {/* Text Content */}
        <div className="lg:max-w-[50%]">
          <h1 className="max-w-[1000px] font-bold text-3xl lg:text-5xl text-[#F77F00] lg:leading-[66.56px] mb-8">
            With Tutlee, knowledge meets potential
          </h1>
          <p className="text-lg lg:text-xl  lg:text-left mb-8">
            Join us as a tutor and guide students on the educational path, share
            your expertise and availability, and make a meaningful impact!
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="bg-[#5C4033] rounded-[30px] px-[32px] py-[8px] lg:py-[16px] flex items-center justify-center">
              <p className="lg:font-bold lg:text-lg text-white text-[0.865rem]">
                DISCOVER THE BENEFITS
              </p>
            </button>
            <button className="bg-[#5C4033] rounded-[30px] px-[32px] lg:py-[16px] flex items-center justify-center py-[8px]  flex-none">
              <p className="lg:font-bold lg:text-lg text-white text-[0.865rem]">
                SIGN UP
              </p>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 lg:mt-0 lg:max-w-[50%]">
          <img
            src="/images/heroSection.png"
            alt="Hero Image"
            className="object-cover rounded-[20px] w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-16">
        <p className="text-3xl lg:text-5xl text-[#000] font-bold text-center leading-[58.09px] mb-8">
          Sign With Our Community of TUTORS
        </p>
        <p className="text-lg lg:text-xl text-center lg:text-left mb-8">
          Join us as a tutor and guide students on the educational path, share
          your expertise and availability, and make a meaningful impact!
        </p>
      </div>
    </Container>
  );
}

export default HeroSection;
