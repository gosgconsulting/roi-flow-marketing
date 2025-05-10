
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:py-32 px-4 overflow-hidden hero-gradient">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 noise-overlay"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-neonPink/5 blur-[100px]"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-neonBlue/5 blur-[100px]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-[10%] h-16 w-16 rounded-full bg-neonPink/10 animate-float"></div>
      <div className="absolute bottom-20 right-[10%] h-8 w-8 rounded-full bg-neonBlue/10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-[5%] h-24 w-24 rounded-full bg-softYellow/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Content */}
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center py-1 px-3 rounded-full bg-neonPink/10 text-neonPink text-xs font-medium">
                <span className="mr-1 flex h-2 w-2 rounded-full bg-neonPink animate-pulse"></span>
                DIGITAL MARKETING EXPERTS
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Your 24/7 AI Team for 
                <span className="gradient-text block"> SEO & Revenue Growth</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We provide integrated marketing solutions to SMEs and high-performing brands to help them achieve accelerated results via lead generation and revenue growth strategies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild className="gradient-primary hover:shadow-lg hover:shadow-neonPink/20 cta-button px-6 py-7 text-base font-medium rounded-lg">
                <Link to="/contact" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="bg-white/50 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm px-6 py-7 text-base font-medium rounded-lg border-slate-200 hover:border-slate-300 dark:border-white/10 dark:hover:border-white/20">
                <Link to="/services/website-design" className="flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8"
            >
              <p className="text-sm text-muted-foreground">Trusted by innovative brands worldwide</p>
              <div className="flex flex-wrap gap-6 mt-3 items-center">
                <div className="text-gray-400 dark:text-gray-500">Client Logo</div>
                <div className="text-gray-400 dark:text-gray-500">Client Logo</div>
                <div className="text-gray-400 dark:text-gray-500">Client Logo</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-neonPink/20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-neonBlue/20 blur-xl"></div>
              
              <div className="aspect-[4/3] bg-white/80 dark:bg-deepPurple/20 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-xl shadow-neonPink/5 p-1">
                <div className="w-full h-full bg-slate-50 dark:bg-deepPurple/40 rounded-xl overflow-hidden relative">
                  {/* Dashboard mockup */}
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="text-center space-y-4 max-w-sm mx-auto">
                      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-neonPink to-neonBlue/80 rounded-full text-white">
                        <div className="text-xl font-bold">GO SG</div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">AI-Powered Marketing</h3>
                        <p className="text-muted-foreground text-sm">Your 24/7 team for SEO content, optimization, and business growth</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="rounded-lg bg-white dark:bg-white/10 p-3">
                          <div className="text-sm font-medium">SEO Rank</div>
                          <div className="text-xl font-bold text-neonPink">+254%</div>
                        </div>
                        <div className="rounded-lg bg-white dark:bg-white/10 p-3">
                          <div className="text-sm font-medium">Leads</div>
                          <div className="text-xl font-bold text-neonBlue">+178%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-deepPurple/80 shadow-lg rounded-full px-4 py-2 flex items-center space-x-2 border border-slate-200 dark:border-deepPurple animate-float">
              <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium">AI Assisted</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
