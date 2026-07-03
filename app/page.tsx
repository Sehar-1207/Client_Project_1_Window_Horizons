import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BlindSection from "./components/BlindSection";
import WhyChooseUs from "./components/WhyChooseUsSection";
import WorkBanner from "./components/WorkBanner";
import CustomBlinds from "./components/CustomBlinds";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/Testimonials";
import Panorama from "./components/Panorama";
import Blogs from "./components/Blogs";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <BlindSection/>
    <WhyChooseUs/>
    <WorkBanner/>
    <CustomBlinds/>
    <ContactUs/>
    <Testimonials/>
    <Panorama/>
    <Blogs/>
    <Instagram/>
    <Footer/>
    </>
  );
}
