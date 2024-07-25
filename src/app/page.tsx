import CooperateTraining from "@/components/home/CooperateTraining";
import Faq from "@/components/home/Faq";
import FeaturedTutors from "@/components/home/FeaturedTutors";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import JoinOurTeam from "@/components/home/JoinOurTeam";
import TutorSearch from "@/components/home/TutorSearch";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TutorSearch />
      <FeaturedTutors />
      <HowItWorks />
      <WhyChooseUs />
      <JoinOurTeam />
      <Faq />
      <CooperateTraining />
    </div>
  );
}
