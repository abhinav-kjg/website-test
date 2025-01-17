import { Box, Typography } from "@mui/material";
import ourValueImage from "@/public/aboutus/ourvalues.png";
import Image from "next/image";

const AboutData = {
    title: "Our values",
    image: ourValueImage,
};

export default function OurValues() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-blue font-bold text-center">
                {AboutData.title}
            </h1>

            <div className="w-[97%]">
                <Image
                    src={AboutData.image}
                    alt="values"
                    className="custom-770:mt-6 mt-10"
                />
            </div>
        </div>
    );
}
