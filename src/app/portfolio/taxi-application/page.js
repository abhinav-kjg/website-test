import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListingTriple from "@/components/Portfolio/PortfolioItemListTriple";

import image1 from "@/public/portfolio/taxi11.svg";
import image2 from "@/public/portfolio/taxi22.svg";

const data = {
    banner: {
        title: "Taxi Application",
    },

    description: {
        title: "About Project",
        description:
            "Our experience in this sector includes building ride-hailing and delivery management platforms. Features like real-time tracking, dynamic pricing, and route optimization ensure a seamless experience for both drivers and customers.",
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
