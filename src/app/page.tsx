// import Register from "@/original/register";
// import Navbar from "@/original/navbar";
import Navbar from "@/components/navbar";
import Tutor_Reg_One from "@/components/Tutor_Reg_One";
import Tutor_Reg_Two from "@/components/Tutor_Reg_Two";
import Tutor_Reg_Three from "@/components/Tutor_Reg_Three";
import Tutor_Reg_Congrat from "@/components/Tutor_Reg_Congrat";

export default function Home() {
  return <div>
    <Navbar/>
    <Tutor_Reg_One/>
    {/* <Tutor_Reg_Congrat/>
    <Tutor_Reg_Congrat/>
    <Tutor_Reg_Congrat/> */}
  </div>;
}
