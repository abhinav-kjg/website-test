import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/testing11.png";
import offer22 from "@/public/services/testing22.png";
import offer33 from "@/public/services/testing33.png";
import offer44 from "@/public/services/testing44.png";
import offer55 from "@/public/services/testing55.png";
import offer66 from "@/public/services/testing66.png";
import offer77 from "@/public/services/testing77.png";
import offer88 from "@/public/services/testing88.png";
import offer99 from "@/public/services/testing99.png";
import offer100 from "@/public/services/testing100.png";
import offer101 from "@/public/services/testing101.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton";

const services = [
    {
        icon: offer11,
        title: "Manual Testing",
        description:
            "Our experienced testers manually execute test cases to identify functional, usability, and performance issues that may not be caught by automation, ensuring your app performs flawlessly in real-world scenarios.",
    },
    {
        icon: offer22,
        title: "Automated Testing",
        description:
            "We implement robust automated testing frameworks using tools like Selenium, Appium, and TestComplete to speed up repetitive testing, improve accuracy, and ensure consistent software quality across releases.",
    },
    {
        icon: offer33,
        title: "Functional Testing",
        description:
            "We ensure that your software performs its intended functions correctly. Our testing approach covers everything from user interactions to backend processes to ensure a seamless user experience.",
    },
    {
        icon: offer44,
        title: "Regression Testing",
        description:
            "Every time new functionality is added, we run comprehensive regression tests to make sure that existing features continue to work as expected, eliminating the risk of introducing new bugs.",
    },
    {
        icon: offer55,
        title: "Performance Testing",
        description:
            "We test your application for scalability, speed, and stability under different loads, ensuring it can handle traffic spikes, large volumes of data, and heavy user activity without compromising performance.",
    },
    {
        icon: offer66,
        title: "Security Testing",
        description:
            "We identify vulnerabilities in your software to ensure it is resistant to cyber threats. Our security testing process includes penetration testing, vulnerability assessments, and data protection evaluations.",
    },
    {
        icon: offer77,
        title: "Usability Testing",
        description:
            "Our usability testing experts evaluate your software’s user interface and experience to ensure it is intuitive, easy to navigate, and delivers a positive experience for your users.",
    },
    {
        icon: offer88,
        title: "Compatibility Testing",
        description:
            "We test your application across different devices, browsers, and operating systems to ensure consistency and reliability in varied environments, ensuring a smooth experience for all users.",
    },
    {
        icon: offer99,
        title: "API Testing",
        description:
            "We test your application’s API to ensure that data is transmitted securely, accurately, and efficiently between systems, verifying proper functionality, performance, and security.",
    },
    {
        icon: offer100,
        title: "Mobile Testing",
        description:
            "We provide comprehensive testing for mobile applications across both Android and iOS platforms, ensuring compatibility with different screen sizes, operating systems, and network conditions.",
    },
    {
        icon: offer101,
        title: "Continuous Testing",
        description:
            "As part of our DevOps approach, we integrate continuous testing into your CI/CD pipeline, allowing for early detection of defects and a more efficient development cycle.",
    },
];

export default function TestingServiceOffered() {
    return (
        <main className="px-6 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-blue mb-4 tracking-wider">
                Software Testing Service Offered
            </h1>
            <h4
                variant="body1"
                className="text-center text-gray-600 mb-8 w-full md:max-w-4xl mx-auto"
            >
                Unlock reliable, high-performing software solutions with KayJay
                Global Solutions’s comprehensive software testing services. We
                provide tailored testing strategies to meet your unique business
                needs.
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
