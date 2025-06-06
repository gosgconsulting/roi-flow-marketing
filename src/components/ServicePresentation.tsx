
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Phone, Mail, MapPin, Building } from "lucide-react";

interface ServicePresentationProps {
  serviceType: 'website-design' | 'seo' | 'paid-advertising' | 'cloud-hosting';
}

const ServicePresentation = ({ serviceType }: ServicePresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getServiceData = () => {
    switch (serviceType) {
      case 'website-design':
        return {
          title: "Website Design & Development Services",
          subtitle: "Professional website solutions for your business needs",
          slides: [
            {
              title: "Service Overview",
              content: (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold gradient-headline mb-4">Website Design & Development</h2>
                    <p className="text-xl text-gray-600">Professional website solutions for your business needs</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 mt-12">
                    <div className="bg-white rounded-lg p-6 shadow-lg border">
                      <Badge className="bg-green-100 text-green-800 mb-4">Custom Solution</Badge>
                      <h3 className="text-2xl font-bold mb-2">Multi-page Website</h3>
                      <p className="text-gray-600">Complete responsive solution with booking system and conversion optimization</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg border">
                      <Badge className="bg-blue-100 text-blue-800 mb-4">Focused Solution</Badge>
                      <h3 className="text-2xl font-bold mb-2">Single-page Website</h3>
                      <p className="text-gray-600">Conversion-focused design for immediate business impact</p>
                    </div>
                  </div>
                </div>
              )
            },
            {
              title: "Custom Website Package",
              content: (
                <div className="space-y-8">
                  <div className="text-center">
                    <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2 mb-4">SGD 3,000</Badge>
                    <h2 className="text-3xl font-bold mb-2">Custom Website</h2>
                    <p className="text-lg text-gray-600">Multi-page responsive solution</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Scope
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                          Multi-page responsive website with booking system
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                          Conversion-optimized design with prominent trial class CTAs
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                          Class pages, instructor profiles, gallery, and testimonials
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                          Mobile optimization and basic SEO setup
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-blue-600" />
                        Timeline (2 Months)
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900">Week 1-4</h4>
                          <p className="text-blue-800">Design and development</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900">Week 4-8</h4>
                          <p className="text-blue-800">Testing and launch</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            },
            {
              title: "Single-Page Website Package",
              content: (
                <div className="space-y-8">
                  <div className="text-center">
                    <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2 mb-4">SGD 1,500</Badge>
                    <h2 className="text-3xl font-bold mb-2">Single-Page Website</h2>
                    <p className="text-lg text-gray-600">Focused conversion solution</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Scope
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                          One-page responsive design focused on trial class conversions
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                          Essential business information and optimized contact form
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                          Mobile optimization and basic SEO setup
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-blue-600" />
                        Timeline (1 Month)
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900">Week 1-2</h4>
                          <p className="text-blue-800">Design and content integration</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900">Week 3-4</h4>
                          <p className="text-blue-800">Optimization and launch</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            },
            {
              title: "Terms & Company Information",
              content: (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold gradient-headline mb-4">Terms & Company Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-6 shadow-lg border">
                      <h3 className="text-xl font-bold mb-4">Payment Terms</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-red-500" />
                          Services are non-refundable and non-exchangeable
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-blue-500" />
                          Service validity: 30 days from proposal date
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                          Final payment due upon project completion
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-lg border">
                      <h3 className="text-xl font-bold mb-4">Company Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-brandPurple" />
                          <span className="font-semibold">G.O. SG CONSULTING Pte. Ltd.</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-brandPurple" />
                          <span>UEN: 202312433Z</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-brandPurple" />
                          <span>Bank: DBS BANK 0729785155</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-brandPurple" />
                          <span>+65 8024 6850</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-brandPurple" />
                          <span>contact@gosgconsulting.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          ]
        };
      default:
        return { title: "", subtitle: "", slides: [] };
    }
  };

  const serviceData = getServiceData();
  const totalSlides = serviceData.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 print:p-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg mb-6 p-6 print:shadow-none print:rounded-none">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold gradient-headline">G.O. SG CONSULTING</h1>
              <p className="text-gray-600">Professional Digital Solutions</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Slide {currentSlide + 1} of {totalSlides}</p>
            </div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="bg-white rounded-lg shadow-lg min-h-[600px] print:shadow-none print:rounded-none">
          <div className="p-8 h-full">
            {serviceData.slides[currentSlide]?.content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 print:hidden">
          <Button 
            variant="outline" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {serviceData.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-brandPurple' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Print Button */}
        <div className="text-center mt-6 print:hidden">
          <Button 
            onClick={() => window.print()}
            variant="branded"
            size="lg"
          >
            Print Presentation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicePresentation;
