import search_icon from '../../public/search.png';
import Image from 'next/image';

export default function Navbar(){
  return (
    <div className="lg:px-[77px] md:px-[30px] px-[10px] items-center w-[100%] flex  gap-[30px] bg-[#F77F00] py-[10px]">
      <h2 className="text-white text-xl">Tutorean</h2>
      <div className="flex w-[400px] gap-[10px] bg-[#fff] border border-[#1b1c1e] px-[20px] py-[5px] rounded-[30px]">
        <input className="grow-[1] outline-none" placeholder="Search (eg. tutor, grades, location)"/>
        <button className='h-5 w-5'>
          <Image src={ search_icon } className='h-full w-full object-cover' alt="search_icon"/>
        </button>
      </div>
    </div>
  )
}