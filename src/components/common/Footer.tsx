import Image from "next/image";
import Link from "next/link";
import React from "react";

import Heading from "@/ui/footer/Heading";
import Text from "@/ui/footer/Text";

function Footer() {
  return (
    <div className="mx-[13px] rounded-[16px] border-[#F77F00] border-[2px] px-[12px] mt-[50px]">
      <div>
        <div className="border-[#F77F00] border-b-[2px] pb-[50px]">
          <div className="max-w-[1120px] mx-auto flex justify-between pt-[29px] flex-wrap gap-[30px] ">
            <div className="w-[100%] lg:w-auto">
              <Image src="/images/logo.png" alt={""} width={155} height={40} />
            </div>

            <div className="flex flex-col gap-[12px]">
              <Heading text="Quick Link" />
              <Link href="/">
                <Text text="Home" />
              </Link>

              <Link href="/about-us">
                <Text text="About" />
              </Link>
              <Link href="/contact-us">
                <Text text="Contact us" />
              </Link>
              <Link href="/terms">
                <Text text="Terms and Conditions" />
              </Link>
              <Link href="/privacy-policy">
                <Text text="Privacy Policy" />
              </Link>
            </div>
            <div className="flex flex-col gap-[12px]">
              <Heading text="Start Your Journey" />
              <Link href="#">
                <Text text="Become a Tutor" />
              </Link>
              <Link href="#">
                <Text text="Find Tutors" />
              </Link>
              <Link href="#">
                <Text text="Become a Student" />
              </Link>
              <Link href="#">
                <Text text="Login" />
              </Link>
            </div>
            {/* <div className="flex flex-col gap-[12px]">
              <Heading text="Careers" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
              <Text text="Home" />
            </div> */}
            <p className="max-w-[400px] mt-[30px]">
              Join us as a tutor and guide students on the educational path,
              share your expertise and availability, and make a meaningful
              impact!
            </p>
          </div>
        </div>

        <div className="my-[30px]"></div>
      </div>
    </div>
  );
}

export default Footer;
