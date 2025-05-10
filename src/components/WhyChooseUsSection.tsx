
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square max-w-lg bg-card rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-10">
                <div className="text-center space-y-6">
                  <span className="inline-block py-1 px-3 mb-4 bg-coral/20 text-coral text-sm font-medium rounded-full">
                    WHY GO SG
                  </span>
                  <div className="text-4xl font-bold bg-gradient-to-r from-coral to-coral/80 bg-clip-text text-transparent">
                    We Understand Your Growth Challenges
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-coral/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-coral/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Why GO SG</h2>
            <p className="text-lg text-muted-foreground">
              It's hard to grow especially working with novice agencies or managing variable in-house teams. We know your pain and this is why we have ready to deploy experienced digital teams so you don't have to. Having faced this frustration too many times, we started GO SG to become the digital agency we wish we could hire. That means continuous results for your brand.
            </p>
            
            <div className="pt-4">
              <Button asChild className="bg-coral hover:bg-coral/90 text-white">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
