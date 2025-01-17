import { Avatar, Card, CardContent, Typography } from "@mui/material";
import ceoImage from "@/public/aboutus/ceoImage.png";
import Image from "next/image";
import polygon from "@/public/aboutus/Polygon3.png";
import { Description } from "@mui/icons-material";

const DirectorData = {
    title: "Director Desk",
    about: {
        image: ceoImage,
        name: "Mr. Nakul Kabra",
        position: "CEO, Kay Jay Global Solutions",
        description: [
            "At Kay Jay Global Solutions, we're driven by a legacy of excellence, innovation, and care. Founded in 1996, our journey began with a vision to nurture relationships and provide exceptional service and quality.",
            "Today, we extend that philosophy to our clients, employees, and partners alike. We believe in empowering businesses with cutting-edge technology solutions while fostering a supportive environment where everyone thrives.",
            "As we navigate the ever-evolving technological landscape, we remain committed to our core values of integrity, client-centricity, employee empowerment, and continuous improvement. Join us as we shape the future of technology together.",
        ],
    },
};

export default function DirectorDesk() {
    return (
        <main className="flex flex-col items-center justify-center custom-770:p-0 custom-770:py-8 p-6 bg-gray-50 relative">
            <div className="absolute left-0 bottom-0 z-0 hidden lg:block">
                <Image
                    src={polygon}
                    alt="Polygon"
                    className="min-h-[25rem] h-[26rem] min-w-[25rem] w-[25rem]  "
                />
            </div>
            <h1 className=" text-3xl md:text-4xl lg:text-5xl text-primary-blue font-bold text-center custom-770:mb-5 mb-0">
                {DirectorData.title}
            </h1>
            <Card
                className="max-w-7xl flex flex-col lg:flex-row justify-center items-center custom-770:gap-10 gap-10 lg:gap-40"
                sx={{
                    boxShadow: "0px 0px 0px 0px",
                    padding: "1.5rem",
                    paddingY: "0.75rem",
                    backgroundColor: "transparent",
                    width: "100%",

                    "@media (max-width: 768px)": {
                        marginLeft: "0px",
                    },
                }}
            >
                <Image
                    src={DirectorData.about.image}
                    alt="CEO"
                    width={250}
                    height={250}
                    className="z-10"
                />
                <div className="flex flex-col items-start justify-center custom-770:p-0 p-4">
                    <div className="flex flex-col gap-0.5 mb-4 custom-770:mx-auto mx-auto lg:mx-0">
                        <h1 className="font-semibold text-3xl">
                            {DirectorData.about.name}
                        </h1>
                        <h4 className="text-gray-600 text-sm">
                            {DirectorData.about.position}
                        </h4>
                    </div>
                    <div className="max-w-2xl text-sm flex flex-col gap-1.5">
                        {DirectorData.about.description.map((desc, index) => (
                            <Typography key={index} className="text-justify">
                                {desc}
                            </Typography>
                        ))}
                    </div>
                </div>
            </Card>
        </main>
    );
}
