
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign, CheckCircle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SEOServices = () => {
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
          <h1 className="text-3xl font-bold text-gray-900">SEO Recovery & Maintenance Services</h1>
          <p className="text-gray-600 mt-2">Comprehensive SEO optimization and content strategy</p>
        </div>

        {/* Service Details */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Monthly SEO Service</CardTitle>
                <CardDescription>Complete SEO optimization and maintenance</CardDescription>
              </div>
              <Badge className="bg-green-100 text-green-800">SGD 600/month</Badge>
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
                  <li>• Technical SEO audit</li>
                  <li>• 12 blog posts per month with keyword optimization</li>
                  <li>• 10 high-quality backlinks per month</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Local SEO optimization for Singapore market</li>
                  <li>• Monthly performance reporting</li>
                  <li>• Keyword research and competitor analysis</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                Implementation Timeline (1 Month):
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-0.5">Week 1</Badge>
                  <span>SEO audit and strategy development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-0.5">Week 2-4</Badge>
                  <span>Content creation and link building execution</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                Expected Results:
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 20-40% traffic recovery within 3-6 months</li>
                <li>• Improved search engine rankings</li>
                <li>• Enhanced local visibility in Singapore</li>
                <li>• Increased organic lead generation</li>
              </ul>
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
                  <li>• Minimum 3-month commitment required</li>
                  <li>• Results may vary based on competition and market conditions</li>
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

export default SEOServices;
