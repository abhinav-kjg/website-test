import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListingTriple from "@/components/Portfolio/PortfolioItemListTriple";

import image1 from "@/public/portfolio/social11.svg";
import image2 from "@/public/portfolio/social22.svg";
import image3 from "@/public/portfolio/social33.svg";

const data = {
    banner: {
        title: "Social Media",
    },

    description: {
        title: "About Project",
        description:
            "Our expertise in social media includes building platforms for content sharing, user engagement, and social networking. These applications are equipped with advanced features like live streaming, AI-driven content curation, and analytics for user behavior. We help businesses create dynamic platforms that foster engagement and drive growth in the digital community.",
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
