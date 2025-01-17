import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListing from "@/components/Portfolio/PortfolioItemList";

import image1 from "@/public/portfolio/pms11.svg";
import image2 from "@/public/portfolio/pms22.svg";
import image3 from "@/public/portfolio/pms22.svg";

const data = {
    banner: {
        title: "Property Management System",
    },

    description: {
        title: "About Project",
        description:
            "KayJay’s hospitality solutions include property management systems (PMS), guest apps, and booking platforms. These tools are tailored to improve guest experiences and streamline hotel operations, including room reservations, concierge services, and customer feedback.",
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
