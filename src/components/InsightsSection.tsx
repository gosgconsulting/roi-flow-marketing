
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const insights = [
  {
    title: "Grow Your Organic Traffic with Humanised Content",
    description: "Let our expert writers create authentic, compelling copy that resonates with your audience and passes AI detection tools. Our content works for SEO and algorithms because we mimic human behaviour, mannerisms, tone and structure. It helps brand building and creates trust factor with the readers.",
    link: "/services/seo"
  },
  {
    title: "Get a Website Without Breaking the Bank – Ready in Under a Month",
    description: "Professional. Affordable. Fast. We create beautiful and high-converting websites for your business at a low price. Using our simplified process, your website will get launched within a month's period, so you can seamlessly attract customers and get your business going without wasting time or money.",
    link: "/services/website-design"
  },
  {
    title: "Join Thriving Brands Growing with Us",
    description: "Be our next success story. You can partner with us to scale your business through result-oriented digital marketing. From forming a plan to executing it successfully, we can help you grow your revenues on the web – and class your brand as our next case.",
    link: "/services/dashboard"
  }
];

const caseStudies = [
  {
    client: "Smooy Frozen Yogurt",
    result: "gained 700 monthly organic traffic in 8 months only",
    category: "SEO"
  },
  {
    client: "Nail Queen",
    result: "increased its organic traffic from 400 to 1,100 from jul to dec 2024",
    category: "SEO"
  }
];

const InsightsSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 right-20 w-40 h-40 rounded-full bg-coral/5 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-brandPurple/5 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Case Studies */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.span 
                className="inline-block py-1 px-3 mb-4 bg-coral/20 text-coral text-sm font-medium rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                SUCCESS STORIES
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our Results
              </motion.h2>
            </div>
            
            <div className="space-y-8">
              {caseStudies.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-card border border-border hover:border-coral/30 transition-all duration-300 rounded-lg p-6 group cursor-pointer relative overflow-hidden"
                >
                  {/* Neon glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    style={{
                      boxShadow: "0 0 20px rgba(249, 78, 64, 0.2), 0 0 40px rgba(249, 78, 64, 0.1)"
                    }}
                  />
                  
                  <motion.span 
                    className="inline-block py-1 px-3 mb-3 bg-coral/10 text-coral text-xs font-medium rounded-full group-hover:bg-coral/20 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.category}
                  </motion.span>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-coral transition-colors duration-300">
                    {item.client}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {item.result}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-coral hover:bg-coral/90 text-white relative overflow-hidden group">
                <Link to="/contact">
                  Get Started
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Solution Insights */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.span 
                className="inline-block py-1 px-3 mb-4 bg-coral/20 text-coral text-sm font-medium rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                WHAT WE OFFER
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Our Solutions
              </motion.h2>
            </div>
            
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-card border border-border rounded-lg p-8 hover:border-coral/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Neon glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{
                    boxShadow: "0 0 25px rgba(249, 78, 64, 0.15), 0 0 50px rgba(249, 78, 64, 0.05)"
                  }}
                />
                
                <motion.h3 
                  className="font-semibold text-xl mb-3 group-hover:text-coral transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {insight.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {insight.description}
                </motion.p>
                <Button asChild variant="ghost" className="text-coral hover:text-coral hover:bg-coral/10 pl-0 group">
                  <Link to={insight.link} className="flex items-center">
                    Learn more
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.div>
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
