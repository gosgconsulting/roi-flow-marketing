
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-deepBlue via-deepBlue/95 to-deepBlue/90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-coral/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-brandPurple/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block py-2 px-4 mb-6 bg-coral/20 text-coral text-sm font-medium rounded-full border border-coral/30">
                #1 Digital Marketing Agency in Singapore
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Grow Your Business with{" "}
              <span className="bg-gradient-to-r from-coral to-coral/80 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Trusted by 500+ businesses in Singapore. We help you increase revenue, 
              build brand awareness, and dominate your market through proven digital strategies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button asChild variant="coral" size="xl" className="group relative overflow-hidden">
                <Link to="/contact" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                <Link to="/services/website-design">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right column - Hero image/visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative group">
              <motion.div 
                className="aspect-square bg-gradient-to-br from-coral/20 to-brandPurple/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-coral/25"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <motion.div 
                    className="text-center space-y-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="inline-flex items-center justify-center p-6 bg-coral/20 rounded-full mb-4">
                      <svg className="w-16 h-16 text-coral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Digital Growth</h3>
                    <p className="text-white/80">Accelerate your business</p>
                  </motion.div>
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute top-4 right-4 w-3 h-3 bg-coral rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-2 h-2 bg-brandPurple rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
