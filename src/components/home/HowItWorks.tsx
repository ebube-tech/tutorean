/* eslint-disable @next/next/no-img-element */
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

const howItWorks = [
  { text: "Explore Tutors", image: "/images/explore.png" },
  { text: "Learn and Grow", image: "/images/learn.png" },
  { text: "Book A Session", image: "/images/book.png" },
];

function HowItWorks() {
  return (
    <Container>
      <div className="pt-[145px]">
        <div className="flex justify-center"></div>
        <div className="">
          <Heading className="lg:text-[2.5rem]" text=" How It Works" />

          <div className="flex flex-col lg:flex-row lg:justify-between gap-[31px] mt-[61px]  justify-center">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="max-w-[420px] bg-[#fff] rounded-[40px] mt-[60px] leading-[24.2px] text-[1.35rem] mx-auto"
              >
                <div className="bg-[#F77F00] -mt-[25px] relative z-[10] h-[95px] rounded-tr-[40px]  rounded-tl-[40px] items-center flex justify-center text-[#fff] border-[4px] border-[#000]">
                  <p className="font-[700]">{item.text}</p>
                </div>
                <img
                  alt=""
                  src={item.image}
                  className="border-r-[4px] border-l-[4px] border-b-[4px] border-[#000]  rounded-bl-[40px]  rounded-br-[40px] -mt-[40px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HowItWorks;
