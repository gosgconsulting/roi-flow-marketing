
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title: string;
  subtitle?: string;
  items: FAQItem[];
}

const FAQAccordion = ({ title, subtitle, items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
          {subtitle && (
            <p className="text-center text-muted-foreground text-lg mb-12">{subtitle}</p>
          )}
          
          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-coral transition-transform duration-200",
                      openIndex === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                <div 
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  )}
                >
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;
