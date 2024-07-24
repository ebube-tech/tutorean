import Header from "@/components/common/Header";


import HeroSection from "@/components/about/HeroSection";
import HowItWorks from "@/components/about/HowItWorks";

import TutorSearch from "@/components/about/TutorSearch";
import FeaturedTutors from "@/components/about/howitwork";


export default function about() {
  return (
    <div className="pb-[100px]">
     
      <HeroSection />
      <TutorSearch />
      <FeaturedTutors />
      <HowItWorks />
    </div>
  );
}
