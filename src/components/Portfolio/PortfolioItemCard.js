import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function PortfolioItemCard({ item, height, width }) {
    return (
        <div className="">
            <div className="my-5 mx-auto">
                <Image
                    src={item.image}
                    alt={item.label}
                    width={height}
                    height={width}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
