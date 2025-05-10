
import { motion, useAnimation, useDragControls, PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ClientLogos = () => {
  const clients = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1642793758877-545b2e700d41?q=80&w=100&auto=format&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=100&auto=format&fit=crop" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1614854262340-ab1ca7d079c7?q=80&w=100&auto=format&fit=crop" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=100&auto=format&fit=crop" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?q=80&w=100&auto=format&fit=crop" },
    { name: "IBM", logo: "https://images.unsplash.com/photo-1642980054950-7f486e241f3b?q=80&w=100&auto=format&fit=crop" },
    { name: "Oracle", logo: "https://images.unsplash.com/photo-1642155129703-869cf2a13e29?q=80&w=100&auto=format&fit=crop" },
    { name: "Intel", logo: "https://images.unsplash.com/photo-1645429903862-f5f69532abbd?q=80&w=100&auto=format&fit=crop" },
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const controls = useAnimation();
  const dragControls = useDragControls();
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Get the scrollWidth of the container
      setScrollWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (!isPaused && scrollWidth > 0) {
      controls.start({
        x: -scrollWidth,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Reduced from 30 to 15 seconds for faster scrolling
          ease: "linear"
        }
      });
    } else {
      // Stop the animation completely
      controls.stop();
    }
  }, [isPaused, controls, scrollWidth]);

  const handleDragStart = () => {
    setIsPaused(true);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const newPosition = currentPosition + info.offset.x;
    setCurrentPosition(newPosition);
    controls.start({
      x: newPosition,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  };

  return (
    <section className="py-12 px-4 overflow-hidden bg-white relative">
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Usage statistics with highlighted numbers */}
      <div className="container mx-auto mb-8">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl font-medium text-gray-800 mb-6"
        >
          <span className="text-gray-800 font-semibold">USED BY </span>
          <span className="text-coral font-bold text-2xl">5,000,000+ </span>
          <span className="text-gray-800 font-semibold">CONTENT WRITERS, SEO EXPERTS AND AGENCIES. </span>
          <span className="text-coral font-bold text-2xl">15,000+ </span>
          <span className="text-gray-800 font-semibold">5-STAR RATINGS.</span>
        </motion.h3>
      </div>
      
      {/* Scrolling logos container */}
      <div 
        className="overflow-hidden w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex items-center gap-12 md:gap-16 py-4 cursor-grab"
          initial={{ x: 0 }}
          animate={controls}
          drag="x"
          dragControls={dragControls}
          dragConstraints={{ left: -2000, right: 100 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: "grabbing" }}
        >
          {/* First set of logos - display images directly without containers */}
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0"
            >
              {client.logo && (
                <img src={client.logo} alt={client.name} className="h-12 md:h-16 object-contain" />
              )}
            </div>
          ))}

          {/* Duplicate set for seamless looping - display images directly without containers */}
          {clients.map((client, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0"
            >
              {client.logo && (
                <img src={client.logo} alt={client.name} className="h-12 md:h-16 object-contain" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
