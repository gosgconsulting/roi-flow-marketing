
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Expert Team",
      description: "Our professionals have years of experience in digital marketing and web development."
    },
    {
      title: "Custom Strategies",
      description: "We create tailored solutions specific to your business needs and goals."
    },
    {
      title: "Data-Driven Approach",
      description: "All our decisions are backed by analytics and performance metrics."
    },
    {
      title: "Transparent Reporting",
      description: "Regular updates and clear reports on campaign performance and ROI."
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brandPurple to-brandTeal bg-clip-text text-transparent">Why Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partner with us for reliable, results-driven digital marketing solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-brandPurple/10 flex items-center justify-center">
                  <CheckCircle className="text-brandPurple h-6 w-6" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button asChild variant="coral" size="lg">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
