
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

const testimonials = [
  {
    quote: "Our organic traffic increased by 187% within six months of implementing ROIAgency's SEO strategy. Their focus on data-driven decisions really delivered results.",
    name: "James Collins",
    role: "CEO",
    company: "Pinnacle Solutions"
  },
  {
    quote: "What impressed me most was their ability to explain complex SEO concepts in simple terms, then translate that into measurable business growth.",
    name: "Sophia Chen",
    role: "Marketing Manager",
    company: "InnovateTech"
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
        <ServiceFeatures 
          title="Our SEO Services"
          subtitle="We use proven SEO techniques to improve your search rankings and increase organic traffic."
          features={features}
        />
        <ServiceTestimonials 
          title="Success Stories"
          subtitle="See how our SEO strategies have helped businesses achieve sustainable growth."
          testimonials={testimonials}
        />
        <ServiceCTA 
          title="Ready to Improve Your Search Rankings?"
          subtitle="Start climbing the search results with our data-driven SEO strategies."
          buttonText="Improve Your Ranking"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SEO;
