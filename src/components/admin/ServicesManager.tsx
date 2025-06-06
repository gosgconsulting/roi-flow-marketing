
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Edit, FileDown, Package } from "lucide-react";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  stats: string[];
  status: "Active" | "Inactive";
  description: string;
  features: string[];
  pricingOptions: {
    name: string;
    price: string;
    type: "one-time" | "monthly" | "annual";
    description: string;
    features: string[];
  }[];
  timeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
  expectedResults: string[];
  terms: string[];
  references: string[];
}

const servicesData: Service[] = [
  {
    id: "website-design",
    title: "Website Design & Development",
    subtitle: "Custom & Single-page solutions",
    stats: ["2 Package Options", "1-2 Month Timeline", "From SGD 1,500"],
    status: "Active",
    description: "Professional website design and development services focused on conversion optimization and mobile responsiveness. Perfect for businesses needing a strong digital presence with booking systems and lead generation capabilities.",
    features: [
      "Conversion optimization",
      "Mobile responsive design",
      "Booking systems integration",
      "SEO-friendly structure",
      "Performance optimization",
      "Custom design elements"
    ],
    pricingOptions: [
      {
        name: "Custom Website",
        price: "SGD 3,000",
        type: "one-time",
        description: "Multi-page responsive website with booking system",
        features: [
          "Multi-page responsive website with booking system",
          "Conversion-optimized design with prominent trial class CTAs",
          "Class pages, instructor profiles, gallery, testimonials",
          "Mobile optimization and basic SEO setup"
        ]
      },
      {
        name: "Single-Page Website",
        price: "SGD 1,500",
        type: "one-time",
        description: "One-page responsive design focused on conversions",
        features: [
          "One-page responsive design focused on conversions",
          "Essential business information and optimized contact form",
          "Mobile optimization and basic SEO setup"
        ]
      }
    ],
    timeline: [
      {
        phase: "Custom Website",
        duration: "2 months",
        description: "Week 1-4: Design/development, Week 4-8: Testing/launch"
      },
      {
        phase: "Single-Page Website",
        duration: "1 month",
        description: "Week 1-2: Design integration, Week 3-4: Optimization/launch"
      }
    ],
    expectedResults: [
      "Professional online presence",
      "Improved lead generation",
      "Mobile-optimized user experience",
      "SEO-ready foundation"
    ],
    terms: [
      "Services are non-refundable and non-exchangeable",
      "Service validity: 30 days from proposal date",
      "Final payment due upon project completion"
    ],
    references: [
      "Prototype references available upon request",
      "Portfolio examples available for review",
      "Case studies of successful implementations"
    ]
  },
  {
    id: "seo-recovery",
    title: "SEO Recovery & Maintenance",
    subtitle: "Content creation & optimization",
    stats: ["Monthly Service", "SGD 600/month", "12 Posts + 10 Backlinks"],
    status: "Active",
    description: "Comprehensive SEO recovery and maintenance service including content creation, technical optimization, and link building to restore and improve search engine rankings.",
    features: [
      "Technical SEO audits",
      "Content creation and optimization",
      "Link building campaigns",
      "Local SEO optimization",
      "Performance monitoring",
      "Monthly reporting"
    ],
    pricingOptions: [
      {
        name: "Monthly Plan",
        price: "SGD 600/month",
        type: "monthly",
        description: "Comprehensive monthly SEO service",
        features: [
          "12 blog posts per month",
          "10 high-quality backlinks",
          "Technical SEO audits",
          "Local SEO optimization",
          "Monthly performance reports"
        ]
      },
      {
        name: "Annual Plan",
        price: "SGD 7,200",
        type: "annual",
        description: "Annual commitment with 1 month free",
        features: [
          "All monthly plan benefits",
          "1 month free (13 months for price of 12)",
          "Priority support",
          "Advanced keyword research",
          "Competitor analysis reports"
        ]
      }
    ],
    timeline: [
      {
        phase: "Month 1",
        duration: "4 weeks",
        description: "Technical SEO audit and strategy development"
      },
      {
        phase: "Week 2-4",
        duration: "3 weeks",
        description: "Content creation and link building execution"
      },
      {
        phase: "Expected Results",
        duration: "3-6 months",
        description: "20-40% traffic recovery within 3-6 months"
      }
    ],
    expectedResults: [
      "20-40% traffic recovery within 3-6 months",
      "Improved search engine rankings",
      "Higher quality organic traffic",
      "Enhanced online visibility"
    ],
    terms: [
      "Services are non-refundable and non-exchangeable",
      "Minimum 3-month commitment required",
      "Results may vary based on competition and market conditions"
    ],
    references: [
      "Case study: 50% traffic recovery examples",
      "Client testimonials available",
      "Before/after analytics reports"
    ]
  },
  {
    id: "paid-advertising",
    title: "Paid Advertising Management",
    subtitle: "Google Ads & Meta campaigns",
    stats: ["15% Management Fee", "Multi-platform", "3-5x ROI Expected"],
    status: "Active",
    description: "Professional management of Google Ads and Meta (Facebook/Instagram) advertising campaigns to generate qualified leads and maximize return on investment.",
    features: [
      "Google Ads management",
      "Meta Ads (Facebook/Instagram)",
      "Campaign optimization",
      "A/B testing",
      "Performance tracking",
      "Regular reporting"
    ],
    pricingOptions: [
      {
        name: "Management Service",
        price: "15% of ad spend",
        type: "monthly",
        description: "Professional campaign management across platforms",
        features: [
          "Google Ads campaign management",
          "Meta (Facebook/Instagram) advertising",
          "Weekly optimization and monitoring",
          "Monthly performance reports",
          "A/B testing and optimization"
        ]
      }
    ],
    timeline: [
      {
        phase: "Week 1",
        duration: "1 week",
        description: "Account setup and strategy development"
      },
      {
        phase: "Week 2-3",
        duration: "2 weeks",
        description: "Campaign launch and initial optimization"
      },
      {
        phase: "Week 4",
        duration: "1 week",
        description: "Performance analysis and scaling"
      }
    ],
    expectedResults: [
      "20-50 qualified leads monthly within 2-4 weeks",
      "3-5x return on ad spend",
      "Improved brand visibility",
      "Targeted audience reach"
    ],
    terms: [
      "10% +/- variance expected in ad spend management",
      "Minimum recommended ad spend: SGD 500-800/month",
      "Services are non-refundable and non-exchangeable"
    ],
    references: [
      "Campaign performance examples",
      "ROI case studies available",
      "Client success stories"
    ]
  },
  {
    id: "cloud-hosting",
    title: "Cloud Hosting & Maintenance",
    subtitle: "Secure hosting with support",
    stats: ["SGD 80/month", "99.9% Uptime", "24/7 Support"],
    status: "Active",
    description: "Reliable cloud hosting solution with comprehensive maintenance, security monitoring, and 24/7 support to ensure your website runs smoothly.",
    features: [
      "99.9% uptime guarantee",
      "SSL certificates included",
      "Daily backups",
      "Security monitoring",
      "Performance optimization",
      "24/7 technical support"
    ],
    pricingOptions: [
      {
        name: "Monthly Plan",
        price: "SGD 80/month",
        type: "monthly",
        description: "Month-to-month hosting with full support",
        features: [
          "99.9% uptime guarantee",
          "SSL certificate included",
          "Daily automated backups",
          "Security monitoring and updates",
          "Up to 2 hours monthly maintenance"
        ]
      },
      {
        name: "Annual Plan",
        price: "SGD 960",
        type: "annual",
        description: "Annual commitment with cost savings",
        features: [
          "All monthly plan benefits",
          "Priority support",
          "Advanced security features",
          "Performance optimization",
          "Extended maintenance hours"
        ]
      }
    ],
    timeline: [
      {
        phase: "Week 1-2",
        duration: "2 weeks",
        description: "Server setup and security configuration"
      },
      {
        phase: "Week 3-4",
        duration: "2 weeks",
        description: "Monitoring setup and optimization"
      },
      {
        phase: "Ongoing",
        duration: "Continuous",
        description: "Up to 2 hours monthly updates included"
      }
    ],
    expectedResults: [
      "99.9% website uptime",
      "Fast loading speeds",
      "Secure hosting environment",
      "Peace of mind with 24/7 support"
    ],
    terms: [
      "Services are non-refundable and non-exchangeable",
      "30-day notice required for cancellation",
      "Overage charges may apply for excessive resource usage"
    ],
    references: [
      "Uptime statistics available",
      "Performance benchmarks",
      "Security audit reports"
    ]
  }
];

const ServicesManager = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const handleViewDetails = (service: Service) => {
    setSelectedService(service);
    setIsDetailModalOpen(true);
  };

  const handleExportProposal = (service: Service) => {
    // TODO: Implement PDF export functionality
    console.log("Exporting proposal for:", service.title);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Services Management</h1>
        <p className="text-gray-600 mt-1">Manage your service offerings, pricing, and details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.subtitle}</CardDescription>
                </div>
                <Badge variant={service.status === "Active" ? "default" : "secondary"}>
                  {service.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-1">
                  {service.stats.map((stat, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      • {stat}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-3">
                  <Button 
                    size="sm" 
                    onClick={() => handleViewDetails(service)}
                    className="flex-1"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleExportProposal(service)}
                  >
                    <FileDown className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Detail Modal */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedService.title}</DialogTitle>
              </DialogHeader>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="terms">Terms</TabsTrigger>
                  <TabsTrigger value="references">References</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Service Description</h3>
                    <p className="text-gray-600">{selectedService.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-1">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="text-gray-600">• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Expected Results</h3>
                    <ul className="space-y-1">
                      {selectedService.expectedResults.map((result, index) => (
                        <li key={index} className="text-gray-600">• {result}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="pricing" className="space-y-4">
                  {selectedService.pricingOptions.map((option, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">{option.name}</CardTitle>
                          <Badge variant="outline">{option.price}</Badge>
                        </div>
                        <CardDescription>{option.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {option.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-600">• {feature}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="timeline" className="space-y-4">
                  {selectedService.timeline.map((phase, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">{phase.phase}</CardTitle>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{phase.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="terms" className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Terms & Conditions</h3>
                    <ul className="space-y-2">
                      {selectedService.terms.map((term, index) => (
                        <li key={index} className="text-gray-600">• {term}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-2">Company Details</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>G.O. SG CONSULTING Pte. Ltd.</p>
                      <p>UEN: 202312433Z</p>
                      <p>Bank: DBS BANK 0729785155</p>
                      <p>Contact: +65 8024 6850</p>
                      <p>Email: contact@gosgconsulting.com</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="references" className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">References & Examples</h3>
                    <ul className="space-y-2">
                      {selectedService.references.map((reference, index) => (
                        <li key={index} className="text-gray-600">• {reference}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex gap-2 pt-4 border-t">
                <Button onClick={() => handleExportProposal(selectedService)}>
                  <FileDown className="h-4 w-4 mr-2" />
                  Export Proposal
                </Button>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Service
                </Button>
                <Button variant="outline">
                  <Package className="h-4 w-4 mr-2" />
                  Package Builder
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesManager;
