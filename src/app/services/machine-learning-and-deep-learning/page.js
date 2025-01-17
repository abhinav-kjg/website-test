import MLBanner from "@/components/ServiceSpotlight/ML/MLBanner";
import MLServiceOffered from "@/components/ServiceSpotlight/ML/MLServiceOffered";
import MLBenefitsComponent from "@/components/ServiceSpotlight/ML/MLBenefits";
import MLDevelopmentApproach from "@/components/ServiceSpotlight/ML/MLDevApproach";
import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";

export default function ClientServices() {
    return (
        <div className="mt-5">
            <MLBanner />
            <MLServiceOffered />
            <MLBenefitsComponent />
            <MLDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
