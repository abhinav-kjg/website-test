import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import TestingBanner from "@/components/Service/testing/TestingBanner";
import TestingBenefitsComponent from "@/components/Service/testing/TestingBenefits";
import TestingDevelopmentApproach from "@/components/Service/testing/TestingDevApproach";
import TestingServiceOffered from "@/components/Service/testing/TestingServiceOffered";

export default function TestingServices() {
    return (
        <div className="mt-5">
            <TestingBanner />
            <TestingServiceOffered />
            <TestingBenefitsComponent />
            <TestingDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
