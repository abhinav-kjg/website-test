import AIStrategyBanner from "@/components/ServiceSpotlight/AIStrategy/AIStrategyBanner";
import AIStrategyServiceOffered from "@/components/ServiceSpotlight/AIStrategy/AIStrategyServiceOffered";
import AIStrategyBenefitsComponent from "@/components/ServiceSpotlight/AIStrategy/AIStrategyBenefits";
import AIStrategyDevelopmentApproach from "@/components/ServiceSpotlight/AIStrategy/AIStrategyDevApproach";
import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";

export default function ClientServices() {
    return (
        <div className="mt-5">
            <AIStrategyBanner />
            <AIStrategyServiceOffered />
            <AIStrategyBenefitsComponent />
            <AIStrategyDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
