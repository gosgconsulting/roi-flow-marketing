
import { motion } from "framer-motion";

const ClientLogos = () => {
  const clients = [
    { name: "Smooy", logo: "S" },
    { name: "FedEx", logo: "FX" },
    { name: "Rivin", logo: "R" },
    { name: "0101 Marketing", logo: "01" },
    { name: "Teachmint", logo: "T" },
    { name: "Nail Queen", logo: "NQ" },
    { name: "Upwork", logo: "U" },
    { name: "FineFireThings", logo: "FF" }
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by leading companies across Singapore
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
              className="group"
            >
              <div className="client-logo relative overflow-hidden group-hover:shadow-lg group-hover:shadow-coral/20 transition-all duration-300">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-coral/20 to-brandPurple/20 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:from-coral/30 group-hover:to-brandPurple/30"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(249, 78, 64, 0.4)",
                  }}
                >
                  {client.logo}
                </motion.div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
