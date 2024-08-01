import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

import FaqTab from "./FaqTab";

const Faqs = [
  {
    title: "What subjects are available for tutoring?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, justo vel consectetur scelerisque, justo urna semper neque, non consectetur ligula justo nec neque. Integer euismod, purus vitae viverra fermentum, lectus mauris consectetur sapien, vel semper metus eros vel sapien.",
  },
  {
    title: "How do I book a session with my Tutor? ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, justo vel consectetur scelerisque, justo urna semper neque, non consectetur ligula justo nec neque. Integer euismod, purus vitae viverra fermentum, lectus mauris consectetur sapien, vel semper metus eros vel sapien.",
  },
  {
    title: "What are your tutoring rates? ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, justo vel consectetur scelerisque, justo urna semper neque, non consectetur ligula justo nec neque. Integer euismod, purus vitae viverra fermentum, lectus mauris consectetur sapien, vel semper metus eros vel sapien.",
  },
  {
    title: "How does Tutlee match me with a tutor?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, justo vel consectetur scelerisque, justo urna semper neque, non consectetur ligula justo nec neque. Integer euismod, purus vitae viverra fermentum, lectus mauris consectetur sapien, vel semper metus eros vel sapien.",
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
