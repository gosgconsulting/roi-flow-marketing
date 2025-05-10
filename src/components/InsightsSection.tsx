
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const questions = [
  "How can a well-designed website impact your business growth?",
  "Are you leveraging SEO to its full potential?",
  "What would a higher ROI mean for your brand's future?"
];

const insights = [
  {
    title: "Startups",
    description: "Integrated marketing solutions to scale efficiently with limited resources.",
    link: "/services/website-design"
  },
  {
    title: "Entrepreneurs",
    description: "High ROI strategies to maximize growth without wasting budget.",
    link: "/services/seo"
  },
  {
    title: "Brands",
    description: "Centralized analytics for actionable insights and informed decisions.",
    link: "/services/dashboard"
  }
];

const InsightsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Questions */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Thought-Provoking Questions
            </h2>
            
            <div className="space-y-8">
              {questions.map((question, index) => (
                <div key={index} className="border-l-4 border-coral pl-6 py-2">
                  <p className="text-xl font-medium">{question}</p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Practical Insights
            </h2>
            
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 hover:border-coral/50 transition-colors"
              >
                <h3 className="font-semibold text-xl mb-3">{insight.title}</h3>
                <p className="text-muted-foreground mb-4">{insight.description}</p>
                <Button asChild variant="ghost" className="text-coral hover:text-coral hover:bg-coral/10 p-0 h-auto">
                  <Link to={insight.link} className="flex items-center">
                    Learn more
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
