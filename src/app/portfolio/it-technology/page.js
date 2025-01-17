import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListing from "@/components/Portfolio/PortfolioItemList";

import image1 from "@/public/portfolio/it11.svg";
import image2 from "@/public/portfolio/it22.svg";
import image3 from "@/public/portfolio/it22.svg";

const data = {
    banner: {
        title: "IT & Telecom",
    },

    description: {
        title: "About Project",
        description:
            "Our work in IT and telecom involves creating platforms for network management, customer support, and subscription billing. We develop systems that are scalable, secure, and capable of handling large volumes of data. Optional AI-driven analytics provide insights into customer behavior and network optimization.",
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
            <PortfolioItemListing data={data.portfolioList} />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
