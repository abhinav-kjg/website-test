// app/page.js
import { Box, Typography, Grid } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import client111 from "@/public/services/client111.png";
import Image from "next/image";

const BenefitsData = {
    title: "Benefits of Software Testing",
    benefits: [
        "Improved Software Quality",
        "Faster Time-to-Market",
        "Cost Savings",
        "Increased Reliability & Stability",
        "Enhanced Security",
        "Better User Experience",
        "Compliance Assurance",
    ],
};

export default function TestingBenefitsComponent() {
    return (
        <main className="my-2 mb-10">
            <h1 className="text-3xl md:text-4xl text-center font-bold text-primary-blue mb-12 ">
                {BenefitsData.title}
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start custom-770:mx-8 ml-24">
                    {BenefitsData.benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center gap-3 px-4"
                        >
                            <Image
                                src={client111}
                                alt="tickmark"
                                className=" w-12 h-12"
                            />
                            <h1
                                variant="h5"
                                className="text-gray-700 text-xl lg:text-2xl "
                            >
                                {benefit}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
