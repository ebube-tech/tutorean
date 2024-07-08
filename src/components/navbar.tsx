
export default function Navbar(){
  return (
    <div className="px-3 items-center w-[100%] flex  gap-[30px] bg-[#F77F00] py-[10px]">
      <h2 className="text-white">Tutorean</h2>
      <div className="flex w-[400px] gap-[10px] bg-[#fff] border border-[#1b1c1e] ps-[30px] py-[5px] rounded-[30px] pe-[10px]">
        <input className="grow-[1] outline-none" placeholder="Search (eg. tutor, grades, location)"/>
        <button>Search</button>
      </div>
    </div>
  )
}