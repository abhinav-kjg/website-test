import { Card, CardMedia, Typography } from "@mui/material";
import image1 from "@/public/aboutus/kjgs1.png";
import image2 from "@/public/aboutus/kjgs2.png";
import image3 from "@/public/aboutus/kjgs3.png";
import image4 from "@/public/aboutus/kjgs4.png";
import image5 from "@/public/aboutus/kjgs5.png";
import Image from "next/image";

export default function LifeAt() {
    const AboutData = {
        title: "Life at KJGS",
        images: [image1, image2, image3, image4, image5],
    };

    return (
        <div className="mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-blue font-bold text-center mb-6">
                {AboutData.title}
            </h1>
            <div className=" flex flex-col gap-6 custom-770:mx-4 mx-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {AboutData.images.slice(0, 3).map((src, index) => (
                        <Card key={index} className="rounded-3xl w-fit h-fit">
                            <Image
                                src={src}
                                alt={`Life at KJGS `}
                                className="rounded-3xl h-[19rem] "
                            />
                        </Card>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {AboutData.images.slice(3).map((src, index) => (
                        <Card key={index} className="rounded-3xl w-fit h-fit">
                            <Image
                                src={src}
                                alt={`Life at KJGS`}
                                className="rounded-3xl h-[20rem] md:h-[25rem] "
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
