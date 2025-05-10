
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-bg -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-coral/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-coral/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Transform Your <span className="text-coral">Marketing ROI</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Get in touch today and discover how our integrated marketing solutions 
            can help accelerate your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild className="bg-coral hover:bg-coral/90 text-white cta-button px-8 py-6 text-lg">
              <Link to="/contact" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Meeting
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
            No commitment required. Let's just chat about your goals and see if we're a good fit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
