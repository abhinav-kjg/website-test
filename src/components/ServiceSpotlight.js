"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "@/public/image1.png";
import image2 from "@/public/image2.png";
import image3 from "@/public/image3.png";
import image4 from "@/public/image4.png";
import image5 from "@/public/image5.png";
import image6 from "@/public/image6.png";
import image7 from "@/public/image7.png";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const items = [
    {
        title: "AI Strategy and Consulting",
        content:
            "Our AI Strategy and Consulting experts work closely with your team to create customized AI strategies.",
        cardContent:
            "Our seasoned experts collaborate closely with your team to craft customised AI strategies. We analyse your business goals, industry landscape, and existing infrastructure to create a roadmap that maximises AI’s impact.",
        image: image1,
        link: "/services/ai-strategy-and-consulting",
        disabled: false,
    },
    {
        title: "Data Analytics & Insights",
        content:
            "Our data analytics services reveal hidden patterns and actionable insights.",
        cardContent:
            "Our data analytics services unlock hidden patterns, trends, and actionable insights from your data. We help you make informed decisions by transforming raw information into valuable knowledge.",
        image: image2,
        link: "/services/data-analytics-and-insights",
        disabled: false,
    },
    {
        title: "Natural Language Processing (NLP)",
        content:
            "We build AI models that understand and process human language—whether it’s chatbots for customer support..",
        cardContent:
            "We build AI models that understand and process human language—whether it’s chatbots for customer support, sentiment analysis, or content summarization. ",
        image: image3,
        link: "/services/natural-language-processing",
        disabled: false,
    },
    {
        title: "Machine Learning & Deep Learning",
        content:
            "Our ML models learn from data, adapt, and improve over time. DL, inspired by neural networks.",
        cardContent:
            "Our ML models learn from data, adapt, and improve over time. DL, inspired by neural networks, tackles complex tasks like image classification and natural language understanding",
        image: image7,
        link: "/services/machine-learning-and-deep-learning",
        disabled: false,
    },
    {
        title: "Computer Vision & Image Recognition",
        content:
            "From detecting anomalies in manufacturing lines to facial recognition in security systems..",
        cardContent:
            "Our models go beyond surface-level recognition. They understand context. From detecting anomalies in manufacturing lines to facial recognition in security systems, we create AI models that “see” and interpret visual data.",
        image: image4,
        link: "/services/computer-vision-and-image-recognition",
        disabled: true,
    },
    {
        title: "Robotic Process Automation (RPA)",
        content:
            "Our RPA solutions streamline repetitive tasks, freeing up your workforce for more strategic work.",
        cardContent:
            "With RPA, organizations achieve a dual benefit: increased operational efficiency and a workforce empowered to contribute strategically. It’s a win-win for productivity and employee satisfaction.",
        image: image5,
        link: "/services/robotic-process-automation",
        disabled: true,
    },
    {
        title: "Predictive Analytics & Modeling",
        content:
            "Anticipate the future with confidence. Our predictive analytics models forecast trends, demand, and outcomes.",
        cardContent:
            "By analyzing historical data, we forecast trends, demand patterns, and potential outcomes. With our solutions, businesses gain foresight. Whether it’s supply chain optimization or financial planning, predictive analytics guides strategic choices.",
        image: image6,
        link: "/services/predictive-analytics-and-modeling",
        disabled: true,
    },
];

const ServiceSpotlight = () => {
    // Set the default active index to 0
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();

    const toggleAccordion = (index) => {
        // setActiveIndex(activeIndex === index ? null : index);

        setActiveIndex(index);
    };

    const activeContent = activeIndex !== null ? items[activeIndex] : null;

    const handleViewDetailsClick = (link) => (e) => {
        e.preventDefault();
        router.push(link);
    };

    return (
        <div
            id="services-spotlight-home"
            className="flex flex-col gap-10 py-10 px-4 md:px-20 min-h-screen"
        >
            <div className=" flex flex-col justify-center gap-6 items-center text-custom-blue">
                <div className="text-primary-blue inline-block text-center text-3xl md:text-4xl font-bold">
                    Service Spotlight -{" "}
                    <span className="bg-gradient-custom-blue px-2">
                        Gen AI Solutions{" "}
                    </span>
                </div>
                <div className="text-[#606060] text-base max-w-full md:max-w-[50%] text-center font-medium">
                    Our Gen AI solutions combine cutting-edge technology with
                    innovative thinking to address diverse industry challenges.
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="w-full lg:w-[45%] relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-gray-400"></div>

                    {items.map((item, index) => (
                        <div key={index} className="relative pl-2 md:pl-6 ">
                            <div
                                className={`absolute left-0 w-[5px] h-full transition-colors duration-300 ${
                                    activeIndex === index ? "bg-blue-500" : ""
                                }`}
                            ></div>

                            <button
                                className={`w-full flex justify-between items-center p-4 text-left text-base md:text-lg focus:outline-none transition-all duration-300 ${
                                    activeIndex === index
                                        ? "font-bold text-gray-900"
                                        : "font-medium text-gray-700"
                                }`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.title}
                                <span
                                    className={`transform transition-transform duration-300 ${
                                        activeIndex === index
                                            ? "rotate-90"
                                            : "rotate-0"
                                    }`}
                                >
                                    <FaArrowRight />
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="p-4 text-gray-600">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-3 w-full lg:w-[45%]">
                    {activeContent && (
                        <>
                            <Image
                                src={activeContent.image}
                                alt={activeContent.title}
                                className="h-[24rem]"
                            />

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "1.875rem",
                                    lineHeight: "2.25rem",
                                    fontWeight: "700",
                                }}
                            >
                                {activeContent.title}
                            </Typography>
                            <Typography variant="" className="">
                                {activeContent.cardContent}
                            </Typography>
                            <div>
                                {!activeContent.disabled && (
                                    <button
                                        className="bg-primary-blue text-white px-4 py-2 rounded"
                                        onClick={handleViewDetailsClick(
                                            activeContent.link
                                        )}
                                    >
                                        View In Detail
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceSpotlight;
