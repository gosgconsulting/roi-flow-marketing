
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
import { Laptop, Smartphone, Zap, ShieldCheck, Users, PaintBucket } from "lucide-react";

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

const benefits = [
  {
    title: "Professional Online Presence",
    description: "Make a strong first impression with a website that reflects the quality and credibility of your business.",
    icon: <PaintBucket className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Mobile-First Experience",
    description: "Reach more customers with websites optimized for all devices, especially mobile where over 60% of web traffic occurs.",
    icon: <Smartphone className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Lightning Fast Performance",
    description: "Keep visitors engaged with fast-loading pages that reduce bounce rates and improve conversion rates.",
    icon: <Zap className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Bulletproof Security",
    description: "Protect your business and customer data with robust security measures built into every website we create.",
    icon: <ShieldCheck className="text-brandPurple h-6 w-6" />
  }
];

const plans = [
  {
    name: "Standard",
    price: "From $2,499",
    description: "Perfect for small businesses and startups",
    features: [
      { name: "Custom Design", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "Up to 5 Pages", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Contact Form", included: true },
      { name: "CMS Integration", included: false },
      { name: "E-commerce Functionality", included: false },
      { name: "Custom Functionality", included: false }
    ],
    cta: "Get Started",
    link: "/contact"
  },
  {
    name: "Professional",
    price: "From $4,999",
    description: "Ideal for growing businesses with more complex needs",
    popular: true,
    features: [
      { name: "Custom Design", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "Up to 10 Pages", included: true },
      { name: "Advanced SEO Setup", included: true },
      { name: "Contact Form", included: true },
      { name: "CMS Integration", included: true },
      { name: "E-commerce Functionality", included: false },
      { name: "Custom Functionality", included: false }
    ],
    cta: "Most Popular",
    link: "/contact"
  },
  {
    name: "Enterprise",
    price: "From $7,999",
    description: "Comprehensive solution for established businesses",
    features: [
      { name: "Custom Design", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "Unlimited Pages", included: true },
      { name: "Advanced SEO Setup", included: true },
      { name: "Contact Form", included: true },
      { name: "CMS Integration", included: true },
      { name: "E-commerce Functionality", included: true },
      { name: "Custom Functionality", included: true }
    ],
    cta: "Contact Us",
    link: "/contact"
  }
];

const caseStudies = [
  {
    title: "E-commerce Redesign",
    description: "We redesigned an outdated e-commerce site with a focus on user experience and conversion optimization. The new design simplified the purchasing journey and highlighted product features more effectively.",
    result: "34% increase in conversion rate",
    link: "/contact"
  },
  {
    title: "Professional Services Website",
    description: "A legal firm needed a website that conveyed professionalism while making complex services accessible. We created a clean, authoritative design with clear service descriptions and easy contact options.",
    result: "52% increase in qualified leads",
    link: "/contact"
  }
];

const testimonials = [
  {
    quote: "The website ROIAgency designed for us increased our conversion rate by 34% in just two months. Their focus on both aesthetics and functionality made all the difference.",
    name: "David Wilson",
    role: "Marketing Director",
    company: "Quantum Technologies",
    rating: 5
  },
  {
    quote: "Not only did they deliver a beautiful website, but they also provided valuable insights that helped us improve our online customer journey.",
    name: "Emma Rodriguez",
    role: "Founder",
    company: "The Creative Studio",
    rating: 5
  },
  {
    quote: "The website redesign transformed our business. We're getting more leads, and customers tell us how much they love the new site's ease of use.",
    name: "Thomas Brown",
    role: "CEO",
    company: "Metropolitan Consulting",
    rating: 5
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
        <ClientLogos />
        <ServiceBenefits 
          title="Why Your Website Matters"
          subtitle="In today's digital world, your website is often the first interaction potential customers have with your brand."
          benefits={benefits}
          ctaText="See Our Portfolio"
        />
        <ServiceFeatures 
          title="Our Website Design Services"
          subtitle="We create websites that not only look great but also deliver tangible business results."
          features={features}
        />
        <ServicePlans 
          title="Website Design Packages"
          subtitle="Choose the package that best fits your business needs and goals."
          plans={plans}
        />
        <ServiceCaseStudies
          title="Our Recent Projects"
          subtitle="See how our website designs have helped businesses achieve their goals."
          caseStudies={caseStudies}
        />
        <ServiceTestimonials 
          title="Success Stories"
          subtitle="Hear from businesses that have transformed their online presence with our website design services."
          testimonials={testimonials}
        />
        <ServiceCTA 
          title="Ready to Transform Your Website?"
          subtitle="Get a website that not only looks great but drives real business results."
          buttonText="Get a Free Consultation"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebsiteDesign;
