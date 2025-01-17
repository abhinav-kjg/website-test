import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListingTriple from "@/components/Portfolio/PortfolioItemListTriple";

import image1 from "@/public/portfolio/enter11.svg";
import image2 from "@/public/portfolio/enter22.svg";
import image3 from "@/public/portfolio/enter33.svg";

const data = {
    banner: {
        title: "Entertainment",
    },

    description: {
        title: "About Project",
        description:
            "In the entertainment industry, we build apps for streaming services, event ticketing, and content creation. Our solutions are equipped with user-friendly interfaces and personalization features such as AI-driven recommendations. From video-on-demand platforms to event management tools, we help clients deliver immersive experiences to their audiences.",
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
