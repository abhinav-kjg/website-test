import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListing from "@/components/Portfolio/PortfolioItemList";

import image1 from "@/public/portfolio/con11.svg";
import image2 from "@/public/portfolio/con22.svg";
import image3 from "@/public/portfolio/con33.svg";
import image4 from "@/public/portfolio/con44.svg";
import image5 from "@/public/portfolio/con55.svg";

const data = {
    banner: {
        title: "Construction",
    },

    description: {
        title: "About Project",
        description:
            "KayJay has developed applications to assist construction firms with project management, resource allocation, and site safety compliance. Our solutions include tools for tracking construction progress, managing contractor payments, and monitoring budgets in real-time. These systems are tailored to help firms meet deadlines while maintaining quality and transparency in their operations.",
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
