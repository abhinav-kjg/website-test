import { Avatar, Card, CardContent, Typography } from "@mui/material";
import ceoImage from "@/public/aboutus/ceoImage.png";
import Image from "next/image";
import mission from "@/public/aboutus/mission.svg";
import vision from "@/public/aboutus/vision.svg";

const data = {
    mssion: {
        title: "Mission",
        description: [
            "At KayJay Global Solutions, our mission is to empower organizations globally by delivering innovative, technology-driven solutions that address complex business challenges and drive sustainable growth. Guided by a commitment to excellence and integrity, we aim to create long-term value for our clients, employees, and partners through tailored, purpose-driven strategies.",
            "We prioritize client-centricity, operational excellence, and a people-first approach, fostering an environment where innovation thrives, and individuals succeed collectively. With a steadfast focus on continuous improvement, we strive to be a trusted partner in enabling businesses to achieve their objectives in an ever-evolving technological landscape.",
        ],
        image: mission,
    },
    vision: {
        title: "Vision",
        description: [
            "Our vision is to be a global leader in technology solutions, shaping the future of business innovation through a seamless blend of advanced technology, strategic foresight, and exceptional service.. We aspire to create a transformative ecosystem that empowers organizations to navigate the complexities of a dynamic digital world while achieving operational excellence and competitive advantage. Anchored in sustainability, inclusivity, and agility, we aim to set industry benchmarks for innovation, quality, and trust.",
            "  At KayJay Global Solutions, we envision a future where our unwavering dedication to professionalism and excellence fosters enduring relationships, driving shared success and redefining the boundaries of technological innovation on a global scale.",
        ],
        image: vision,
    },
};

export default function VisionComponent() {
    return (
        <div className="flex flex-col gap-8 md:gap-2 my-10 md:my-4">
            <div className="flex custom-770:flex-col flex-row items-center justify-start gap-2 md:gap-10 mx:0 lg:mx-24 ">
                <Image
                    src={data.mssion.image}
                    alt={data.mssion.title}
                    className="w-80 h-80 mt-0 md:mt-8"
                />
                <div className=" custom-770:text-center text-start mx-5 flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-blue font-bold">
                        {data.mssion.title}
                    </h1>
                    <div className="max-w-4xl flex flex-col gap-1.5">
                        {data.mssion.description.map((item, index) => (
                            <Typography
                                key={index}
                                sx={{
                                    fontWeight: 300,
                                    textAlign: "start",
                                    fontSize: "1.125rem",
                                    lineHeight: "1.7rem",

                                    "@media (max-width: 768px)": {
                                        fontSize: "1rem",
                                        lineHeight: "1.5rem",
                                    },
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex custom-770:flex-col-reverse flex-row items-center justify-end gap-2 md:gap-10 mx:0 lg:mx-20 ">
                <div className=" custom-770:text-center text-end mx-5 flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-blue font-bold">
                        {data.vision.title}
                    </h1>
                    <div className="max-w-4xl flex flex-col gap-1.5">
                        {data.vision.description.map((item, index) => (
                            <Typography
                                key={index}
                                sx={{
                                    fontWeight: 300,
                                    textAlign: "end",
                                    fontSize: "1.125rem",
                                    lineHeight: "1.7rem",

                                    "@media (max-width: 768px)": {
                                        textAlign: "start",
                                        fontSize: "1rem",
                                        lineHeight: "1.5rem",
                                    },
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </div>
                </div>
                <Image
                    src={data.vision.image}
                    alt={data.vision.title}
                    className="w-80 h-80 mt-0 md:mt-8"
                />
            </div>
        </div>
    );
}
