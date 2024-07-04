// import Image from "next/image";
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

function WhyChooseUs() {
  return (
    <Container>
      <div className="pt-[108px] pb-[100px]">
        <div className="">
          <Heading text=" What they say about Tutorean As Featured" />
          <p className="leading-[24.2px] text-center text-[1.35rem] mt-[27px] max-w-[837px] mx-auto">
            Satisfied students and tutors on Tutorean share their experience on
            the platform. They share how their individual journeys have been
            transformed by their use of Tutorean{" "}
          </p>
          <div className="flex justify-between flex-wrap justify-between gap-[20px]">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="mt-[60px] leading-[24.2px] text-[1.35rem]"
              >
                <div className=" border-[#FF6600] border-[18px] rounded-[20px] bg-[url('/images/lesson.png')] w-[350px] h-[204px] bg-cover">
                  {/* <Image
                    height={204}
                    width={350}
                    alt=""
                    src="/images/lesson.png"
                    className=""
                  /> */}
                </div>
                <div
                  className=" mt-[24px] max-w-[250px] 
                mx-auto
                text-center"
                >
                  <p className="font-[700]">James Adolf</p>
                  <p className="mt-[11px] text-[0.865rem]">
                    <span className="font-[700]">Algebra</span>
                    <span className="pl-[15px] text-[#3A3A3A] ">
                      (512 Reviews)
                    </span>
                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className="mt-[12px] text-[0.865rem] font-[700]">Spain</p>
                  <p className="mt-[8px] text-[#3A3A3A] text-[0.865rem] leading-[140%]">
                    With over 5 years of experience as a tutor, I teach my
                    students to succeed
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WhyChooseUs;
