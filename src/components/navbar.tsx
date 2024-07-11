import logo from '../../public/logo.svg';
import Image from 'next/image';

export default function Navbar(){
  return (
    <div className="pt-3 px-4 items-center w-[100%] bg-[#FFF3E5]">
      <div className='lg:px-[77px] md:px-[30px] px-[10px] border-b border-[#F77F00] bg-white'>
        <div className="h-20 w-20">
          <Image src={ logo } className='h-full w-full object-contain' alt="logo"/>
        </div>
      </div>
    </div>
  )
}