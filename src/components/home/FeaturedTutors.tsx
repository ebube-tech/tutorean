import Image from "next/image";
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

function FeaturedTutors() {
  return (
    <Container>
      <div className="pt-[85px]">
        <div className="">
          <Heading text=" Featured Tutors" />

          <div className="flex justify-between flex-wrap">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-[280px] mt-[60px] leading-[24.2px] text-[1.35rem]"
              >
                <Image
                  height={250}
                  width={250}
                  src="/images/tutor.png"
                  alt=""
                  className=" rounded-[50%] border-[18px] border-[#F77F00]"
                />
                <div className="mt-[55px] max-w-[250px] text-center">
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

export default FeaturedTutors;
