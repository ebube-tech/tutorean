"use client";
import React from "react";

import UpcomingEvent from "@/components/bootcamp/UpcomingEvent";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

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
    img: "",
    link: "/bootcamps/web-development",
    description:
      "Covers 100% of tuition for Africans living in Africa. Application fee required.",
  },
  {
    title: "50% Off Scholarship",
    img: "",
    link: "/bootcamps/web-development",
    description: "Open to everyone worldwide. Enjoy a 50% discount on tuition.",
  },
  {
    title: "Youth Scholarship (Under 18)",
    img: "",
    link: "/bootcamps/web-development",
    description:
      "Completely free for students under 18, including the application fee.",
  },
  {
    title: "Partial Scholarship for Disabled Individuals",
    img: "",
    link: "/bootcamps/web-development",
    description:
      "Tailored for individuals with disabilities. Partial tuition coverage.",
  },
];

function BootCamps() {
  return (
    <div>
      <div className="bg-[url('/bootcamp/bg.png')] bg-cover h-[100vh] w-[100%] bg-no-repeat max-h-[564px] flex flex-col justify-end border-b-[8px] border-[#F77F00]">
        <div className="lg:bg-[url('/bootcamp/chat.png')]  bg-[#000000B8] lg:bg-transparent lg:w-[811px] h-[400px] bg-no-repeat text-[#fff] lg:px-[50px] px-[24px] pt-[34px] text-[2rem] font-[800]">
          <p>Applications now open to gain a</p>
          <p>diploma in any of our available bootcamps.</p>

          <Button className="bg-[#F77F00] rounded-[15px] px-[16px] py-[5px] mt-[45px]">
            <p className="text-[1.5rem]">Apply Now</p>
          </Button>
        </div>
      </div>

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
      </Container>

      <div className="bg-[#fff3e5] py-[120px]">
        <UpcomingEvent title="Explore Categories" data={CategoriesData} />
      </div>
      <div className="bg-[#fff3e5] py-[120px]">
        <UpcomingEvent title="Scholarship Available" data={ScholarshipData} />
      </div>
    </div>
  );
}

export default BootCamps;
