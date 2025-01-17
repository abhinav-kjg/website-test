import DataAnalyticsBanner from "@/components/ServiceSpotlight/DataAnalytics/DataAnalyticsBanner";
import DataAnalyticsServiceOffered from "@/components/ServiceSpotlight/DataAnalytics/DataAnalyticsServiceOffered";
import DataAnalyticsBenefitsComponent from "@/components/ServiceSpotlight/DataAnalytics/DataAnalyticsBenefits";
import DataAnalyticsDevelopmentApproach from "@/components/ServiceSpotlight/DataAnalytics/DataAnalyticsDevApproach";
import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";

export default function ClientServices() {
    return (
        <div className="mt-5">
            <DataAnalyticsBanner />
            <DataAnalyticsServiceOffered />
            <DataAnalyticsBenefitsComponent />
            <DataAnalyticsDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
