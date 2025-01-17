import MobilityBanner from "@/components/Service/MobilityBanner";
import MobilityBenefitsComponent from "@/components/Service/MobilityBenefits";
import MobilityDevelopmentApproach from "@/components/Service/MobilityDevApproach";
import MobilityServiceOffered from "@/components/Service/MobilityServiceOffered";
import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";

export default function MobilityServices() {
    return (
        <div className="mt-5">
            <MobilityBanner />
            <MobilityServiceOffered />
            <MobilityBenefitsComponent />
            <MobilityDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
