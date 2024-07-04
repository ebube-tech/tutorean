import Image from "next/image";
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

function TutorSearch() {
  return (
    <div className="pt-[96px]">
      <Container>
        <div className="w-[100%] rounded-[30px] pt-[46px] pb-[53px]">
          <Heading text=" Search for a tutor perfect for you" />

          <div className="mt-[57px] flex rounded-[20px] border-[#F77F00] bg-[#fff] border-[1px] overflow-hidden max-w-[1073px] mx-[auto] justify-between">
            <input
              type="text"
              className="w-[100%] px-[22px] py-[16px] text-[#000] text-[1.625rem] focus:outline-[none]"
              placeholder="Explore by Grade, Subject,Specialization"
            />
            <Image
              src="/images/searchIcon.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="mt-[58px] flex justify-center gap-[141px]">
            <div className="w-[464px] rounded-[20px] border-[#F77F00] bg-[#fff] border-[1px] pl-[35px] h-[76px] flex items-center">
              <input
                className="text-[1.25rem] font-[700] text-[#00000066]"
                placeholder="Grade Level"
              />
            </div>
            <div className="w-[464px] rounded-[20px] bg-[#fff] border-[#F77F00] border-[1px] pl-[35px] h-[76px] flex items-center">
              <input
                className="text-[1.25rem] font-[700] text-[#00000066]"
                placeholder="Location"
              />
            </div>
          </div>

          <div className="mt-[36px] flex pl-[60px] pr-[px] gap-[37px] flex-wrap">
            {Array.from({ length: 18 }).map((_, index) => (
              <div
                key={index}
                className="w-[157px] h-[52px]  rounded-[20px] flex items-center border-[1px] bg-[#FFF3E566] justify-center"
              >
                <p className="font-[700] text-[1.25rem] text-[#F77F00CC]">
                  Python
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TutorSearch;
