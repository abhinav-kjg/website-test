import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListing from "@/components/Portfolio/PortfolioItemList";

import image1 from "@/public/portfolio/retail11.svg";
import image2 from "@/public/portfolio/retail22.svg";
import image3 from "@/public/portfolio/retail33.svg";
import image4 from "@/public/portfolio/retail44.svg";
import image5 from "@/public/portfolio/retail55.svg";

const data = {
    banner: {
        title: "Retail Project",
    },

    description: {
        title: "About Project",
        description:
            "KayJay Global Solutions has developed feature-rich retail solutions tailored to enhance customer experiences and streamline operations. Our work in this sector includes creating mobile and web applications for inventory management, personalized shopping experiences, and seamless e-commerce platforms. Our applications leverage advanced analytics and optional AI-powered recommendation systems to improve sales and customer satisfaction. These tools help retailers make data-driven decisions and ensure operational efficiency, empowering businesses to stay competitive in a dynamic market.",
    },

    portfolioList: {
        title: "User Interface",
        item: [
            {
                image: image1,
                label: "image 1",
            },
            {
                image: image2,
                label: "image 2",
            },
            {
                image: image3,
                label: "image 3",
            },
            {
                image: image4,
                label: "image 4",
            },
            {
                image: image5,
                label: "image 5",
            },
        ],
    },
};

export default function PortfolioServices() {
    return (
        <div className="mt-5">
            <PortfolioItemBanner data={data.banner} />
            <PortfolioItemDescription data={data.description} />
            <PortfolioItemListing data={data.portfolioList} />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
