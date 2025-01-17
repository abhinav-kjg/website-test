import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/ai11.png";
import offer22 from "@/public/services/ai22.png";
import offer33 from "@/public/services/ai33.png";
import offer44 from "@/public/services/ai44.png";
import offer55 from "@/public/services/ai55.png";
import offer66 from "@/public/services/ai66.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton";

const CardData = {
    title: "AI Strategy and Consulting Portfolio",
    description:
        "Realize the full potential of artificial intelligence with KayJay Global Solutions. Our comprehensive AI strategy and consulting services ensure successful integration and scalability tailored to your business needs.",
    cta: "Schedule a Meeting",
};

const services = [
    {
        icon: offer11,
        title: "AI Roadmap Development",
        description:
            "We create a detailed AI roadmap that aligns with your business goals, identifying the best AI technologies and applications to optimize operations and deliver value.",
    },
    {
        icon: offer22,
        title: "AI Readiness Assessment",
        description:
            "We evaluate your organization’s readiness for AI adoption, analyzing infrastructure, data, and processes to determine the next steps for a seamless integration.",
    },

    {
        icon: offer33,
        title: "Custom AI Solutions",
        description:
            "We design and develop AI solutions tailored to your specific challenges and opportunities, leveraging cutting-edge technologies to deliver measurable outcomes.",
    },
    {
        icon: offer44,
        title: "AI Implementation ",
        description:
            "From pilot projects to full-scale deployment, we ensure a smooth AI implementation process, minimizing disruption and maximizing ROI.",
    },
    {
        icon: offer55,
        title: "AI Training and Enablement",
        description:
            "We empower your team with the skills and knowledge to manage AI tools and systems effectively, ensuring long-term success and independence.",
    },
    {
        icon: offer66,
        title: "AI Governance and Ethics",
        description:
            "Our consultants help establish robust governance frameworks and ethical guidelines to ensure responsible AI use and compliance with regulations.",
    },
];

export default function AIStrategyServiceOffered() {
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
