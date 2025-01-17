"use client";

import ApplicationForm from "@/components/jobs/JobApplication";
import { Button, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation"; // This is correct for the App Router
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { baseUrl } from "@/config/BaseUrl";

const OpenStreetMap = dynamic(() => import("@/components/Leaflet"), {
    ssr: false,
});

const JobDescription = () => {
    const { jobId } = useParams();

    const [jobDetails, setJobDetails] = useState(null);

    const router = useRouter();

    const getJob = async () => {
        await fetch(`${baseUrl}/api/jobs/${jobId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((body) => setJobDetails(body))
            .catch((error) => console.error("Error:", error));
    };

    useEffect(() => {
        getJob();
    }, []);

    const handleApplyClick = () => {
        const element = document.getElementById("job-application-form");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    if (!jobDetails) {
        return <div>Job not found</div>;
    }

    return (
        <div>
            <div className="bg-primary-blue py-4 text-white px-4 md:px-10 lg:px-14  space-y-2">
                <h1 className="text-xl md:text-3xl font-bold">
                    Find your dream job
                </h1>
                <p className="text-xs md:text-sm tracking-tight">
                    <a className="text-gray-300 hover:text-white" href="/careers">
                        Looking for Job?
                    </a>{" "}
                    Browse our latest job opening to view
                </p>
            </div>
            <div className=" mx-3 md:mx-10 lg:mx-16  px-5 py-4 lg:px-1 ">
                <div className="flex flex-row justify-between items-center py-10 ">
                    <h1 className=" text-3xl lg:text-4xl font-bold md:font-extrabold ">
                        {jobDetails.title} Job Description
                    </h1>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#1868DB",
                            "&:hover": {
                                backgroundColor: "#307EED",
                            },
                            paddingY: "0.5rem",
                            paddingX: "0.5rem",
                            fontSize: "0.75rem",
                            fontWeight: "bold",
                            textWrap: "nowrap",
                            width: "fit-content",
                            color: "white",

                            "@media (min-width: 768px)": {
                                paddingY: "0.75rem",
                                paddingX: "0.75rem",
                                fontSize: "1rem",
                            },
                        }}
                        fullWidth
                        className=" text-nowrap w-fit text-white"
                        onClick={handleApplyClick}
                    >
                        Apply Now
                    </Button>
                </div>

                <div className="space-y-12">
                    {/* About Section */}
                    <section className="space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-blue ">
                            About this role
                        </h2>
                        <p className="text-gray-700 leading-relaxed ml-0 md:ml-2 lg:ml-4 ">
                            {jobDetails.description.aboutus}
                        </p>
                    </section>

                    {/* Qualification Section */}
                    <section className="space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-blue ">
                            Qualification
                        </h2>
                        <ul className="list-disc px-5 text-gray-700 space-y-2 ml-0 md:ml-2 lg:ml-4">
                            {jobDetails.description.qualification.description.map(
                                (desc, index) => (
                                    <li
                                        key={index}
                                        className="marker:text-primary-red"
                                    >
                                        {desc}
                                    </li>
                                )
                            )}
                        </ul>
                    </section>

                    {/* Responsibility Section */}
                    <section className="space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-blue ">
                            Responsibility
                        </h2>
                        <ul className="list-disc px-5 text-gray-700 space-y-2 ml-0 md:ml-2 lg:ml-4">
                            {jobDetails.description.responsibility.description.map(
                                (desc, index) => (
                                    <li
                                        key={index}
                                        className="marker:text-primary-red"
                                    >
                                        {desc}
                                    </li>
                                )
                            )}
                        </ul>
                    </section>
                </div>
            </div>

            <div className="flex  custom-770:flex-col custom-770:gap-10 gap-5 my-20 custom-770:mx-5 mx-16">
                <div className="custom-770:w-full w-1/2">
                    <ApplicationForm jobId={jobId} />
                </div>
                <div className="custom-770:w-full w-1/2">
                    <OpenStreetMap />
                </div>
            </div>
        </div>
    );
};

export default JobDescription;
