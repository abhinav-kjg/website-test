import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioItemBanner from "@/components/Portfolio/PortfolioItemBanner";
import PortfolioItemDescription from "@/components/Portfolio/PortfolioItemDescription";
import PortfolioItemListing from "@/components/Portfolio/PortfolioItemList";

import image1 from "@/public/portfolio/edu11.svg";
import image2 from "@/public/portfolio/edu22.svg";
import image3 from "@/public/portfolio/edu33.svg";
import image4 from "@/public/portfolio/edu44.svg";
import image5 from "@/public/portfolio/edu55.svg";

const data = {
    banner: {
        title: "Education",
    },

    description: {
        title: "About Project",
        description:
            "In the education domain, we build platforms for learning management systems (LMS), virtual classrooms, and e-learning modules. These tools offer seamless student-teacher interaction, progress tracking, and customizable courses. AI-powered features such as personalized learning paths and smart assessments enhance the quality of education delivery, making our solutions suitable for schools, colleges, and corporate training environments.",
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
