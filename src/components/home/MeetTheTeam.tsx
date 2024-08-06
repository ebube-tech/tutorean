/* eslint-disable @next/next/no-img-element */
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

const tutors = [
  {
    name: "Ebube",
    country: "CEO/Founder",

    facecard: "/images/team/ebube.png",
  },
  {
    name: "Temitope",
    country: "Product Manager",

    facecard: "/images/team/temitope.png",
  },
  {
    name: "Oghomena",
    country: "Lead Frontend Engineer",

    facecard: "/images/team/ogho.png",
  },
  {
    name: "Yome",
    country: "Lead Backend Engineer",

    facecard: "/images/team/yome.png",
  },
  {
    name: "Kimberly",
    country: "UI/UX Designer",

    facecard: "/images/team/kimberly.png",
  },
  {
    name: "Tiwari",
    country: "Frontend Developer",

    facecard: "/images/team/tiwari.png",
  },
  {
    name: "Paul",
    country: "Frontend Developer",

    facecard: "/images/team/paul.png",
  },
  {
    name: "Victory",
    country: "Content Marketer",

    facecard: "/images/team/victory.png",
  },
];

function MeetTheTeam() {
  return (
    <Container>
      <div className="pt-[85px]">
        <div className="">
          <Heading className="lg:text-[3.5rem]" text="Meet The Team" />

          <div className="flex  justify-center flex-wrap">
            {tutors.map((_, index) => (
              <div
                key={index}
                className="w-[280px] mt-[60px] leading-[24.2px] text-[1.35rem]"
              >
                <img
                  src={_.facecard}
                  alt=""
                  className=" 
                  mx-auto
                  rounded-[50%] border-[18px] w-[250px] h-[250px] object-center object-contain border-[#F77F00] bg-[#c377258f]"
                />
                <div className="mt-[24px] max-w-[250px] text-center mx-auto">
                  <p className="font-[700]">{_.name}</p>
                  <p className="-mt-[0px] text-[0.865rem] font-[700]">
                    {_.country}
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

export default MeetTheTeam;
