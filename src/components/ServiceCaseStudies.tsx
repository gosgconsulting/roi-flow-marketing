
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  title: string;
  description: string;
  result: string;
  image?: string;
  link: string;
}

interface ServiceCaseStudiesProps {
  title: string;
  subtitle: string;
  caseStudies: CaseStudy[];
}

const ServiceCaseStudies = ({ title, subtitle, caseStudies }: ServiceCaseStudiesProps) => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brandPurple to-brandTeal bg-clip-text text-transparent">{title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  {caseStudy.image ? (
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brandPurple/10 to-brandTeal/10">
                      <span className="text-xl font-medium text-muted-foreground">Case Study Image</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                <p className="text-muted-foreground">{caseStudy.description}</p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-medium">Result: <span className="text-brandPurple">{caseStudy.result}</span></p>
                </div>
                <Button asChild variant="branded" className="hover:bg-brandPurple/90">
                  <Link to="/contact" className="flex items-center">
                    Get Contacted
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCaseStudies;
