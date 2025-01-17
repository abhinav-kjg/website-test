// app/components/InsuranceCard.tsx
import {
    Box,
    Typography,
    Card,
    CardContent,
    Icon,
} from "@mui/material";
import React from "react";

const InsuranceCard = ({ index, title, description, icon }) => {

    return (
        <Box key={index} className="relative flex flex-col items-center mb-10">
            <Box className="absolute -top-10 bg-secondary-blue text-white rounded-full p-3 shadow-none border-[5px] border-primary-blue">
                <Icon component={icon} className=" w-14 h-14" />
            </Box>
            <Card className="bg-secondary-blue rounded-2xl pt-6">
                <CardContent className="flex flex-col justify-start h-40 mb-8 text-center gap-4 text-white pt-10 ">
                    <Typography variant="h6" className=" font-semibold">
                        {title}
                    </Typography>
                    <Typography variant="body2" className=" mx-6">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default InsuranceCard;
