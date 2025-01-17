"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export function ScheduleMeetingButton() {
    const router = useRouter();

    const handleScheduleMeetingClick = () => {
        const element = document.getElementById("contactus-home");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Button
            variant="contained"
            onClick={handleScheduleMeetingClick}
            sx={{
                paddingX: "1.5rem",
                color: "white",
                backgroundColor: "#1868DB",
                fontWeight: "700",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                textTransform: "capitalize",
                width: "fit-content",
            }}
        >
            Schedule a Meeting
        </Button>
    );
}
