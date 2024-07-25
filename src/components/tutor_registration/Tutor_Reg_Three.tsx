"use client";

import Link from "next/link";
import { useState } from "react";

import Progress from "./Progress";

export default function Tutor_Reg_Three() {
  const [availability, setAvailability] = useState([
    { date: "Monday", startTime: "", endTime: "" },
  ]);
  const [rates, setRates] = useState([{ rateType: "hourly", price: "1" }]);

  const handleAddAvailability = () => {
    setAvailability([
      ...availability,
      { date: "Monday", startTime: "", endTime: "" },
    ]);
  };

  const handleAddRate = () => {
    setRates([...rates, { rateType: "hourly", price: "1" }]);
  };

  const handleChangeAvailability = (
    index: number,
    field: string,
    value: string
  ) => {
    const newAvailability: any = [...availability];
    newAvailability[index][field] = value;
    setAvailability(newAvailability);
  };

  const handleChangeRate = (index: number, field: string, value: string) => {
    const newRates: any = [...rates];
    newRates[index][field] = value;
    setRates(newRates);
  };
  return (
    <div className="bg-[#FFF3E5] lg:px-[77px] md:px-[30px] lg:p-5 px-[15px] pb-6 w-[100vw] h-full overflow-hidden">
      {/* progress bar */}
      <Progress number={3} />

      <div>
        <div className="py-2">
          <h1 className="font-bold text-md">
            Services, Pricing and Availability
          </h1>
          <p className="text-sm py-2">
            Set your pricing, availability and select target classes for a
            tailored tutoring experience
          </p>
        </div>

        <div className="py-2">
          <h1 className="font-bold text-md">Select target classes</h1>
          <p className="text-sm py-2">
            Select specialized classes to match with students based on your
            teaching style and expertise
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="border border-[#f77f00] text-sm text-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00] hover:text-white">
              Primary Level
            </button>
            <button className="border border-[#f77f00] text-sm text-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00] hover:text-white">
              HighSchool Level
            </button>
            <button className="border border-[#f77f00] text-sm text-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00] hover:text-white">
              Under-graduate level
            </button>
            <button className="border border-[#f77f00] text-sm text-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00] hover:text-white">
              Post-graduate level
            </button>
            <button className="border border-[#f77f00] text-sm text-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00] hover:text-white">
              Experienced level
            </button>
          </div>
        </div>

        <div className="py-2 overflow-hidden">
          <h1 className="font-bold text-md">Availability</h1>
          <p className="text-sm py-2">
            Let students know when you are available for engaging in tutoring
            sessions
          </p>
          <div className="relative lg:w-[500px] w-full text-sm lg:text-md">
            {availability.map((slot, index) => (
              <div
                key={index}
                className="flex gap-2 items-center lg:pb-2 pt-2 pb-10 "
              >
                <select
                  className="border border-[#f77f00] lg:py-2 lg:px-4 p-2 rounded-[30px]"
                  value={slot.date}
                  onChange={(e) =>
                    handleChangeAvailability(index, "date", e.target.value)
                  }
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                <input
                  type="time"
                  className="border border-[#f77f00] lg:p-2 px-1 py-2 rounded-[30px]"
                  value={slot.startTime}
                  onChange={(e) =>
                    handleChangeAvailability(index, "startTime", e.target.value)
                  }
                />
                <span>To</span>
                <input
                  type="time"
                  className="border border-[#f77f00] lg:p-2 px-1 py-2 rounded-[30px]"
                  value={slot.endTime}
                  onChange={(e) =>
                    handleChangeAvailability(index, "endTime", e.target.value)
                  }
                />
              </div>
            ))}
            <button
              className="absolute bottom-[-5px] border-2 border-[#F77F00] right-0 hover:bg-[#F77F00] hover:text-[#fff] text-[#F77F00] text-bold text-3xl h-10 w-10 flex items-center justify-center rounded-[50%]"
              onClick={handleAddAvailability}
            >
              +
            </button>
          </div>
        </div>

        <div className="py-2">
          <h1 className="font-bold text-md">Hourly Rate</h1>
          <p className="text-sm py-2">
            Set your hourly rate for tutoring sessions. Be transparent to help
            students understand your value
          </p>
          <div className="relative lg:w-[500px] w-full text-sm lg:text-md">
            {rates.map((rate, index) => (
              <div key={index} className="flex gap-2 items-center py-2 ">
                <select
                  className="border border-[#f77f00] py-2 px-4 rounded-[30px]"
                  value={rate.rateType}
                  onChange={(e) =>
                    handleChangeRate(index, "rateType", e.target.value)
                  }
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
                <select
                  className="border border-[#f77f00] py-2 px-4 rounded-[30px]"
                  value={rate.price}
                  onChange={(e) =>
                    handleChangeRate(index, "price", e.target.value)
                  }
                >
                  <option value={1}>$1</option>
                  <option value={5}>$5</option>
                  <option value={10}>$10</option>
                  <option value={50}>$50</option>
                  <option value={100}>$100</option>
                </select>
              </div>
            ))}
            <button
              className="absolute bottom-[-5px] right-0 border-2 border-[#F77F00] hover:bg-[#F77F00] hover:text-[#fff] text-[#F77F00] text-bold text-3xl p-2 h-10 w-10 flex items-center justify-center rounded-[50%]"
              onClick={handleAddRate}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <Link
            href="/tutor_registration/step_two"
            className="bg-[#F77F00] text-white py-2 px-4 rounded-[30px]"
          >
            Back
          </Link>
          <Link
            href="/tutor_registration/complete"
            className="bg-[#F77F00] text-white py-2 px-4 rounded-[30px]"
          >
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
}
