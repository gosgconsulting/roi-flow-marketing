
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const StatsCounter = () => {
  const stats = [
    {
      value: "90%",
      label: "of clients report positive results within the first month"
    },
    {
      value: "8x",
      label: "average ROI on marketing campaigns"
    },
    {
      value: "24/7",
      label: "client support and campaign monitoring"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-deepBlue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-slate-100 to-slate-50 dark:from-deepBlue dark:via-deepBlue/95 dark:to-deepBlue/90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-coral/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-coral/5 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 w-10 bg-coral rounded-full"></div>
            <h3 className="text-center text-2xl font-bold text-gray-800 dark:text-white">Not convinced yet?</h3>
            <div className="h-1 w-10 bg-coral rounded-full"></div>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from our customers
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
                <Card className="bg-white/80 hover:bg-white dark:bg-card/10 dark:hover:bg-card/20 backdrop-blur-md border border-slate-200 dark:border-white/10 h-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-coral/5">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <CircleCheck className="h-10 w-10 text-coral" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-coral to-coral/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-center text-lg text-gray-700 dark:text-white/90">{stat.label}</p>
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
