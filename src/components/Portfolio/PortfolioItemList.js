import PortfolioItemCard from "./PortfolioItemCard";
import { Typography } from "@mui/material";

export default function PortfolioItemListing({ data }) {
    return (
        <div className="mb-16">
            <Typography
                variant="h3"
                sx={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#1868DB",
                    textAlign: "center",
                    marginBottom: "1.5rem",
                }}
            >
                {data.title}
            </Typography>
            <div className="flex flex-row custom-770:flex-col items-center justify-evenly gap-1 md:gap-10">
                {data.item[0] && (
                    <PortfolioItemCard
                        item={data.item[0]}
                        height={400}
                        width={400}
                    />
                )}

                {data.item[1] && (
                    <PortfolioItemCard
                        item={data.item[1]}
                        height={400}
                        width={400}
                    />
                )}
            </div>
            <div className="flex items-center justify-center">
                {data.item[2] && (
                    <PortfolioItemCard
                        item={data.item[2]}
                        height={400}
                        width={400}
                    />
                )}
            </div>
            <div className="flex flex-row custom-770:flex-col items-center justify-center gap-1 md:gap-10 lg:gap-40">
                {data.item[3] && (
                    <PortfolioItemCard
                        item={data.item[3]}
                        height={250}
                        width={300}
                    />
                )}

                {data.item[4] && (
                    <PortfolioItemCard
                        item={data.item[4]}
                        height={250}
                        width={300}
                    />
                )}
            </div>
        </div>
    );
}
