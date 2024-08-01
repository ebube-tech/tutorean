"use client";

import { Form, Formik } from "formik";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Input from "@/components/input/Input";
import Button from "@/ui/Button";
import Container from "@/ui/Container";

const ContactOptions = [
  {
    icon: <FaLocationDot className="lg:text-[2rem]" />,
    contactInfo: "Lagos, Nigeria",
  },
  { icon: <FaPhone className="lg:text-[2rem]" />, contactInfo: "07123456789" },
  {
    icon: <MdEmail className="lg:text-[2rem]" />,
    contactInfo: "tutorean@gmail.com",
  },
];

function page() {
  return (
    <div>
      <div className="lg:h-[575px] w-[100%] lg:bg-[url('/images/contact/child.png')] relative pt-[100px]">
        <div className="bg-[#FFF3E554] absolute top-0 right-0 left-0 bottom-0">
          <Container className="flex items-center h-[100%]">
            <h1 className="text-[3rem] font-[700] text-[#F77F00] \">
              Contact Us
            </h1>
          </Container>
        </div>
      </div>
      <Container className="pt-[56px] flex flex-col lg:flex-row gap-[55px] pb-[100px]">
        <div className="lg:w-[50%]">
          <p className="text-[1.8rem] font-[700]">Talk With Us</p>
          <p className="text-[0.865rem] leading-[140%]">
            Personalized 1-on-1 lessons, trusted by millions of learners in
            Africa. Learn from certified experts who match your budget and
            schedule. Join a global community of passionate learners and skilled
            instructors.
          </p>

          <div className="mt-[30px] flex flex-col lg:gap-[36px] gap-[20px]">
            {ContactOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-[8px]">
                {option.icon}
                <p className="lg:text-[1.563rem] font-[600]">
                  {option.contactInfo}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[50%]">
          <div className="bg-[#fff] border-[1px] border-[#F77F00] lg:rounded-[88px] rounded-[24px] pt-[94px] pb-[124px] w-[100%] flex justify-center px-[8px]">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                message: "",
                email: "",
              }}
              onSubmit={() => {}}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col gap-[24px]">
                  <div className="flex gap-[24px]">
                    <Input
                      errors={errors.firstName}
                      name="firstName"
                      touched={touched.firstName}
                      width="w-[100%]"
                      placeholder="Your Email"
                      className="w-[100%]"
                    />
                    <Input
                      errors={errors.lastName}
                      name="lastName"
                      touched={touched.lastName}
                      width="w-[100%]"
                      className="w-[100%]"
                      placeholder="Your lastName"
                    />
                  </div>
                  <Input
                    errors={errors.email}
                    name="email"
                    touched={touched.email}
                    placeholder="Your Email"
                    className="w-[100%]"
                  />
                  <Input
                    as="textArea"
                    errors={errors.message}
                    name="message"
                    touched={touched.message}
                    placeholder="Enter Your Message"
                    className="w-[100%]"
                    width="min-h-[100px] w-[100%] pt-[20px]"
                  />
                  <Button
                    type="submit"
                    className="w-[100%] py-[10px] bg-[#F77F00] lg:px-[70px] rounded-[12px]"
                  >
                    <p className="text-[#fff] lg:text-[0.865rem] font-[600]">
                      Send Message
                    </p>
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default page;
