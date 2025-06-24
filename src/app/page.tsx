import  HeroSection  from "@/components/heroSection";
import BestSall from "@/components/Best Saller/bestSall";
import CustomersReviews from "@/components/customersReviews";
import NewArrivals from "@/components/newArrivals";
import Support from "@/components/support";
import Discount from "@/components/Discount";
import Blog from "@/components/blog";


export default function Home() {
  return (
    <div className="min-h-5/10">
      <HeroSection />
      <BestSall />
      <CustomersReviews />
      <NewArrivals />
      <Blog/>
      <Discount />
      <Support/>
    </div>
  );
}
