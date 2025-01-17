"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import image1 from "@/public/Group22.png";
import image2 from "@/public/Group33.png";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const testimonialData = [
    {
        quote: "Partnering with Kay Jay Global Solutions, IT software development company, has been a continuous success, their tech alignment with our goals is impeccable. Their holistic approach to understanding user behaviour consistently delivers valuable insights. Best wishes for ongoing success and eager for more collaborations ahead!",
        name: "Harry Singh",
        position: "Founder & CEO, Manufacturing Company",
        backgroundImage: image2,
        image: "",
        avatar: "",
    },
    {
        quote: "The Kay Jay Global Solutions team excels in innovative consultation and product development. Their commitment surpasses expectations, offering commendable expertise in Ruby and Blockchain, along with unparalleled technical and operational support.",
        name: "John Miller",
        position: "CTO, Healthcare Company",
        backgroundImage: image1,
        image: "",
        avatar: "",
    },
];

const Testimonials = () => {
    const swiperRef = useRef(null);
    return (
        <div className="bg-white py-10 px-6 space-y-8 md:space-y-16 mb-5 relative">
            <div className="w-fit mx-auto">
                <Typography
                    variant="h4"
                    className="text-center bg-gradient-custom-blue"
                    sx={{
                        color: "#1868DB",
                        marginBottom: "1.5rem",
                        fontWeight: "700",
                        lineHeight: "2.5rem",
                        fontSize: "1.875rem",
                        paddingX: "0.25rem",
                        paddingY: "0.25rem",

                        "@media (min-width: 768px)": {
                            fontSize: "2.25rem",
                        },
                    }}
                >
                    Delivering on Promises: What Our Clients Say?
                </Typography>
            </div>

            {/* Swiper */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={50}
                slidesPerView={1}
                className="py-6"
            >
                {testimonialData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard
                            quote={testimonial.quote}
                            name={testimonial.name}
                            position={testimonial.position}
                            backgroundImage={testimonial.backgroundImage}
                            image={testimonial.image}
                            avatar={testimonial.avatar}
                            swiperRef={swiperRef}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="hidden md:flex justify-start absolute bottom-8 left-44 z-10 space-x-2">
                <Button
                    sx={{
                        "&:hover": {
                            backgroundColor: "#D1D1D1",
                            color: "white",
                        },
                    }}
                    onClick={() => swiperRef.current?.slidePrev()} // Slide to the previous slide
                >
                    <KeyboardArrowLeftIcon
                        className="text-4xl"
                        sx={{
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                            color: "#D1D1D1",
                            "&:hover": {
                                color: "black",
                            },
                        }}
                    />
                </Button>
                <Button
                    sx={{
                        "&:hover": {
                            backgroundColor: "#D1D1D1",
                            color: "white",
                        },
                    }}
                    onClick={() => swiperRef.current?.slideNext()} // Slide to the next slide
                >
                    <KeyboardArrowRightIcon
                        className="text-4xl "
                        sx={{
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                            color: "#D1D1D1",
                            "&:hover": {
                                color: "black",
                            },
                        }}
                    />
                </Button>
            </div>
            <div className="flex md:hidden justify-start absolute bottom-12 left-1 z-10 space-x-2">
                <Button
                    sx={{
                        "&:hover": {
                            backgroundColor: "#D1D1D1",
                            color: "white",
                        },
                    }}
                    onClick={() => swiperRef.current?.slidePrev()} // Slide to the previous slide
                >
                    <KeyboardArrowLeftIcon
                        className="text-4xl"
                        sx={{
                            color: "#D1D1D1",
                            "&:hover": {
                                color: "black",
                            },
                        }}
                    />
                </Button>
                <Button
                    sx={{
                        "&:hover": {
                            backgroundColor: "#D1D1D1",
                            color: "white",
                        },
                    }}
                    onClick={() => swiperRef.current?.slideNext()} // Slide to the next slide
                >
                    <KeyboardArrowRightIcon
                        className="text-4xl "
                        sx={{
                            color: "#D1D1D1",
                            "&:hover": {
                                color: "black",
                            },
                        }}
                    />
                </Button>
            </div>
        </div>
    );
};

export default Testimonials;

const TestimonialCard = ({
    quote,
    name,
    position,
    image,
    backgroundImage,
    avatar,
    swiperRef,
}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between mx-0 md:mx-20 lg:mx-40 items-center">
            <div>
                {/* data */}
                <Card
                    className="max-w-lg shadow-none"
                    sx={{
                        border: 0,
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                        border: "0px",
                    }}
                >
                    <CardContent className="">
                        <div className=" text-lg italic text-gray-600 mb-4 leading-normal">
                            <span className="text-3xl font-bold text-primary-blue">
                                "
                            </span>
                            {quote}
                            <span className="text-3xl font-bold text-primary-blue">
                                "
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar alt={name} src={avatar} />
                            <div>
                                <div className="font-bold text-base ">
                                    {name}
                                </div>
                                <div
                                    variant="caption"
                                    className="text-gray-500 text-xs"
                                >
                                    {position}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            {/* image */}
            <div className="hidden md:block relative">
                <Image
                    src={backgroundImage}
                    alt="TestimonialBackground"
                    style={{
                        width: "350px",
                        height: "400px",
                    }}
                    className="z-0"
                />
                {/* <Image
                    src={image}
                    alt="Testimonial image"
                    className="z-10 absolute top-5 right-7 rotate-2 rounded-lg "
                    style={{
                        width: "295px",
                        height: "360px",
                    }}
                /> */}
            </div>
            <div className="block md:hidden ml-auto ">
                <Image
                    src={backgroundImage}
                    alt="Testimonial"
                    style={{
                        width: "200px",
                        height: "250px",
                    }}
                />
            </div>
        </div>
    );
};
