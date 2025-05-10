
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceBenefits from "@/components/ServiceBenefits";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceCTA from "@/components/ServiceCTA";
import ClientLogos from "@/components/ClientLogos";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BarChart3, PieChart, Clock, Share2, Zap, LineChart } from "lucide-react";

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

const benefits = [
  {
    title: "Data-Driven Decisions",
    description: "Make strategic decisions based on real data, not guesswork, to improve marketing performance and ROI.",
    icon: <PieChart className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Time Efficiency",
    description: "Save hours of manual reporting time with automated dashboards that update in real-time.",
    icon: <Clock className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Enhanced Collaboration",
    description: "Improve team alignment with shared dashboards that keep everyone informed and focused on key metrics.",
    icon: <Share2 className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Faster Insights",
    description: "Identify trends, opportunities, and issues quickly with visual data representations and automated alerts.",
    icon: <Zap className="text-brandPurple h-6 w-6" />
  }
];

const testimonials = [
  {
    quote: "The centralized reporting dashboard has transformed how we make marketing decisions. Having all our metrics in one place has saved us countless hours and improved our strategy.",
    name: "Olivia Martinez",
    role: "Head of Growth",
    company: "Velocity Digital",
    rating: 5
  },
  {
    quote: "The insights from the dashboard helped us identify a major opportunity we were missing. After adjusting our strategy based on the data, we saw a 28% increase in conversions.",
    name: "Thomas Wright",
    role: "Director",
    company: "Summit Brands",
    rating: 5
  },
  {
    quote: "We used to spend days compiling reports from different platforms. Now everything updates automatically, and we can focus on actually using the data to improve our campaigns.",
    name: "Jessica Kim",
    role: "Marketing Manager",
    company: "Horizon Solutions",
    rating: 5
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
        <ClientLogos />
        <ServiceBenefits 
          title="Why Use a Marketing Dashboard?"
          subtitle="Modern marketing requires data consolidation and visualization to extract meaningful insights."
          benefits={benefits}
          ctaText="Schedule a Demo"
        />
        <ServiceFeatures 
          title="Dashboard Features"
          subtitle="Our reporting dashboard brings all your marketing data together for better insights and decision-making."
          features={features}
        />
        <div className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="w-full h-full bg-gradient-to-r from-brandPurple/10 to-brandTeal/10 flex items-center justify-center">
                <span className="text-xl font-medium text-muted-foreground">Dashboard Preview Image</span>
              </div>
            </div>
          </div>
        </div>
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
