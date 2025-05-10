
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
    title: "Google Ads Management",
    description: "Strategic campaigns that target high-intent keywords and maximize your return on ad spend."
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    description: "Targeted social campaigns that reach your ideal audience with compelling visual content."
  },
  {
    title: "Audience Targeting",
    description: "Advanced segmentation to ensure your ads reach the most relevant potential customers."
  },
  {
    title: "Ad Creative Development",
    description: "Eye-catching, conversion-focused ad designs and copy that drive action."
  },
  {
    title: "Landing Page Optimization",
    description: "Conversion-focused landing pages that turn clicks into customers."
  },
  {
    title: "Performance Tracking",
    description: "Comprehensive analytics and regular reporting to measure ROI and optimize campaigns."
  }
];

const testimonials = [
  {
    quote: "ROIAgency's paid ad campaigns delivered a 412% return on our ad spend in just the first quarter. Their approach to targeting and optimization is exceptional.",
    name: "Rebecca Johnson",
    role: "CMO",
    company: "EvoGrowth"
  },
  {
    quote: "They completely transformed our Meta ads strategy, resulting in a 67% decrease in cost per acquisition while increasing our overall conversion volume.",
    name: "Michael Patel",
    role: "Director of Digital",
    company: "Zenith Group"
  }
];

const PaidAds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServiceHero 
          title="Paid Ads That Maximize ROI"
          description="Strategic campaigns across search and social platforms that deliver measurable returns on your investment."
        />
        <ServiceFeatures 
          title="Our Paid Advertising Services"
          subtitle="We create and manage high-performance paid campaigns that deliver real business results."
          features={features}
        />
        <ServiceTestimonials 
          title="Success Stories"
          subtitle="Learn how our paid advertising strategies have helped businesses achieve exceptional ROI."
          testimonials={testimonials}
        />
        <ServiceCTA 
          title="Ready to Boost Your Ad Campaigns?"
          subtitle="Get started with ROI-focused paid advertising that delivers real results."
          buttonText="Boost Your Campaigns"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PaidAds;
