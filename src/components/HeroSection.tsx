
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-36 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-brandPurple/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-[5%] w-40 h-40 rounded-full bg-brandPurple/20 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 mb-4 bg-brandPurple/20 text-brandPurple text-sm font-medium rounded-full">
                INTEGRATED DIGITAL MARKETING AGENCY
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi <br /><span className="bg-gradient-to-r from-brandPurple to-brandTeal bg-clip-text text-transparent">We grow your revenue</span> at the highest ROI.
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              GO SG provides integrated marketing solutions to SMEs and high-performing brands to help them achieve accelerated results via lead magnet and revenue growth solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild variant="coral" size="xl" className="cta-button">
                <Link to="/contact" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video bg-secondary/60 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80" 
                alt="Digital Marketing Dashboard" 
                className="w-full h-full object-cover"
              />
              
              {/* Animated floating elements */}
              <motion.div 
                className="absolute top-[15%] right-[15%] w-16 h-16 bg-brandPurple/80 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute bottom-[20%] left-[15%] w-12 h-12 bg-coral/80 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              <motion.div 
                className="absolute top-[30%] left-[20%] w-10 h-10 bg-brandTeal/80 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Chart-like graphic element */}
              <motion.svg 
                className="absolute bottom-[15%] right-[20%] w-32 h-24"
                viewBox="0 0 100 60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.path
                  d="M0,50 Q25,10 50,30 T100,10"
                  fill="none"
                  stroke="#9b87f5"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M0,50 Q35,40 65,20 T100,30"
                  fill="none"
                  stroke="#F94E40"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </motion.svg>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-brandPurple/30 rounded-full blur-lg"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-brandPurple/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
