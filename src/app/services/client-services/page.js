import Image from "next/image";
import { Button } from "@mui/material";
import ClientBanner from "@/components/Service/ClientBanner";
import ClientServiceOffered from "@/components/Service/ClientServiceOffered";
import ClientBenefitsComponent from "@/components/Service/clientBenefits";
import ClientDevelopmentApproach from "@/components/Service/ClientDevApproach";
import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";

export default function ClientServices() {
    return (
        <div className="mt-5">
            <ClientBanner />
            <ClientServiceOffered />
            <ClientBenefitsComponent />
            <ClientDevelopmentApproach />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
