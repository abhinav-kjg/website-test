import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import MarketingBanner from "@/components/Service/marketing/MarketingBanner";
import MarketingBenefitsComponent from "@/components/Service/marketing/MarketingBenefits";
import MarketingDevelopmentApproach from "@/components/Service/marketing/MarketingDevApproach";
import MarketingServiceOffered from "@/components/Service/marketing/MarketingServiceOffered";

export default function MarketingServices() {
    return (
        <div className="mt-5">
            <MarketingBanner />
            <MarketingServiceOffered />
            <MarketingBenefitsComponent />
            <MarketingDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
