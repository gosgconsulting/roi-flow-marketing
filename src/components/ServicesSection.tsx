
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Search, BarChart3, MessageSquare, FileBarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Website Design",
    description: "Upgrade and enhance your business through top-notch website design.",
    icon: <Palette className="h-10 w-10 text-coral" />,
    link: "/services/website-design",
    cta: "Learn More"
  },
  {
    title: "Humanised SEO",
    description: "Boost Your search engine ranking to gain increased visibility where it matters most.",
    icon: <Search className="h-10 w-10 text-coral" />,
    link: "/services/seo",
    cta: "Learn More"
  },
  {
    title: "Paid Advertising",
    description: "Ad campaigns designed specifically to attract and convert your targeted customer.",
    icon: <BarChart3 className="h-10 w-10 text-coral" />,
    link: "/services/paid-ads",
    cta: "Learn More"
  },
  {
    title: "Social Media",
    description: "We make engaging content and plan for your channels.",
    icon: <MessageSquare className="h-10 w-10 text-coral" />,
    link: "/services/dashboard",
    cta: "Learn More"
  },
  {
    title: "Reporting",
    description: "Track your campaigns with detailed analytics and insights to optimize performance.",
    icon: <FileBarChart className="h-10 w-10 text-coral" />,
    link: "/services/reporting",
    cta: "Learn More"
  }
];

// Only use the first 3 services by default
const defaultServices = services.slice(0, 3);

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 mb-4 bg-coral/20 text-coral text-sm font-medium rounded-full">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Marketing Solutions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed to deliver measurable results and accelerate your business growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {defaultServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="h-full bg-card border border-border hover:border-coral/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-coral/5">
                <div className="p-8">
                  <div className="inline-flex items-center justify-center p-3 bg-coral/10 rounded-xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Button asChild variant="ghost" className="text-coral hover:text-coral hover:bg-coral/10 pl-0">
                    <Link to={service.link} className="flex items-center">
                      {service.cta}
                      <svg className="ml-2 h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
