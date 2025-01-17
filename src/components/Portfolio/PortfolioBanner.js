import { Box, Typography } from "@mui/material";

export default function PortfolioPage() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(to right, #e0f7fa, #e8f5e9)",
                textAlign: "center",
                padding: "2rem",
                paddingY: "4rem",
                position: "relative",
            }}
        >
            {/* Decorative corners */}
            <Box className="hidden lg:block absolute top-10 left-[25rem] border-2 border-black h-14"></Box>
            <Box className="hidden lg:block absolute top-10 left-[25rem] border-2 border-black w-14"></Box>

            <Typography
                variant="h2"
                sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#212121",
                }}
            >
                PORTFOLIO
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: "1.2rem",
                    maxWidth: "600px",
                    color: "#616161",
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
            </Typography>

            {/* Bottom decorative corners */}
            <Box className="hidden lg:block absolute bottom-10 right-[25rem] border-2 border-black h-14"></Box>
            <Box className="hidden lg:block absolute bottom-10 right-[25rem] border-2 border-black w-14"></Box>
        </Box>
    );
}
