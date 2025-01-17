import NLPBanner from "@/components/ServiceSpotlight/NLP/NLPBanner";
import NLPServiceOffered from "@/components/ServiceSpotlight/NLP/NLPServiceOffered";
import NLPBenefitsComponent from "@/components/ServiceSpotlight/NLP/NLPBenefits";
import NLPDevelopmentApproach from "@/components/ServiceSpotlight/NLP/NLPDevApproach";
import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";

export default function ClientServices() {
    return (
        <div className="mt-5">
            <NLPBanner />
            <NLPServiceOffered />
            <NLPBenefitsComponent />
            <NLPDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
