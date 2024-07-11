import Image from "next/image";
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

function TutorSearch() {
  return (
    <div className="pt-0">
      <Container>
        <div className="w-full rounded-[30px] pt-[46px] pb-[53px]">
          {/* First Image Section */}
          <div className="mt-[57px] px-[16px] md:px-[34px] lg:px-[68px] rounded-[30px] w-full flex items-center justify-between">
            <img
              src="/images/middlewoman.png"
              alt="Description of your image"
              className="w-full h-auto object-cover rounded-[30px]"
            />
          </div>

          {/* Second Image Section */}
          <div className="mt-[57px] px-[16px] md:px-[34px] lg:px-[68px] rounded-[30px] w-full flex items-center justify-between">
            <img
              src="/images/middlewoman2.png"
              alt="Description of your image"
              className="w-full h-auto object-cover rounded-[30px]"
            />
          </div>

          {/* Third Image Section */}
          <div className="mt-[57px] px-[16px] md:px-[34px] lg:px-[68px] rounded-[30px] w-full flex items-center justify-between">
            <img
              src="/images/middlewoman3.png"
              alt="Description of your image"
              className="w-full h-auto object-cover rounded-[30px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TutorSearch;
