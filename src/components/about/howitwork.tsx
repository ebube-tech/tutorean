import React from "react";
import Container from "@/ui/Container";
import Heading from "@/ui/Heading";

function FeaturedTutors() {
  return (
    <Container>
      <div className="pt-[85px] pb-[100px]">
        {/* Heading */}
        <Heading text="How It Works?" />

        <div className="pt-[85px]">
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-[40px]">
            {/* Image on the left */}
            <div className="mt-[36px] lg:mt-0 lg:w-[35%]">
              <img
                src="/images/phone.png"
                alt="Hero Image"
                className="object-cover rounded-[20px] w-full h-auto"
              />
            </div>
            {/* Text content on the right */}
            <div className="flex-1 lg:px-[150px] mt-[36px] lg:mt-0">
              <div className="flex lg:flex-row flex-col items-center lg:gap-[219px]">
                <h6 className="font-bold text-center lg:text-left">Create Your Profile</h6>
              </div>
              <div className="mt-[30px] flex gap-[20px]">
                <h6 className="font-bold text-center lg:text-left">
                  Craft a standard tutor profile showcasing your expertise and teaching style
                </h6>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-[40px] mt-[25px]">
            {/* Image on the right */}
            <div className="mt-[36px] lg:mt-0 lg:w-[35%]">
              <img
                src="/images/phone2.png"
                alt="Hero Image"
                className="object-cover rounded-[20px] w-full h-auto"
              />
            </div>
            {/* Text content on the left */}
            <div className="flex-1 lg:px-[150px] mt-[36px] lg:mt-0">
              <div className="flex lg:flex-row flex-col items-center lg:gap-[219px]">
                <h6 className="font-bold text-center lg:text-left">Set Your Availability</h6>
              </div>
              <div className="mt-[30px] flex gap-[20px]">
                <h6 className="font-bold text-center lg:text-left">
                  Choose your flexible scheduling on your user-friendly calendar system
                </h6>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-[40px] mt-[25px]">
            {/* Image on the left */}
            <div className="mt-[36px] lg:mt-0 lg:w-[35%]">
              <img
                src="/images/phone3.png"
                alt="Hero Image"
                className="object-cover rounded-[20px] w-full h-auto"
              />
            </div>
            {/* Text content on the right */}
            <div className="flex-1 lg:px-[150px] mt-[36px] lg:mt-0">
              <div className="flex lg:flex-row flex-col items-center lg:gap-[219px]">
                <h6 className="font-bold text-center lg:text-left">Connect With Learners</h6>
              </div>
              <div className="mt-[30px] flex gap-[20px]">
                <h6 className="font-bold text-center lg:text-left">
                  Start booking sessions and making a difference in student lives
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FeaturedTutors;
