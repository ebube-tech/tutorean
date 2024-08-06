import Image from "next/image";
import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

const tutors = [
  {
    name: "James Adolf",
    subject: "Algebra",
    reviews: 512,
    rating: 5,
    country: "Spain",
    experience:
      "With over 5 years of experience as a tutor, I teach my students to succeed",
    facecard: "/images/male-user.jpeg",
  },
  {
    name: "Maria Gonzalez",
    subject: "Python",
    reviews: 300,
    rating: 4.5,
    country: "Mexico",
    experience: "Expert in Python programming with over 6 years of experience",
    facecard: "/images/female-user.png",
  },
  {
    name: "Liam Smith",
    subject: "C++",
    reviews: 420,
    rating: 4.8,
    country: "USA",
    experience: "C++ enthusiast with a decade of experience",
    facecard: "/images/male-user.jpeg",
  },
  {
    name: "Sofia Martinez",
    subject: "AI/ML",
    reviews: 280,
    rating: 4.7,
    country: "Argentina",
    experience: "Specializing in AI and Machine Learning for over 5 years",
    facecard: "/images/female-user.png",
  },
  {
    name: "Aiden Johnson",
    subject: "3D Modelling",
    reviews: 350,
    rating: 4.6,
    country: "Canada",
    experience: "Professional 3D modeler with 7 years of experience",
    facecard: "/images/male-user.jpeg",
  },
  {
    name: "Emma Brown",
    subject: "Blockchain",
    reviews: 290,
    rating: 4.9,
    country: "UK",
    experience: "Blockchain expert with over 4 years in the field",
    facecard: "/images/female-user.png",
  },
  {
    name: "Oliver Jones",
    subject: "Unity",
    reviews: 310,
    rating: 4.5,
    country: "Australia",
    experience: "Unity developer with a passion for game design",
    facecard: "/images/male-user.jpeg",
  },
  {
    name: "Isabella Garcia",
    subject: "Data Science",
    reviews: 450,
    rating: 4.8,
    country: "Spain",
    experience: "Data scientist with extensive industry experience",
    facecard: "/images/female-user.png",
  },
  {
    name: "Ethan Wilson",
    subject: "Java",
    reviews: 375,
    rating: 4.7,
    country: "New Zealand",
    experience: "Java developer with over 8 years of teaching experience",
    facecard: "/images/male-user.jpeg",
  },
  {
    name: "Ava Moore",
    subject: "Ruby",
    reviews: 290,
    rating: 4.6,
    country: "Ireland",
    experience:
      "Ruby on Rails specialist with a decade of development experience",
    facecard: "/images/female-user.png",
  },
];

function FeaturedTutors() {
  return (
    <Container>
      <div className="pt-[85px]">
        <div className="">
          <Heading className="lg:text-[2.5rem]" text=" Featured Tutors" />

          <div className="flex  justify-center flex-wrap">
            {tutors.map((_, index) => (
              <div
                key={index}
                className="w-[280px] mt-[60px] leading-[24.2px] text-[1.35rem]"
              >
                <Image
                  height={250}
                  width={250}
                  src={_.facecard}
                  alt=""
                  className=" 
                  mx-auto
                  rounded-[50%] border-[18px] border-[#F77F00]"
                />
                <div className="mt-[24px] max-w-[250px] text-center mx-auto">
                  <p className="font-[700]">{_.name}</p>
                  <p className="mt-[11px] text-[0.865rem]">
                    <span className="font-[700]">{_.subject}</span>
                    <span className="pl-[15px] text-[#3A3A3A] ">
                      ({_.reviews} Reviews)
                    </span>
                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className="mt-[12px] text-[0.865rem] font-[700]">
                    {_.country}
                  </p>
                  <p className="mt-[8px] text-[#3A3A3A] text-[0.865rem] leading-[140%]">
                    {_.experience}
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

export default FeaturedTutors;
