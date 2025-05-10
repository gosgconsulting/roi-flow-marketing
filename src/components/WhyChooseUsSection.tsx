
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reasons = [
  {
    title: "Expertise & Strategy",
    description: "Access to expert knowledge and strategic planning for your marketing needs."
  },
  {
    title: "Ready-to-Deploy Teams",
    description: "No need to manage in-house teams or deal with novice agencies."
  },
  {
    title: "Continuous Results",
    description: "We focus on delivering ongoing positive outcomes for your brand."
  },
  {
    title: "Revenue Growth",
    description: "Our campaigns are designed to help you double your profits."
  },
  {
    title: "Increased Brand Reach",
    description: "Expand your market share and attract new customers."
  },
  {
    title: "Time & Cost Efficiency",
    description: "We deliver professional results quickly without breaking your budget."
  }
];

const testimonials = [
  {
    quote: "90% of our clients reported positive results within the first month.",
    name: "GO SG",
    role: "Success Metrics",
    company: "GO SG Consulting"
  },
  {
    quote: "Smooy frozen yogurt gained 700 monthly organic traffic in 8 months only.",
    name: "SEO Case Study",
    role: "Organic Growth",
    company: "Smooy"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/80 to-secondary">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 mb-4 bg-coral/20 text-coral text-sm font-medium rounded-full">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why GO SG</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            It's hard to grow especially working with novice agencies or managing variable in-house teams. 
            We know your pain and this is why we have ready to deploy experiences digital teams so you don't have to. 
            Having faced this frustration too many times, we started GO SG to become the digital agency we wish we could hire. 
            That means continuous results for your brand.
          </p>
          <div className="mt-8">
            <Button asChild className="bg-coral hover:bg-coral/90 text-white px-8 py-2.5 rounded-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Reasons to choose us */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-coral/30 transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-coral h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Testimonials */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-sm border border-border relative"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-coral/20 text-6xl font-serif">
                  "
                </div>
                
                <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-coral/20 flex items-center justify-center text-lg font-semibold text-coral">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
