import Image from "next/image";
import React from "react";
import testingBanner from "@/public/services/testingBanner.svg";
import { Button, Typography } from "@mui/material";

export default function TestingBanner() {
    return (
        <div className="my-10 pb-10 ">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-6 lg:gap-3 mx-2.5">
                <div className="">
                    <Image
                        src={testingBanner}
                        alt="client1"
                        className="h-[25rem] lg:h-[36rem] w-[45rem] object-cover "
                    />
                </div>
                <div className="flex flex-col gap-5 mx-5">
                    <h1 className="font-bold text-4xl lg:text-7xl max-w-2xl text-[#343434] ">
                        Software Testing
                    </h1>
                    <h3 className="max-w-80 md:max-w-xl text-sm md:text-lg text-[#868F8D]">
                        Delivering reliable, high-quality software through
                        expert testing solutions.
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
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
}
