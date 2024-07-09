import Image from 'next/image';
import profile_photo from '../../public/profile.jpg'

export default function Register() {

  return (
    <div className="flex bg-[#FFF3E5] lg:px-[77px] md:px-[30px] p-5 w-[100%] gap-[20px]">

      {/* Right turor-reg panel */}
      <div className="py-6 w-[48%]">
        <h2 className="text-2xl font-bold mb-2 text-[#F77F00]">Let&apos;s Get Started!</h2>
        <p>Schedule your session with Jean</p>
        <h2 className="text-2xl font-bold my-2 text-[#F77F00]">Select Subjects</h2>
        <div className="flex gap-[5px]">
          <button className="bg-[#5C4033] hover:bg-[#5C4000] text-white font-bold py-2 px-5 rounded-[30px] border-2 border-black">French</button>
          <button className="bg-[#5C4033] hover:bg-[#5C4000] text-white font-bold py-2 px-5 rounded-[30px] border-2 border-black">Mathematics</button>
          <button className="bg-[#5C4033] hover:bg-[#5C4000] text-white font-bold py-2 px-5 rounded-[30px] border-2 border-black">Algebra</button>
        </div>

        <h2 className="text-2xl font-bold mt-10 text-[#F77F00]">Select Date & Time</h2>
        <form className="flex gap-[10px]">
          <input type="date" className="mt-1 p-2 block w-60 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          <input type="time" className="mt-1 p-2 block w-60 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </form>
        <p className='text-xs pt-2'>Tutor availability may impact schedule. You will be promptly notified of any sudden changes</p>

        <h2 className="text-2xl font-bold mt-10 text-[#F77F00]">Select Date & Time</h2>
        <form>
          <div className="mb-4 flex gap-[10px]">
            <input type="email" placeholder="Email address"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input type="text" placeholder="Cell Phone"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mt-1 py-2 px-3 bg-[#fff] w-[fit-content] flex gap-[5px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <input type="checkbox" className='cursor-pointer' />
            <span className="text-[#595959] text-[14px]">Same as Account</span>
          </div>
        </form>
      </div>

      {/* left tutor panel */}
      <div className="w-[45%] py-4 mt-4">
        <div className="rounded-[10px] shadow-xl py-5 px-[40px] relative bg-white h-full">
          <div className='flex flex-col justify-center items-center'>
            <div className="rounded-[10px] w-40 h-28 overflow-hidden">
              <Image src={ profile_photo } className='h-full w-full object-cover' alt="profile_photo"/>
            </div>
            <h2 className="text-center font-[600px] p-2 text-2xl">Jean Stephen</h2>
          </div>
          <p className='font-medium text-[#5C4033]'>Mathematics, French Language</p>
          <p className='py-2 text-xl'>Nice, France</p>
          <p className='text-justify pb-6'>Hi, my name is Jean, your passionate and experienced tutor based in Nice, France. With advanced degrees in Mathematics and French Literature from the University of Nice Sophia Antipolis and a teaching certification from the French Ministry of Education, I am dedicated to helping you achieve your academic goals. He is fluent in both English and French, allowing him to effectively communicate with a diverse group of students. Whether preparing for a major exam or seeking to improve their grades, students can count on Jean for expert guidance and support.</p>
          <h1 className='absolute top-[-40px] left-[-40px] p-0 m-0 w-[100px] h-[100px] flex items-center justify-center rounded-[50%] text-white p-4 bg-[#F77F00]'>$30/hr</h1>
        </div>

      </div>
    </div>
  );
};