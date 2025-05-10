
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, BarChart3, Clock } from "lucide-react";

const StatsCounter = () => {
  const stats = [
    {
      value: "90%",
      label: "of clients report positive results within the first month",
      icon: <CircleCheck className="h-10 w-10 text-neonPink" />,
      color: "from-neonPink to-coral"
    },
    {
      value: "8x",
      label: "average ROI on marketing campaigns",
      icon: <BarChart3 className="h-10 w-10 text-neonBlue" />,
      color: "from-neonBlue to-brandBlue"
    },
    {
      value: "24/7",
      label: "client support and campaign monitoring",
      icon: <Clock className="h-10 w-10 text-softYellow" />,
      color: "from-softYellow to-brandGold"
    }
  ];

  return (
    <section className="py-20 px-4 bg-lightGray dark:bg-deepBlue/60 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 noise-overlay"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-neonPink/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-neonBlue/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 w-10 bg-neonPink rounded-full"></div>
            <h3 className="text-center text-xl font-medium text-gray-600 dark:text-white/80">Not convinced yet?</h3>
            <div className="h-1 w-10 bg-neonPink rounded-full"></div>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Results our clients have achieved
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <Card className="feature-card hover-card-effect h-full">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      {stat.icon}
                    </div>
                    <div className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <p className="text-center text-lg text-gray-600 dark:text-white/80">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
