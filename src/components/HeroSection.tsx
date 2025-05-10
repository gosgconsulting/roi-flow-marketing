
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg -z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Accelerate Your Growth with <span className="text-coral">High ROI</span> Marketing Solutions
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Integrated strategies for startups, entrepreneurs, and brands.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild className="bg-coral hover:bg-coral/90 text-white cta-button px-8 py-6 text-lg">
                <Link to="/contact" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Meeting
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-coral text-coral hover:bg-coral/10 px-8 py-6 text-lg">
                <Link to="/services/website-design">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video bg-secondary rounded-lg shadow-xl overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center p-4 bg-coral rounded-full">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8L8 16M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Marketing Strategy Dashboard</h3>
                    <p className="text-muted-foreground">Interactive visualization of your growth metrics</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-coral/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-coral/30 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
