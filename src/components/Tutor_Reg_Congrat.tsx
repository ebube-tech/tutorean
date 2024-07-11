import logo from '../../public/logo.svg';
import Image from 'next/image';
import fb from '../../public/fb.svg';
import insta from '../../public/insta.svg';
import tiktok from '../../public/tiktok.svg';
import twitter from '../../public/twitter.svg';

export default function Tutor_Reg_Congrat(){
    return(
        <div className="bg-[#FFF3E5] w-[100%] h-[90vh]">
            <div className="lg:px-[200px] md:px-[70px] p-10">
                <div className="py-2">
                    <h1 className="font-bold text-3xl text-[#f77f00]">Congratulations,  Jean Stephen! You are all set!</h1>
                    <p className="text-lg">You are officially part of the tutor community.</p>
                </div>

                <div className="py-2">
                    <p className="text-lg">Check your email for a confirmation and important next steps.</p>
                    <p className="text-lg">Feel free to explore your Dashboard for additional information.</p>
                </div>
            </div>

            <div className='border-2 border-[#f77f00] m-4 rounded-[30px]'>
                <div className='flex gap-1 text-xs px-10 py-6 justify-around'>
                    <div className="h-20 w-20">
                        <Image src={ logo } className='h-full w-full object-contain' alt="logo"/>
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
                    <div className='h-[40px] w-[40px] overflow-hidden'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src={ insta } className='h-full w-full object-cover' alt="insta_logo"/>
                        </a>
                    </div>
                    <div className='h-[40px] w-[40px] overflow-hidden'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src={ fb } className='h-full w-full object-cover' alt="insta_logo"/>
                        </a>
                    </div>
                    <div className='h-[40px] w-[40px] overflow-hidden'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src={ twitter } className='h-full w-full object-cover' alt="insta_logo"/>
                        </a>
                    </div>
                    <div className='h-[40px] w-[40px] overflow-hidden'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image src={ tiktok } className='h-full w-full object-cover' alt="insta_logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}