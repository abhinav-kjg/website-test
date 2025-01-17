import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/data11.png";
import offer22 from "@/public/services/data22.png";
import offer33 from "@/public/services/data33.png";
import offer44 from "@/public/services/data44.png";
import offer55 from "@/public/services/data55.png";
import offer66 from "@/public/services/data66.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton";

const CardData = {
    title: "Data Analytics & Insights Portfolio",
    description:
        "Leverage your data to its fullest potential with KayJay Global Solutions. Our advanced analytics services empower you to make informed decisions and stay ahead of the competition.",
    cta: "Schedule A Consultation",
};

const services = [
    {
        icon: offer11,
        title: "Data Strategy and Management",
        description:
            "We develop comprehensive data strategies that align with your business objectives, ensuring data quality, accessibility, and usability.",
    },

    {
        icon: offer22,
        title: "Business Intelligence",
        description:
            "Our BI solutions transform complex data into intuitive dashboards and reports, providing real-time insights to drive strategic decisions.",
    },
    {
        icon: offer33,
        title: "Predictive Analytics",
        description:
            "We use advanced statistical models and machine learning algorithms to predict future trends, helping you stay proactive and prepared.",
    },
    {
        icon: offer44,
        title: "Data Visualization",
        description:
            "Our visualization experts present your data in clear, engaging formats, making it easy to identify patterns and trends.",
    },
    {
        icon: offer55,
        title: "Big Data Processing",
        description:
            "We handle large-scale data processing using cutting-edge tools, ensuring quick and accurate analysis for complex datasets.",
    },
    {
        icon: offer66,
        title: "Data Governance",
        description:
            "Our services ensure your data practices comply with industry regulations and standards, maintaining security and integrity.",
    },
];

export default function DataAnalyticsServiceOffered() {
    return (
        <main className="px-6 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-blue mb-4 tracking-wider">
                {CardData.title}
            </h1>
            <h4
                variant="body1"
                className="text-center text-gray-600 mb-8 w-full md:max-w-4xl mx-auto"
            >
                {CardData.description}
            </h4>
            <div className="flex flex-wrap gap-10 mx-2 md:mx-12 lg:mx-28 justify-center">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        sx={{
                            boxShadow:
                                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                            maxWidth: "24rem",
                            padding: "1.25rem",
                            paddingBottom: "0.75rem",
                            minHeight: "16.5rem",
                        }}
                    >
                        <Image
                            src={service.icon}
                            alt="client1"
                            className="h-14 w-14 flex justify-center mb-4"
                        />
                        <h1 className="font-semibold mb-2 text-lg">
                            {service.title}
                        </h1>
                        <h5 className="text-gray-600 text-sm">
                            {service.description}
                        </h5>
                    </Card>
                ))}
            </div>
            <div className="flex items-center justify-center mb-5 mt-20">
                <ScheduleMeetingButton />
            </div>
        </main>
    );
}
