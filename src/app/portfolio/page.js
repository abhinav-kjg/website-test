import RecentBlogs from "@/components/Common/Blog";
import NewContactUsForm from "@/components/NewContactUsForm";
import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";
import PortfolioListing from "@/components/Portfolio/PortfolioList";

export default function PortfolioServices() {
    return (
        <div className="mt-5">
            <PortfolioBanner />
            <PortfolioListing />
            <RecentBlogs />
            <NewContactUsForm />
        </div>
    );
}
