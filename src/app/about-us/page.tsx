import HeroSection from "@/components/about/HeroSection";
import FeaturedTutors from "@/components/about/howitwork";
import HowItWorks from "@/components/about/HowItWorks";
import TutorSearch from "@/components/about/TutorSearch";
import Header from "@/components/common/Header";

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
