

import { Box, Typography, Divider } from "@mui/material";

export default function AchievementSection() {
    const achievementData = [
        {
            number: "33000",
            description: "Line of Code",
        },
        {
            number: "29+",
            description: "Years of Experience",
        },
        {
            number: "15%",
            description: "Client Reduction Cost",
        },
        {
            number: "95%",
            description: "Client Satisfaction Rate",
        },
        {
            number: "7+",
            description: "Operating Globally",
        },
    ];

    return (
        <div className="bg-white text-black py-10 pb-10 px-4 ">
            <div className=" mx-auto text-center">
                {/* Title */}
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        color: "#1868DB",
                        fontSize: "1.875rem",
                        lineHeight: "2.25rem",
                        marginBottom: "3rem",

                        "@media (min-width: 768px)": {
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                        },
                    }}
                >
                    Our Number{" "}
                    <span className="bg-gradient-custom-blue px-1">
                        Speaks For Themselves
                    </span>
                </Typography>

                <div className="flex flex-row justify-center items-center mx-10 ">
                    {achievementData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center justify-between "
                        >
                            <Divider
                                orientation="vertical"
                                sx={{
                                    marginTop: "0.25rem",
                                    backgroundColor: "#1868DB",
                                    width: "0.25rem",
                                    height: "3rem",

                                    "@media (min-width: 768px)": {
                                        height: "4rem",
                                    },
                                }}
                            />
                            <StatItem
                                number={item.number}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Helper component for each stat item
const StatItem = ({ number, description }) => (
    <Box className="flex flex-col items-center px-2 md:px-12 text-black h-12 md:h-auto">
        <div
            variant="h4"
            className="text-sm sm:text-xl md:text-2xl lg:text-4xl mx-auto md:mx-0 font-bold "
        >
            {number}
        </div>
        <div
            variant="body2"
            className="text-[10px] sm:text-xs md:text-base lg:text-lg font-semibold "
        >
            {description}
        </div>
    </Box>
);
