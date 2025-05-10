
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceBenefits from "@/components/ServiceBenefits";
import ServicePlans from "@/components/ServicePlans";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceCTA from "@/components/ServiceCTA";
import ClientLogos from "@/components/ClientLogos";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BarChart3, LineChart, PieChart, Activity, TrendingUp, Layers } from "lucide-react";

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

const benefits = [
  {
    title: "Performance Visibility",
    description: "Get complete transparency into your marketing performance across all channels and campaigns.",
    icon: <Activity className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Strategic Optimization",
    description: "Identify what's working and what's not, so you can allocate resources to the highest-performing channels.",
    icon: <TrendingUp className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Time Savings",
    description: "Eliminate hours spent manually creating reports with automated data collection and visualization.",
    icon: <PieChart className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Integrated Insights",
    description: "Connect data from multiple sources for a complete view of your customer journey and attribution.",
    icon: <Layers className="text-brandPurple h-6 w-6" />
  }
];

const plans = [
  {
    name: "Basic",
    price: "From $499/mo",
    description: "Essential reporting for small businesses",
    features: [
      { name: "Monthly Reports", included: true },
      { name: "Key Metrics Dashboard", included: true },
      { name: "Google Analytics Integration", included: true },
      { name: "Google Ads Integration", included: true },
      { name: "Email Reports", included: true },
      { name: "Custom Dashboards", included: false },
      { name: "Multi-Channel Attribution", included: false },
      { name: "Competitor Analysis", included: false }
    ],
    cta: "Get Started",
    link: "/contact"
  },
  {
    name: "Professional",
    price: "From $999/mo",
    description: "Comprehensive reporting for growing businesses",
    popular: true,
    features: [
      { name: "Weekly Reports", included: true },
      { name: "Advanced Dashboards", included: true },
      { name: "Google Analytics Integration", included: true },
      { name: "All Marketing Platform Integrations", included: true },
      { name: "Email Reports", included: true },
      { name: "Custom Dashboards", included: true },
      { name: "Multi-Channel Attribution", included: true },
      { name: "Competitor Analysis", included: false }
    ],
    cta: "Most Popular",
    link: "/contact"
  },
  {
    name: "Enterprise",
    price: "From $1,999/mo",
    description: "Advanced analytics for large organizations",
    features: [
      { name: "Real-Time Reporting", included: true },
      { name: "Custom Enterprise Dashboards", included: true },
      { name: "Complete Data Integration", included: true },
      { name: "All Platform Integrations", included: true },
      { name: "Automated Reports", included: true },
      { name: "Unlimited Custom Dashboards", included: true },
      { name: "Advanced Attribution Modeling", included: true },
      { name: "Competitor & Market Analysis", included: true }
    ],
    cta: "Contact Us",
    link: "/contact"
  }
];

const testimonials = [
  {
    quote: "The reporting tools provided by GO SG gave us unprecedented visibility into our marketing performance. We were able to optimize our campaigns and increase ROI by 47%.",
    name: "Thomas Reed",
    role: "CEO",
    company: "Global Innovations",
    rating: 5
  },
  {
    quote: "With GO SG's reporting, we finally understand which channels are driving real results. The insights provided have transformed how we allocate our marketing budget.",
    name: "Sarah Lin",
    role: "Marketing Director",
    company: "NextGen Solutions",
    rating: 5
  },
  {
    quote: "The automated reporting saves our team at least 15 hours every week. Now we spend that time actually improving our campaigns based on the insights.",
    name: "Marcus Johnson",
    role: "Digital Marketing Manager",
    company: "Elevate Media",
    rating: 5
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
        <ClientLogos />
        <ServiceBenefits 
          title="Why Marketing Reporting Matters"
          subtitle="In the digital age, data-driven decisions are the key to marketing success."
          benefits={benefits}
          ctaText="See Our Reports in Action"
        />
        <ServiceFeatures 
          title="Our Reporting Services"
          subtitle="We provide actionable insights through comprehensive reporting tools that help you make data-driven decisions."
          features={features}
        />
        <div className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="w-full h-full bg-gradient-to-r from-brandPurple/10 to-brandTeal/10 flex items-center justify-center">
                <span className="text-xl font-medium text-muted-foreground">Report Preview Image</span>
              </div>
            </div>
          </div>
        </div>
        <ServicePlans 
          title="Reporting Packages"
          subtitle="Choose the level of reporting and analytics that matches your business needs."
          plans={plans}
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
