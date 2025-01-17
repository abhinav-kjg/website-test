import { Typography, Card, Button } from "@mui/material";
import Image from "next/image";

import client11 from "@/public/services/client11.png";
import client22 from "@/public/services/client22.png";
import client33 from "@/public/services/client33.png";
import client44 from "@/public/services/client44.png";
import client55 from "@/public/services/client55.png";
import client66 from "@/public/services/client66.png";
import client77 from "@/public/services/client77.png";
import client88 from "@/public/services/client88.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton";

const services = [
    {
        icon: client11,
        title: "UI/UX Design and Development",
        description:
            "We design visually engaging, user-centered interfaces that align with business objectives. Our UI/UX experts excel in research, architecture, and design, ensuring seamless, delightful user journeys. Include mockups or wireframes.",
    },
    {
        icon: client22,
        title: "Responsive Web Design",
        description:
            "Reach your audience seamlessly across all devices. Our responsive web design approach ensures your website adapts flawlessly to desktops, laptops, tablets, and smartphones, providing an optimal viewing experience for every user.",
    },
    {
        icon: client33,
        title: "Single Page Applications (SPAs)",
        description:
            "We create high-performance SPAs with fast loading and seamless transitions, ensuring engaging user experiences. Showcase examples like smooth scrolling or dynamic content updates for impact.",
    },
    {
        icon: client44,
        title: "Progressive Web Applications (PWAs)",
        description:
            "We develop PWAs combining web and mobile benefits, offering offline access, push notifications, and native app-like experiences to boost user engagement, retention, and performance.",
    },
    {
        icon: client55,
        title: "JavaScript Frameworks solutions",
        description:
            "We develop PWAs combining web and mobile benefits, offering offline access, push notifications, and native app-like experiences to boost user engagement, retention, and performance.",
    },
    {
        icon: client66,
        title: "Web Accessibility",
        description:
            "We create inclusive digital experiences, adhering to WCAG accessibility guidelines to ensure usability for people with disabilities, expanding reach and showcasing your commitment to inclusivity.",
    },
    {
        icon: client77,
        title: "Performance Optimization",
        description:
            "We design inclusive digital experiences, following WCAG guidelines to ensure accessibility for users with disabilities, broadening your reach and emphasizing your dedication to inclusivity.",
    },
    {
        icon: client88,
        title: "Animation and Micro-interactions",
        description:
            "Delight your users with subtle animations and micro-interactions that bring your interface to life. We create engaging and meaningful animations that enhance user experience and guide users through your website or application.",
    },
];

export default function ClientServiceOffered() {
    return (
        <main className="px-6 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-blue mb-4 tracking-wider">
                Client-Side Service Offered
            </h1>
            <h4 className="text-center text-gray-600 mb-8 w-full md:max-w-3xl mx-auto">
                Unlock seamless user experiences with KayJay Global Solution's
                expert client-side engineering services, designed to create
                dynamic, high-performing interfaces.
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
