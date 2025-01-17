import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import DesignBanner from "@/components/Service/design/DesignBanner";
import DesignBenefitsComponent from "@/components/Service/design/DesignBenefits";
import DesignDevelopmentApproach from "@/components/Service/design/DesignDevApproach";
import DesignServiceOffered from "@/components/Service/design/DesignServiceOffered";

export default function DesignServices() {
    return (
        <div className="mt-5">
            <DesignBanner />
            <DesignServiceOffered />
            <DesignBenefitsComponent />
            <DesignDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
