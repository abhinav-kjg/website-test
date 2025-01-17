"use client";

import { Button, Chip } from "@mui/material";
import { useRouter } from "next/navigation";

const JobCard = ({ job }) => {
    const router = useRouter();

    function getJobCreationDate(createdAt) {
        // Convert createdAt to a Date object
        const createdDate = new Date(createdAt);
        const currentDate = new Date();

        // Reset the time for both dates to midnight
        createdDate.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);

        // Calculate the difference in time (milliseconds)
        const timeDifference = currentDate - createdDate;

        // Calculate the difference in days
        const daysDifference = Math.floor(
            timeDifference / (1000 * 60 * 60 * 24)
        );

        // Return appropriate message
        if (daysDifference === 0) {
            return "Today";
        } else {
            return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
        }
    }

    return (
        <div className=" p-4 pb-2 px-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-gray-900 mb-2 cursor-pointer">
                    {job.title}
                </h2>
                <span className="text-gray-500 text-xs flex items-center">
                    <span className="mr-1">
                        {getJobCreationDate(job.updatedAt)}
                    </span>
                </span>
            </div>
            <div className="flex gap-2 items-center mb-4">
                <Chip
                    label={job.jobType}
                    variant="outlined"
                    className="text-black bg-gray-200 border-none font-semibold rounded-sm "
                />
                <Chip
                    label={job.schedule}
                    variant="outlined"
                    className="text-black bg-gray-200 border-none font-semibold rounded-sm"
                />
            </div>
            <hr className="border-[1px] border-gray-200 mb-4 mt-6 " />
            <div className="flex flex-row justify-between items-start gap-5">
                <div className="mb-4 text-nowrap">
                    {job.salary.min && job.salary.max ? (
                        <p className="text-lg font-semibold text-gray-800">
                            {job.salary.min + "-" + job.salary.max}
                        </p>
                    ) : (
                        <div className="text-gray-400 text-sm">salary not available</div>
                    )}
                    <p className="text-sm text-gray-600">{job.location}</p>
                </div>
                {job.isApplied ? (
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#1868DB",
                            "&:hover": {
                                backgroundColor: "#307EED",
                            },
                        }}
                        color="warning"
                        fullWidth
                        disabled
                        className="text-sm text-nowrap p-2 mt-1.5 px-2 w-fit text-white "
                    >
                        Applied
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#1868DB",
                            "&:hover": {
                                backgroundColor: "#307EED",
                            },
                        }}
                        fullWidth
                        className="text-sm text-nowrap p-2 px-2 mt-1.5 w-fit text-white "
                        onClick={() =>
                            router.push(`/careers/description/${job._id}`)
                        }
                    >
                        View Job
                    </Button>
                )}
            </div>
        </div>
    );
};

export default JobCard;
