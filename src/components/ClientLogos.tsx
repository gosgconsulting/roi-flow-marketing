
import { motion } from "framer-motion";

const ClientLogos = () => {
  return (
    <section className="py-8 px-4 overflow-hidden bg-deepBlue/20">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* These are placeholder brands - replace with your actual clients */}
          <div className="h-12 w-24 bg-white/10 rounded-md flex items-center justify-center text-white/30">Client 1</div>
          <div className="h-12 w-24 bg-white/10 rounded-md flex items-center justify-center text-white/30">Client 2</div>
          <div className="h-12 w-24 bg-white/10 rounded-md flex items-center justify-center text-white/30">Client 3</div>
          <div className="h-12 w-24 bg-white/10 rounded-md flex items-center justify-center text-white/30">Client 4</div>
          <div className="h-12 w-24 bg-white/10 rounded-md flex items-center justify-center text-white/30">Client 5</div>
          <div className="h-12 w-24 bg-white/10 rounded-md flex items-center justify-center text-white/30">Client 6</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
