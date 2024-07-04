import React from "react";

import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

import FaqTab from "./FaqTab";

function Faq() {
  return (
    <Container className="pt-[66px]">
      <Heading
        text=" Frequently Asked Questions (FAQ)"
        className="text-[3rem]"
      />

      <div className="mt-[66px] flex flex-col gap-[20px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaqTab
            title={"lorem ipsum jdjjfj jf gj j  fkg j hgj gj hjg j h"}
            content={""}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
}

export default Faq;
