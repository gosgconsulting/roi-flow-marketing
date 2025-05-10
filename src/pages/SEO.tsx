
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceBenefits from "@/components/ServiceBenefits";
import ServicePlans from "@/components/ServicePlans";
import ServiceCaseStudies from "@/components/ServiceCaseStudies";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceCTA from "@/components/ServiceCTA";
import ClientLogos from "@/components/ClientLogos";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BarChart3, Globe, Rocket, Search, TrendingUp, Users } from "lucide-react";

const features = [
  {
    title: "Technical SEO",
    description: "Comprehensive site audits and optimization to ensure your site meets search engine requirements."
  },
  {
    title: "Keyword Research",
    description: "Data-driven keyword analysis to target search terms with high intent and business value."
  },
  {
    title: "On-Page Optimization",
    description: "Content and structure improvements that help search engines understand your pages better."
  },
  {
    title: "Link Building",
    description: "Ethical and effective strategies to build your site's authority through quality backlinks."
  },
  {
    title: "Local SEO",
    description: "Location-based optimization to help customers find your business when and where they need you."
  },
  {
    title: "Performance Tracking",
    description: "Regular reports and insights showing the impact of SEO efforts on your bottom line."
  }
];

const benefits = [
  {
    title: "Increased Organic Traffic",
    description: "Attract more visitors to your website through non-paid search results, increasing your online visibility without ongoing ad spend.",
    icon: <TrendingUp className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Higher Quality Leads",
    description: "Target customers actively searching for your products or services, resulting in higher conversion rates and better ROI.",
    icon: <Users className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Improved User Experience",
    description: "Optimize your site structure and content to create a better experience for both users and search engines.",
    icon: <Globe className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Data-Driven Decisions",
    description: "Make strategic decisions based on comprehensive analytics and reporting that show exactly where your traffic is coming from.",
    icon: <BarChart3 className="text-brandPurple h-6 w-6" />
  }
];

const plans = [
  {
    name: "Essential",
    price: "From $999/mo",
    description: "Perfect for small businesses getting started with SEO",
    features: [
      { name: "Technical SEO Audit", included: true },
      { name: "Keyword Research", included: true },
      { name: "On-Page Optimization", included: true },
      { name: "Content Optimization", included: true },
      { name: "Local SEO Setup", included: true },
      { name: "Link Building", included: false },
      { name: "Weekly Reporting", included: false },
      { name: "Dedicated SEO Manager", included: false }
    ],
    cta: "Get Started",
    link: "/contact"
  },
  {
    name: "Professional",
    price: "From $1,999/mo",
    description: "Ideal for growing businesses wanting to expand their reach",
    popular: true,
    features: [
      { name: "Technical SEO Audit", included: true },
      { name: "Keyword Research", included: true },
      { name: "On-Page Optimization", included: true },
      { name: "Content Optimization", included: true },
      { name: "Local SEO Setup", included: true },
      { name: "Link Building", included: true },
      { name: "Weekly Reporting", included: true },
      { name: "Dedicated SEO Manager", included: false }
    ],
    cta: "Most Popular",
    link: "/contact"
  },
  {
    name: "Enterprise",
    price: "From $3,999/mo",
    description: "Comprehensive SEO solution for established businesses",
    features: [
      { name: "Technical SEO Audit", included: true },
      { name: "Keyword Research", included: true },
      { name: "On-Page Optimization", included: true },
      { name: "Content Optimization", included: true },
      { name: "Local SEO Setup", included: true },
      { name: "Link Building", included: true },
      { name: "Weekly Reporting", included: true },
      { name: "Dedicated SEO Manager", included: true }
    ],
    cta: "Contact Us",
    link: "/contact"
  }
];

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    description: "We helped an e-commerce client increase their organic traffic by 187% in six months through targeted keyword optimization and technical SEO improvements.",
    result: "245% increase in organic revenue",
    link: "/contact"
  },
  {
    title: "Local Business Visibility",
    description: "A local service business struggled to appear in local search results. Our local SEO strategy helped them achieve top 3 rankings for their primary service keywords.",
    result: "315% increase in leads from Google",
    link: "/contact"
  }
];

const testimonials = [
  {
    quote: "Our organic traffic increased by 187% within six months of implementing ROIAgency's SEO strategy. Their focus on data-driven decisions really delivered results.",
    name: "James Collins",
    role: "CEO",
    company: "Pinnacle Solutions",
    rating: 5
  },
  {
    quote: "What impressed me most was their ability to explain complex SEO concepts in simple terms, then translate that into measurable business growth.",
    name: "Sophia Chen",
    role: "Marketing Manager",
    company: "InnovateTech",
    rating: 5
  },
  {
    quote: "We've worked with several SEO agencies before, but none have delivered the level of reporting and transparency that ROIAgency does.",
    name: "Michael Dawson",
    role: "Director of Digital",
    company: "Global Brands Inc.",
    rating: 5
  }
];

const SEO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServiceHero 
          title="SEO That Grows Your Business"
          description="Sustainable search engine optimization strategies that increase your visibility and drive quality traffic."
        />
        <ClientLogos />
        <ServiceBenefits 
          title="Why Invest in SEO?"
          subtitle="Search Engine Optimization delivers long-term value and sustainable growth for your business."
          benefits={benefits}
          ctaText="Get a Free SEO Audit"
        />
        <ServiceFeatures 
          title="Our SEO Services"
          subtitle="We use proven SEO techniques to improve your search rankings and increase organic traffic."
          features={features}
        />
        <ServicePlans 
          title="Choose Your SEO Package"
          subtitle="Flexible plans designed to meet your business goals and budget."
          plans={plans}
        />
        <ServiceCaseStudies
          title="Success Stories"
          subtitle="Real results we've achieved for businesses like yours."
          caseStudies={caseStudies}
        />
        <ServiceTestimonials 
          title="Client Testimonials"
          subtitle="See how our SEO strategies have helped businesses achieve sustainable growth."
          testimonials={testimonials}
        />
        <ServiceCTA 
          title="Ready to Improve Your Search Rankings?"
          subtitle="Start climbing the search results with our data-driven SEO strategies."
          buttonText="Get Your Free SEO Audit"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SEO;
