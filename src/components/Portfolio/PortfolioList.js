import image1 from "@/public/portfolio/1.svg";
import image2 from "@/public/portfolio/2.svg";
import image3 from "@/public/portfolio/3.svg";
import image4 from "@/public/portfolio/4.svg";
import image5 from "@/public/portfolio/5.svg";
import image6 from "@/public/portfolio/6.svg";
import image7 from "@/public/portfolio/7.svg";
import image8 from "@/public/portfolio/8.svg";
import image9 from "@/public/portfolio/9.svg";
import image10 from "@/public/portfolio/10.svg";
import image11 from "@/public/portfolio/11.svg";
import image12 from "@/public/portfolio/12.svg";
import image13 from "@/public/portfolio/13.svg";
import image14 from "@/public/portfolio/14.svg";
import image15 from "@/public/portfolio/15.svg";
import image16 from "@/public/portfolio/16.svg";
import image17 from "@/public/portfolio/17.svg";
import image18 from "@/public/portfolio/18.svg";
import image19 from "@/public/portfolio/19.svg";
import image20 from "@/public/portfolio/20.svg";
import image21 from "@/public/portfolio/21.svg";
import image22 from "@/public/portfolio/22.svg";
import PortfolioCard from "./PortfolioCard";

const portfolioList = [
    {
        image: image1,
        label: "Retail Project",
        link: "/portfolio/retail",
    },
    {
        image: image2,
        label: "Insurance",
        link: "/portfolio/insurance",
    },
    {
        image: image3,
        label: "Logistics and Transportation",
        link: "/portfolio/logistics",
    },
    {
        image: image4,
        label: "Construction",
        link: "/portfolio/construction",
    },
    {
        image: image5,
        label: "Education",
        link: "/portfolio/education",
    },
    {
        image: image6,
        label: "Social Media",
        link: "/portfolio/social-media",
    },
    {
        image: image7,
        label: "Fitness",
        link: "/portfolio/fitness",
    },
    {
        image: image8,
        label: "Agriculture",
        link: "/portfolio/agriculture",
    },
    {
        image: image9,
        label: "Entertainment",
        link: "/portfolio/entertainment",
    },
    {
        image: image10,
        label: "Legal",
        link: "/portfolio/legal",
    },
    {
        image: image11,
        label: "Finance",
        link: "/portfolio/finance",
    },
    {
        image: image12,
        label: "Manufacturing",
        link: "/portfolio/manufacturing",
    },
    {
        image: image13,
        label: "IT & Technology",
        link: "/portfolio/it-technology",
    },
    {
        image: image14,
        label: "Lifestyle",
        link: "/portfolio/lifestyle",
    },
    {
        image: image15,
        label: "OTT",
        link: "/portfolio/ott",
    },
    {
        image: image16,
        label: "Travel",
        link: "/portfolio/travel",
    },
    {
        image: image17,
        label: "Price Comparison System",
        link: "/portfolio/price-comparison",
    },
    {
        image: image18,
        label: "Taxi Application",
        link: "/portfolio/taxi-application",
    },
    {
        image: image19,
        label: "Payroll Management System",
        link: "/portfolio/payrol",
    },
    {
        image: image20,
        label: "Heathcare",
        link: "/portfolio/healthcare",
    },
    {
        image: image21,
        label: "Renewable Energy",
        link: "/portfolio/renewable-energy",
    },
    {
        image: image22,
        label: "Property Management System",
        link: "/portfolio/property-management",
    },
];

export default function PortfolioListing() {
    return (
        <div className="flex flex-wrap gap-10 mx-10 my-8">
            {portfolioList.map((item, index) => (
                <PortfolioCard key={index} item={item} />
            ))}
        </div>
    );
}
