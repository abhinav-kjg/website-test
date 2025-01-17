"use client";
import { useState } from "react";
import { Button } from "@mui/material";
import JobCard from "./JobCards";

const JobList = ({ jobsData }) => {
  const [displayCount, setDisplayCount] = useState(12);

  const handleViewMoreJobsButton = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  const isButtonDisabled = displayCount >= jobsData.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobsData.slice(0, displayCount).map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
      {/* <div className="text-center mt-16">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1868DB",
            "&:hover": {
              backgroundColor: "#307EED",
            },
          }}
          fullWidth
          className="text-sm text-nowrap capitalize p-2 px-3 w-fit text-white "
          onClick={handleViewMoreJobsButton}
          disabled={isButtonDisabled}
        >
          View More Jobs
        </Button>
      </div> */}
    </>
  );

};

export default JobList;
