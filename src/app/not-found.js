"use client";
import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation"; // Using Next.js 14's App Router

export default function NotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <p className="mt-4 text-2xl text-gray-700">Coming Soon...</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGoHome}
                    sx={{
                        marginTop: "1.5rem",
                        backgroundColor: "#2563EB",
                        color: "white",
                        paddingX: "1.5rem",
                        paddingY: "0.5rem",
                        borderRadius: "0.375rem",
                        "&:hover": {
                            backgroundColor: "#1D4ED8",
                        },
                    }}
                >
                    Go to Home
                </Button>
            </div>
        </div>
    );
}
