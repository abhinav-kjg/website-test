"use client";

import { useEffect, useState } from "react";
import Filters from "@/components/jobs/Filter";
import JobList from "@/components/jobs/Jobslist";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname } from "next/navigation";
import { Clear as ClearIcon } from "@mui/icons-material";
import {
    Button,
    TextField,
    InputAdornment,
    IconButton,
    Typography,
} from "@mui/material";
import { baseUrl } from "@/config/BaseUrl";

export default function Jobs() {
    const [searchValue, setSearchValue] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const [jobsData, setJobsData] = useState([]);

    const getAllJobs = async () => {
        await fetch(`${baseUrl}/api/jobs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((body) => setJobsData(body))
            .catch((error) => console.error("Error:", error));
    };

    useEffect(() => {
        getAllJobs();
    }, []);

    const handleClearSearchButton = () => {
        setSearchValue("");
        setFilteredJobs([]);
    };

    const handleSearchClick = async () => {
        await fetch(`${baseUrl}/api/jobs?title=${searchValue}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((body) => setFilteredJobs(body))
            .catch((error) => console.error("Error:", error));
    };

    useEffect(() => {
        if (filteredJobs.length > 0 && searchValue === "") {
            setFilteredJobs([]);
        }
    }, [searchValue]);

    return (
        <div className=" py-10 sm:py-10 md:py-10 pb-24 ">
            <div className="flex flex-col gap-4 items-center justify-center">
                <Typography
                    variant="button"
                    className="bg-primary-red w-fit text-xl text-white rounded-2xl p-0.5 px-6 font-semibold"
                >
                    Jobs
                </Typography>
                {/* <div>Oil, Gas & Energy Jobs</div>{" "} */}
                <Typography variant="h4" className="font-bold ">
                    Job Openings
                </Typography>
                {pathname === "/careers" && (
                    <div className="flex items-center bg-white shadow-md border h-14 rounded-md overflow-hidden w-11/12 lg:w-full md:max-w-2xl max-w-xl">
                        <TextField
                            fullWidth
                            placeholder="Search by Job Title"
                            variant="outlined"
                            value={searchValue}
                            onChange={(e) => {
                                e.preventDefault();
                                setSearchValue(e.target.value);
                            }}
                            InputProps={{
                                startAdornment: (
                                    <>
                                        <InputAdornment position="start">
                                            <SearchIcon className="text-gray-400" />
                                        </InputAdornment>
                                    </>
                                ),
                                endAdornment: (
                                    <>
                                        <InputAdornment position="end">
                                            {searchValue !== "" && (
                                                <IconButton>
                                                    {filteredJobs.length ===
                                                    0 ? (
                                                        <Button
                                                            onClick={
                                                                handleSearchClick
                                                            }
                                                            sx={{
                                                                background:
                                                                    "#307EED",
                                                                color: "white",
                                                            }}
                                                        >
                                                            Search
                                                        </Button>
                                                    ) : (
                                                        <ClearIcon
                                                            onClick={
                                                                handleClearSearchButton
                                                            }
                                                        />
                                                    )}
                                                </IconButton>
                                            )}
                                        </InputAdornment>
                                    </>
                                ),
                                classes: {
                                    notchedOutline: "border-transparent",
                                },
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        border: "none", // Removes border
                                    },
                                    "& input": {
                                        paddingLeft: "0.5rem",
                                    },
                                },
                            }}
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-col lg:flex-row gap-10 m-10 mx-5 md:mx-12">
                {/* Filters Section */}
                <aside className="custom-770:hidden w-full lg:w-1/5 ">
                    <Filters
                        open={open}
                        setOpen={setOpen}
                        setFilteredJobs={setFilteredJobs}
                    />
                </aside>

                {/* Job Listings Section */}
                <main className="relative w-full lg:w-4/5">
                    <JobList
                        jobsData={
                            filteredJobs.length > 0 ? filteredJobs : jobsData
                        }
                    />
                    <div className="min-custom-770:hidden fixed top-[50%] right-5">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#1868DB",
                                "&:hover": {
                                    backgroundColor: "#307EED",
                                },
                            }}
                            fullWidth
                            className="text-sm text-nowrap p-4 w-fit text-white"
                            onClick={() => setOpen(true)}
                        >
                            Search filter
                        </Button>
                    </div>
                </main>
            </div>
        </div>
    );
}
