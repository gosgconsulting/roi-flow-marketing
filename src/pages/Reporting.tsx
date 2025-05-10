
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
    title: "Custom Dashboards",
    description: "Personalized dashboards that track the KPIs most important to your business."
  },
  {
    title: "Real-Time Analytics",
    description: "Access up-to-the-minute data to make informed decisions quickly."
  },
  {
    title: "Multi-Channel Reporting",
    description: "Consolidated reports across all your marketing channels in one place."
  },
  {
    title: "Performance Insights",
    description: "Actionable recommendations based on data analysis to improve campaign performance."
  },
  {
    title: "ROI Tracking",
    description: "Clear measurement of return on investment for every marketing initiative."
  },
  {
    title: "Automated Reporting",
    description: "Regular reports delivered to your inbox without any manual effort."
  }
];

const testimonials = [
  {
    quote: "The reporting tools provided by GO SG gave us unprecedented visibility into our marketing performance. We were able to optimize our campaigns and increase ROI by 47%.",
    name: "Thomas Reed",
    role: "CEO",
    company: "Global Innovations"
  },
  {
    quote: "With GO SG's reporting, we finally understand which channels are driving real results. The insights provided have transformed how we allocate our marketing budget.",
    name: "Sarah Lin",
    role: "Marketing Director",
    company: "NextGen Solutions"
  }
];

const Reporting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServiceHero 
          title="Data-Driven Marketing Reporting"
          description="Comprehensive analytics and reporting solutions that provide clear insights and drive strategic decisions."
        />
        <ServiceFeatures 
          title="Our Reporting Services"
          subtitle="We provide actionable insights through comprehensive reporting tools that help you make data-driven decisions."
          features={features}
        />
        <ServiceTestimonials 
          title="Success Stories"
          subtitle="See how our reporting solutions have helped businesses gain clarity and improve performance."
          testimonials={testimonials}
        />
        <ServiceCTA 
          title="Ready for Data-Driven Growth?"
          subtitle="Get clear insights into your marketing performance with our reporting solutions."
          buttonText="Get Started"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reporting;
