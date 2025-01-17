import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/server11.png";
import offer22 from "@/public/services/server22.png";
import offer33 from "@/public/services/server33.png";
import offer44 from "@/public/services/server44.png";
import offer55 from "@/public/services/server55.png";
import offer66 from "@/public/services/server66.png";
import offer77 from "@/public/services/server77.png";
import offer88 from "@/public/services/server88.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton"

const services = [
    {
        icon: offer11,
        title: "Back-End Application Development",
        description:
            "Our developers design and implement secure, high-performance back-end systems that are tailored to your specific business needs, supporting your front-end seamlessly.",
    },
    {
        icon: offer22,
        title: "API Development & Integration",
        description:
            "We build robust and secure RESTful and GraphQL APIs to enable smooth communication between your client-side and server-side, ensuring a seamless user experience.",
    },
    {
        icon: offer33,
        title: "Cloud Services & Infrastructure",
        description:
            "We provide cloud architecture solutions that scale with your business, including AWS, Google Cloud, and Azure integrations, to ensure high availability and performance",
    },
    {
        icon: offer44,
        title: "Database Design & Management",
        description:
            "Our database experts design and optimize relational and NoSQL databases, ensuring efficient data storage, retrieval, and scalability.",
    },
    {
        icon: offer55,
        title: "Microservices Architecture",
        description:
            "Adopt a microservices architecture for modular, scalable, and independently deployable back-end services that can be scaled individually as your business grows.",
    },
    {
        icon: offer66,
        title: "Server Performance Optimization",
        description:
            "We ensure that your server-side infrastructure operates at peak performance, reducing latency, and ensuring a seamless experience for your users.",
    },
    {
        icon: offer77,
        title: "Back-End Security Solutions",
        description:
            "Our robust security practices protect your back-end code, infrastructure, and data from potential vulnerabilities and cyber threats",
    },
    {
        icon: offer88,
        title: "Continuous Integration & Continuous Deployment (CI/CD)",
        description:
            "We develop PWAs combining web and mobile benefits, offering offline access, push notifications, and native app-like experiences to boost user engagement, retention, and performance.",
    },
];

export default function ServerServiceOffered() {
    return (
        <main className="px-6 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-blue mb-4 tracking-wider">
                Server-Side Service Offered
            </h1>
            <h4
                variant="body1"
                className="text-center text-gray-600 mb-8 w-full md:max-w-3xl mx-auto"
            >
                Enhance your application’s backend with KayJay Global
                Solutions’s expert server-side engineering services, designed to
                ensure security, performance, and scalability.
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
