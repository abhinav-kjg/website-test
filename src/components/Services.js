"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

// image
import image1 from "@/public/Group1.png";
import image2 from "@/public/Group2.png";
import image3 from "@/public/Group3.png";
import image4 from "@/public/Group4.png";
import image5 from "@/public/Group5.png";
import image6 from "@/public/Group6.png";
import image7 from "@/public/Group7.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const serviceData = [
    {
        id: "client",
        title: "Client Side Development",
        description:
            "Craft captivating web pages and applications using our custom front-end services that engage users visually and provide seamless user experiences. We prioritize excellence, innovation and user-centric approaches to maintain this mastery.",
        image: image1,
        link: "/services/client-services",
    },
    {
        id: "server",
        title: "Server side Engineering",
        description:
            "Harness the advantages of a scalable and robust backend development, ensuring a seamless server, minimized downtime, and enhanced user experiences. Get a comprehensive range of customizable global IT solutions custom-made to upgrade your web and mobile applications.",
        image: image2,
        link: "/services/server-services",
    },
    {
        id: "mobility",
        title: "Mobility Services",
        description:
            "Experience our versatile and cutting-edge technology for mobile app development, tailored to meet your business objectives. Clients highly appreciate our mobile app development services, which leverage technology to help them achieve their revenue objectives.",
        image: image3,
        link: "/services/mobility-services",
    },
    {
        id: "devops",
        title: "DevOps Solutions",
        description:
            "Leverage KayJay Global Solutions software solutions, our decade-plus experience in automation and operational delivery for seamless infrastructure and deployment with top-notch software development services. Our efficient DevOps professional services ensure a smooth and speedy technical journey for you.",
        image: image4,
        link: "/services/devops-services",
    },
    {
        id: "testing",
        title: "Software Testing",
        description:
            "Experience our versatile and cutting-edge technology for mobile app development, tailored to meet your business objectives. Clients highly appreciate our mobile app development services, which leverage technology to help them achieve their revenue objectives.",
        image: image5,
        link: "/services/testing-services",
    },
    {
        id: "design",
        title: "UI/UX Design Service",
        description:
            "Create visually stunning, user-centric, UI/UX designs. The UI/UX design process at KayJay Global Solutions, is crafted to create solutions that resonate with customers and deliver tangible business results.",
        image: image6,
        link: "/services/design-services",
    },
    {
        id: "marketting",
        title: "Digital Marketing",
        description:
            "Create visually stunning, user-centric, and cost-effective UI/UX designs that captivate users throughout their journey. The UI/UX design process at KayJay Global Solutions, an IT software service company, is crafted to create solutions that resonate with customers and deliver tangible business results.",
        image: image7,
        link: "/services/marketing-services",
    },
];

export default function OurServices() {
    const [expandedCard, setExpandedCard] = useState("client");
    const cardRefs = useRef([]);
    const router = useRouter();

    const handleCardClick = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    const hanldeKnowMoreClick = (service) => (e) => {
        e.stopPropagation();
        router.push(service.link);
    };

    // Close the card if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                expandedCard !== null &&
                cardRefs.current[expandedCard] &&
                !cardRefs.current[expandedCard].contains(event.target)
            ) {
                setExpandedCard(null);
            }
        };

        // document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [expandedCard]);

    return (
        <div id="services-home" className="flex flex-col w-full justify-center items-center gap-7 min-h-screen">
            <div className="font-bold text-primary-blue text-2xl md:text-3xl lg:text-4xl bg-gradient-custom-blue px-1">
                Our Services
            </div>
            <div className="text-[#606060] max-w-[50rem] text-center mx-5">
                At Kay Jay Global Solutions, we offer a comprehensive suite of
                services designed to guide your business through a seamless
                digital transformation journey:
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                {serviceData.map((service, index) => (
                    <div
                        key={service.id}
                        ref={(el) => (cardRefs.current[service.id] = el)} // Store the ref for each card
                        className={`relative transition-all duration-500 cursor-pointer overflow-hidden rounded-lg ${
                            expandedCard === service.id
                                ? " w-full lg:w-[40rem] h-[30rem] "
                                : "w-20 h-[30rem]"
                        }`}
                        onClick={() => handleCardClick(service.id)}
                    >
                        {/* Background Image */}
                        <div className="absolute top-0 left-0 w-full h-full -z-10">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover object-center"
                                priority={true}
                            />
                        </div>

                        {/* Content Overlay */}
                        <div
                            className={`relative z-10 text-white h-full px-2 ${
                                expandedCard === service.id
                                    ? "flex flex-col justify-end items-end py-3"
                                    : "flex flex-col items-center justify-center bg-black/40"
                            }`}
                        >
                            {expandedCard !== service.id ? (
                                <span className="text-2xl text-start font-bold transform -rotate-90 whitespace-nowrap ">
                                    <span
                                        className={`${
                                            index % 2 === 0
                                                ? "bg-[#1868DBD6]"
                                                : "bg-[#2ACDBCD4]"
                                        }`}
                                        style={{ display: "inline" }}
                                    >
                                        {service.title.slice(0, 10)}
                                    </span>
                                    <span style={{ display: "inline" }}>
                                        {service.title.slice(10)}
                                    </span>
                                </span>
                            ) : (
                                <div
                                    className={`p-6 w-full max-w-full mx-auto flex flex-col gap-4 pb-4 ${
                                        index % 2 === 0
                                            ? "bg-[#1868DBD6]"
                                            : "bg-[#2ACDBCD4]"
                                    }`}
                                >
                                    <h2 className="text-base text-nowrap md:text-2xl font-bold">
                                        {service.title}
                                    </h2>
                                    <p className="text-xs md:text-sm font-medium">
                                        {service.description}
                                    </p>
                                    <button
                                        type="button"
                                        className="flex gap-2 items-center"
                                        onClick={hanldeKnowMoreClick(service)}
                                    >
                                        <div className="text-white text-sm md:text-base">
                                            Know More
                                        </div>
                                        <FaArrowRight className="text-white text-lg" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
