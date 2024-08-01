/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import Container from "@/ui/Container";

function TutorSearch() {
  return (
    <div className="pt-0">
      <Container>
        {/* First Section: Box on the left, Image on the right */}
        <div className="w-full flex flex-col lg:flex-row items-stretch mb-[57px]">
          <div className="bg-[#5C4033] rounded-t-[30px] lg:rounded-l-[30px] lg:rounded-r-none p-8 w-full lg:w-1/2 flex flex-col items-center justify-center text-white">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              Benefit of Joining
            </h2>
            <p className="text-lg lg:text-xl text-center">
              Experience flexibility, attractive earnings and a strong community
              of supportive tutors
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/images/1st_image.png"
              alt="Description of your image"
              className="w-full h-auto object-cover rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-l-none"
            />
          </div>
        </div>

        {/* Second Section: Image on the left, Box on the right */}
        <div className="w-full flex flex-col lg:flex-row-reverse items-stretch mb-[57px]">
          <div className="bg-[#5C4033] rounded-t-[30px] lg:rounded-r-[30px] lg:rounded-l-none p-8 w-full lg:w-1/2 flex flex-col items-center justify-center text-white">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              Diverse subjects
            </h2>
            <p className="text-lg lg:text-xl text-center">
              Teach subjects you're passionate about ranging from academics to
              skill development
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/images/2nd_image.png"
              alt="Description of your image"
              className="w-full h-auto object-cover rounded-b-[30px] lg:rounded-l-[30px] lg:rounded-r-none"
            />
          </div>
        </div>

        {/* Third Section: Box on the left, Image on the right */}
        <div className="w-full flex flex-col lg:flex-row items-stretch">
          <div className="bg-[#5C4033] rounded-t-[30px] lg:rounded-l-[30px] lg:rounded-r-none p-8 w-full lg:w-1/2 flex flex-col items-center justify-center text-white">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              Interactive platform
            </h2>
            <p className="text-lg lg:text-xl text-center">
              Enjoy user friendly virtual classrooms for seamless and hassle
              free tutoring sessions.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/images/1st_image.png"
              alt="Description of your image"
              className="w-full h-auto object-cover rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-l-none"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TutorSearch;
