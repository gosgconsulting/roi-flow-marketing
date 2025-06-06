
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebsiteDesignServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/admin")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Website Design & Development Services</h1>
          <p className="text-gray-600 mt-2">Professional website solutions for your business needs</p>
        </div>

        {/* Service Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Custom Website */}
          <Card className="h-fit">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Custom Website</CardTitle>
                  <CardDescription>Multi-page responsive solution</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800">SGD 3,000</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                  Scope:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 ml-6">
                  <li>• Multi-page responsive website with booking system</li>
                  <li>• Conversion-optimized design with prominent trial class CTAs</li>
                  <li>• Class pages, instructor profiles, gallery, and testimonials</li>
                  <li>• Mobile optimization and basic SEO setup</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" />
                  Timeline (2 Months):
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 ml-6">
                  <li>• Week 1-4: Design and development</li>
                  <li>• Week 4-8: Testing and launch</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Single-Page Website */}
          <Card className="h-fit">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Single-Page Website</CardTitle>
                  <CardDescription>Focused conversion solution</CardDescription>
                </div>
                <Badge className="bg-blue-100 text-blue-800">SGD 1,500</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                  Scope:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 ml-6">
                  <li>• One-page responsive design focused on trial class conversions</li>
                  <li>• Essential business information and optimized contact form</li>
                  <li>• Mobile optimization and basic SEO setup</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" />
                  Timeline (1 Month):
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 ml-6">
                  <li>• Week 1-2: Design and content integration</li>
                  <li>• Week 3-4: Optimization and launch</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle>Terms & Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Payment Terms</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Services are non-refundable and non-exchangeable</li>
                  <li>• Service validity: 30 days from proposal date</li>
                  <li>• Final payment due upon project completion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Company Details</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>G.O. SG CONSULTING Pte. Ltd.</p>
                  <p>UEN: 202312433Z</p>
                  <p>Bank: DBS BANK 0729785155</p>
                  <p>Contact: +65 8024 6850</p>
                  <p>Email: contact@gosgconsulting.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WebsiteDesignServices;
