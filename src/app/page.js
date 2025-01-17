import HomeBanner from "@/components/Banner";
import HomeServices from "@/components/Services";
import AchievementSection from "../components/Achievement";
import IndustriesSection from "@/components/Industries";
import ServiceSpotlight from "@/components/ServiceSpotlight";
import Testimonials from "@/components/Testimonials";
import NewContactUsForm from "@/components/NewContactUsForm.jsx";

export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      <HomeServices />
      <ServiceSpotlight />
      <AchievementSection />
      <IndustriesSection />
      <Testimonials />
      <NewContactUsForm />
    </div>
  );
}
