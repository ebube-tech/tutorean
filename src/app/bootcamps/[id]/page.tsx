"use client";

import React from "react";

import InfoBox from "@/components/bootcamp/InfoBox";
// import FaqTab from "@/components/home/FaqTab";
import Button from "@/components/ui/Button";
// import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

// const Faqs = [
//   {
//     title: "What subjects are available for tutoring?",
//     content:
//       "Tutlee specializes in providing tutoring for a wide range of technical subjects. These include Computer Science, Programming Languages (such as Python, JavaScript, C++, and C#), Data Science, Machine Learning, Artificial Intelligence, Cybersecurity, Web Development, and more. Whether you are a beginner looking to get started or an advanced learner aiming to deepen your knowledge, Tutlee has the right tutor for you.",
//   },
//   {
//     title: "How do I book a session with my Tutor? ",
//     content:
//       "Booking a session with Tutlee is straightforward. First, sign up and create an account on our platform. Once you're registered, you can browse through our list of expert tutors based on the technical subject you are interested in. After selecting a tutor that matches your needs, you can contact them directly through the platform to discuss your goals and schedule a session. You can also check their availability and book a session at a time that suits you.",
//   },
//   {
//     title: "What are your tutoring rates? ",
//     content:
//       "Tutoring rates on Tutlee vary depending on the tutor’s expertise, experience, and the specific technical subject being taught. Our tutors set their own rates, which typically range from $30 to $100 per hour. You can view the rates on each tutor's profile page before booking a session, ensuring you find a tutor that fits your budget.",
//   },
//   {
//     title: "How does Tutlee match me with a tutor?",
//     content:
//       "Tutlee uses an intelligent matching system to help you find the best tutor for your technical learning needs. By entering your subject area and level of expertise, our platform provides a curated list of tutors who specialize in those areas. You can filter the results based on various criteria such as price, tutor rating, and availability. Additionally, you can read reviews and view detailed profiles to make an informed decision. Once you find a suitable tutor, you can contact them directly to arrange your first session.",
//   },
// ];

function BootCampInfo() {
  return (
    <div className="bg-[#fff3e5]">
      <div className="bg-[url('/bootcamp/learn.png')] bg-contain h-[100vh] w-[100%] bg-no-repeat max-h-[564px] flex flex-col justify-center pb-[50px] bg-right-top">
        <Container className="flex flex-col w-[100%] items-start gap-[50px]">
          <div className="text-[#5C4033]  text-[2rem] font-[800] max-w-[736px] rounded-[10px]">
            <p>Software Engineering Diploma Course(9months).</p>
          </div>

          <div
            className="border-[1px] p-[40px] rounded-[10px]"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <p className="font-[900] text-[1.2rem]">
              Registration Deadline:{" "}
              <span className="text-[#FF0000]">October 14th 2024</span>{" "}
            </p>
          </div>

          <Button className="bg-[#F77F00] max-w-[262px] rounded-[10px] px-[20px] flex items-center h-[60px]">
            <p className="text-[2rem] font-[600] leading-[100%]">Apply Now</p>
          </Button>
        </Container>
      </div>
      <div className=" py-[124px]">
        <Container>
          <div className="flex lg:gap-[50px] flex-col lg:flex-row gap-[24px]">
            <InfoBox text="Cost of Course: €500 " />
            <InfoBox text="Length of Study: 9 months" />
            <InfoBox text="Certificate Awarded: Diploma, Software Engineering" />
          </div>

          <p className="lg:text-[1.875rem] font-[400] mt-[86px] text-[1.2rem]">
            The aim of this study program is to train specialists who can
            effectively apply software system concepts in the design, creation,
            and secure management of software systems. Our graduates are
            equipped to implement, adapt, and maintain software and hardware
            solutions for business challenges. They are also capable of
            introducing innovative ideas and collaborating efficiently with
            specialists in the European Union and other international settings.
          </p>
        </Container>
      </div>
      {/* <Container>
        <div className="mt-[66px] flex flex-col gap-[20px]">
          {Faqs.map((item, index) => (
            <FaqTab
              title={item.title}
              content={item.content}
              key={index}
              className="bg-[#332D26]"
            />
          ))}
        </div>
      </Container> */}
    </div>
  );
}

export default BootCampInfo;
