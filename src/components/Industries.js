"use client";
import { useState } from "react";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import icon1 from "@/public/icon1.png";
import icon2 from "@/public/icon2.png";
import icon3 from "@/public/icon3.png";
import icon4 from "@/public/icon4.png";
import icon5 from "@/public/icon5.png";
import icon6 from "@/public/icon6.png";
import icon7 from "@/public/icon7.png";
import icon8 from "@/public/icon8.png";
import icon9 from "@/public/icon9.png";
import icon10 from "@/public/icon10.png";
import icon11 from "@/public/icon11.png";
import icon12 from "@/public/icon12.png";
import icon13 from "@/public/icon13.png";
import icon14 from "@/public/icon14.png";
import icon15 from "@/public/icon15.png";
import icon16 from "@/public/icon16.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const cardsData = [
    {
        title: "Insurance",
        description:
            "Our successful project deliveries in the Insurance sector are a testament of our expertise.",
        icon: icon6,
    },

    {
        title: "Oil & Gas",
        description:
            "We have partnered with leading energy companies to optimise operations, enhance safety protocols, and streamline processes.",
        icon: icon9,
    },

    {
        title: "Real Estate/Construction",
        description:
            "We ensure minimising our ecological footprints while also developing cutting-edge tech.",
        icon: icon1,
    },

    {
        title: "Education",
        description:
            "Our educational solutions span e-learning platforms, student management systems, and personalised learning experiences",
        icon: icon11,
    },
    {
        title: "Healthcare",
        description:
            "Our healthcare IT solutions have revolutionized patient care, electronic and health records.",
        icon: icon3,
    },

    {
        title: "Media & Entertainment",
        description:
            "Our solutions enhance user experiences, optimise content delivery, and enable you to stay ahead",
        icon: icon4,
    },
    {
        title: "Automobile",
        description:
            "We accelerate automotive companies’ digital transformation, making mobility smarter and more efficient.",
        icon: icon5,
    },

    {
        title: "Travel & Hospitality",
        description:
            "KayJay’s travel technology solutions enhance booking systems, loyalty programs, and customer engagement",
        icon: icon10,
    },
    {
        title: "Retail",
        description:
            "We have extensive experience in the global Retail industry; streamlining operations and reducing costs.",
        icon: icon13,
    },

    {
        title: "Electronic Gaming",
        description:
            "KayJay’s gaming solutions cover game development, virtual reality, and esports platforms.",
        icon: icon7,
    },

    {
        title: "Sports",
        description:
            "Our fitness solutions include wearable devices, fitness apps, and virtual coaching.",
        icon: icon15,
    },

    {
        title: "Gym & Wellness",
        description:
            "Our wellness solutions promote mindfulness, stress management, and work-life balance.",
        icon: icon16,
    },
    {
        title: "Manufacturing",
        description:
            "Streamlining operations, managing inventory and vendors and much more with our robust solutions.",
        icon: icon12,
    },

    {
        title: "Logistics & Supply Chain",
        description:
            "Minimise costs while maximising reliability with our innovations in the industry.",
        icon: icon8,
    },
    {
        title: "Legal",
        description:
            "Our legal experts navigate complex regulations. Compliance ensures ethical practices and protects stakeholders.",
        icon: icon2,
    },

    {
        title: "Renewable Energy",
        description:
            "Our innovations in the Renewable Energy industry personifies our belief in sustainable development",
        icon: icon14,
    },
];

export default function IndustriesSection() {
    const router = useRouter();

    const [displayCount, setDisplayCount] = useState(5);

    const handleViewMoreJobsButton = () => {
        router.push("/industries");
    };

    return (
        <div id="industries-home" className="bg-white text-black py-10 ">
            <div className=" mx-auto text-center ">
                {/* Title */}
                <Typography
                    variant="h4"
                    gutterBottom
                    className=" bg-gradient-custom-blue"
                    sx={{
                        color: "#1868DB",
                        width: "fit-content",
                        marginX: "auto",
                        paddingX: "0.5rem",
                        lineHeight: "2.25rem",
                        fontSize: "1.875rem",
                        fontWeight: "700",
                        marginBottom: "2.5rem",

                        "@media (min-width: 768px)": {
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                        },
                    }}
                >
                    Industries
                </Typography>

                <div className="bg-primary-blue min-h-screen p-8">
                    {/* Cards */}
                    <div className=" pt-8 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cardsData.map((card, index) => (
                            <InsuranceCard
                                key={index}
                                index={index}
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                            />
                        ))}
                    </div>
                    <div className=" pt-8 grid md:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cardsData.slice(0, displayCount).map((card, index) => (
                            <InsuranceCard
                                key={index}
                                index={index}
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                            />
                        ))}
                    </div>
                    <div className="flex justify-end items-center">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                color: "#1868DB",
                                backgroundColor: "#ffffff",
                                "&:hover": {
                                    backgroundColor: "#D1D1D1",
                                },

                                "&:disabled": {
                                    backgroundColor: "#D1D1D1",
                                },
                                textTransform: "capitalize",
                                width: "fit-content",
                                fontWeight: "600",
                            }}
                            onClick={handleViewMoreJobsButton}
                        >
                            View More <FaArrowRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const InsuranceCard = ({ index, title, description, icon }) => {
    return (
        <Box
            key={index}
            className="flex flex-col items-center"
            sx={{
                position: "relative",
                marginBottom: "2.5rem",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    color: "#ffffff",
                    backgroundColor: "#307EED",
                    boxShadow: "0px 0px 0px 5px #1868DB",
                    border: "5px solid #1868DB",
                    borderRadius: "50%",
                    padding: "0.75rem",
                    top: "-2.5rem",
                    fontSize: "3rem",
                    lineHeight: "1rem",
                }}
            >
                <Image src={icon} alt={title} />
            </Box>
            <Card
                sx={{
                    backgroundColor: "#307EED",
                    borderRadius: "1rem",
                    paddingTop: "1.5rem",
                }}
            >
                <CardContent
                    className="flex flex-col justify-start text-center gap-4 "
                    sx={{
                        color: "#ffffff",
                        paddingTop: "2.5rem",
                        marginBottom: "2rem",
                        height: "10rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        className=" font-semibold"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            marginX: "1.5rem",
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};
