import Image from 'next/image';
import Link from "next/link";

export default function Tutor_Reg_Congrat(){
    return(
        <div className="bg-[#FFF3E5] w-full h-full pb-6">
            <div className="lg:px-[200px] md:px-[70px] p-[15px] flex flex-col gap-2">
                <div className="py-2">
                    <h1 className="font-bold text-3xl text-[#f77f00]">Congratulations,  Jean Stephen! You are all set!</h1>
                    <p className="text-lg mt-1">You are officially part of the tutor community.</p>
                </div>

                <p className="text-lg">Check your email for a confirmation and important next steps.</p>
                <p className="text-lg">Feel free to explore your Dashboard for additional information.</p>            
                <div>
                    <Link href='/tutor_registration/tutor_dashboard' className="bg-[#F77F00] text-white py-2 px-4 mt-2 rounded">Your Dashboard</Link>
                </div>
                
            </div>

            <div className='border-2 border-[#f77f00] lg:m-4 m-[10px] rounded-[30px]'>
                <div className='flex flex-wrap lg:gap-1 gap-4 text-xs px-10 py-6 justify-around'>
                    <div className="relative h-20 lg:w-20 w-full">
                        <Image src='/tutor/logo.svg' layout="fill" objectFit="contain" className='h-full w-full object-contain' alt="logo"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold'>Quick Link</h6>
                        <p>Home</p>
                        <p>Tutor Listing</p>
                        <p>For Students</p>
                        <p>For Parents</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold'>Explore</h6>
                        <p>Blog</p>
                        <p>FAQs</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold'>Careers</h6>
                        <p>Blog</p>
                        <p>Subject answers</p>
                        <p>Become a tutor</p>
                        <p>Schools</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold'>Quick Link</h6>
                        <p>Home</p>
                        <p>Tutor Listing</p>
                        <p>For Students</p>
                        <p>For Parents</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className='border-t flex justify-center gap-2 py-4 mt-4 border-[#f77f00]'>
                    <div className='relative h-[40px] w-[40px] overflow-hidden'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src='/tutor/insta.svg' layout="fill" objectFit="cover" className='h-full w-full object-cover' alt="insta_logo"/>
                        </a>
                    </div>
                    <div className='relative h-[40px] w-[40px] overflow-hidden'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src='/tutor/fb.svg' layout="fill" objectFit="cover" className='h-full w-full object-cover' alt="fb"/>
                        </a>
                    </div>
                    <div className='relative h-[40px] w-[40px] overflow-hidden'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src='/tutor/twitter.svg' layout="fill" objectFit="cover" className='h-full w-full object-cover' alt="twitter"/>
                        </a>
                    </div>
                    <div className='relative h-[40px] w-[40px] overflow-hidden'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src='/tutor/tiktok.svg' layout="fill" objectFit="cover" className='h-full w-full object-cover' alt="tiktok"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}