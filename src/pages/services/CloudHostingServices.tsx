
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign, CheckCircle, Shield, Server } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CloudHostingServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
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
          <h1 className="text-3xl font-bold text-gray-900">Cloud Hosting & Maintenance</h1>
          <p className="text-gray-600 mt-2">Secure and reliable hosting with comprehensive support</p>
        </div>

        {/* Service Details */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Monthly Hosting Service</CardTitle>
                <CardDescription>Complete hosting and maintenance solution</CardDescription>
              </div>
              <Badge className="bg-green-100 text-green-800">SGD 80/month</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Service Scope:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Secure cloud hosting with 99.9% uptime</li>
                  <li>• SSL certificate, backups, and security monitoring</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Performance optimization and technical support</li>
                  <li>• Minor content updates (up to 2 hours/month)</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                Setup Timeline (1 Month):
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-0.5">Week 1-2</Badge>
                  <span>Server setup and security configuration</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-0.5">Week 3-4</Badge>
                  <span>Monitoring setup and optimization</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-green-600" />
                  Security Features:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• SSL certificate included</li>
                  <li>• Daily automated backups</li>
                  <li>• Security monitoring and updates</li>
                  <li>• Malware protection</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Server className="h-4 w-4 mr-2 text-blue-600" />
                  Performance Guarantees:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 99.9% uptime guarantee</li>
                  <li>• Fast loading speeds</li>
                  <li>• 24/7 technical support</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-900">Monthly Maintenance Included:</h4>
              <p className="text-sm text-blue-800">Up to 2 hours of minor content updates, security updates, and performance monitoring included each month.</p>
            </div>
          </CardContent>
        </Card>

        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle>Terms & Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Service Terms</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Services are non-refundable and non-exchangeable</li>
                  <li>• 30-day notice required for cancellation</li>
                  <li>• Overage charges may apply for excessive resource usage</li>
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

export default CloudHostingServices;
