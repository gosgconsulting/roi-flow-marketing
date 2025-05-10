
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Palette, 
  Search, 
  BarChart3, 
  LineChart 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Website Design",
    description: "Stunning, conversion-focused websites that drive business results.",
    icon: <Palette className="h-10 w-10 text-coral" />,
    link: "/services/website-design",
    cta: "Learn More"
  },
  {
    title: "SEO",
    description: "Organic growth strategies that improve your search visibility and rankings.",
    icon: <Search className="h-10 w-10 text-coral" />,
    link: "/services/seo",
    cta: "Learn More"
  },
  {
    title: "Paid Ads",
    description: "Targeted campaigns that maximize your return on ad spend across platforms.",
    icon: <BarChart3 className="h-10 w-10 text-coral" />,
    link: "/services/paid-ads",
    cta: "Learn More"
  },
  {
    title: "Reporting Dashboard",
    description: "Centralized analytics to track performance and make data-driven decisions.",
    icon: <LineChart className="h-10 w-10 text-coral" />,
    link: "/services/dashboard",
    cta: "Learn More"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive marketing solutions designed to deliver measurable results 
            and accelerate your business growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
            >
              <Card className="h-full bg-card border-border hover:border-coral/50 transition-colors">
                <CardHeader className="pb-4">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-coral hover:text-coral hover:bg-coral/10">
                    <Link to={service.link}>{service.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
