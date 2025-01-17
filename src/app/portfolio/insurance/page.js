import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListing from "@/components/Portfolio/PortfolioItemList";

import image1 from "@/public/portfolio/insurance11.svg";
import image2 from "@/public/portfolio/insurance22.svg";
import image3 from "@/public/portfolio/insurance33.svg";

const data = {
    banner: {
        title: "Insurance",
    },

    description: {
        title: "About Project",
        description:
            "In the insurance sector, we specialize in building custom platforms that simplify the insurance lifecycle for agents and policyholders. From automated claims processing and policy management to customer portals and compliance tools, our solutions are tailored to address the unique challenges of the industry. By incorporating AI-based risk assessment and fraud detection, we enable insurers to enhance their operational efficiency and decision-making.",
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
