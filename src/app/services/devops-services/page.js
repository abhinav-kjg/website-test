import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import DevopBanner from "@/components/Service/DevopBanner";
import DevopBenefitsComponent from "@/components/Service/DevopBenefits";
import DevopDevelopmentApproach from "@/components/Service/DevopDevApproach";
import DevopServiceOffered from "@/components/Service/DevopServiceOffered";

export default function DevOpsServices() {
    return (
        <div className="mt-5">
            <DevopBanner />
            <DevopServiceOffered />
            <DevopBenefitsComponent />
            <DevopDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
