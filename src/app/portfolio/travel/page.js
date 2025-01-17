import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListing from "@/components/Portfolio/PortfolioItemList";

import image1 from "@/public/portfolio/travel11.svg";

const data = {
    banner: {
        title: "Travel",
    },

    description: {
        title: "About Project",
        description:
            "We develop travel platforms that include itinerary planners, booking engines, and real-time travel updates. Our solutions are designed to simplify travel management for agencies and travelers, offering features like dynamic pricing and AI-powered travel suggestions.",
    },

    portfolioList: {
        title: "User Interface",
        item: [
            {
                image: image1,
                label: "image 1",
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
