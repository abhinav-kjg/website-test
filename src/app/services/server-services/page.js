import RecentBlogs from "@/components/Common/Blog";
import ServerBanner from "@/components/Service/serverBanner";
import ServerServiceOffered from "@/components/Service/serverServiceOffered";
import ServerBenefitsComponent from "@/components/Service/serverBenefits";
import ServerDevelopmentApproach from "@/components/Service/serverDevApproach";
import NewContactUsForm from "@/components/NewContactUsForm";

export default function ServerServices() {
    return (
        <div className="mt-5">
            <ServerBanner />
            <ServerServiceOffered />
            <ServerBenefitsComponent />
            <ServerDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
