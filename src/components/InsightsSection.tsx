
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const questions = [
  {
    question: "What is a digital agency?",
    answer: "A digital agency is a company that helps businesses establish and grow their online presence with the help of digital tools like websites, social media, SEO, digital ads and content publishing."
  },
  {
    question: "Why hire a professional digital marketing agency?",
    answer: "When you hire a professional agency like GO SG, your brand gets access to expertise, tools and strategy. Outsource your digital marketing to a professional agency: It saves time, enhances effectiveness and help you achieve marketing goals in line with business objectives."
  },
  {
    question: "How can a digital agency help your business grow?",
    answer: "A digital agency can assist you attract more customers, build-up your brand and business, through content, ads, website and support."
  }
];

const insights = [
  {
    title: "Affordable Websites",
    description: "Get a professional website without breaking the bank – ready in under a month.",
    link: "/services/website-design"
  },
  {
    title: "Humanised Content",
    description: "Grow organic traffic with authentic content that passes AI detection tools.",
    link: "/services/seo"
  },
  {
    title: "Join Thriving Brands",
    description: "Partner with us to scale your business through result-oriented digital marketing.",
    link: "/services/dashboard"
  }
];

const InsightsSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Questions */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-block py-1 px-3 mb-4 bg-coral/20 text-coral text-sm font-medium rounded-full">
                YOUR QUESTIONS ANSWERED
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-8">
              {questions.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border hover:border-coral/30 transition-colors rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <Button asChild className="bg-coral hover:bg-coral/90 text-white">
              <Link to="/contact">Get Answers</Link>
            </Button>
          </motion.div>
          
          {/* Practical Insights */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-block py-1 px-3 mb-4 bg-coral/20 text-coral text-sm font-medium rounded-full">
                WHAT WE OFFER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Solutions
              </h2>
            </div>
            
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-coral/50 hover:shadow-lg hover:shadow-coral/5 transition-all"
              >
                <h3 className="font-semibold text-xl mb-3">{insight.title}</h3>
                <p className="text-muted-foreground mb-6">{insight.description}</p>
                <Button asChild variant="ghost" className="text-coral hover:text-coral hover:bg-coral/10 pl-0">
                  <Link to={insight.link} className="flex items-center">
                    Learn more
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
