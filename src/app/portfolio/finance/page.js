import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListingTriple from "@/components/Portfolio/PortfolioItemListTriple";

import image1 from "@/public/portfolio/finance11.svg";
import image2 from "@/public/portfolio/finance22.svg";
import image3 from "@/public/portfolio/finance22.svg";

const data = {
    banner: {
        title: "Finance",
    },

    description: {
        title: "About Project",
        description:
            "KayJay has built secure and efficient financial platforms, including mobile banking apps, investment management tools, and loan processing systems. Our solutions integrate features like fraud detection, AI-based credit scoring, and seamless payment gateways. These tools help financial institutions improve their customer experience while maintaining regulatory compliance.",
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
