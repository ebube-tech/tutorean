import Progress from "./Progress";

export default function Tutor_Reg_Two(){
  return (
    <div className="bg-[#FFF3E5] lg:px-[77px] md:px-[30px] p-5 w-[100%] h-full">

        {/* progress bar */}
        <Progress number={2}/>

        <div> 

            <button className="bg-[#F77F00] text-white py-2 px-4 mt-5 rounded-[30px]">Continue</button>
            
        </div>
    </div>
  )
}