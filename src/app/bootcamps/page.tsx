/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import UpcomingEvent from "@/components/bootcamp/UpcomingEvent";
import UpcomingScholarships from "@/components/bootcamp/UpcomingScholarships";
import Button from "@/components/ui/Button";
// import Container from "@/components/ui/Container";

const CategoriesData: {
  title: string;
  img: string;
  link: string;
  description: string;
}[] = [
  {
    title: "Software Engineering",
    img: "/bootcamp/img1.svg",
    link: "/bootcamps/web-development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elitSapiente unde voluptatum consequatur expedita vitae",
  },
  {
    title: "Artificial Intelligence",
    img: "/bootcamp/img7.svg",
    link: "/bootcamps/web-development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elitSapiente unde voluptatum consequatur expedita vitae",
  },
  {
    title: "Cybersecurity",
    img: "/bootcamp/img6.svg",
    link: "/bootcamps/web-development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elitSapiente unde voluptatum consequatur expedita vitae",
  },
  {
    title: "Marketing Technology",
    img: "/bootcamp/img5.svg",
    link: "/bootcamps/web-development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elitSapiente unde voluptatum consequatur expedita vitae",
  },
  {
    title: "Advanced Project Management",
    img: "/bootcamp/img4.svg",
    link: "/bootcamps/web-development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elitSapiente unde voluptatum consequatur expedita vitae",
  },
  {
    title: "Software Development",
    img: "/bootcamp/img3.svg",
    link: "/bootcamps/web-development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elitSapiente unde voluptatum consequatur expedita vitae",
  },
];

const ScholarshipData: {
  title: string;
  img: string;
  link: string;
  description: string;
}[] = [
  {
    title: "Full Scholarship for Africans",
    img: "/scholarships/image.png",
    link: "/bootcamps/web-development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
  },
  {
    title: "50% Off Scholarship",
    img: "/scholarships/image-2.png",
    link: "/bootcamps/web-development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
  },
  {
    title: "Youth Scholarship (Under 18)",
    img: "/scholarships/image-3.png",
    link: "/bootcamps/web-development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
  },
  {
    title: "Partial Scholarship for Disabled Individuals",
    img: "/scholarships/image-1.png",
    link: "/bootcamps/web-development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
  },
];

function BootCamps() {
  return (
    <div className="bg-[#fff3e5]">
      <div className=" w-[100%] flex justify-between items-center gap-2 flex-col lg:flex-row">
        <div className="lg:w-[811px] py-[100px] lg:py-[60px] rounded-tr-[10px] rounded-br-[10px] bg-[#5C4033] text-[#fff] lg:px-[50px] px-[24px] text-[2rem] flex flex-col gap-2 items-start">
          <p className="font-[800]">Applications now open to gain a</p>
          <p className="font-[600] text-[1.2rem]">
            Unlock your potential and accelerate your career with our
            specialized bootcamps and gain a diploma!
          </p>

          <Button className="bg-[#F77F00] rounded-[10px] px-[16px] py-[5px] mt-[45px]">
            <p className="text-[1rem] font-[800]">Apply Now</p>
          </Button>
        </div>

        <div className="hidden lg:block">
          <img src="/bootcamp/guy-with-galsses.png" alt="" />
        </div>
      </div>
      {/* 
      <Container className="my-[70px]">
        <p className="lg:text-[1.875rem]  mt-[86px] text-[1.2rem] font-[500]">
          Unlock your potential and accelerate your career with our specialized
          bootcamps! Whether you’re looking to dive into tech, sharpen your
          skills, or pivot into a new industry, our bootcamps offer hands-on
          training, expert guidance, and a recognized diploma upon completion.
          Don’t miss this opportunity to gain practical knowledge and
          credentials that employers value. Apply now and take the first step
          towards your future success!
        </p>
      </Container> */}

      <div className="py-[120px]">
        <UpcomingEvent title="Explore Categories" data={CategoriesData} />
      </div>
      <div className="bg-[#fff3e5] py-[120px]">
        <UpcomingScholarships
          title="Scholarship Available"
          data={ScholarshipData}
        />
      </div>
    </div>
  );
}

export default BootCamps;
