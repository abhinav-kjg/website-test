import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListingTriple from "@/components/Portfolio/PortfolioItemListTriple";

import image1 from "@/public/portfolio/logistic11.svg";
import image2 from "@/public/portfolio/logistic22.svg";
import image3 from "@/public/portfolio/logistic33.svg";

const data = {
    banner: {
        title: "Logistics and Transportation",
    },

    description: {
        title: "About Project",
        description:
            "Our logistics and transportation solutions focus on optimizing supply chains, fleet management, and delivery tracking. KayJay has created platforms with real-time GPS tracking, route optimization, and warehouse inventory management. We integrate predictive analytics to forecast demand and improve resource allocation. These solutions enable logistics providers to enhance efficiency, reduce costs, and ensure timely deliveries.",
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
