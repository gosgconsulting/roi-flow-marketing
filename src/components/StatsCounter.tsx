
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
    <section className="py-20 px-4 bg-deepBlue relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-full h-1 bg-coral/20"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-1 w-8 bg-coral rounded-full"></div>
            <h3 className="text-center text-2xl font-semibold text-white">Client Success</h3>
            <div className="h-1 w-8 bg-coral rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-card/20 hover:bg-card/30 backdrop-blur-sm border-white/10 h-full transition-all duration-300 hover:translate-y-[-5px] hover-card-effect">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <CircleCheck className="h-8 w-8 text-coral" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                      {stat.value}
                    </div>
                    <p className="text-center text-lg text-white/80">{stat.label}</p>
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
