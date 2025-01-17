import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/design11.png";
import offer22 from "@/public/services/design33.png";
import offer33 from "@/public/services/design44.png";
import offer44 from "@/public/services/design55.png";
import offer55 from "@/public/services/design66.png";
import offer66 from "@/public/services/design77.png";
import offer77 from "@/public/services/design88.png";
import offer88 from "@/public/services/design99.png";
import offer99 from "@/public/services/design100.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton";

const services = [
    {
        icon: offer11,
        title: "User Research & Analysis",
        description:
            "We start by understanding your target users, their needs, and pain points through qualitative and quantitative research. This helps us create data-driven design strategies that resonate with your audience.",
    },
    {
        icon: offer22,
        title: "UI Design (User Interface Design)",
        description:
            "We design visually captivating and consistent user interfaces that align with your brand identity and business goals. Our focus is on creating easy-to-use layouts, intuitive navigation, and a cohesive design language across your product.",
    },
    {
        icon: offer33,
        title: "UX Design (User Experience Design)",
        description:
            "We craft intuitive user experiences that are easy to navigate and solve real user problems. By focusing on user flows, interaction design, and usability, we ensure your users have a smooth and enjoyable journey through your application.",
    },
    {
        icon: offer44,
        title: "Wireframing & Prototyping",
        description:
            "We create wireframes and interactive prototypes to visualize the layout, structure, and functionality of your application before the actual design phase, helping you validate ideas and concepts early on.",
    },
    {
        icon: offer55,
        title: "Usability Testing",
        description:
            "We conduct usability tests with real users to validate design decisions and gather feedback for iterative improvement. This ensures that the final product is user-friendly and meets user expectations.",
    },
    {
        icon: offer66,
        title: "Responsive Design",
        description:
            " We ensure that your web application looks and works beautifully on all devices, from desktops to smartphones. Our responsive design principles ensure a consistent experience across various screen sizes and platforms.",
    },
    {
        icon: offer77,
        title: "Interaction Design",
        description:
            "Our designers craft smooth, natural interactions that engage users. From hover effects to animations, we ensure your application’s interactive elements provide valuable feedback and enhance usability.",
    },
    {
        icon: offer88,
        title: "Design System Creation",
        description:
            "We build design systems that create consistency across your application and across teams. With reusable components, color schemes, typography, and design guidelines, we ensure scalability and maintainability.",
    },
    {
        icon: offer99,
        title: "UI/UX Consultation & Strategy",
        description:
            "We provide expert guidance on UI/UX best practices, helping you create a design roadmap that aligns with your goals and user needs. We also assist with improving your current design by identifying pain points and opportunities for optimization.",
    },
];

export default function DesignServiceOffered() {
    return (
        <main className="px-6 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-blue mb-4 tracking-wider">
                UI/UX Design Services Offered
            </h1>
            <h4
                variant="body1"
                className="text-center text-gray-600 mb-8 w-full md:max-w-4xl mx-auto"
            >
                Leverage the power of user-centered design with KayJay Global
                Solutions's UI/UX services, helping you craft memorable digital
                experiences that drive user satisfaction and business growth.
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
