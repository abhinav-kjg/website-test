import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/devops11.png";
import offer22 from "@/public/services/devops22.png";
import offer33 from "@/public/services/devops33.png";
import offer44 from "@/public/services/devops44.png";
import offer55 from "@/public/services/devops55.png";
import offer66 from "@/public/services/devops66.png";
import offer77 from "@/public/services/devops77.png";
import offer88 from "@/public/services/devops88.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton";

const services = [
    {
        icon: offer11,
        title: "Continuous Integration & Continuous Delivery (CI/CD)",
        description:
            "We automate the entire software delivery pipeline, from code commit to production, ensuring rapid, reliable, and error-free deployments with minimal manual intervention.",
    },
    {
        icon: offer22,
        title: "Infrastructure as Code (IaC)",
        description:
            "Using tools like Terraform and Ansible, we automate and manage your infrastructure, enabling reproducible environments, faster provisioning, and greater scalability.",
    },
    {
        icon: offer33,
        title: "Cloud Integration & Management",
        description:
            "We assist in seamless integration with cloud platforms like AWS, Azure, and Google Cloud, ensuring optimal resource utilization, high availability, and cost efficiency for your infrastructure.",
    },
    {
        icon: offer44,
        title: "Automated Testing & Quality Assurance",
        description:
            " We integrate automated testing into your CI/CD pipeline, ensuring that code is thoroughly tested before deployment, minimizing bugs and improving software quality.",
    },
    {
        icon: offer55,
        title: "Monitoring & Logging",
        description:
            "We implement proactive monitoring and logging solutions, such as Prometheus and ELK Stack, to track application performance, detect issues early, and ensure system reliability.",
    },
    {
        icon: offer66,
        title: "Security & Compliance Automation",
        description:
            "We integrate security practices into every stage of the DevOps pipeline, ensuring your applications are secure, compliant, and ready for deployment without manual security checks.",
    },
    {
        icon: offer77,
        title: "Containerization & Orchestration",
        description:
            "Using Docker and Kubernetes, we streamline deployment, scaling, and management of containerized applications, providing greater flexibility and scalability for your environments.",
    },
    {
        icon: offer88,
        title: "DevOps Consulting & Strategy",
        description:
            "We offer consulting services to help you define your DevOps strategy, assess your current environment, and develop a roadmap for implementing or improving DevOps practices in your organization.",
    },
];

export default function DevopServiceOffered() {
    return (
        <main className="px-6 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-blue mb-4 tracking-wider">
                DevOps Services Offered
            </h1>
            <h4
                variant="body1"
                className="text-center text-gray-600 mb-8 w-full md:max-w-3xl mx-auto"
            >
                Leverage the power of DevOps with KayJay Global Solutions's
                services, designed to enhance automation, collaboration, and the
                overall efficiency of your development lifecycle.
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
