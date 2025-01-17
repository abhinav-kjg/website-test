import Image from "next/image";
import React from "react";
import serverBanner from "@/public/services/serverBanner.png";
import { Button } from "@mui/material";

const BannerData = {
    title: "Machine Learning and Deep Learning",
    description: "Drive innovation with advanced AI-powered solutions.",
    cta: "Get Started",
};

export default function MLBanner() {
    return (
        <div className="my-10 pb-10 ">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-6 lg:gap-3 mx-2.5">
                <div className="">
                    <Image
                        src={serverBanner}
                        alt="server Banner"
                        className="h-[25rem] lg:h-[35rem] w-[45rem]"
                    />
                </div>
                <div className="flex flex-col gap-5 mx-5">
                    <h1 className="font-bold text-4xl lg:text-7xl max-w-2xl text-[#343434] ">
                        {BannerData.title}
                    </h1>
                    <h3 className="max-w-80 md:max-w-xl text-sm md:text-lg text-[#868F8D]">
                        {BannerData.description}
                    </h3>
                    <Button
                        variant="contained"
                        sx={{
                            width: "fit-content",
                            paddingX: "1.5rem",
                            backgroundColor: "#1868DB",
                            fontWeight: "700",
                        }}
                    >
                        {BannerData.cta}
                    </Button>
                </div>
            </div>
        </div>
    );
}
