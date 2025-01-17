import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/nlp11.png";
import offer22 from "@/public/services/nlp22.png";
import offer33 from "@/public/services/nlp33.png";
import offer44 from "@/public/services/nlp44.png";
import offer55 from "@/public/services/nlp55.png";
import offer66 from "@/public/services/nlp66.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton";

const CardData = {
    title: "Natural Language Processing Service Portfolio",
    description:
        "Transform how your business interacts and processes language with KayJay Global Solutions. Our NLP services enable smarter, more efficient text and speech handling.",
    cta: "Contact Us",
};

const services = [
    {
        icon: offer11,
        title: "Chatbot Development",
        description:
            "We create intelligent chatbots that provide seamless customer support and engagement, enhancing user experience and efficiency.",
    },
    {
        icon: offer22,
        title: "Sentiment Analysis",
        description:
            "Our NLP tools analyze customer sentiment in real-time, offering insights to improve satisfaction and loyalty.",
    },
    {
        icon: offer33,
        title: "Text Summarization",
        description:
            "We provide automated summarization solutions to condense lengthy documents, making information easier to digest and utilize.",
    },
    {
        icon: offer44,
        title: "Speech-to-Text and Text-to-Speech",
        description:
            "Our solutions convert speech to text and vice versa, enabling accessibility and convenience across applications.",
    },

    {
        icon: offer55,
        title: "Language Translation",
        description:
            "We deliver precise language translation services to support multilingual communication and global outreach.",
    },
    {
        icon: offer66,
        title: "Information Extraction",
        description:
            "Our NLP systems extract key information from unstructured text, enabling faster and more informed decision-making.",
    },
];

export default function NLPServiceOffered() {
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
