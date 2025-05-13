
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceCTA from "@/components/ServiceCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import EditableSection from "@/components/dashboard/EditableSection";
import { withAdminEditing } from "@/components/dashboard/withAdminEditing";

interface WebsiteDesignProps {
  isAdmin?: boolean;
  pageId?: string;
  onEditSection?: (sectionId: string) => void;
}

const WebsiteDesign = ({ isAdmin = false, pageId = "website-design", onEditSection = () => {} }: WebsiteDesignProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Custom Website Design",
      description: "Bespoke websites designed specifically for your brand and business goals."
    },
    {
      title: "Responsive Development",
      description: "Mobile-friendly websites that work beautifully on all devices and screen sizes."
    },
    {
      title: "E-commerce Solutions",
      description: "Powerful online stores built on platforms like WooCommerce and Shopify."
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins tailored to your specific needs."
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support, updates, and optimization to keep your site running smoothly."
    },
    {
      title: "Performance Optimization",
      description: "Speed and performance improvements for better user experience and SEO."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EditableSection
          isAdmin={isAdmin}
          sectionId="hero"
          sectionName="Hero Section"
          onEdit={onEditSection}
          pageId={pageId}
        >
          <ServiceHero 
            title="Stunning Website Design"
            description="Custom websites that combine beautiful design with powerful functionality."
          />
        </EditableSection>
        
        <EditableSection
          isAdmin={isAdmin}
          sectionId="features"
          sectionName="Service Features"
          onEdit={onEditSection}
          pageId={pageId}
        >
          <ServiceFeatures 
            title="Website Services"
            subtitle="From concept to launch, we handle every aspect of creating your perfect website."
            features={features}
          />
        </EditableSection>
        
        <EditableSection
          isAdmin={isAdmin}
          sectionId="cta"
          sectionName="Call to Action"
          onEdit={onEditSection}
          pageId={pageId}
        >
          <ServiceCTA 
            title="Ready for a Website That Works?"
            subtitle="Let's discuss your project and create a website that helps achieve your business goals."
            buttonText="Start Your Project"
            buttonLink="/contact"
          />
        </EditableSection>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default withAdminEditing(WebsiteDesign, "website-design");
