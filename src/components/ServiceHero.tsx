
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
  image?: string;
}

const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg -z-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-brandPurple to-brandTeal bg-clip-text text-transparent">{title}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild variant="coral" size="lg">
                <Link to="/contact" className="flex items-center">
                  Get a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-brandPurple text-brandPurple hover:bg-brandPurple/10">
                <Link to="/contact" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Meeting
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video bg-secondary rounded-lg shadow-xl overflow-hidden">
              {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center p-4 bg-brandPurple/20 rounded-full">
                      <svg className="w-10 h-10 text-brandPurple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                </div>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-brandPurple/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-brandPurple/30 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
