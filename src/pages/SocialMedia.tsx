
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
import { Calendar, Image, Clock, Target, TrendingUp, Users } from "lucide-react";

const features = [
  {
    title: "Content Calendar Creation",
    description: "We schedule posts on social media by creating a comprehensive content calendar tailored to your brand's goals."
  },
  {
    title: "Visual Content Editing",
    description: "We edit pictures and videos following the brand style of clients to ensure consistent and engaging social media presence."
  },
  {
    title: "Community Management",
    description: "Daily monitoring and engagement with your audience to build relationships and increase brand loyalty."
  },
  {
    title: "Performance Analytics",
    description: "Regular reports on social media performance with actionable insights to continually improve your strategy."
  },
  {
    title: "Audience Growth Strategies",
    description: "Targeted techniques to expand your following with genuine potential customers interested in your brand."
  },
  {
    title: "Campaign Management",
    description: "Strategic planning and execution of social media campaigns designed to achieve specific business objectives."
  }
];

const benefits = [
  {
    title: "Consistent Brand Presence",
    description: "Maintain a professional and cohesive brand image across all social platforms with regular, quality content.",
    icon: <Image className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Time Efficiency",
    description: "Free up your valuable time by letting experts handle your social media presence while you focus on your core business.",
    icon: <Clock className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Targeted Audience Engagement",
    description: "Connect with potential customers through strategic content that resonates with your specific target audience.",
    icon: <Target className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Brand Growth and Loyalty",
    description: "Build a loyal community around your brand through consistent engagement and valuable content.",
    icon: <TrendingUp className="text-brandPurple h-6 w-6" />
  }
];

const testimonials = [
  {
    quote: "Their social media team transformed our online presence. The content calendar they created ensures we're always posting relevant content that resonates with our audience.",
    name: "Jessica Chen",
    role: "Marketing Director",
    company: "Fusion Brands",
    rating: 5
  },
  {
    quote: "The visual content they create for our social channels is stunning. Every image and video perfectly aligns with our brand style while capturing audience attention.",
    name: "Marcus Johnson",
    role: "Brand Manager",
    company: "Urban Lifestyle Co.",
    rating: 5
  },
  {
    quote: "Since working with them, our social media engagement has increased by 215%. Their strategic approach to content and community management has been game-changing.",
    name: "Sophia Williams",
    role: "CEO",
    company: "NextGen Solutions",
    rating: 5
  }
];

const SocialMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServiceHero 
          title="Social Media Management That Builds Brands"
          description="Strategic social media solutions that strengthen your brand presence and drive meaningful engagement."
        />
        <ClientLogos />
        <ServiceBenefits 
          title="Why Invest in Social Media Management?"
          subtitle="Effective social media marketing builds brand awareness, fosters community, and drives business growth."
          benefits={benefits}
          ctaText="See Our Social Media Portfolio"
        />
        <ServiceFeatures 
          title="Our Social Media Services"
          subtitle="We create and manage engaging social media content that resonates with your target audience."
          features={features}
        />
        <div className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-border">
                <div className="w-full h-full bg-gradient-to-r from-brandPurple/10 to-brandTeal/10 flex items-center justify-center">
                  <Calendar className="h-20 w-20 text-brandPurple opacity-70" />
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-border">
                <div className="w-full h-full bg-gradient-to-r from-brandPurple/10 to-brandTeal/10 flex items-center justify-center">
                  <Image className="h-20 w-20 text-brandPurple opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServiceTestimonials 
          title="Client Success Stories"
          subtitle="Hear how our social media management has helped businesses build stronger online communities."
          testimonials={testimonials}
        />
        <ServiceCTA 
          title="Ready to Elevate Your Social Media Presence?"
          subtitle="Let our expert team create and manage content that resonates with your audience."
          buttonText="Get a Free Social Media Audit"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SocialMedia;
