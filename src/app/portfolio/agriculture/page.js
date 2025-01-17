import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListingTriple from "@/components/Portfolio/PortfolioItemListTriple";

import image1 from "@/public/portfolio/agri11.svg";
import image2 from "@/public/portfolio/agri22.svg";
import image3 from "@/public/portfolio/agri33.svg";

const data = {
    banner: {
        title: "Agriculture",
    },

    description: {
        title: "About Project",
        description:
            "KayJay's agricultural solutions are designed to improve productivity and sustainability for farmers and agribusinesses. We develop applications that assist in crop monitoring, weather forecasting, and supply chain management. By incorporating IoT and AI, these solutions offer precision farming tools and analytics to maximize yield and reduce waste.",
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
        ],
    },
};

export default function PortfolioServices() {
    return (
        <div className="mt-5">
            <PortfolioItemBanner data={data.banner} />
            <PortfolioItemDescription data={data.description} />
            <PortfolioItemListingTriple data={data.portfolioList} />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
