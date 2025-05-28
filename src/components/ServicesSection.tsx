
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

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block py-1 px-3 mb-4 bg-coral/20 text-coral text-sm font-medium rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OUR SERVICES
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive Marketing Solutions
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Designed to deliver measurable results and accelerate your business growth.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="service-card group"
                  >
                    <motion.div 
                      className="h-full bg-card border border-border hover:border-coral/50 rounded-xl overflow-hidden transition-all duration-300 relative"
                      whileHover={{
                        boxShadow: "0 10px 40px rgba(249, 78, 64, 0.15), 0 0 30px rgba(249, 78, 64, 0.1)"
                      }}
                    >
                      <div className="p-8 relative z-10">
                        <motion.div 
                          className="inline-flex items-center justify-center p-3 bg-coral/10 rounded-xl mb-6 group-hover:bg-coral/20 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5
                          }}
                        >
                          {service.icon}
                        </motion.div>
                        <motion.h3 
                          className="text-xl font-semibold mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p 
                          className="text-muted-foreground mb-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          {service.description}
                        </motion.p>
                        <Button asChild variant="ghost" className="text-coral hover:text-coral hover:bg-coral/10 pl-0 group">
                          <Link to={service.link} className="flex items-center">
                            {service.cta}
                            <motion.svg 
                              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                              viewBox="0 0 16 16" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                          </Link>
                        </Button>
                      </div>
                      
                      {/* Animated background gradient on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-coral/5 to-brandPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
