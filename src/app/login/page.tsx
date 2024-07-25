"use client";

import Image from "next/image";
import React from "react";

import Button from "@/ui/Button";

function page() {
  return (
    <div className="min-h-[calc(100vh-120px)] w-[100%] lg:bg-[url('/images/login/library.png')] flex justify-center items-center lg:pt-[159px] lg:pb-[100px]">
      <div className="bg-[#FFF3E5] lg:rounded-[62px] pb-[91px] pt-[33px] lg:px-[50px] lg:w-[1172px]">
        <p className="lg:text-[2.625rem] font-[700] text-center text-[1.875rem]">
          Login To Your Account
        </p>

        <div className="lg:mt-[69px] mx-auto max-w-[660px] mt-[15px]">
          <form className="flex flex-col">
            <input
              type="text"
              className="w-[100%] py-[14px] bg-[#D9D9D9]  px-[20px] rounded-[28px]"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="w-[100%] py-[14px] bg-[#D9D9D9]  px-[20px] rounded-[28px] lg:mt-[40px] mt-[15px]"
              placeholder=" Password"
            />
            <div className="flex gap-[3px]">
              <input type="checkbox" />
              <p className="text-[1rem] font-[700] py-[20px]">Remember me </p>
            </div>

            <Button
              type="submit"
              className="w-[100%] py-[10px] bg-[#F77F00] lg:px-[70px] rounded-[12px]"
            >
              <p className="text-[#fff] lg:text-[0.865rem] font-[600]">Login</p>
            </Button>
          </form>
          <div className="flex flex-col justify-center items-center gap-[10px] mt-[15px]">
            <div className="flex items-center">
              <Image
                src="/images/login/goggle.png"
                alt=""
                width={30}
                height={30}
              />
              <p className="font-[600]">Login in with Google</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/login/linkedin.png"
                alt=""
                width={30}
                height={30}
              />
              <p className="font-[600]">Login in with linkedin</p>
            </div>
          </div>
          <div className="flex mt-[20px] justify-center gap-[3px]">
            <p> Don’t have an account? </p>
            <p className="text-[#0065B5]">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
