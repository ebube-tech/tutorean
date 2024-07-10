import Header from "@/components/common/Header";


import FeaturedTutors from "@/components/home/howitwork";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";

import TutorSearch from "@/components/home/TutorSearch";


export default function about() {
  return (
    <div className="pb-[100px]">
      <Header />
      <HeroSection />
      <TutorSearch />
      <FeaturedTutors />
      <HowItWorks />
    </div>
  );
}
