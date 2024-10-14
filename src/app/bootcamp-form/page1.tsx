'use client';
import { ErrorMessage, Field, Form,Formik } from 'formik';
import Image from 'next/image';
import React from 'react';
import * as Yup from 'yup'; // Import Yup for validation

export default function Page() {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'First Name must be at least 2 characters long')
      .required('First Name is required'),
    lastName: Yup.string()
      .min(2, 'Last Name must be at least 2 characters long')
      .required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
    dob: Yup.date().required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required'),
    country: Yup.string().required('Country of Origin is required'),
    city: Yup.string().required('City is required'),
    bootcamp: Yup.string().required('Bootcamp selection is required'),
    referral: Yup.string().required('Referral source is required'),
  });

  return (
    <div className="bg-[#fff3e5] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row relative">
        {/* Left Side: Image and Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          <Image src="/images/bootcamp-form.png" alt="Sample" className="w-full h-auto object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2 text-orange-600">Welcome to Our Platform</h2>
          <p className="text-gray-700">Some description text goes here. You can explain the purpose or features of the platform.</p>
        </div>

        {/* Black Partition Line */}
        <div className="h-full w-[2px] bg-black mx-4"></div>

        {/* Right Side: Formik Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 h-full overflow-y-auto">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
            INPUT YOUR DETAILS
          </h2>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              dob: '',
              gender: '',
              country: '',
              city: '',
              bootcamp: '',
              referral: ''
            }}
            validationSchema={validationSchema} // Attach validation schema to Formik
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
   {/* First Name and Last Name */}
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                  <div className="w-full">
                    <label htmlFor="firstName" className="text-black">First Name</label>
                    <Field type="text" name="firstName" className="w-full p-2 border border-gray-300 rounded-md" />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <label htmlFor="lastName" className="text-black">Last Name</label>
                    <Field type="text" name="lastName" className="w-full p-2 border border-gray-300 rounded-md" />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                  <div className="w-full">
                    <label htmlFor="email" className="text-black">Email</label>
                    <Field type="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <label htmlFor="phone" className="text-black">Phone Number (WhatsApp)</label>
                    <Field type="text" name="phone" className="w-full p-2 border border-gray-300 rounded-md" />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                {/* Date of Birth and Gender */}
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                  <div className="w-full">
                    <label htmlFor="dob" className="text-black">Date of Birth</label>
                    <Field type="date" name="dob" className="w-full p-2 border border-gray-300 rounded-md" />
                    <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <label htmlFor="gender" className="text-black">Gender</label>
                    <Field as="select" name="gender" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                {/* Country and City */}
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                  <div className="w-full">
                    <label htmlFor="country" className="text-black">Country of Origin</label>
                    <Field type="text" name="country" className="w-full p-2 border border-gray-300 rounded-md" />
                    <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <label htmlFor="city" className="text-black">City</label>
                    <Field as="select" name="city" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select City</option>
                      <option value="new_york">New York</option>
                      <option value="los_angeles">Los Angeles</option>
                      <option value="chicago">Chicago</option>
                      <option value="houston">Houston</option>
                      <option value="phoenix">Phoenix</option>
                    </Field>
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                {/* Bootcamp of Interest */}
                <div className="mb-4">
                  <label htmlFor="bootcamp" className="text-black">Bootcamp of Interest</label>
                  <Field as="select" name="bootcamp" className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select Bootcamp</option>
                    <option value="web_dev">Web Development</option>
                    <option value="data_science">Data Science</option>
                    <option value="ui_ux">UI/UX Design</option>
                    <option value="digital_marketing">Digital Marketing</option>
                  </Field>
                  <ErrorMessage name="bootcamp" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Referral Source */}
                <div className="mb-4">
                  <label htmlFor="referral" className="text-black">How did you hear about Tutlee?</label>
                  <Field as="select" name="referral" className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select an Option</option>
                    <option value="friend">Friend</option>
                    <option value="social_media">Social Media</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="search_engine">Search Engine</option>
                  </Field>
                  <ErrorMessage name="referral" component="div" className="text-red-500 text-sm" />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white py-2 rounded-md">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}