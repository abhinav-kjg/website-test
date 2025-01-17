"use client";
import { Card, CardContent, Avatar, Divider } from "@mui/material";
import Image from "next/image";
import member1 from "@/public/aboutus/member1.png";
import member3 from "@/public/aboutus/member3.png";
import member5 from "@/public/aboutus/member5.png";
import member6 from "@/public/aboutus/member6.png";

import "tailwindcss/tailwind.css";

const leadershipTeam = [
    {
        name: "Mr. Jagdish Kabra",
        title: "Founder",
        image: member1,
    },
    {
        name: "Mr. Kishore Gagrani",
        title: "Advisor",
        image: "",
    },
    {
        name: "Mrs. Kalawati Kabra",
        title: "Chief People Officer",
        image: member3,
    },
    {
        name: "Mr. Sunil Baldi",
        title: "Advisor",
        image: "",
    },
    {
        name: "Mr. Nakul Kabra",
        title: "Director",
        image: member5,
    },
    {
        name: "Mrs. Amita Kabra",
        title: "Chief Marketing Officer",
        image: member6,
    },
];

export default function LeadershipTeam() {
    return (
        <div className="p-8 bg-white pb-16 hidden lg:block">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl text-primary-blue font-bold text-center custom-770:mb-5 mb-10">
                Meet Our Leadership Team
            </h1>

            <div className="flex flex-col gap-4">
                <Card
                    className=""
                    sx={{
                        width: "20rem",
                        borderRadius: "0.5rem",
                        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                        maxWidth: "20rem",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <CardContent className="flex flex-col items-center">
                        <Image
                            src={leadershipTeam[0].image}
                            alt="image4"
                            className=" h-64 w-full mb-4"
                        />

                        <h1 className="text-xl font-bold text-center">
                            {leadershipTeam[0].name}
                        </h1>
                        <h4 className="text-sm text-gray-500 text-center">
                            {leadershipTeam[0].title}
                        </h4>
                    </CardContent>
                </Card>

                <div>
                    <h1 className=" mt-4 text-4xl font-semibold text-black text-center font-SignPainterHouseScript">
                        Carrying Forward His Legacy
                    </h1>
                    <Divider
                        sx={{
                            backgroundColor: "#e5e7eb",
                            width: "0.12rem",
                            height: "2rem",
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center",
                            orientation: "vertical",
                        }}
                    />
                    <Divider
                        className=" "
                        sx={{
                            backgroundColor: "#e5e7eb",
                            marginLeft: "auto",
                            marginRight: "auto",
                            orientation: "horizontal",
                            height: "0.12rem",
                            width: "66.66%",
                        }}
                    />
                    <div className="flex">
                        <Divider
                            className=""
                            sx={{
                                backgroundColor: "#e5e7eb",
                                width: "0.12rem",
                                height: "3rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                orientation: "vertical",
                                textAlign: "center",
                            }}
                        />
                        <Divider
                            orientation="vertical"
                            className=""
                            sx={{
                                backgroundColor: "#e5e7eb",
                                width: "0.12rem",
                                height: "3rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                orientation: "vertical",
                                textAlign: "center",
                            }}
                        />
                        <Divider
                            orientation="vertical"
                            className=""
                            sx={{
                                backgroundColor: "#e5e7eb",
                                width: "0.12rem",
                                height: "3rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                orientation: "vertical",
                                textAlign: "center",
                            }}
                        />
                    </div>
                </div>

                <div className="flex justify-evenly gap-20">
                    {leadershipTeam.slice(1, 4).map((member, index) => (
                        <Card
                            className=""
                            sx={{
                                width: "20rem",
                                borderRadius: "0.5rem",
                                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                maxWidth: "20rem",
                            }}
                        >
                            <CardContent className="flex flex-col items-center">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="h-64 mb-4 w-full"
                                    />
                                ) : (
                                    <Avatar
                                        className=""
                                        sx={{
                                            width: "100%",
                                            height: "16rem",
                                            borderRadius: "0px",
                                            marginBottom: "1rem",
                                            borderRadius: "0px",
                                        }}
                                    >
                                        {member.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </Avatar>
                                )}
                                <h1 className="text-xl font-bold text-center">
                                    {member.name}
                                </h1>
                                <h4 className="text-sm text-gray-500 text-center">
                                    {member.title}
                                </h4>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div>
                    <Divider
                        className=""
                        sx={{
                            width: "0.12rem",
                            height: "2rem",
                            backgroundColor: "#e5e7eb",
                            marginLeft: "auto",
                            marginRight: "auto",
                            orientation: "vertical",
                        }}
                    />
                    <Divider
                        className=""
                        sx={{
                            backgroundColor: "#e5e7eb",
                            marginLeft: "auto",
                            marginRight: "auto",
                            orientation: "horizontal",
                            height: "0.12rem",
                            width: "33.33%",
                            textAlign: "center",
                        }}
                    />
                    <div className="flex mx-[15.8rem] ">
                        <Divider
                            className=""
                            sx={{
                                width: "0.12rem",
                                height: "3rem",
                                backgroundColor: "#e5e7eb",
                                marginLeft: "auto",
                                marginRight: "auto",
                                orientation: "vertical",
                            }}
                        />
                        <Divider
                            className=""
                            sx={{
                                width: "0.12rem",
                                height: "3rem",
                                backgroundColor: "#e5e7eb",
                                marginLeft: "auto",
                                marginRight: "auto",
                                orientation: "vertical",
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-evenly mx-32">
                    {leadershipTeam.slice(4).map((member, index) => (
                        <Card
                            className=""
                            sx={{
                                width: "20rem",
                                borderRadius: "0.5rem",
                                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                maxWidth: "20rem",
                            }}
                        >
                            <CardContent className="flex flex-col items-center">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="h-64 mb-4 w-full"
                                    />
                                ) : (
                                    <Avatar
                                        className=""
                                        sx={{
                                            width: "100%",
                                            height: "16rem",
                                            borderRadius: "0px",
                                            marginBottom: "1rem",
                                            borderRadius: "0px",
                                        }}
                                    >
                                        {member.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </Avatar>
                                )}
                                <h1 className="text-xl font-bold text-center">
                                    {member.name}
                                </h1>
                                <h4 className="text-sm text-gray-500 text-center">
                                    {member.title}
                                </h4>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
