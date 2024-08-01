import Link from "next/link";

import Progress from "@/components/tutor_registration/Progress";

export default function Tutor_Reg_Two() {
  return (
    <div className="bg-[#FFF3E5] lg:px-[77px] md:px-[30px] lg:p-5 px-[15px] pb-6 w-[100%] h-full">
      {/* progress bar */}
      <Progress number={2} />

      <div>
        <div className="py-2">
          <h1 className="font-bold text-md">Introduction And Preferences</h1>
          <p className="text-sm py-2">
            Introduce yourself, specify languages spoken and choose your
            preferred communication method
          </p>
        </div>

        <div className="py-2 w-full overflow-hidden">
          <h1 className="font-bold text-md">Your Introduction</h1>
          <textarea
            className="bg-[#FFD580] text-black my-2 w-full p-2 rounded outline-none text-sm"
            placeholder="Introduce yourself in a few words. Share your passion of teaching, that makes your tutoring special"
            cols={50}
            rows={8}
          ></textarea>
        </div>

        <div className="py-2">
          <h1 className="font-bold text-md">Languages Spoken</h1>
          <p className="text-sm py-2">
            Languages you are fluent in. Let your students know about language
            options you speak
          </p>
          <form className="bg-white border-2 border-[#F77F00] flex w-[350px] rounded text-sm lg:text-md">
            <input
              type="text"
              className="py-2 px-4 flex-grow"
              placeholder="Search a Language eg English"
            />
            <button className="bg-[#F77F00] text-white px-2">Search</button>
          </form>
          <div className="flex flex-wrap gap-2 mt-2 text-sm lg:text-md">
            <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">
              English
            </button>
            <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">
              Swahili
            </button>
            <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">
              French
            </button>
            <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">
              Spanish
            </button>
            <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">
              Portuguese
            </button>
          </div>
        </div>

        <div className="py-2">
          <h1 className="font-bold text-md">Preferred Communication</h1>
          <p className="text-sm py-2">How do you prefer to communicate ?</p>
          <div className="flex flex-wrap gap-2 mt-2 text-sm lg:text-md">
            <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">
              Online
            </button>
            <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">
              On Call
            </button>
            <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">
              In Progress
            </button>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Link
            href="/tutor_registration"
            className="bg-[#F77F00] text-white py-2 px-4 rounded-[30px]"
          >
            Back
          </Link>
          <Link
            href="/tutor_registration/step_three"
            className="bg-[#F77F00] text-white py-2 px-4 rounded-[30px]"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
