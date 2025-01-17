import { Box, Typography } from "@mui/material";
import setsUsAppart1 from "@/public/aboutus/setsUsAppart1.png";
import setsUsAppart2 from "@/public/aboutus/setsUsAppart2.png";
import setsUsAppart3 from "@/public/aboutus/setsUsAppart3.png";
import setsUsAppart4 from "@/public/aboutus/setsUsAppart4.png";
import Image from "next/image";

const AboutData = {
    title: "What Sets Us Apart?",
    data: [
        {
            icon: setsUsAppart1,
            title: "Purpose-Driven Solutions",
            description:
                "We go beyond simply building software, crafting solutions that address your specific business challenges and drive tangible results.",
        },
        {
            icon: setsUsAppart2,
            title: "Global Reach, Local Expertise",
            description:
                "With a global network of partners and a deep understanding of diverse markets, we provide tailored solutions with a local touch.",
        },
        {
            icon: setsUsAppart3,
            title: "Innovation Ecosystem",
            description:
                "We foster a culture of continuous learning, collaboration, and curiosity, ensuring we remain at the forefront of technological advancements.",
        },
        {
            icon: setsUsAppart4,
            title: "Holistic Approach",
            description:
                "We value our clients, employees, and partners, fostering a collaborative environment where everyone thrives.",
        },
    ],
};

export default function SetUsAppart() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-blue font-bold text-center">
                {AboutData.title}
            </h1>
            <div className="flex flex-col justify-center mx-6 custom-770:space-y-0 -space-y-10">
                {AboutData.data.map((item, index) => (
                    <div
                        key={index}
                        className="flex custom-770:flex-col flex-row items-center gap-5"
                    >
                        <Image
                            src={item.icon}
                            alt="icon"
                            width={200}
                            height={200}
                            className="custom-770:mt-6 mt-2"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-xl text-center md:text-start font-bold mb-2 leading-4">
                                {item.title}
                            </h1>
                            <Typography className="max-w-4xl text-center md:text-start ">
                                {item.description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
