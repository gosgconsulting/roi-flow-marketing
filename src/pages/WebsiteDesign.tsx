
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceCTA from "@/components/ServiceCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const features = [
  {
    title: "Custom Design",
    description: "Tailored website designs that reflect your brand identity and business goals."
  },
  {
    title: "Mobile Responsive",
    description: "Websites that look and function perfectly on all devices and screen sizes."
  },
  {
    title: "SEO Friendly",
    description: "Built with search engine optimization in mind for better visibility."
  },
  {
    title: "Fast Loading",
    description: "Optimized for speed to improve user experience and conversion rates."
  },
  {
    title: "User-Focused UX",
    description: "Intuitive navigation and clear user journeys that drive conversions."
  },
  {
    title: "Easy Content Management",
    description: "Simple but powerful CMS that gives you control over your website content."
  }
];

const testimonials = [
  {
    quote: "The website ROIAgency designed for us increased our conversion rate by 34% in just two months. Their focus on both aesthetics and functionality made all the difference.",
    name: "David Wilson",
    role: "Marketing Director",
    company: "Quantum Technologies"
  },
  {
    quote: "Not only did they deliver a beautiful website, but they also provided valuable insights that helped us improve our online customer journey.",
    name: "Emma Rodriguez",
    role: "Founder",
    company: "The Creative Studio"
  }
];

const WebsiteDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServiceHero 
          title="Website Design That Drives Results"
          description="Beautiful, functional websites designed to convert visitors into customers and grow your business."
        />
        <ServiceFeatures 
          title="Our Website Design Services"
          subtitle="We create websites that not only look great but also deliver tangible business results."
          features={features}
        />
        <ServiceTestimonials 
          title="Success Stories"
          subtitle="Hear from businesses that have transformed their online presence with our website design services."
          testimonials={testimonials}
        />
        <ServiceCTA 
          title="Ready to Transform Your Website?"
          subtitle="Get a website that not only looks great but drives real business results."
          buttonText="Get a Quote"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebsiteDesign;
