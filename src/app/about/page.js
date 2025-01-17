import AboutUsBanner from "@/components/about/AboutUsBanner";
import DirectorDesk from "@/components/about/DirectorDesk";
import LeadershipTeam from "@/components/about/Leadership";
import LifeAt from "@/components/about/LifeAt";
import OurValues from "@/components/about/OurValues";
import SetusAppart from "@/components/about/SetusAppart";
import VisionComponent from "@/components/about/Vision";
import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";

export default function ClientServices() {
    return (
        <div className="mt-5">
            <AboutUsBanner />
            <VisionComponent />
            <DirectorDesk />
            <SetusAppart />
            <OurValues />
            <LeadershipTeam />
            <LifeAt />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
