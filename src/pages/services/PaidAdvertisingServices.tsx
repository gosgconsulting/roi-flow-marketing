
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign, CheckCircle, Target, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaidAdvertisingServices = () => {
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
          <h1 className="text-3xl font-bold text-gray-900">Paid Advertising Management</h1>
          <p className="text-gray-600 mt-2">Professional Google Ads & Meta campaign management</p>
        </div>

        {/* Service Details */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Campaign Management Service</CardTitle>
                <CardDescription>Multi-platform advertising optimization</CardDescription>
              </div>
              <Badge className="bg-blue-100 text-blue-800">15% of ad spend</Badge>
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
                  <li>• Google Ads and Meta Ads campaign setup and management</li>
                  <li>• Keyword research and audience targeting</li>
                  <li>• Ad creation and A/B testing (4 campaigns/month)</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Conversion tracking and analytics setup</li>
                  <li>• Monthly optimization and reporting</li>
                  <li>• Performance analysis and scaling recommendations</li>
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
                  <span>Account setup and strategy development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-0.5">Week 2-3</Badge>
                  <span>Campaign launch and initial optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-0.5">Week 4</Badge>
                  <span>Performance analysis and scaling</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Target className="h-4 w-4 mr-2 text-orange-600" />
                  Expected Results:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 20-50 qualified leads monthly within 2-4 weeks</li>
                  <li>• 3-5x return on ad spend</li>
                  <li>• Improved brand visibility</li>
                  <li>• Targeted audience reach</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2 text-purple-600" />
                  Investment Guidelines:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Minimum recommended ad spend: SGD 500-800/month</li>
                  <li>• 10% +/- variance expected in ad spend management</li>
                  <li>• Management fee: 15% of total monthly ad spend</li>
                </ul>
              </div>
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
                  <li>• 10% +/- variance expected in ad spend management</li>
                  <li>• Minimum recommended ad spend: SGD 500-800/month</li>
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

export default PaidAdvertisingServices;
