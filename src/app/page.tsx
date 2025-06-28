import  HeroSection  from "@/components/Hero Section/heroSection";
import BestSall from "@/components/Best Saller/bestSall";
import CustomersReviews from "@/components/Hero Section/customersReviews";
import NewArrivals from "@/components/Hero Section/newArrivals";
import Support from "@/components/Hero Section/support";
import Discount from "@/components/Hero Section/Discount";
import Blog from "@/components/Hero Section/blog";


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
