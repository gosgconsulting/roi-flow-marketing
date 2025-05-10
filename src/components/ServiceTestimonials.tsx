
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

interface ServiceTestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const ServiceTestimonials = ({ title, subtitle, testimonials }: ServiceTestimonialsProps) => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-sm border border-border relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-coral/20 text-6xl font-serif">
                "
              </div>
              
              <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-lg font-semibold text-coral">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
