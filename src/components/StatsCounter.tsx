
import { motion } from "framer-motion";

const StatsCounter = () => {
  return (
    <section className="py-16 px-4 bg-secondary relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-full h-1 bg-coral/20"></div>
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto bg-card p-8 border border-border rounded-xl relative z-10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-xl text-muted-foreground mb-3">Client Success</h3>
          <div className="text-center text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-coral to-coral/70 bg-clip-text text-transparent">
            90% of clients
          </div>
          <p className="text-center text-lg">Report positive results within the first month</p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
