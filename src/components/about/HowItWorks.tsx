import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

const howItWorks = [
  {
    title: "Why Tutlee",
    description:
      "Flexible scheduling, competitive compensation, and a supportive community await you.",
  },
  {
    title: "Requirements",
    description:
      "Passion for teaching, relevant qualifications, and a desire to make a positive impact.",
  },
  {
    title: "Benefits",
    description:
      "Make a difference, earn income, and contribute to students' educational journeys.",
  },
];

function HowItWorks() {
  return (
    <div className="bg-white pb-[130px]">
      <Container>
        <div className="pt-[145px]">
          <Heading text="Learn more about tutoring on Tutlee" />
          <div className="grid gap-[31px] mt-[61px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-[#fff3e5] rounded-[40px] p-[30px] leading-[24.2px] text-[1.35rem] border-[2px] border-[#F77F00]"
              >
                <div className="bg-[#fff3e5] -mt-[30px] relative z-[10] h-[95px] rounded-tr-[40px] rounded-tl-[40px] items-center flex justify-center text-[#F77F00] border-[#F77F00] font-bold text-2xl">
                  <p className="font-[700]">{item.title}</p>
                </div>
                <div className="mt-[10px]">
                  <p className="text-[#F77F00] text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HowItWorks;
