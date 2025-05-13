import { useEffect, useState } from "react";
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
import { Target, LineChart, DollarSign, Users, BarChart } from "lucide-react";
import FloatingCustomizer from "@/components/dashboard/FloatingCustomizer";
import EditableSection from "@/components/dashboard/EditableSection";
import { useAdminCheck } from "@/hooks/use-admin-check";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContentEditor from "@/components/dashboard/ContentEditor";

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

const benefits = [
  {
    title: "Immediate Visibility",
    description: "Unlike organic methods, paid ads put you at the top of search results and social feeds instantly, giving you immediate exposure to potential customers.",
    icon: <Target className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Precise Targeting",
    description: "Reach exactly the right audience with targeting options based on demographics, interests, behaviors, and search intent.",
    icon: <Target className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Measurable Results",
    description: "Track every click, impression, and conversion to know exactly what you're getting for your ad spend and adjust accordingly.",
    icon: <LineChart className="text-brandPurple h-6 w-6" />
  },
  {
    title: "Scalable Campaigns",
    description: "Easily scale your budget up or down based on performance, seasonality, or business needs without disrupting your strategy.",
    icon: <BarChart className="text-brandPurple h-6 w-6" />
  }
];

const caseStudies = [
  {
    title: "E-commerce ROAS Improvement",
    description: "An online retailer was struggling with low returns on their ad spend. We revamped their campaigns with better audience targeting and ad creative, focusing on high-margin products.",
    result: "412% increase in ROAS",
    link: "/contact"
  },
  {
    title: "B2B Lead Generation",
    description: "A SaaS company needed more qualified leads for their sales team. We created targeted campaigns on Google and LinkedIn with precise audience targeting and compelling offers.",
    result: "67% reduction in cost per lead",
    link: "/contact"
  }
];

const testimonials = [
  {
    quote: "ROIAgency's paid ad campaigns delivered a 412% return on our ad spend in just the first quarter. Their approach to targeting and optimization is exceptional.",
    name: "Rebecca Johnson",
    role: "CMO",
    company: "EvoGrowth",
    rating: 5
  },
  {
    quote: "They completely transformed our Meta ads strategy, resulting in a 67% decrease in cost per acquisition while increasing our overall conversion volume.",
    name: "Michael Patel",
    role: "Director of Digital",
    company: "Zenith Group",
    rating: 5
  },
  {
    quote: "Their ability to identify and reach our target audience changed everything. We're now getting higher quality leads that convert better throughout our sales funnel.",
    name: "Sarah Thompson",
    role: "VP of Marketing",
    company: "Velocity Partners",
    rating: 5
  }
];

const PaidAds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isAdmin, isLoading, toggleAdminMode } = useAdminCheck();
  const [editDialog, setEditDialog] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const handleEditSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    setEditDialog(true);
  };

  // For demo purposes only - toggle admin mode button
  const AdminToggle = () => (
    <button
      onClick={toggleAdminMode}
      className="fixed left-6 bottom-6 bg-slate-800 text-white text-xs px-3 py-1 rounded opacity-50 hover:opacity-100 z-50"
    >
      {isAdmin ? "Disable" : "Enable"} Admin Mode
    </button>
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EditableSection
          isAdmin={isAdmin}
          sectionId="hero"
          sectionName="Hero Section"
          onEdit={handleEditSection}
        >
          <ServiceHero 
            title="Paid Ads That Maximize ROI"
            description="Strategic campaigns across search and social platforms that deliver measurable returns on your investment."
          />
        </EditableSection>
        
        <EditableSection
          isAdmin={isAdmin}
          sectionId="clientLogos"
          sectionName="Client Logos"
          onEdit={handleEditSection}
        >
          <ClientLogos />
        </EditableSection>
        
        <EditableSection
          isAdmin={isAdmin}
          sectionId="benefits"
          sectionName="Service Benefits"
          onEdit={handleEditSection}
        >
          <ServiceBenefits 
            title="Why Use Paid Advertising?"
            subtitle="In an increasingly competitive digital landscape, paid advertising offers precise targeting and immediate results."
            benefits={benefits}
            ctaText="Get a Free Ad Account Audit"
          />
        </EditableSection>
        
        <EditableSection
          isAdmin={isAdmin}
          sectionId="features"
          sectionName="Service Features"
          onEdit={handleEditSection}
        >
          <ServiceFeatures 
            title="Our Paid Advertising Services"
            subtitle="We create and manage high-performance paid campaigns that deliver real business results."
            features={features}
          />
        </EditableSection>
        
        <EditableSection
          isAdmin={isAdmin}
          sectionId="caseStudies"
          sectionName="Case Studies"
          onEdit={handleEditSection}
        >
          <ServiceCaseStudies
            title="Campaign Success Stories"
            subtitle="See how our paid advertising strategies have delivered exceptional results."
            caseStudies={caseStudies}
          />
        </EditableSection>
        
        <EditableSection
          isAdmin={isAdmin}
          sectionId="testimonials"
          sectionName="Testimonials"
          onEdit={handleEditSection}
        >
          <ServiceTestimonials 
            title="Client Success Stories"
            subtitle="Learn how our paid advertising strategies have helped businesses achieve exceptional ROI."
            testimonials={testimonials}
          />
        </EditableSection>
        
        <EditableSection
          isAdmin={isAdmin}
          sectionId="cta"
          sectionName="Call to Action"
          onEdit={handleEditSection}
        >
          <ServiceCTA 
            title="Ready to Boost Your Ad Campaigns?"
            subtitle="Get started with ROI-focused paid advertising that delivers real results."
            buttonText="Get a Free Strategy Session"
            buttonLink="/contact"
          />
        </EditableSection>
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingCustomizer isAdmin={isAdmin} />
      <AdminToggle />

      {/* Edit Dialog */}
      <Dialog open={editDialog} onOpenChange={setEditDialog}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Edit Section: {currentSection}
            </DialogTitle>
          </DialogHeader>
          <ContentEditor initialSection={currentSection} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaidAds;
