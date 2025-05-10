
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

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
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, testimonials.length]);

  return (
    <section className="py-20 px-4 bg-deepBlue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-deepBlue via-deepBlue/95 to-deepBlue/90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-coral/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-coral/5 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-10 bg-coral rounded-full"></div>
            <h3 className="text-center text-xl font-medium text-white/80">Not convinced yet?</h3>
            <div className="h-1 w-10 bg-coral rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <Carousel
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div 
                  className="p-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-card/10 hover:bg-card/20 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Avatar className="h-14 w-14 border-2 border-coral/30">
                          {testimonial.image ? (
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          ) : (
                            <AvatarFallback className="bg-coral/20 text-coral text-lg">
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="ml-4">
                          <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                          <p className="text-sm text-white/60">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-5 w-5 text-coral" 
                            fill={i < (testimonial.rating || 5) ? "currentColor" : "none"} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -top-3 -left-1 text-coral/20 text-6xl font-serif">
                        "
                      </div>
                      <p className="text-xl mb-6 relative z-10 pt-4 text-white/90">{testimonial.quote}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-coral/20 hover:bg-coral/40 text-white border-white/10" />
          <CarouselNext className="bg-coral/20 hover:bg-coral/40 text-white border-white/10" />
        </Carousel>
        
        {/* Indicator dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-coral' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
