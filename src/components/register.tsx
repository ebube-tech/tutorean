
export default function Register() {

  return (
    <div className="flex pt-5 w-[100%]">
      <div className="p-6 w-[48%]">
        <h2 className="text-2xl font-bold mb-2 text-[#F77F00]">Let&apos;s Get Started!</h2>
        <p>Schedule your session with Jean</p>
        <h2 className="text-2xl font-bold my-2 text-[#F77F00]">Select Subjects</h2>
        <div className="flex gap-[5px]">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-[30px] border-2 border-black">French</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-[30px] border-2 border-black">Mathematics</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-[30px] border-2 border-black">Algebra</button>
        </div>

        <h2 className="text-2xl font-bold mt-10 text-[#F77F00]">Select Date & Time</h2>
        <form className="flex gap-[10px]">
          <input type="date" className="mt-1 p-2 block w-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          <input type="time" className="mt-1 p-2 block w-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </form>
        <p>Tutor availability may impact schedule. You will be promptly notified of any sudden changes</p>

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

          <div className="mt-1 py-2 px-3 w-[fit-content] flex gap-[5px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <input type="checkbox" />
            <span className="text-[#595959] text-[14px]">Same as Account</span>
          </div>
        </form>
      </div>

      <div className="bg-white w-[50%] rounded">
        <div className="p-6 h-full">
          <div className="">
            <img src="" alt="profile_photo"/>
          </div>
          <h2 className="text-center">Jean Stephen</h2>
          <p>Mathematics, French Language</p>
          <h1>Nice, France</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi aspernatur voluptas sunt? Aspernatur possimus ratione adipisci eum magni doloremque, id, assumenda saepe, praesentium omnis culpa deleniti beatae eius nostrum a!</p>
        </div>

      </div>
    </div>
  );
};