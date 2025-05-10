
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
    title: "Unified Data View",
    description: "All your marketing metrics in one place, eliminating the need to switch between platforms."
  },
  {
    title: "Real-Time Reporting",
    description: "Up-to-date performance data that helps you make timely business decisions."
  },
  {
    title: "Custom KPI Tracking",
    description: "Focus on the metrics that matter most to your unique business goals."
  },
  {
    title: "Cross-Channel Analysis",
    description: "Compare performance across different marketing channels to optimize your strategy."
  },
  {
    title: "Automated Insights",
    description: "AI-powered recommendations that highlight opportunities and potential issues."
  },
  {
    title: "Easy Data Sharing",
    description: "Simplified reporting for stakeholders with customizable dashboards and export options."
  }
];

const testimonials = [
  {
    quote: "The centralized reporting dashboard has transformed how we make marketing decisions. Having all our metrics in one place has saved us countless hours and improved our strategy.",
    name: "Olivia Martinez",
    role: "Head of Growth",
    company: "Velocity Digital"
  },
  {
    quote: "The insights from the dashboard helped us identify a major opportunity we were missing. After adjusting our strategy based on the data, we saw a 28% increase in conversions.",
    name: "Thomas Wright",
    role: "Director",
    company: "Summit Brands"
  }
];

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServiceHero 
          title="Centralized Reporting Dashboard"
          description="Make data-driven decisions with our comprehensive marketing analytics and reporting solution."
        />
        <ServiceFeatures 
          title="Dashboard Features"
          subtitle="Our reporting dashboard brings all your marketing data together for better insights and decision-making."
          features={features}
        />
        <ServiceTestimonials 
          title="Client Success Stories"
          subtitle="Discover how our reporting dashboard has helped businesses improve their marketing effectiveness."
          testimonials={testimonials}
        />
        <ServiceCTA 
          title="Ready to Gain Better Marketing Insights?"
          subtitle="Get a centralized view of your marketing performance and make data-driven decisions."
          buttonText="See a Demo"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dashboard;
