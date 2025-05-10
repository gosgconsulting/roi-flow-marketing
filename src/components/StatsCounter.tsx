
import { motion } from "framer-motion";

const StatsCounter = () => {
  const stats = [
    {
      value: "90%",
      label: "of clients report positive results within the first month",
      color: "bg-pink-500"
    },
    {
      value: "8x",
      label: "average ROI on marketing campaigns",
      color: "bg-yellow-400"
    },
    {
      value: "24/7",
      label: "client support and campaign monitoring",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                STRATEGY
              </div>
              <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                SEARCH
              </div>
              <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                DATA
              </div>
              <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                6 MONTHS
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Our Results
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We deliver measurable outcomes through strategic digital marketing. 
              Our clients see significant improvements in key performance metrics, 
              driving sustainable business growth and online success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`${stat.color} text-white rounded-lg p-8 flex flex-col items-center text-center`}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 flex items-baseline">
                  <span>{stat.value.split('x')[0]}</span>
                  {stat.value.includes('x') && <span className="text-3xl">x</span>}
                </div>
                <p className="font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
