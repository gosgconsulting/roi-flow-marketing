
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";

const ClientLogos = () => {
  const clients = [
    { name: "Microsoft", logo: "" },
    { name: "Google", logo: "" },
    { name: "Amazon", logo: "" },
    { name: "Apple", logo: "" },
    { name: "Meta", logo: "" },
    { name: "IBM", logo: "" },
    { name: "Oracle", logo: "" },
    { name: "Intel", logo: "" },
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Get the scrollWidth of the container
      setScrollWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-12 px-4 overflow-hidden bg-deepBlue/95 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deepBlue to-deepBlue/90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Usage statistics with highlighted numbers */}
      <div className="container mx-auto mb-8">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl font-medium text-white mb-6"
        >
          <span className="text-white font-semibold">USED BY </span>
          <span className="text-coral font-bold text-2xl">5,000,000+ </span>
          <span className="text-white font-semibold">CONTENT WRITERS, SEO EXPERTS AND AGENCIES. </span>
          <span className="text-coral font-bold text-2xl">15,000+ </span>
          <span className="text-white font-semibold">5-STAR RATINGS.</span>
        </motion.h3>
      </div>
      
      {/* Award badges at the top */}
      <div className="container mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-5">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Award className="text-coral h-5 w-5" />
              <span className="text-sm font-medium text-white">BEST SOFTWARE AWARDS 2024</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scrolling logos container */}
      <div className="overflow-hidden w-full">
        <motion.div
          ref={containerRef}
          className="flex items-center gap-12 md:gap-16 py-4"
          initial={{ x: 0 }}
          animate={{ x: scrollWidth ? -scrollWidth : 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }}
        >
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-12 md:h-16"
            >
              <div className="h-full py-2 px-6 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-8" />
                ) : (
                  <span className="text-lg font-medium">{client.name}</span>
                )}
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {clients.map((client, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 h-12 md:h-16"
            >
              <div className="h-full py-2 px-6 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-8" />
                ) : (
                  <span className="text-lg font-medium">{client.name}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
