
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Award } from "lucide-react";

const StatsCounter = () => {
  const stats = [
    {
      value: "90%",
      label: "of clients report positive results within the first month",
      color: "bg-pink-500",
      icon: <TrendingUp className="h-6 w-6 text-white" />
    },
    {
      value: "8x",
      label: "average ROI on marketing campaigns",
      color: "bg-yellow-400",
      icon: <BarChart3 className="h-6 w-6 text-white" />
    },
    {
      value: "24/7",
      label: "client support and campaign monitoring",
      color: "bg-teal-500",
      icon: <Award className="h-6 w-6 text-white" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-coral/5 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-brandPurple/5 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
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
          {/* Left column: Text content */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="px-3 py-1 bg-coral/20 text-coral text-xs font-medium rounded-full">
                SUCCESS STORIES
              </div>
              <div className="px-3 py-1 bg-coral/20 text-coral text-xs font-medium rounded-full">
                REAL METRICS
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Results Speak Volumes
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At GO SG, we deliver measurable outcomes through strategic digital marketing. 
              Our clients consistently see significant improvements in key performance metrics, 
              driving sustainable business growth and online success.
            </motion.p>

            <motion.div 
              className="divider"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>

            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From increased organic traffic to higher conversion rates, 
              our data-driven approach ensures that every campaign delivers 
              a meaningful return on investment. We don't just promise results—we deliver them.
            </motion.p>
          </motion.div>

          {/* Right column: Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-secondary/50 border-0 overflow-visible p-6 rounded-xl relative group">
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-coral/5 to-brandPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{
                  boxShadow: "0 0 30px rgba(249, 78, 64, 0.1)"
                }}
              />
              <CardContent className="p-0 space-y-4 relative z-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className={`${stat.color} text-white rounded-lg p-6 flex items-center shadow-lg group cursor-pointer relative overflow-hidden`}
                  >
                    {/* Neon glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: stat.color.includes('pink') 
                          ? '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)'
                          : stat.color.includes('yellow')
                          ? '0 0 20px rgba(250, 204, 21, 0.6), 0 0 40px rgba(250, 204, 21, 0.3)'
                          : '0 0 20px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.3)'
                      }}
                    />
                    
                    <motion.div 
                      className="bg-black/20 p-3 rounded-lg mr-4 relative z-10"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="relative z-10">
                      <motion.div 
                        className="text-3xl md:text-4xl font-bold flex items-baseline"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      >
                        <span>{stat.value.split('x')[0]}</span>
                        {stat.value.includes('x') && <span className="text-2xl">x</span>}
                      </motion.div>
                      <p className="font-medium text-white/90">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
