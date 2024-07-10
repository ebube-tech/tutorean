import Image from "next/image";
import React from "react";

import Heading from "@/ui/footer/Heading";
import Text from "@/ui/footer/Text";

function Footer() {
  return (
    <div className="mx-[13px] rounded-[16px] border-[#F77F00] border-[2px]">
      <div>
        <div className="border-[#F77F00] border-b-[2px] pb-[50px]">
          <div className="max-w-[1120px] mx-auto flex justify-between pt-[29px] flex-wrap flex-[30px] px-[20px]">
            <div>
              <Image src="/images/logo.svg" alt={""} width={155} height={40} />
            </div>
            <div className="flex flex-col gap-[12px]">
              <Heading text="Quick Link" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <Heading text="Explore" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <Heading text="Careers" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
            </div>
            <p className="max-w-[400px] lg:w-[auto] w-[100%] mx-auto mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, aliquid odit fugit obcaecati eos beatae
              exercitationem! Repellendus, voluptatum facere necessitatibus a
              commodi facilis praesentium dignissimos, sapiente corporis tenetur
              hic repudiandae!
            </p>
          </div>
        </div>

        <div className="my-[30px]"></div>
      </div>
    </div>
  );
}

export default Footer;
