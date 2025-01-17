import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/ml11.png";
import offer22 from "@/public/services/ml22.png";
import offer33 from "@/public/services/ml33.png";
import offer44 from "@/public/services/ml44.png";
import offer55 from "@/public/services/ml55.png";
import offer66 from "@/public/services/ml66.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton";

const CardData = {
    title: "Machine Learning and Deep Learning Portfolio",
    description:
        "Unlock the power of AI with KayJay Global Solutions. Our machine learning and deep learning services drive smarter decisions and innovation.",
    cta: "Schedule A Meeting",
};

const services = [
    {
        icon: offer11,
        title: "Model Development",
        description:
            "We build custom machine learning models to address your unique challenges and opportunities.",
    },
    {
        icon: offer22,
        title: "Neural Network Design",
        description:
            "Our experts design deep learning architectures to solve complex problems with precision.",
    },
    {
        icon: offer33,
        title: "Data Preprocessing",
        description:
            "We preprocess and prepare your data for machine learning, ensuring accuracy and reliability.",
    },
    {
        icon: offer44,
        title: "Algorithm Optimization",
        description:
            "Our team optimizes algorithms for faster processing and better outcomes.",
    },
    {
        icon: offer55,
        title: "Real-Time Analytics",
        description:
            "We develop real-time analytics solutions to provide immediate insights for dynamic decision-making.",
    },
    {
        icon: offer66,
        title: "AI-Powered Automation",
        description:
            "We combine machine learning with automation to deliver intelligent, self-adapting systems.",
    },
];

export default function MLServiceOffered() {
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
