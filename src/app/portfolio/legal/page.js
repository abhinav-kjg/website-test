import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListingTriple from "@/components/Portfolio/PortfolioItemListTriple";

import image1 from "@/public/portfolio/legal11.svg";
import image2 from "@/public/portfolio/legal22.svg";

const data = {
    banner: {
        title: "Legal",
    },

    description: {
        title: "About Project",
        description:
            "We have developed solutions for law firms and legal practitioners to streamline case management, document review, and client communication. Our systems include secure storage for sensitive data, workflow automation, and compliance tracking. These applications help legal professionals save time and focus on delivering quality services to their clients.",
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
