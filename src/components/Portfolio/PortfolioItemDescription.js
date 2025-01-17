import { Box, Typography } from "@mui/material";

export default function PortfolioItemDescription({ data }) {
    return (
        <div className="flex flex-col items-center justify-center text-center my-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-pretty mb-2">
                {data.title}
            </h1>
            <Typography
                variant="body2"
                sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    color: "#616161",
                    marginX: "8rem",
                    marginTop: "0.5rem",
                    marginBottom: "1.5rem",
                    
                    "@media (max-width: 600px)": {
                        textAlign: "start",
                        marginX: "1rem",
                    },
                }}
            >
                {data.description}
            </Typography>
        </div>
    );
}
