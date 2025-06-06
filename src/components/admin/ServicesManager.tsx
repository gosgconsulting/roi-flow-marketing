import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Service {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  status: 'Active' | 'Inactive';
  details: string[];
  stats: string[];
}

const ServicesManager = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      id: 1,
      name: "Website Design",
      subtitle: "Crafting beautiful and functional websites",
      description: "We create stunning websites tailored to your brand and business goals.",
      price: "SGD 3,000",
      status: 'Active',
      details: [
        "Custom website design",
        "Responsive layout",
        "SEO optimization",
        "Content management system",
      ],
      stats: ["Conversion-optimized design", "Mobile optimization", "Basic SEO setup"],
    },
    {
      id: 2,
      name: "SEO Services",
      subtitle: "Boost your online visibility",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      price: "SGD 600/month",
      status: 'Active',
      details: [
        "Keyword research",
        "On-page optimization",
        "Link building",
        "Content creation",
      ],
      stats: ["Technical SEO audit", "12 blog posts per month", "10 high-quality backlinks per month"],
    },
    {
      id: 3,
      name: "Paid Advertising",
      subtitle: "Reach your target audience",
      description: "Run effective paid advertising campaigns on Google, Facebook, and other platforms.",
      price: "Varies",
      status: 'Active',
      details: [
        "Campaign setup",
        "Ad copywriting",
        "Landing page optimization",
        "Performance tracking",
      ],
      stats: ["Google Ads certified", "Facebook Ads expert", "Conversion tracking"],
    },
    {
      id: 4,
      name: "Cloud Hosting",
      subtitle: "Reliable and secure hosting solutions",
      description: "Host your website on our secure and scalable cloud infrastructure.",
      price: "SGD 80/month",
      status: 'Active',
      details: [
        "99.9% uptime guarantee",
        "Daily backups",
        "SSL certificate",
        "24/7 support",
      ],
      stats: ["Secure cloud hosting", "Performance optimization", "Technical support"],
    },
  ];

  const handleViewDetails = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const getServiceSlug = (serviceName: string) => {
    return serviceName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Services Management</h2>
        <p className="text-gray-600 mt-2">Manage your service offerings, pricing, and details</p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.subtitle}</CardDescription>
                </div>
                <Badge className={service.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                  {service.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Quick Stats:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {service.stats.map((stat, index) => (
                    <li key={index}>• {stat}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleViewDetails(service)}
                  variant="outline"
                  size="sm"
                >
                  View Details
                </Button>
                <Button 
                  asChild
                  variant="ghost"
                  size="sm"
                >
                  <a href={`/terms/${getServiceSlug(service.name)}`} target="_blank" rel="noopener noreferrer">
                    Terms Page
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="branded"
                  size="sm"
                >
                  <a href={`/present/${getServiceSlug(service.name)}`} target="_blank" rel="noopener noreferrer">
                    Present
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedService?.name} Details</DialogTitle>
            <DialogDescription>
              Learn more about our {selectedService?.name} service.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <h4 className="text-lg font-medium leading-none">Description</h4>
              <p className="text-sm text-muted-foreground">
                {selectedService?.description}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-medium leading-none">Details</h4>
              <ul className="list-disc pl-4 text-sm text-muted-foreground">
                {selectedService?.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium leading-none">Price</h4>
              <p className="text-sm text-muted-foreground">
                {selectedService?.price}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesManager;
