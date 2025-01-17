"use client";

import { Button, Card, CardContent, Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import client100 from "@/public/services/clientblog.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import blog1 from "@/public/blog/blog1.jpg";
import blog2 from "@/public/blog/blog2.png";
import blog3 from "@/public/blog/blog3.jpg";

const blogs = [
    {
        title: "Top 5 Trends in Custom Software Solutions You Must Know",
        date: "October 1, 2024",
        description: "",
        image: blog1,
        readTime: "2",
        link: "https://www.linkedin.com/posts/amita-kabra-7406b3147_importance-of-enhancing-cybersecurity-measures-activity-7247223257660055554-2VzN?utm_source=share&utm_medium=member_desktop",
    },
    {
        title: "Why Custom Software Development is the Unique Value Proposition for Business Growth in 2024",
        date: "October 1, 2024",
        description: "",
        image: blog2,
        readTime: "5",
        link: "https://www.linkedin.com/pulse/why-custom-software-development-key-business-growth-2024-mekvc",
    },
    {
        title: "How to Make the Most of LinkedIn for Lead Generation",
        date: "October 10, 2024",
        description: "Top Skills Every Digital Marketer Needs",
        image: blog3,
        readTime: "3",
        link: "https://www.linkedin.com/posts/kayjayglobal_top-skills-every-digital-marketer-needs-in-activity-7247513934725840898-nYzC?utm_source=share&utm_medium=member_desktop",
    },
];

export default function RecentBlogs() {
    const router = useRouter();

    const handleArrowClick = (link) => () => {
        router.push(link);
    };

    return (
        <div className="px-6 my-2 mb-10">
            <h1 className="text-center font-bold text-primary-blue mb-11 text-3xl md:text-4xl lg:text-5xl tracking-wide">
                Our Recent Blogs
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 mx-0 md:mx-12 lg:mx-24 xl:mx-10 ">
                {blogs.map((blog, index) => (
                    <div key={index}>
                        <Card
                            sx={{
                                boxShadow:
                                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                                maxWidth: "28rem",
                                maxHeight: "28rem",
                                minHeight: "28rem",
                            }}
                        >
                            <CardContent className="">
                                <div className="h-64 ">
                                    <Image
                                        src={blog.image}
                                        alt="blog"
                                        className="h-64"
                                    />
                                </div>
                                <div className="">
                                    <div className="flex flex-row justify-between items-center mt-1">
                                        {blog.date && (
                                            <h5
                                                color="textSecondary"
                                                className="mb-2 text-[#6941C6] text-sm tracking-tight font-medium mt-0.5"
                                            >
                                                {blog.date}
                                            </h5>
                                        )}
                                        {blog.readTime && (
                                            <h5
                                                color="textSecondary"
                                                className=" bg-gray-200 px-1 text-sm rounded-md"
                                            >
                                                {blog.readTime} min read
                                            </h5>
                                        )}
                                    </div>
                                    {blog.link && (
                                        <div
                                            className="flex flex-col hover:cursor-pointer"
                                            onClick={handleArrowClick(
                                                blog.link
                                            )}
                                        >
                                            <div className="flex flex-row justify-between items-center">
                                                <h1 className="mb-2 font-semibold text-xl">
                                                    {blog.title}
                                                </h1>
                                                <div className="p-0 ">
                                                    <FaArrowRight className="-rotate-45 w-5 h-5" />
                                                </div>
                                            </div>
                                            {blog.description && (
                                                <h5
                                                    variant="body2"
                                                    color="textSecondary"
                                                    className="text-sm"
                                                >
                                                    {blog.description}
                                                </h5>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
