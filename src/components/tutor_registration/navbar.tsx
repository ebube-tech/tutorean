import Image from 'next/image';

export default function Navbar(){
  return (
    <div className="lg:pt-3  lg:px-4 p-[10px] items-center w-[100%] bg-[#FFF3E5] ">
      <div className='lg:px-[77px] md:px-[30px] px-[10px] border-b border-[#F77F00] bg-white'>
        <div className="relative h-20 w-20 overflow-hidden">
          <Image src='/tutor/logo.svg' layout="fill" objectFit="contain" className="object-contain" alt="logo"/>
        </div>
      </div>
    </div>
  )
}