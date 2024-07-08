import Image from "next/image";
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

function TutorSearch() {
  return (
    <div className="pt-[0px]">
      <Container>
        <div className="w-[100%] rounded-[30px] pt-[46px] pb-[53px]">
          


        <div className="mt-[57px] px-[68px] rounded-[30px] w-[100%] flex h-[121px] items-center justify-between">
  <img
    src="/images/middlewoman.png"
    alt="Description of your image"
    className="w-full h-full object-cover rounded-[30px]"
  />
  
</div>
<div className="mt-[57px] px-[68px] rounded-[30px] w-[100%] flex h-[121px] items-center justify-between">
  <img
    src="/images/middlewoman2.png"
    alt="Description of your image"
    className="w-full h-full object-cover rounded-[30px]"
  />
  
</div>
<div className="mt-[57px] px-[68px] rounded-[30px] w-[100%] flex h-[121px] items-center justify-between">
  <img
    src="/images/middlewoman3.png"
    alt="Description of your image"
    className="w-full h-full object-cover rounded-[30px]"
  />
  
</div>

          
        

        </div>
      </Container>
    </div>
  );
}

export default TutorSearch;
