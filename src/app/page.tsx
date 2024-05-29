import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/instructors";
import MusicSchoolTestiMonials from "@/components/ui/TestimonialCards";
import WhyChooseUs from "@/components/ui/whyChooseUs";

export default function Home() {
  return (
    <main className="container mx-auto px-4 text-white bg-blackmin-h-screen bg-black  /[0.96] antialiased bg-grid-white/[0.02]">
       {/* <h1 className="text-2xl text-center">Hello , Sanket Tavethiya</h1> */}
       <HeroSection/>
       <FeatureCourses/>
       <WhyChooseUs/>
       <MusicSchoolTestiMonials/>
       <UpcomingWebinars/>
       <Instructors/>
       <Footer/>
    </main>
  );  
}
