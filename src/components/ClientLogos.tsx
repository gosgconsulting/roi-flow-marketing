
import { motion } from "framer-motion";

const ClientLogos = () => {
  const clients = [
    { name: "Client 1", logo: "" },
    { name: "Client 2", logo: "" },
    { name: "Client 3", logo: "" },
    { name: "Client 4", logo: "" },
    { name: "Client 5", logo: "" },
    { name: "Client 6", logo: "" }
  ];

  return (
    <section className="py-12 px-4 overflow-hidden bg-deepBlue border-t border-white/5">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl text-white/70">Trusted by innovative companies</h3>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-14 w-28 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-white/40 group-hover:text-white/60 transition-all duration-300 border border-white/10 group-hover:border-white/20">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-8" />
                ) : (
                  client.name
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
