import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ item }) {
    return (
        <div className="flex flex-col items-center justify-start bg-white rounded-lg shadow-lg p-6 my-5 mx-auto text-center max-w-[20rem] min-w-[20rem]">
            {/* Laptop Image */}
            <div className=" mb-8 h-52 flex items-center">
                <Image src={item.image} alt={item.label} className="" />
            </div>

            <Button
                component={Link}
                href={item.link}
                passHref
                sx={{
                    background: "linear-gradient(to right, #D1E1F8, #D4F5F2)",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.2rem",
                    color: "#424242",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    width: "100%",
                }}
            >
                {item.label}
            </Button>
        </div>
    );
}
