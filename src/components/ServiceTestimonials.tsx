
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating?: number;
}

interface ServiceTestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const ServiceTestimonials = ({ title, subtitle, testimonials }: ServiceTestimonialsProps) => {
  return (
    <section className="py-20 px-4 bg-deepBlue">
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
            >
              <Card className="bg-card/20 hover:bg-card/30 backdrop-blur-sm border-white/10 h-full transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 border-2 border-coral/30">
                        {testimonial.image ? (
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        ) : (
                          <AvatarFallback className="bg-coral/20 text-coral">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 text-coral" 
                          fill={i < (testimonial.rating || 5) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -top-3 -left-1 text-coral/20 text-6xl font-serif">
                      "
                    </div>
                    <p className="text-lg mb-6 relative z-10 pt-4">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
