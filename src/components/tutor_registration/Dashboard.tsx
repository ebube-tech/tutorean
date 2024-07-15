import Image from 'next/image';

export default function Tutor_Reg_Two(){
  return (
    <div className="bg-[#FFF3E5] lg:px-[30px] md:px-[30px] px-[5px] lg:py-10 py-4 text-[#1b1c1e] w-[100%] h-[100%] flex flex-col lg:flex-row gap-4">
        <div className="border-2 border-[#F77F00] rounded-[30px] lg:w-[40%] w-full h-full px-[20px] py-4 flex flex-col gap-[10px] overflow-hidden">

            <div className="py-2 flex flex-col items-center justify-center gap-[8px]">
                <div className="relative h-40 w-40 mb-2 rounded-[50%] border-4 border-[#F77F00] overflow-hidden">
                    <Image src='/tutor/profile.jpg' layout="fill" objectFit="cover" className='h-full w-full object-cover' alt="profile_photo"/>
                </div>
                <p className='text-2xl font-bold'>Jean Stephen</p>
                <p>Mathematics, French Language</p>
                <p className='text-center text-xs'>With advanced degrees in Mathematics and French Literature, Jean has dedicated his career to helping students </p>
            </div>

            <div className='flex justify-around items-center my-2'>
                <button className='text-white bg-[#F77F00] rounded px-4 py-2 text-sm'>EDIT PROFILE</button>
                <button className='text-white bg-[#F77F00] rounded px-4 py-2 text-sm'>PREVIEW PROFILE</button>
            </div>

            <div>
                <p className='font-bold'>Location</p>
                <p className='text-xs'>Nice, France</p>
            </div>

            <div>
                <p className='font-bold'>Education and Qualifications </p>
                <p className='text-xs'>Master of Science in Mathematics - University of Nice Sophia Antipolis <br/>
                Bachelor of Arts in French Literature - University of Nice Sophia Antipolis <br/>
                Teaching Certification - French Ministry of Education
                </p>
            </div>

            <div>
                <p className='font-bold'>Subject</p>
                <p className='text-xs'>Mathematics (Algebra, Calculus, Geometry, Trigonometry)<br/>
                French Language and Literature<br/>
                Science (Physics, Chemistry)<br/>
                Test Preparation (SAT, ACT, French Baccalauréat)</p>

                <p className='text-xs'>Senior Mathematics Tutor at Nice High School (5 years)<br/>
                French Language Instructor at Alliance Française de Nice (3 years)<br/>
                Online Tutor at TutorEase (2 years)</p>
            </div>

            <div>
                <p className='font-bold'>Languages</p>
                <p className='text-xs'>English, French</p>
            </div>

        </div>

        {/* right bar */}
        <div className="border-2 border-[#F77F00] rounded-[30px] lg:w-[60%] w-full h-full lg:px-6 px-[10px] py-4 overflow-hidden">
            <div className='flex items-center justify-between my-2 gap-[10px] text-white lg:text-sm text-xs flex-wrap'>
                <button className='bg-[#F77F00] lg:px-4 px-2 py-2 rounded'>Your Listings</button>
                <button className='bg-[#F77F00] lg:px-4 px-2 py-2 rounded'>Bookings</button>
                <button className='bg-[#F77F00] lg:px-4 px-2 py-2 rounded'>Messages</button>
                <button className='bg-[#F77F00] lg:px-4 px-2 py-2 rounded'>Resources</button>
            </div>

            <div className='flex items-center justify-between border-t border-[#F77F00] py-2 mt-4'>
                <h6 className='font-bold text-sm'>Active Listings</h6>
                <div className='relative w-[160px]'>
                    <button className='relative text-sm font-bold bg-[#F77F00] rounded-[30px] py-1 px-7 text-[#fff]'>Active</button>
                    <button className='absolute text-sm font-bold right-[1px] top-0 bg-[#D9D9D9] rounded-[30px] py-1 px-6 text-[#1b1c1e]'>Draft</button>
                </div>
            </div>

            <div className='border-2 border-[#F77F00] text-sm lg:text-md rounded-[30px] p-4 flex flex-col gap-6 overflow-hidden'>
                <div className='flex flex-col gap-[15px]'>
                    <div className='flex items-start gap-4 justify-between font-medium'>
                        <p>Experienced in helping students excel in Maths and French</p>
                        <div className='flex items-center justify-between w-[200px] lg:w-[120px]'>
                            <div className='border-2 border-[#F77F00] rounded-[10px] bg-[#fff] py-1 px-2 font-bold text-xs lg:text-md'>Online <span className='font-light ms-1 h-[40px] w-[40px] border-1 border-[#017260] text-[#017260] text-xs bg-[#017260] rounded-[50%] p-0 m-0'>On</span></div>
                            <p>:</p>
                        </div>
                    </div>
                    <div className='flex items-center text-xs lg:text-md wrap gap-[10px]'>
                        <div className='border-2 border-[#f77f00] py-1 px-2 font-bold rounded-[10px] bg-[#fff]'>Maths</div>
                        <div className='border-2 border-[#f77f00] py-1 px-2 font-bold rounded-[10px] bg-[#fff]'>$10/hr</div>
                        <div className='border-2 border-[#f77f00] py-1 px-2 font-bold rounded-[10px] bg-[#fff]'>Mon - Fri</div>
                        <div className='border-2 border-[#f77f00] py-1 px-2 font-bold rounded-[10px] bg-[#fff]'>Promoted</div>
                    </div>
                </div>

                <div className='flex flex-col gap-[15px]'>
                    <div className='flex items-start gap-4 justify-between font-medium'>
                        <p>Experienced in helping students excel in Maths and French</p>
                        <div className='flex items-center justify-between w-[200px]'>
                            <div className='border-2 border-[#F77F00] rounded-[10px] bg-[#fff] py-1 px-2 font-bold text-xs lg:text-md'>On Call</div>
                            <p>:</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px] text-xs lg:text-md'>
                        <div className='border-2 border-[#f77f00] py-1 px-2 font-bold rounded-[10px] bg-[#fff]'>French</div>
                        <div className='border-2 border-[#f77f00] py-1 px-2 font-bold rounded-[10px] bg-[#fff]'>$15/hr</div>
                        <div className='border-2 border-[#f77f00] py-1 px-2 font-bold rounded-[10px] bg-[#fff]'>Mon - Fri</div>
                        <div className='border-2 border-[#f77f00] py-1 px-2 font-bold rounded-[10px] bg-[#fff]'>Promoted</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}