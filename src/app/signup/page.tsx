"use client";

import "react-toastify/dist/ReactToastify.css";

import { Form, Formik } from "formik";
import { Link } from "lucide-react";
import { FaGoogle, FaLinkedin } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";

import Input from "@/components/Input";
import Button from "@/ui/Button";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(emailRegex, "Invalid email address")
    .email("Please enter a valid email address")
    .required("Email Address is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-120px)] w-[100%] bg-[url('/images/login/library.png')] flex justify-center items-center lg:pt-[159px] lg:pb-[100px]">
      <div className="bg-[#FFF3E5] lg:rounded-[62px] w-[95%] px-[10px] rounded-[12px] pb-[91px] pt-[33px] lg:px-[50px] lg:w-[1172px]">
        <p className="lg:text-[2.625rem] font-[700] text-center lg:text-[1.875rem] text-[1.35rem]">
          Create Account
        </p>

        <div className="lg:mt-[69px] mx-auto max-w-[660px] mt-[35px]">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              country: "",
              state: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async () => {}}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-[16px]">
                <Input
                  type="text"
                  placeholder="First name"
                  title="First name"
                  errors={errors.email}
                  name="firstName"
                  touched={touched.email}
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  title="Last name"
                  errors={errors.email}
                  name="lastName"
                  touched={touched.email}
                />
                <Input
                  type="text"
                  placeholder="Phone number"
                  title="Phone number"
                  errors={errors.email}
                  name="phone"
                  touched={touched.email}
                />
                <Input
                  type="text"
                  placeholder="Email Address"
                  title="Email Address"
                  errors={errors.email}
                  name="email"
                  touched={touched.email}
                />
                <Input
                  type="text"
                  placeholder="Country"
                  title="Country"
                  errors={errors.email}
                  name="country"
                  touched={touched.email}
                />
                <Input
                  type="text"
                  placeholder="State"
                  title="State"
                  errors={errors.email}
                  name="state"
                  touched={touched.email}
                />
                <Input
                  type="password"
                  name="password"
                  errors={errors.password}
                  touched={touched.password}
                  title="Password"
                  placeholder=" Password"
                  className=""
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  errors={errors.password}
                  touched={touched.password}
                  title="Confirm Password"
                  placeholder=" Password"
                  className=""
                />

                <Button
                  type="submit"
                  className="w-[100%] h-[56px] bg-[#F77F00] lg:px-[70px] rounded-[12px] mt-[20px]"
                >
                  <p className="text-[#fff] lg:text-[0.865rem] font-[600]">
                    Submit
                  </p>
                </Button>
              </Form>
            )}
          </Formik>

          <div className="flex flex-col justify-center items-center gap-[10px] mt-[15px]">
            <div className="flex items-center gap-[8px] cursor-pointer">
              <FaGoogle />
              <p className="font-[600] text-[0.865rem]">Login in with Google</p>
            </div>
            <div className="flex items-center gap-[8px] cursor-pointer">
              <FaLinkedin />
              <p className="font-[600] text-[0.865rem]">
                Login in with LinkedIn
              </p>
            </div>
          </div>
          <div className="flex mt-[20px] justify-center gap-[3px] text-[0.865rem]">
            <p> Don’t have an account? </p>
            <Link to="register" className="text-[#0065B5]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
