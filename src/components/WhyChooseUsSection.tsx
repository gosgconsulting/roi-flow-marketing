
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-coral/10 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-brandPurple/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-brandPurple to-brandTeal bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We're committed to your success with proven strategies that deliver real results.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="flex gap-6 group cursor-pointer"
            >
              <motion.div 
                className="flex-shrink-0 mt-1"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-brandPurple/10 flex items-center justify-center group-hover:bg-brandPurple/20 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(147, 112, 219, 0.4)"
                  }}
                >
                  <CheckCircle className="text-brandPurple h-6 w-6" />
                </motion.div>
              </motion.div>
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <h3 className="text-xl font-semibold group-hover:text-brandPurple transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {reason.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="coral" size="lg" className="relative overflow-hidden group">
              <Link to="/contact" className="relative z-10">
                Start Your Journey with Us
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
