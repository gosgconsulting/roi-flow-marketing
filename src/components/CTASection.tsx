
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-deepBlue via-deepBlue/95 to-deepBlue/90 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-coral/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-coral/20 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 mb-2 bg-coral/20 text-coral text-sm font-medium rounded-full">
            BOOST YOUR GROWTH
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Drive <span className="bg-gradient-to-r from-coral to-coral/80 bg-clip-text text-transparent">Revenue Growth</span> Through Powerful Campaigns
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Work with a marketing agency that helps you double your profits. 
            Increase your brand reach, get new customers and grow market share.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild className="relative overflow-hidden bg-coral hover:bg-coral/90 text-white px-8 py-6 text-lg group">
              <Link to="/contact" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Get a Free Consultation
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-coral text-coral hover:bg-coral/10 px-8 py-6 text-lg">
              <Link to="/contact" className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Boost revenue and build a standout brand with our digital marketing experts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
