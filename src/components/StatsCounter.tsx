
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-16 px-4 bg-deepBlue relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-full h-1 bg-coral/20"></div>
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-xl text-white mb-10">Client Success</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-card/20 hover:bg-card/30 backdrop-blur-sm border-white/10 h-full transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-coral to-coral/70 bg-clip-text text-transparent">
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
