import Progress from "./Progress";
import Image from 'next/image';
import profile_photo from '../../public/profile.jpg'

export default function Tutor_Reg_One(){
  return (
    <div className="bg-[#FFF3E5] lg:px-[77px] md:px-[30px] p-5 w-[100%] h-full">

        {/* progress bar */}
        <Progress number={1}/>

        <div>
            <div className="py-2">
                <h1 className="font-bold text-md">List Your Services</h1>
                <p className="text-sm">Let us make your services be seen!</p>
            </div>

            <div className="py-2">
                <h1 className="font-bold text-md">Profile Photo</h1>
                <p className="text-sm">Your friendly face! Upload your photo for your profile to be welcoming</p>
                <div className="h-40 w-40 my-2 rounded-[50%] border-2 border-[#F77F00] overflow-hidden">
                    <Image src={ profile_photo } className='h-full w-full object-cover' alt="profile_photo"/>
                </div>
            </div>

            <div className="py-2">
                <h1 className="font-bold text-md">Subjects Offered</h1>
                <p className="text-sm py-1">Select the subjects you are proficient in! Showcase your diverse expertise</p>
                <form className="bg-white border-2 border-[#F77F00] flex w-[350px] rounded">
                    <input type="text" className="py-2 px-4 flex-grow" placeholder="Search a Subject. eg Python"/>
                    <button className="bg-[#F77F00] text-white px-2">Search</button>
                </form>
                <div className="flex flex-wrap gap-2 mt-2">
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Python</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Algebra</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">C++</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">AI/ML</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">3D Modelling</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Unity</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Data Science</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Java</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Ruby</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Photoshop</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">CyberSecurity</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">C#</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Swift</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">JavaScript</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Robotics</button>
                </div>
            </div>

            <div className="py-2">
                <h1 className="font-bold text-md">Your Qualifications</h1>
                <p className="text-sm py-2">Tell us your academic background and any certifications you have</p>
                <form className="bg-white border-2 border-[#F77F00] flex w-[350px] rounded">
                    <input type="text" className="py-2 px-4 flex-grow" placeholder="Search a Cerification eg Bachelors. "/>
                    <button className="bg-[#F77F00] text-white px-2">Search</button>
                </form>
                <div className="flex flex-wrap gap-2 mt-2">
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Masters</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">PHD</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Diploma</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Bachelor&apos;s</button>
                    <button className="border border-[#f77f00] rounded-[30px] py-1 px-3 hover:bg-[#f77f00]">Certificate</button>
                </div>
            </div>

            <button className="bg-[#F77F00] text-white py-2 px-4 mt-5 rounded-[30px]">Continue</button>
            
        </div>
    </div>
  )
}
