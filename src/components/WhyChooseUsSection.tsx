
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "ROI-Driven Approach",
    description: "We focus on strategies that deliver measurable returns on your investment."
  },
  {
    title: "Integrated Solutions",
    description: "Our marketing services work together for maximum impact and efficiency."
  },
  {
    title: "Data-Driven Decisions",
    description: "We use analytics to guide strategy development and optimization."
  },
  {
    title: "Industry Expertise",
    description: "Our team brings specialized knowledge across various business sectors."
  },
  {
    title: "Transparent Reporting",
    description: "Get clear insights into campaign performance with our reporting dashboard."
  },
  {
    title: "Growth Partnership",
    description: "We align our success with yours through collaborative long-term relationships."
  }
];

const testimonials = [
  {
    quote: "ROIAgency transformed our digital presence and increased our lead generation by 137% within just 3 months.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc."
  },
  {
    quote: "Their integrated approach to SEO and paid ads gave us the competitive edge we needed in a saturated market.",
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "GrowFast Solutions"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver results-focused marketing strategies that drive growth 
            and provide clear return on investment.
          </p>
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
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 shadow-sm border border-border"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-coral h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
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
              <div 
                key={index}
                className="bg-card rounded-lg p-8 shadow-sm border border-border relative"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-coral/20 text-6xl font-serif">
                  "
                </div>
                
                <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-lg font-semibold text-coral">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
