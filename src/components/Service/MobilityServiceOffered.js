import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/mobility11.png";
import offer22 from "@/public/services/mobility22.png";
import offer33 from "@/public/services/mobility33.png";
import offer44 from "@/public/services/mobility44.png";
import offer55 from "@/public/services/mobility55.png";
import offer66 from "@/public/services/mobility66.png";
import offer77 from "@/public/services/mobility77.png";
import offer88 from "@/public/services/mobility88.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton"

const services = [
    {
        icon: offer11,
        title: "Native App Development",
        description:
            "Using technologies like Flutter and React Native, we build robust cross-platform mobile apps that offer great performance and native-like experiences across both iOS and Android with a single codebase.",
    },
    {
        icon: offer22,
        title: "Cross-Platform App Development",
        description:
            "We build robust and secure RESTful and GraphQL APIs to enable smooth communication between your client-side and server-side, ensuring a seamless user experience.",
    },
    {
        icon: offer33,
        title: "Custom Mobile App Solutions",
        description:
            "Our team builds fully customized mobile apps that cater to your specific business needs, whether it’s for e-commerce, social networking, enterprise solutions, or entertainment.",
    },
    {
        icon: offer44,
        title: "Mobile App UI/UX Design",
        description:
            "Our designers create intuitive and engaging user interfaces that improve usability, boost user engagement, and enhance retention, making your app stand out in the market.",
    },
    {
        icon: offer55,
        title: "Mobile App Maintenance & Support",
        description:
            "We provide ongoing maintenance and support services to keep your app running smoothly, ensuring that it stays up-to-date with the latest OS versions and continues to meet your users’ needs.",
    },
    {
        icon: offer66,
        title: "App Testing & Quality Assurance",
        description:
            "We perform rigorous testing and quality assurance to ensure that your mobile app is bug-free, performs optimally, and offers a seamless user experience across all devices.",
    },
    {
        icon: offer77,
        title: "Mobile App Integration Services",
        description:
            "Our team ensures smooth integration of your mobile app with third-party services, APIs, and enterprise back-end systems, providing a unified experience.",
    },
    {
        icon: offer88,
        title: "Mobile App Security Solutions",
        description:
            "We prioritize app security, implementing industry-standard encryption, secure data storage, and authentication mechanisms to protect user data and safeguard against potential threats.",
    },
];

export default function MobilityServiceOffered() {
    return (
        <main className="px-6 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-blue mb-4 tracking-wider">
                Mobile App Development Service Offered
            </h1>
            <h4
                variant="body1"
                className="text-center text-gray-600 mb-8 w-full md:max-w-4xl mx-auto"
            >
                Leverage the power of mobile technology with KayJay Global
                Solutions’s expert mobile app development services. We create
                custom apps designed to elevate your brand and engage users
                across multiple platforms.
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
