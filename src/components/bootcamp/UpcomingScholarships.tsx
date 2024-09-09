import React from "react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import ScholarshipTab from "./ScholarshipTab";

interface UpcomingScholarshipsProps {
  title: string;
  data: {
    title: string;
    img: string;
    link: string;
    description: string;
  }[];
}

function UpcomingScholarships({ title, data }: UpcomingScholarshipsProps) {
  return (
    <Container>
      <p className="text-center text-[3.125rem] font-[600]">{title}</p>
      <div className="mt-[138px] w-[100%] flex lg:flex-row flex-col flex-wrap  justify-center gap-[40px]">
        {data.map((item, i) => (
          <ScholarshipTab
            title={item.title}
            content={item.description}
            key={i}
            img={item.img}
          />
        ))}
      </div>
      <div className="flex justify-center mt-[35px]">
        <Button className="bg-[#F77F00] py-[26px] px-[30px] max-auto rounded-lg">
          <p className="text-[#fff] text-[1.2rem] font-[600]">
            Scholarship Applications Here!
          </p>
        </Button>
      </div>
    </Container>
  );
}

export default UpcomingScholarships;
