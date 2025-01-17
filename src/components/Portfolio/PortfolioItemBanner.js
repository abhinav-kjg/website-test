import { Box, Typography } from "@mui/material";

export default function PortfolioItemBanner({ data }) {
    return (
        <Box
            sx={{
                background: "linear-gradient(to right, #D1E1F8, #D4F5F2)",
                textAlign: "center",
                paddingTop: "2.5rem",
                paddingBottom: "2rem",
            }}
        >
            <h1
                className="text-4xl lg:text-5xl font-bold mb-2 uppercase text-primary-blue"
                sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#212121",
                }}
            >
                {data.title}
            </h1>
        </Box>
    );
}
