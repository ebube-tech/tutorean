import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

import FaqTab from "./FaqTab";

const Faqs = [
  {
    title: "What subjects are available for tutoring?",
    content:
      "Tutlee specializes in providing tutoring for a wide range of technical subjects. These include Computer Science, Programming Languages (such as Python, JavaScript, C++, and C#), Data Science, Machine Learning, Artificial Intelligence, Cybersecurity, Web Development, and more. Whether you are a beginner looking to get started or an advanced learner aiming to deepen your knowledge, Tutlee has the right tutor for you.",
  },
  {
    title: "How do I book a session with my Tutor? ",
    content:
      "Booking a session with Tutlee is straightforward. First, sign up and create an account on our platform. Once you're registered, you can browse through our list of expert tutors based on the technical subject you are interested in. After selecting a tutor that matches your needs, you can contact them directly through the platform to discuss your goals and schedule a session. You can also check their availability and book a session at a time that suits you.",
  },
  {
    title: "What are your tutoring rates? ",
    content:
      "Tutoring rates on Tutlee vary depending on the tutor’s expertise, experience, and the specific technical subject being taught. Our tutors set their own rates, which typically range from $30 to $100 per hour. You can view the rates on each tutor's profile page before booking a session, ensuring you find a tutor that fits your budget.",
  },
  {
    title: "How does Tutlee match me with a tutor?",
    content:
      "Tutlee uses an intelligent matching system to help you find the best tutor for your technical learning needs. By entering your subject area and level of expertise, our platform provides a curated list of tutors who specialize in those areas. You can filter the results based on various criteria such as price, tutor rating, and availability. Additionally, you can read reviews and view detailed profiles to make an informed decision. Once you find a suitable tutor, you can contact them directly to arrange your first session.",
  },
];

function Faq() {
  return (
    <Container className="pt-[66px]">
      <Heading text=" Frequently Asked Questions (FAQ)" />

      <div className="mt-[66px] flex flex-col gap-[20px]">
        {Faqs.map((item, index) => (
          <FaqTab title={item.title} content={item.content} key={index} />
        ))}
      </div>
    </Container>
  );
}

export default Faq;
