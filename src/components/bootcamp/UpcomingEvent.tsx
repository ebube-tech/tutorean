import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Container from "../ui/Container";

interface UpcomingEventProps {
  title: string;
  data: {
    title: string;
    img: string;
    link: string;
    description: string;
  }[];
}

function UpcomingEvent({ title, data }: UpcomingEventProps) {
  return (
    <Container>
      <p className="text-center text-[3.125rem] font-[600]">{title}</p>
      <div className="mt-[138px] w-[100%] flex lg:flex-row flex-col flex-wrap  justify-center gap-[40px]">
        {data.map((item, i) => (
          <div
            key={i}
            className="border-[1px]  lg:w-[calc((100%/3)-40px)] border-[#00000066] rounded-[10px] flex justify-center py-[30px] relative pb-[80px]"
            style={{
              boxShadow: "0px 2.57px 2.57px 0px #00000040",
            }}
          >
            <div className="text-center max-w-[270px]">
              <Image
                src={item.img}
                alt=""
                width={140}
                height={140}
                className="mx-auto"
              />
              <p className="mt-[20px] font-[900] text-[#F77F00] text-[1.25rem]">
                {item.title}
              </p>
              <p className=" text-[0.75rem] mt-[50px]">{item.description}</p>

              <FaArrowRightLong className="text-[#F77F00] text-[30px] ml-auto  absolute bottom-[30px] right-[50px]" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default UpcomingEvent;
