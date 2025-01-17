import { Typography, Card } from "@mui/material";
import Image from "next/image";

import offer11 from "@/public/services/marketing11.png";
import offer22 from "@/public/services/marketing22.png";
import offer33 from "@/public/services/marketing33.png";
import offer44 from "@/public/services/marketing44.png";
import offer55 from "@/public/services/marketing55.png";
import offer66 from "@/public/services/marketing66.png";
import offer77 from "@/public/services/marketing77.png";
import offer88 from "@/public/services/marketing88.png";
import offer99 from "@/public/services/marketing99.png";
import offer100 from "@/public/services/marketing100.png";
import { ScheduleMeetingButton } from "@/components/Common/ScheduleMeetingButton"

const services = [
    {
        icon: offer11,
        title: "Search Engine Optimization (SEO)",
        description:
            "Our SEO experts implement proven strategies to improve your website’s organic search rankings, increase visibility on search engines like Google, and attract high-quality, relevant traffic. We focus on on-page SEO, link building, technical SEO, and local SEO to ensure your site ranks well and drives traffic.",
    },
    {
        icon: offer22,
        title: "Pay-Per-Click (PPC) Advertising",
        description:
            "We create targeted PPC campaigns across platforms like Google Ads, Bing Ads, and social media to drive immediate, high-quality traffic to your website. Our team optimizes your ads for maximum ROI, ensuring every penny spent delivers results.",
    },
    {
        icon: offer33,
        title: "Social Media Marketing",
        description:
            "We help you build a strong social media presence across platforms like Facebook, Instagram, LinkedIn, Twitter, and more. Our social media strategies focus on increasing brand awareness, driving engagement, and fostering meaningful connections with your audience.",
    },
    {
        icon: offer44,
        title: "Content Marketing",
        description:
            "We create high-quality, relevant, and engaging content that resonates with your target audience. From blogs and articles to videos and infographics, our content marketing strategies are designed to educate, inform, and engage your audience, while building trust and authority in your industry.",
    },
    {
        icon: offer55,
        title: "Email Marketing",
        description:
            "Our email marketing campaigns are designed to nurture leads, engage your audience, and drive conversions. We segment your audience for personalized messages, ensuring that your emails are relevant and timely, leading to higher open rates and better customer retention.",
    },
    {
        icon: offer66,
        title: "Conversion Rate Optimization (CRO)",
        description:
            "We analyze user behavior and optimize your website or landing pages to increase conversions. Through A/B testing, user experience analysis, and performance tracking, we help you turn more visitors into loyal customers and clients.",
    },
    {
        icon: offer77,
        title: "Online Reputation Management (ORM)",
        description:
            "We help you monitor, manage, and enhance your online reputation. From responding to reviews to implementing reputation-building strategies, we ensure your brand’s reputation remains positive and trustworthy across all platforms.",
    },
    {
        icon: offer88,
        title: "Affiliate Marketing",
        description:
            " Our affiliate marketing services help you build partnerships with influencers and affiliates who can promote your brand in exchange for a commission on sales. We manage the entire process from selecting partners to tracking performance, ensuring maximum ROI.",
    },
    {
        icon: offer99,
        title: "Video Marketing",
        description:
            "Video content is one of the most powerful ways to engage and convert audiences. We create compelling videos that tell your brand story, showcase your products, and drive conversions across platforms like YouTube, Facebook, and Instagram.",
    },
    {
        icon: offer100,
        title: "Mobile Marketing",
        description:
            "Reach your audience on their mobile devices through targeted mobile ads, SMS campaigns, and app marketing. We design mobile-first strategies that increase engagement and drive conversions, ensuring your brand stays connected with customers on the go.",
    },
];

export default function MarketingServiceOffered() {
    return (
        <main className="px-6 pb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-blue mb-4 tracking-wider">
                Digital Marketing Services Offered
            </h1>
            <h4
                variant="body1"
                className="text-center text-gray-600 mb-8 w-full md:max-w-4xl mx-auto"
            >
                Unlock the full potential of your digital presence with KayJay
                Global Solutions’s expert marketing services. We offer a
                comprehensive range of solutions to help you increase brand
                awareness, drive traffic, and boost conversions.
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
