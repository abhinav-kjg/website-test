import Image from "next/image";
import React from "react";
import { Button, Typography } from "@mui/material";
import bannerImage from "@/public/aboutus/office4.png";

const BannerData = {
    image: bannerImage,
    title: "Discover how the world works with Us",
    description: "",
    cta: "Get Started",
};

export default function AboutUsBanner() {
    return (
        <div className="my-10 ">
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-3 mx-2.5">
                <div className="">
                    <Image
                        src={BannerData.image}
                        alt="marketing Banner"
                        className="max-h-[35rem] h-[20rem] lg:h-[30rem] max-w-[45rem] w-[25rem] lg:w-[40rem] object-cover object-right-bottom"
                    />
                </div>
                <div className="flex flex-col gap-5 mx-5">
                    <h1 className="font-bold text-4xl text-center md:text-start lg:text-7xl text-[#343434] max-w-3xl">
                        {BannerData.title}
                    </h1>

                    {BannerData.description && (
                        <h3 className="max-w-80 md:max-w-xl text-center md:text-start text-sm md:text-lg text-[#868F8D]">
                            {BannerData?.description}
                        </h3>
                    )}
                    {BannerData.cta && (
                        <Button
                            variant="contained"
                            sx={{
                                width: "fit-content",
                                paddingX: "1.5rem",
                                backgroundColor: "#1868DB",
                                fontWeight: "700",
                                margin: "0 auto",

                                "@media (min-width: 768px)": {
                                    margin: "10px 4px",
                                },
                            }}
                        >
                            {BannerData.cta}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
